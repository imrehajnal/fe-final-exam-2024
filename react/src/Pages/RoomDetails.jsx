import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../Components/Loading";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [furnitures, setFurnitures] = useState([]);
  const [filteredFurnitures, setFilteredFurnitures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [weightFilter, setWeightFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  useEffect(() => {
    const fetchRoomAndFurnitures = async () => {
      setIsLoading(true);
      try {
        const roomResponse = await fetch(`/api/rooms/${id}`);
        const roomData = await roomResponse.json();
        setRoom(roomData);

        const furnitureResponse = await fetch(`/api/rooms/${id}/furnitures`);
        const furnitureData = await furnitureResponse.json();
        setFurnitures(furnitureData.furnitures);
        setFilteredFurnitures(furnitureData.furnitures);
      } catch (error) {
        console.error("Failed to fetch room details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRoomAndFurnitures();
  }, [id]);

  const handleWeightFilterChange = (event) => {
    const { value } = event.target;
    setWeightFilter(value.trim());

    const filtered = furnitures.filter((furniture) =>
      value === "" ? true : furniture.weight === parseInt(value)
    );
    setFilteredFurnitures(filtered);
  };

  const handlePriceFilterChange = (event) => {
    const { value } = event.target;
    setPriceFilter(value.trim());

    const filtered = furnitures.filter((furniture) =>
      value === "" ? true : furniture.price === parseInt(value)
    );
    setFilteredFurnitures(filtered);
  };

  if (isLoading) {
    return (
      <div className="grid grid-rows-3 gap-3 w-5/6 mx-auto">
        <Loading />
        <Loading />
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-400 w-3/4 h-1/2 flex flex-col items-center justify-center p-4">
        <h2 className="text-2xl font-bold mb-4">{room?.name}</h2>
        <div className="w-full px-4">
          <div className="mb-4">
            <label className="block text-left mb-2">
              Search by weight
            </label>
            <input
              id="weightFilter"
              type="number"
              placeholder="Filter by weight"
              value={weightFilter}
              onChange={handleWeightFilterChange}
              className="border p-2 mb-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-left mb-2">
              Search by price
            </label>
            <input
              id="priceFilter"
              type="number"
              placeholder="Filter by price"
              value={priceFilter}
              onChange={handlePriceFilterChange}
              className="border p-2 w-full"
            />
          </div>
        </div>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Weight</th>
              <th className="border p-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {filteredFurnitures.map((furniture) => (
              <tr key={furniture.id}>
                <td className="border p-2">{furniture.name}</td>
                <td className="border p-2">{furniture.weight} lbs</td>
                <td className="border p-2">
                  {formatCurrency(furniture.price)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RoomDetails;
