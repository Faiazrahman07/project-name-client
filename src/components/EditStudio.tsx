"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import toast from "react-hot-toast";
import { API_URL } from "@/lib/api";
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

interface Studio {
_id: string;
title: string;
category: string;
hourlyRate: number;
securityDeposit: number;
maxCapacity: number;
location: string;
image: string;
amenities: string[];
overview: string;
userEmail: string;
userName: string;
}

interface EditStudioProps {
data: Studio;
}

const EditStudio = ({ data }: EditStudioProps) => {
const router = useRouter();
const { data: session } = useSession();

const [loading, setLoading] = useState(false);

const [amenities, setAmenities] = useState<string[]>(
data.amenities || []
);

const handleAmenityChange = (amenity: string) => {
setAmenities((prev) =>
prev.includes(amenity)
? prev.filter((item) => item !== amenity)
: [...prev, amenity]
);
};

const handleSubmit = async (
e: React.SubmitEvent<HTMLFormElement>
) => {
e.preventDefault();


if (!session?.user) {
  toast.error("Please login first");
  return;
}

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
  amenities,
  overview: formData.get("overview"),
  userEmail: data.userEmail,
  userName: data.userName,
};

try {
  const response = await fetch(
    `${API_URL}/studios/${data._id}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(studioData),
    }
  );

  const result = await response.json();

  if (!response.ok) {
    throw new Error(
      result.message || "Failed to update studio"
    );
  }

  toast.success("Studio updated successfully!");

    setTimeout(() => {
  router.push("/my-listings");
}, 1500);
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

return ( <div className="mx-auto max-w-2xl rounded-xl border bg-white p-6 shadow-sm">

  <h2 className="mb-6 text-2xl font-bold">
    Edit Studio
  </h2>

  <form onSubmit={handleSubmit} className="space-y-6">

    <div className="space-y-2">
      <Label htmlFor="title">Studio Title</Label>
      <Input
        id="title"
        name="title"
        defaultValue={data.title}
        required
      />
    </div>

 
    <div className="space-y-2">
      <Label htmlFor="category">Studio Category</Label>

      <select
        id="category"
        name="category"
        defaultValue={data.category}
        required
        className="h-10 w-full rounded-md border border-gray-300 bg-white px-3 text-sm"
      >
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
          defaultValue={data.hourlyRate}
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
          defaultValue={data.securityDeposit}
          required
        />
      </div>

    </div>

    <div className="space-y-2">
      <Label htmlFor="maxCapacity">
        Maximum Capacity
      </Label>

      <Input
        id="maxCapacity"
        name="maxCapacity"
        type="number"
        min="1"
        defaultValue={data.maxCapacity}
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
        defaultValue={data.location}
        required
      />
    </div>

    <div className="space-y-2">
      <Label htmlFor="image">
        Studio Image URL
      </Label>

      <Input
        id="image"
        name="image"
        type="url"
        defaultValue={data.image}
        required
      />
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

    {/* Overview */}
    <div className="space-y-2">
      <Label htmlFor="overview">
        Detailed Overview
      </Label>

      <textarea
        id="overview"
        name="overview"
        rows={5}
        defaultValue={data.overview}
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
          value={data.userName}
          readOnly
          disabled
        />
      </div>

      <div className="space-y-2">
        <Label>Host Email</Label>

        <Input
          value={data.userEmail}
          readOnly
          disabled
        />
      </div>

    </div>

    {/* Submit */}
    <Button
      type="submit"
      disabled={loading || !session?.user}
      className="w-full"
    >
      {loading ? "Updating Studio..." : "Update Studio"}
    </Button>

  </form>
</div>


);
};

export default EditStudio;
