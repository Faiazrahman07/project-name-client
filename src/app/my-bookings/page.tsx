"use client";

import { useEffect, useState } from "react";
import { useSession } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

interface Booking {
_id: string;
studioId: string;
studioName: string;
userEmail: string;
userName: string;
date: string;
startTime: string;
duration: number;
totalPrice: number;
status: string;
createdAt: string;
}

const ShowingBookedpage = () => {
const { data: session } = useSession();
const user = session?.user;

const [bookings, setBookings] = useState<Booking[]>([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
if (!user?.email) return;

const fetchBookings = async () => {
  try {
    const res = await fetch(
      `http://localhost:5000/my-bookings?email=${encodeURIComponent(user.email)}`
    );

    const data = await res.json();

    setBookings(data);
  } catch (error) {
    console.log(error);
  } finally {
    setLoading(false);
  }
};

fetchBookings();

}, [user?.email]);

if (loading) {
return <div className="py-20 text-center">Loading bookings...</div>;
}

if (!user) {
return <div className="py-20 text-center">Please login first.</div>;
}
const handleCancel = async (id: string) => {
  const res = await fetch(
    `http://localhost:5000/bookings/${id}/cancel`,
    {
      method: "PATCH"
    }
  );

  const data = await res.json();

  if (res.ok) {
    setBookings((prevBookings) =>
      prevBookings.map((booking) =>
        booking._id === id
          ? { ...booking, status: "Cancelled" }
          : booking
      )
    );
  }

  console.log(data.message);
};

return ( 
<div className="min-h-screen bg-gray-50 px-4 py-12">


  <div className="mx-auto max-w-6xl">

    <h1 className="mb-2 text-3xl font-bold">
      My Bookings
    </h1>

    <p className="mb-8 text-gray-500">
      View and manage your studio reservations.
    </p>

    {bookings.length === 0 ? (
      <div className="rounded-xl bg-white p-10 text-center shadow">
        <h2 className="text-xl font-semibold">
          No Bookings Found
        </h2>

        <p className="mt-2 text-gray-500">
          You haven't booked any studio yet.
        </p>
      </div>
    ) : (

      <div className="grid gap-6 md:grid-cols-2">

        {bookings.map((booking) => (

          <div
            key={booking._id}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >

            <div className="mb-5 flex items-center justify-between gap-3">

              <h2 className="text-xl font-bold">
                {booking.studioName}
              </h2>

              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                booking.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : booking.status === "Confirmed"
                  ? "bg-green-100 text-green-700"
                  : booking.status === "Completed"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-red-100 text-red-700"
              }`}>
                {booking.status}
              </span>

            </div>

            <div className="space-y-3 text-sm text-gray-600">

              <p>
                <strong>Date:</strong> {booking.date}
              </p>

              <p>
                <strong>Start Time:</strong> {booking.startTime}
              </p>

              <p>
                <strong>Duration:</strong> {booking.duration} Hours
              </p>

              <p>
                <strong>Total Price:</strong> ৳{booking.totalPrice}
              </p>

            </div>

            {booking.status === "Pending" && (
  <Button
    variant="destructive"
    className="mt-5 w-full"
    onClick={() => handleCancel(booking._id)}
  >
    Cancel Booking
  </Button>
)}

          </div>

        ))}

      </div>

    )}

  </div>

</div>

);
};

export default ShowingBookedpage;
