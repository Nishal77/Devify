const stats = [
  {
    label: "Happy Clients",
    value: "600+",
  },
  {
    label: "Projects Delivered",
    value: "200+",
  },
  {
    label: "Client Satisfaction",
    value: "95%",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-28 md:py-36"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Section label */}
        <p className="section-label mb-10">About Devify®</p>

        {/* Main paragraph */}
        <p
          id="about-heading"
          className="max-w-[1100px] text-[36px] md:text-[42px] lg:text-[48px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0A0A0A] mb-20"
        >
          Devify® crafts smart marketing strategies that help brands grow,
          connect, and stand out. From bold ideas to data-driven results, we
          blend creativity with strategy to make your message unforgettable.
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`py-8 md:py-0 ${
                index !== stats.length - 1
                  ? "border-b md:border-b-0 md:border-r border-[#E5E5E5]"
                  : ""
              } ${index !== 0 ? "md:pl-12" : ""}`}
            >
              {/* Stat label with bullet */}
              <p className="section-label mb-3 text-[13px]">{stat.label}</p>
              {/* Divider */}
              <div className="w-full h-px bg-[#E5E5E5] mb-4" />
              {/* Stat value */}
              <p
                className="text-[72px] md:text-[80px] font-bold leading-none tracking-[-0.03em] text-[#1400FF]"
                aria-label={stat.value + " " + stat.label}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
