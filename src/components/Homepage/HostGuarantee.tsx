
type Guarantee = {
  icon: string;
  title: string;
  description: string;
};

const guarantees: Guarantee[] = [
  {
    icon: "🛡️",
    title: "Liability Protection",
    description:
      "Enjoy peace of mind with protection policies designed for eligible bookings.",
  },
  {
    icon: "✓",
    title: "Verified Profiles",
    description:
      "Connect with trusted hosts and creators through verified profile information.",
  },
  {
    icon: "🎥",
    title: "Equipment Safety",
    description:
      "Clear equipment guidelines help creators use studio facilities responsibly.",
  },
  {
    icon: "🎧",
    title: "24/7 Host Support",
    description:
      "Get support whenever you need help with your booking or hosting experience.",
  },
];

const HostGuarantee = () => {
  return (
    <section className="bg-base-100 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-primary">
            Safe & Reliable
          </p>

          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Host Guarantee & Creator Support
          </h2>

          <p className="mx-auto max-w-2xl text-base-content/70">
            We care about your creative journey. Enjoy a safer,
            smoother and more reliable experience with StudioSpace.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {guarantees.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-base-300 p-7 transition duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-3xl">
                {item.icon}
              </div>

              <h3 className="mb-3 text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-sm leading-6 text-base-content/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostGuarantee;