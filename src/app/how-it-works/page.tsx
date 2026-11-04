import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Discover Spaces",
    description:
      "Explore a wide range of creative studios, photography spaces, podcast rooms, and music suites.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Select Shoot Hours",
    description:
      "Choose your preferred studio, check its pricing, and select the hours that fit your schedule.",
    icon: "🗓️",
  },
  {
    number: "03",
    title: "Book Instantly",
    description:
      "Submit your booking request and manage your reservation easily from your account.",
    icon: "📋",
  },
  {
    number: "04",
    title: "Create & Produce",
    description:
      "Visit your selected workspace and bring your creative ideas to life.",
    icon: "🎬",
  },
];

const HowItWorksPage = () => {
  return (
    <main className="min-h-screen bg-[#F5F7F5]">

      {/* Hero Section */}
      <section className="bg-[#17251B] px-6 py-20 text-center text-white md:py-28">
        <p className="mb-4 font-semibold uppercase tracking-[3px] text-lime-400">
          Simple & Easy Process
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          How StudioSpace Works
        </h1>

        <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-300">
          Finding and booking your perfect creative workspace has
          never been easier. Follow these four simple steps and
          start creating something amazing.
        </p>

        <Link
          href="/studios"
          className="mt-8 inline-block rounded-xl bg-lime-400 px-7 py-3 font-semibold text-black transition hover:bg-lime-300"
        >
          Explore Studios
        </Link>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-widest text-lime-600">
            Four Simple Steps
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Start Your Creative Journey
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-500">
            From discovering a workspace to producing your next
            masterpiece, we make everything simple.
          </p>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl">
                  {step.icon}
                </span>

                <span className="text-3xl font-bold text-lime-500/40">
                  {step.number}
                </span>
              </div>

              <h3 className="mt-8 text-xl font-bold text-gray-900">
                {step.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                {step.description}
              </p>
            </div>
          ))}

        </div>
      </section>

  
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-lime-400 px-6 py-14 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Ready to Create Something Amazing?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-800">
            Discover your perfect creative space and turn your
            ideas into reality.
          </p>

          <Link
            href="/studios"
            className="mt-7 inline-block rounded-xl bg-[#17251B] px-7 py-3 font-semibold text-white transition hover:bg-gray-800"
          >
            Find Your Studio
          </Link>

        </div>
      </section>

    </main>
  );
};

export default HowItWorksPage;