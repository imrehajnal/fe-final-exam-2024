import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


export default function Home() {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRooms = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/api/rooms");
        const data = await response.json();
        setRooms(data.rooms);
      } catch (error) {
        console.error("Failed to fetch rooms:", error);
      }
      setIsLoading(false);
    };

    fetchRooms();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-slate-400 w-3/4 h-3/4 flex items-center justify-center">
        {isLoading && <div className="text-center">Loading...</div>}
        {!isLoading && (
          <ul>
            {rooms.map((room) => (
              <li key={room.id}>
                <Link className="text-2xl underline flex" to={`/details/${room.id}`}>
                  {room.name}
                  <FaArrowRight />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
