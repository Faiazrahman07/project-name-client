import GalleryCarousel from "@/components/GalleryCarousel";
import BookingCard from "@/components/Booking/BookingCard";
import { API_URL } from "@/lib/api";
interface Studio {
  _id: string;
  title: string;
  category: string;
  image: string;
  hourlyRate: number;
  securityDeposit: number;
  maxCapacity: number;
  location: string;
  amenities: string[];
  overview: string;
  userName: string;
  gallery: string[];
  userEmail: string;
  rating?: number;
}

interface ParamsProps {
  params: Promise<{
    id: string;
  }>;
}

const DetailsPage = async ({ params }: ParamsProps) => {
  const { id } = await params;

  const res = await fetch(`${API_URL}/studios/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch studio details");
  }

  const studio: Studio = await res.json();

  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mt-6">
        <GalleryCarousel
          images={studio.gallery?.length ? studio.gallery : [studio.image]}
        />
      </div>

      <div className="mt-8">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700">
          {studio.category}
        </span>

        <h1 className="mt-4 text-3xl font-bold">{studio.title}</h1>

        <p className="mt-2 text-gray-600">📍 {studio.location}</p>

        <p className="mt-3 text-xl font-semibold">
          ৳{studio.hourlyRate}/hour
        </p>

        <p>⭐ {studio.rating ?? "No rating"}</p>
      </div>

      <div className="mt-8 rounded-xl border p-6">
        <h2 className="mb-4 text-2xl font-bold">
          Workspace Specifications
        </h2>

        <p>Security Deposit: ৳{studio.securityDeposit}</p>
        <p>Maximum Capacity: {studio.maxCapacity} people</p>
        <p className="mt-4">{studio.overview}</p>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">Amenities</h2>

        <div className="flex flex-wrap gap-3">
          {studio.amenities?.map((amenity) => (
            <span
              key={amenity}
              className="rounded-lg bg-gray-100 px-4 py-2"
            >
              {amenity}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-xl border p-6">
        <h2 className="mb-4 text-2xl font-bold">Host Details</h2>
        <p>Name: {studio.userName}</p>
        <p>Email: {studio.userEmail}</p>
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold">Reviews</h2>
        <p className="text-gray-500">No reviews available yet.</p>
      </div>

      <div className="mt-8">
        <BookingCard studio={studio} />
      </div>
    </section>
  );
};

export default DetailsPage;