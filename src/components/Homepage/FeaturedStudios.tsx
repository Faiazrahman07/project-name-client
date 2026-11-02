import Studiocard from "./Studiocard";

const FeaturedStudios = async () => {
  const res = await fetch('http://localhost:5000/featured-studios');
  const studios = await res.json();

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {studios.map((data) => (
        <Studiocard key={data._id} data={data} />
      ))}
    </div>
  );
};

export default FeaturedStudios;