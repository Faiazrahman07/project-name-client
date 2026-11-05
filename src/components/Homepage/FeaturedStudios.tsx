import Studiocard from "./Studiocard";
import { API_URL } from "@/lib/api";
type Studio = {
  _id: string;
  title: string;
  category: string;
  image: string;
  hourlyRate: number;
  rating: number;
  location: string;
  buttonText: string;
};

const FeaturedStudios = async () => {
  const res = await fetch(`${API_URL}/featured-studios`);

  if (!res.ok) {
    throw new Error("Failed to fetch featured studios");
  }

  const studios: Studio[] = await res.json();

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {studios.map((data) => (
        <Studiocard key={data._id} data={data} />
      ))}
    </div>
  );
};

export default FeaturedStudios;