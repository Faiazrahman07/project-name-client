import Link from "next/link";

const features = [
  {
    title: "Discover Creative Spaces",
    description:
      "Explore photography studios, film stages, podcast rooms, music suites, and creative workshops.",
    icon: "🏢",
  },
  {
    title: "Transparent Pricing",
    description:
      "Compare hourly rates and studio details before making your booking decision.",
    icon: "💰",
  },
  {
    title: "Easy Booking Management",
    description:
      "Manage your reservations and keep track of your booking status from one place.",
    icon: "📅",
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-[#F5F7F5]">

    
      <section className="bg-[#17251B] px-6 py-20 text-center text-white md:py-28">

        <p className="mb-4 font-semibold uppercase tracking-[3px] text-lime-400">
          About StudioSpace
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          A Space for Every <br />
          <span className="text-lime-400">
            Creative Idea
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-300">
          StudioSpace is a creative workspace sharing platform
          connecting studio owners with creators who need the
          perfect environment to bring their ideas to life.
        </p>

        <Link
          href="/studios"
          className="mt-8 inline-block rounded-xl bg-lime-400 px-7 py-3 font-semibold text-black transition hover:bg-lime-300"
        >
          Explore Studios
        </Link>

      </section>

    
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

        <div>
          <p className="font-semibold uppercase tracking-widest text-lime-600">
            Who We Are
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Connecting Creators With Perfect Workspaces
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            StudioSpace is designed for photographers, filmmakers,
            podcasters, musicians, and other creative professionals.
            We bring workspace owners and creators together through
            one convenient platform.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            Whether you need a professional photography studio,
            a recording room, or a creative workshop, StudioSpace
            helps you discover and reserve spaces that match
            your needs.
          </p>
        </div>

        <div className="rounded-3xl bg-lime-100 p-10">

          <div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900">
              Our Purpose
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              To make creative workspaces more accessible and
              help talented creators find the right environment
              to express their creativity.
            </p>
          </div>

        </div>

      </section>

    
      <section className="bg-white px-6 py-20">

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">

          <div className="rounded-2xl border border-gray-200 p-8 md:p-10">
            <span className="text-4xl">🎯</span>

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Our Mission
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Our mission is to simplify the process of finding
              and booking creative workspaces while providing
              studio owners with an opportunity to share their
              spaces with a wider community.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-8 md:p-10">
            <span className="text-4xl">🚀</span>

            <h3 className="mt-5 text-2xl font-bold text-gray-900">
              Our Vision
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              We envision a creative community where every
              photographer, filmmaker, podcaster, and musician
              can access the right workspace to turn their
              imagination into reality.
            </p>
          </div>

        </div>

      </section>

      
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-widest text-lime-600">
            Why StudioSpace
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            What Makes Us Different?
          </h2>
        </div>

        <div className="grid gap-7 md:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
            >
              <span className="text-4xl">
                {feature.icon}
              </span>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      <section className="px-6 pb-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-[#17251B] px-6 py-14 text-center">

          <h2 className="text-3xl font-bold text-white">
            Let's Create Something Together
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-300">
            Find your ideal workspace or share your studio
            with the creative community.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            <Link
              href="/studios"
              className="rounded-xl bg-lime-400 px-7 py-3 font-semibold text-black hover:bg-lime-300"
            >
              Explore Studios
            </Link>

            <Link
              href="/add-studio"
              className="rounded-xl border border-white px-7 py-3 font-semibold text-white hover:bg-white hover:text-black"
            >
              Host Your Space
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
};

export default AboutPage;