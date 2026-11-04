import Link from "next/link";

const DashboardPage = () => {
  const dashboardCards = [
    {
      title: "My Studios",
      description: "Manage your listed creative spaces.",
      link: "/my-listings",
      button: "View Listings",
    },
    {
      title: "My Bookings",
      description: "View and manage your studio reservations.",
      link: "/my-bookings",
      button: "View Bookings",
    },
    {
      title: "Add New Studio",
      description: "Share your creative workspace with others.",
      link: "/add-studio",
      button: "Add Studio",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F7F5] p-6 md:p-10">
      <div className="mx-auto max-w-7xl">

        {/* Welcome Section */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Dashboard Overview
          </h1>

          <p className="mt-2 text-gray-600">
            Welcome to StudioSpace! Manage your studios and bookings
            from one place.
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {dashboardCards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-gray-900">
                {card.title}
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-500">
                {card.description}
              </p>

              <Link
                href={card.link}
                className="mt-6 inline-block rounded-lg bg-lime-500 px-5 py-2.5 font-medium text-black transition hover:bg-lime-600"
              >
                {card.button}
              </Link>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
};

export default DashboardPage;