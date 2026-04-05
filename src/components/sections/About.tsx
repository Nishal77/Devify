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
      className="bg-white py-24 md:py-32 font-sans"
      aria-labelledby="about-heading"
    >
      {/* Main Container - Reduced the gap to keep elements closer */}
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-6 lg:gap-10">
        
        {/* ================= LEFT DIV ================= */}
        {/* Replaced w-1/5 with a fixed width (lg:w-[180px]) so it doesn't push the right side too far away on large screens. Added a slight mt-2 to align the text with the cap-height of the large heading. */}
        <div className="w-full lg:w-[180px] shrink-0 mt-2">
          <p className="flex items-center text-[14px] font-medium text-black">
            <span className="text-[#1400FF] text-[18px] leading-none mr-2 mt-[-1px]">•</span>
            About Devify®
          </p>
        </div>

        {/* ================= RIGHT DIV ================= */}
        {/* Used flex-1 to allow this div to stretch and take up all the remaining space, increasing its width. */}
        <div className="flex-1">
          {/* Main paragraph */}
          <p
            id="about-heading"
            className="max-w-[1150px] text-[32px] md:text-[42px] lg:text-[48px] font-medium leading-[1.12] tracking-[-0.02em] text-black mb-12 md:mb-16"
          >
            Devify® crafts smart marketing strategies that help brands grow,
            connect, and stand out. From bold ideas to data-driven results, we
            blend creativity with strategy to make your message unforgettable.
          </p>

          {/* Stats grid - Max width applied to keep it contained nicely under the paragraph */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 max-w-[1150px]">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                {/* Stat label with blue bullet */}
                <p className="flex items-center text-[13px] font-medium text-black mb-3">
                  <span className="text-[#1400FF] text-[18px] leading-none mr-2 mt-[-1px]">•</span>
                  {stat.label}
                </p>
                
                {/* Horizontal Divider */}
                <div className="w-full h-[1px] bg-[#E5E5E5] mb-4" />
                
                {/* Stat value */}
                <p
                  className="text-[64px] md:text-[80px] font-medium leading-none tracking-[-0.03em] text-[#1400FF]"
                  aria-label={`${stat.value} ${stat.label}`}
                >
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}