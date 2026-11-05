"use client";

import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";
import { API_URL } from "@/lib/api";
interface BookingCardProps {
  studio: {
    _id: string;
    title: string;
    image: string;
    hourlyRate: number;
    location: string;
  };
}

const BookingCard = ({ studio }: BookingCardProps) => {
  const { data: session } = useSession();
  const user = session?.user;

  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [duration, setDuration] = useState(1);
  const [loading, setLoading] = useState(false);

  const totalPrice = studio.hourlyRate * duration;

  
  const handleBooking = () => {
    if (!user) {
      router.push("/Login");
      return;
    }

    setIsOpen(true);
  };


  const handleConfirmBooking = async () => {
    if (!user) {
      router.push("/Login");
      return;
    }

    if (!date || !startTime || duration < 1) {
      toast.error("Please fill all booking information");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/bookings`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          studioId: studio._id,
          studioName: studio.title,
          userEmail: user.email,
          userName: user.name,
          date,
          startTime,
          duration,
          totalPrice,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Booking failed");
      }

      toast.success("Booking request submitted successfully!");

      setIsOpen(false);
      setDate("");
      setStartTime("");
      setDuration(1);

    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Something went wrong!"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button onClick={handleBooking} className="w-full">
        Book Workspace Now
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">

            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold">
                Book Workspace
              </h2>

              <button
                onClick={() => setIsOpen(false)}
                className="text-xl"
                disabled={loading}
              >
                ✕
              </button>
            </div>

            <h3 className="mb-1 font-semibold">
              {studio.title}
            </h3>

            <p className="mb-5 text-sm text-gray-500">
              {studio.location}
            </p>

            <div className="space-y-4">

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Booking Date
                </label>

                <input
                  type="date"
                  value={date}
                  min={new Date().toLocaleDateString("en-CA")}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-lg border p-2"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Start Time
                </label>

                <input
                  type="time"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full rounded-lg border p-2"
                />
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium">
                  Duration (Hours)
                </label>

                <input
                  type="number"
                  min="1"
                  value={duration}
                  onChange={(e) =>
                    setDuration(Math.max(1, Number(e.target.value)))
                  }
                  className="w-full rounded-lg border p-2"
                />
              </div>

              <div className="rounded-lg bg-gray-100 p-4">
                <p className="text-sm text-gray-600">
                  Hourly Rate: ৳{studio.hourlyRate}
                </p>

                <p className="mt-1 text-lg font-bold">
                  Total Price: ৳{totalPrice}
                </p>
              </div>

              <Button
                onClick={handleConfirmBooking}
                disabled={loading}
                className="w-full"
              >
                {loading ? "Booking..." : "Confirm Booking"}
              </Button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;