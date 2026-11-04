import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Studio {
_id: string;
title: string;
category: string;
hourlyRate: number;
location: string;
image: string;
rating?: number;
}

interface StudiosPageProps {
searchParams: Promise<{
category?: string;
}>;
}

const StudiosPage = async ({ searchParams }: StudiosPageProps) => {
const params = await searchParams;
const category = params.category;

const res = await fetch(
`http://localhost:5000/studios${
      category ? `?category=${encodeURIComponent(category)}` : ""
    }`,
{
cache: "no-store",
}
);

if (!res.ok) {
throw new Error("Failed to fetch studios");
}

const studios: Studio[] = await res.json();

return ( <section className="mx-auto max-w-7xl px-6 py-16">

  <h1 className="mb-8 text-3xl font-bold">
    {category || "All Studios"}
  </h1>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

    {studios.map((studio) => (
      <div
        key={studio._id}
        className="rounded-xl border p-4 shadow-sm"
      >
        <img
          src={studio.image}
          alt={studio.title}
          className="h-52 w-full rounded-lg object-cover"
        />

        <h2 className="mt-3 text-xl font-bold">
          {studio.title}
        </h2>

        <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700">
          {studio.category}
        </span>

        <p className="mt-2">
          ৳{studio.hourlyRate}/hour
        </p>

        <p className="text-sm text-gray-600">
          📍 {studio.location}
        </p>

        <p className="mt-1">
          ⭐ {studio.rating ?? "No rating"}
        </p>

        <Link href={`/studios/${studio._id}`}>
          <Button className="mt-4 w-full">
            View Details
          </Button>
        </Link>

      </div>
    ))}

  </div>

  {studios.length === 0 && (
    <p className="py-10 text-center text-gray-500">
      No studios found.
    </p>
  )}

</section>

);
};

export default StudiosPage;
