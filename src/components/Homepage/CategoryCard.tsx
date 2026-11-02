import Image from "next/image";
import Link from "next/link";


const CategoryCard = async () => {

  const res = await fetch("http://localhost:5000/category");

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const categories = await res.json();

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">

      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          Browse by Studio Category
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">

        {categories.map((item) => (
          <Link
            key={item._id}
            href={`/studios?category=${encodeURIComponent(item.name)}`}
            className="group relative h-72 overflow-hidden rounded-2xl"
          >
            <Image
              src={item.image}
              alt={item.category}
              fill
              sizes="(max-width: 768px) 100vw, 20vw"
              className="object-cover transition duration-500 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

            <div className="absolute bottom-0 p-5 text-white">
              <h3 className="text-xl font-bold">
                {item.name}
              </h3>

              <p className="mt-1 text-sm text-gray-200">
                {item.description}
              </p>
            </div>
          </Link>
        ))}

      </div>
    </section>
  );
};

export default CategoryCard;