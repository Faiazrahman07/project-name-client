const StudiosPage = async ({ searchParams }) => {
const params = await searchParams;
const category = params.category;

const res = await fetch(
  `http://localhost:5000/studios${category ? `?category=${encodeURIComponent(category)}` : ""}`
);


if (!res.ok) {
throw new Error("Failed to fetch studios");
}

const studios = await res.json();

return ( 
<section className="mx-auto max-w-7xl px-6 py-16"> <h1 className="mb-8 text-3xl font-bold">
{category || "All Studios"} </h1>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {studios.map((studio) => (
      <div key={studio._id} className="rounded-xl border p-4">
        <img
          src={studio.image}
          alt={studio.title}
          className="h-52 w-full rounded-lg object-cover"
        />

        <h2 className="mt-3 text-xl font-bold">
          {studio.title}
        </h2>

        <p>{studio.category}</p>
        <p>৳{studio.hourlyRate}/hour</p>
        <p>⭐ {studio.rating}</p>
      </div>
    ))}
  </div>
</section>


);
};

export default StudiosPage;
