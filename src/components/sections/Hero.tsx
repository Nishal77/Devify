import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const clients = [
  "intrace",
  "CareerPlanet",
  "AdShine",
  "MedFlow",
  "ScaleGrid",
  "CloudNest",
  "DataVault",
  "East Theory",
  "PixelForge",
  "LaunchPad",
  "NexaHub",
  "BrandFlow",
  "SwiftMedia",
  "OrbitX",
  "VentureLab",
  "CodeCraft",
];

const marqueeItems = [...clients, ...clients];

// Real face avatars — square with gentle rounding
const avatars = [
  { src: "https://i.pravatar.cc/56?img=3",  alt: "Happy client" },
  { src: "https://i.pravatar.cc/56?img=7",  alt: "Happy client" },
  { src: "https://i.pravatar.cc/56?img=12", alt: "Happy client" },
  { src: "https://i.pravatar.cc/56?img=15", alt: "Happy client" },
  { src: "https://i.pravatar.cc/56?img=22", alt: "Happy client" },
];

export default function Hero() {
  return (
    <section
      className="relative h-screen hero-gradient overflow-hidden flex flex-col"
      aria-label="Hero section"
    >
      {/* ── Ambient blue blobs ── */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: "-18%",
          left: "-10%",
          width: "62%",
          height: "85%",
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, transparent 68%)",
          filter: "blur(52px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          bottom: "10%",
          right: "-6%",
          width: "42%",
          height: "58%",
          background:
            "radial-gradient(ellipse at center, rgba(99,102,241,0.16) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />
      {/* Extra subtle bloom — top-right */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: "0%",
          right: "5%",
          width: "30%",
          height: "45%",
          background:
            "radial-gradient(ellipse at center, rgba(147,197,253,0.22) 0%, transparent 60%)",
          filter: "blur(36px)",
        }}
      />

      {/* ── Hero text + CTAs ── */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col items-center justify-center text-center px-6 pt-20">

        {/* Eye-brow badge */}
        {/* <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-blue-100 rounded-full px-4 py-1.5 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
          <span className="text-[11.5px] font-semibold text-[#1D4ED8] uppercase tracking-[0.14em]">
            Full-Service Digital Studio
          </span>
        </div> */}

        {/* Main heading */}
        <h1 className="max-w-[1100px] text-3xl md:text-4xl lg:text-7xl font-medium leading-[1.06] tracking-[-0.03em] text-black mb-6">
          We Build{" "}
          <span className="text-[#1900FF]"  
            // style={{
            //   background: "linear-gradient(135deg, #1D4ED8 0%, #4F46E5 100%)",
            //   WebkitBackgroundClip: "text",
            //   WebkitTextFillColor: "transparent",
            //   backgroundClip: "text",
            // }}
          >
            Digital Products
          </span>{" "}
          That Win Clients, For Our Clients.
        </h1>

        {/* Subtitle */}
        <p className="max-w-[680px] text-[16.5px] text-[#374151] tracking-tight mb-10 font-normal leading-[1.65]">
          Devify Labs is a full-service digital studio crafting UI/UX, high-performance web
          experiences, and bold brand strategies for startups, SaaS, and businesses ready to scale
          globally.{" "}Based in India. Built for the world.
        </p>

        {/* CTAs + social proof */}
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Primary — rich blue gradient button */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-medium text-white rounded-full bg-[#1400FF] hover:bg-[#1400FF]/90"
              // style={{
              //   background: "linear-gradient(135deg, #1D4ED8 0%, #4F46E5 100%)",
              //   boxShadow: "0 4px 20px rgba(29,78,216,0.35), 0 1px 3px rgba(29,78,216,0.2)",
              // }}
            >
              Start a Project
              <ArrowUpRight size={16} className="ml-1" />
            </Link>
            {/* Secondary — frosted glass */}
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-medium text-black rounded-full border border-black/10 bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-200"
            >
              View Our Work
            </Link>
          </div>

          {/* Social proof row */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {/* Real-photo avatar stack */}
            <div className="flex -space-x-2" aria-hidden="true">
              {avatars.map((av, i) => (
                <img
                  key={i}
                  src={av.src}
                  alt={av.alt}
                  width={28}
                  height={28}
                  className="w-7 h-7 rounded-lg object-cover"
                />
              ))}
            </div>

            <span className="w-px h-4 bg-black/15 flex-shrink-0" aria-hidden="true" />

            {/* Stars — amber contrasts beautifully against blue */}
            <div className="flex items-center gap-0.5" aria-label="Rated 4.9 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="#F59E0B" aria-hidden="true">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <span className="text-[13.5px] font-semibold text-black">4.9</span>
            <span className="text-[13px] text-black/80">
              · Trusted by{" "}
              <span className="font-semibold text-[#0A0A0A]">10+</span>{" "}
              clients worldwide
            </span>
          </div>
        </div>
      </div>

      {/* ── Clients marquee band ── */}
      <div className="relative z-10 flex-shrink-0 border-t border-black/10 border-dashed bg-white/40 backdrop-blur-sm">
        <div className="flex items-stretch" style={{ height: "88px" }}>
          {/* Left label */}
          <div
            className="flex-shrink-0 flex flex-col justify-center border-r border-black/10 border-dashed bg-white/60 px-8"
            style={{ minWidth: "148px" }}
            aria-label="Our clients"
          >
            <p className="text-[10px] font-semibold text-[#2563EB] uppercase tracking-[0.18em] mb-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0" />
              OUR
            </p>
            <p className="text-[22px] font-bold text-[#0A0A0A] leading-none tracking-tight">
              Clients
            </p>
          </div>

          {/* Marquee */}
          <div className="flex-1 overflow-hidden" style={{ height: "88px" }} aria-hidden="true">
            <div className="marquee-left h-full flex">
              {marqueeItems.map((client, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center border-r border-black/10 border-dashed px-8 h-full"
                >
                  <span className="text-[15px] font-medium text-black/70 whitespace-nowrap hover:text-[#0A0A0A] transition-colors duration-200 cursor-default">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
