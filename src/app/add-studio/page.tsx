"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const categories = [
"Photo Studio",
"Film Stage",
"Podcast Lounge",
"Music Suite",
"Workshop",
];

const availableAmenities = [
"WiFi",
"Air Conditioning",
"Parking",
"Lighting Equipment",
"Sound System",
"Furniture",
];

export default function AddStudioPage() {
const router = useRouter();
const { data: session } = useSession();

const [loading, setLoading] = useState(false);
const [amenities, setAmenities] = useState<string[]>([]);
const [galleryImages, setGalleryImages] = useState<string[]>([""]);

const handleAmenityChange = (amenity: string) => {
setAmenities((prev) =>
prev.includes(amenity)
? prev.filter((item) => item !== amenity)
: [...prev, amenity]
);
};

const handleGalleryChange = (index: number, value: string) => {
const updatedImages = [...galleryImages];
updatedImages[index] = value;
setGalleryImages(updatedImages);
};

const addGalleryInput = () => {
setGalleryImages((prev) => [...prev, ""]);
};

const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
e.preventDefault();

setLoading(true);

const form = e.currentTarget;
const formData = new FormData(form);

const studioData = {
  title: formData.get("title"),
  category: formData.get("category"),
  hourlyRate: Number(formData.get("hourlyRate")),
  securityDeposit: Number(formData.get("securityDeposit")),
  maxCapacity: Number(formData.get("maxCapacity")),
  location: formData.get("location"),
  image: formData.get("image"),

  gallery: galleryImages.filter(
    (image) => image.trim() !== ""
  ),

  amenities,
  overview: formData.get("overview"),
  userEmail: session?.user?.email,
  userName: session?.user?.name,
};

try {
  const response = await fetch(
    "http://localhost:5000/add-studio",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studioData),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Failed to add studio");
  }

  toast.success("Studio added successfully!");

  form.reset();
  setAmenities([]);
  setGalleryImages([""]);

  router.push("/my-listings");
} catch (error) {
  console.error(error);

  toast.error(
    error instanceof Error
      ? error.message
      : "Something went wrong"
  );
} finally {
  setLoading(false);
}

};

return ( <section className="min-h-screen bg-gray-50 px-4 py-12"> <div className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow-md md:p-10">

    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Add Your Studio
      </h1>

      <p className="mt-2 text-gray-500">
        Share your creative workspace with creators.
      </p>
    </div>

    <form onSubmit={handleSubmit} className="space-y-6">

    
      <div className="space-y-2">
        <Label htmlFor="title">Studio Title</Label>

        <Input
          id="title"
          name="title"
          placeholder="Enter studio title"
          required
        />
      </div>

  
      <div className="space-y-2">
        <Label htmlFor="category">Studio Category</Label>

        <select
          id="category"
          name="category"
          required
          defaultValue=""
          className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm"
        >
          <option value="" disabled>
            Select a category
          </option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-5 md:grid-cols-2">

        <div className="space-y-2">
          <Label htmlFor="hourlyRate">
            Hourly Rate ($)
          </Label>

          <Input
            id="hourlyRate"
            name="hourlyRate"
            type="number"
            min="1"
            placeholder="50"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="securityDeposit">
            Security Deposit ($)
          </Label>

          <Input
            id="securityDeposit"
            name="securityDeposit"
            type="number"
            min="0"
            placeholder="100"
            required
          />
        </div>

      </div>

      {/* Capacity */}
      <div className="space-y-2">
        <Label htmlFor="maxCapacity">
          Maximum Capacity
        </Label>

        <Input
          id="maxCapacity"
          name="maxCapacity"
          type="number"
          min="1"
          placeholder="10"
          required
        />
      </div>


      <div className="space-y-2">
        <Label htmlFor="location">
          Location / Address
        </Label>

        <Input
          id="location"
          name="location"
          placeholder="Dhaka, Bangladesh"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Studio Image URL</Label>

        <Input
          id="image"
          name="image"
          type="url"
          placeholder="https://example.com/studio.jpg"
          required
        />
      </div>

  
      <div className="space-y-3">
        <Label>Gallery Image URLs</Label>

        <p className="text-sm text-gray-500">
          Add multiple images of your studio.
        </p>

        {galleryImages.map((image, index) => (
          <div key={index} className="space-y-2">
            <Input
              type="url"
              placeholder={`Gallery Image URL ${index + 1}`}
              value={image}
              onChange={(e) =>
                handleGalleryChange(index, e.target.value)
              }
            />
          </div>
        ))}

        <Button
          type="button"
          variant="outline"
          onClick={addGalleryInput}
        >
          + Add Another Image
        </Button>
      </div>


      <div className="space-y-3">
        <Label>Studio Amenities</Label>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {availableAmenities.map((amenity) => (
            <label
              key={amenity}
              className="flex cursor-pointer items-center gap-2 text-sm"
            >
              <input
                type="checkbox"
                checked={amenities.includes(amenity)}
                onChange={() => handleAmenityChange(amenity)}
                className="h-4 w-4"
              />

              {amenity}
            </label>
          ))}
        </div>
      </div>

    
      <div className="space-y-2">
        <Label htmlFor="overview">
          Detailed Overview
        </Label>

        <textarea
          id="overview"
          name="overview"
          rows={5}
          placeholder="Describe your studio..."
          required
          className="w-full rounded-md border border-gray-300 p-3 text-sm outline-none focus:ring-2 focus:ring-black"
        />
      </div>

    
      <div className="space-y-4 rounded-lg bg-gray-50 p-4">

        <h2 className="font-semibold text-gray-800">
          Host Information
        </h2>

        <div className="space-y-2">
          <Label>Host Name</Label>

          <Input
            value={session?.user?.name || ""}
            readOnly
            disabled
          />
        </div>

        <div className="space-y-2">
          <Label>Host Email</Label>

          <Input
            value={session?.user?.email || ""}
            readOnly
            disabled
          />
        </div>

      </div>

    
      <Button
        type="submit"
        disabled={loading || !session?.user}
        className="w-full"
      >
        {loading ? "Adding Studio..." : "Add Studio"}
      </Button>

    </form>
  </div>
</section>

);
}
