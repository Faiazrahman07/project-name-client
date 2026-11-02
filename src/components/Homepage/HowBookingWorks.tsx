
type Step = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    id: 1,
    icon: "🔍",
    title: "Discover Spaces",
    description:
      "Explore creative studios and find the perfect space for your project.",
  },
  {
    id: 2,
    icon: "🕒",
    title: "Select Shoot Hours",
    description:
      "Choose your preferred date and select the hours you need.",
  },
  {
    id: 3,
    icon: "📅",
    title: "Book Instantly",
    description:
      "Confirm your booking easily and get ready for your creative session.",
  },
  {
    id: 4,
    icon: "🎬",
    title: "Create & Produce",
    description:
      "Bring your ideas to life in a professional creative space.",
  },
];

const HowBookingWorks = () => {
  return (
    <section className="bg-base-200 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-primary">
            Simple Process
          </p>

          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            How Booking Works
          </h2>

          <p className="mx-auto max-w-2xl text-base-content/70">
            Booking your perfect creative space is simple.
            Follow these four easy steps and start creating.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.id}
              className="rounded-2xl bg-base-100 p-7 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-4xl">
                {step.icon}

                <span className="absolute -right-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-content">
                  {step.id}
                </span>
              </div>

              <h3 className="mb-3 text-xl font-bold">
                {step.title}
              </h3>

              <p className="text-sm leading-6 text-base-content/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowBookingWorks;
