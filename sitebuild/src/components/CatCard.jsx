export default function CatCard({ cat }) {
  return (
    <div className="cat-card">
      <img src={cat.image} alt={cat.name} />
      <div className="cat-details">
        <h2>{cat.name}</h2>
        <p>{cat.description}</p>
      </div>
    </div>
  );
}
