import Studiocard from "@/components/Homepage/Studiocard";


const Category = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/studios/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch category studios");
  }

  const data = await res.json();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-5">

        
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Explore Studios
          </h1>

          <p className="text-gray-500 mt-3">
            Find the perfect creative space for your next project.
          </p>
        </div>

     
        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((studio) => (
              <Studiocard key={studio._id} data={studio} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-700">
              No Studios Found
            </h2>
            <p className="text-gray-500 mt-2">
              There are no studios available in this category.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Category;