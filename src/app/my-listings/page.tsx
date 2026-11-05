
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { API_URL } from "@/lib/api";
import DeleteStudioButton from "@/components/DeleteStudioButton";
interface Studio {
  _id: string;
  title: string;
  category: string;
  image: string;
  hourlyRate: number;
  rating?: number;
  location: string;
}

export default async function MyListingsPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold">Please Login First</h2>
        <p className="mt-2 text-gray-500">
          Login to see your studio listings.
        </p>
      </div>
    );
  }

 const response = await fetch(
  `${API_URL}/my-listings?email=${encodeURIComponent(
    session.user.email
  )}`,
  { cache: "no-store" }
);

  if (!response.ok) {
    throw new Error("Failed to fetch studio listings");
  }

  const studios: Studio[] = await response.json();

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-2 text-3xl font-bold">
          My Studio Listings
        </h1>

        <p className="mb-8 text-gray-500">
          Manage your creative workspaces.
        </p>

        {studios.length === 0 ? (
          <div className="rounded-xl bg-white p-10 text-center shadow">
            <h2 className="text-xl font-semibold">
              No Studios Found
            </h2>
            <p className="mt-2 text-gray-500">
              You have not added any studios yet.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {studios.map((studio) => (
              <div
                key={studio._id}
                className="overflow-hidden rounded-xl bg-white shadow"
              >
                <img
                  src={studio.image}
                  alt={studio.title}
                  className="h-52 w-full object-cover"
                />

                <div className="space-y-3 p-5">

                  <span className="rounded-full bg-lime-100 px-3 py-1 text-sm text-lime-800">
                    {studio.category}
                  </span>

                  <h2 className="text-xl font-bold">
                    {studio.title}
                  </h2>

                  <p className="text-gray-500">
                    {studio.location}
                  </p>

                  <div className="flex justify-between">
                    <span className="font-semibold">
                      ${studio.hourlyRate}/hr
                    </span>

                    <span>
                      ⭐ {studio.rating ?? "New"}
                    </span>
                  </div>

                <div className="flex gap-3 pt-3">
     <Link href={`/studios/edit/${studio._id}`}>
      <button className="flex-1 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
    Update
  </button>
     </Link>

 <DeleteStudioButton id={studio._id} />
</div>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}
