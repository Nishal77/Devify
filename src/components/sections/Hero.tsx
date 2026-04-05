import Link from "next/link";
import { ArrowRight } from "lucide-react";

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

// Duplicate for seamless infinite loop
const marqueeItems = [...clients, ...clients];

export default function Hero() {
  return (
    <section
      className="relative h-screen hero-gradient overflow-hidden flex flex-col"
      aria-label="Hero section"
    >
      {/* ── Ambient warm orange blobs ── */}
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          top: "-15%",
          left: "-8%",
          width: "58%",
          height: "80%",
          background:
            "radial-gradient(ellipse at center, rgba(255,150,60,0.22) 0%, transparent 68%)",
          filter: "blur(48px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        aria-hidden="true"
        style={{
          bottom: "15%",
          right: "-5%",
          width: "38%",
          height: "55%",
          background:
            "radial-gradient(ellipse at center, rgba(255,200,100,0.14) 0%, transparent 65%)",
          filter: "blur(36px)",
        }}
      />

      {/* ── Hero text + CTAs — vertically centred in remaining space ── */}
      <div className="relative z-10 flex-1 min-h-0 flex flex-col items-center justify-center text-center px-6 pt-20">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm border border-black/[0.07] rounded-full px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] flex-shrink-0" />
          <span className="text-[12px] font-semibold text-[#4A4A4A] uppercase tracking-widest">
            Full-Service Digital Studio
          </span>
        </div> */}

        {/* Main heading */}
        <h1 className="max-w-[820px] text-3xl md:text-4xl lg:text-7xl font-medium leading-[1.06] tracking-[-0.03em] text-black mb-6">
          We Build{" "}
          <span className="text-[#1400FF]">Digital Products</span>{" "}
          That Win Clients, For Our Clients.
        </h1>

        {/* Subtitle */}
        <p className="max-w-[560px] text-[16.5px]  text-black/80 tracking-tight mb-10 font-normal">
        Devify Labs is a full-service digital studio crafting UI/UX, high-performance web experiences, and bold brand strategies for startups, SaaS, and businesses ready to scale globally.

          Based in India. Built for the world.
        </p>

        {/* CTA buttons
        <div className="flex items-center gap-3 flex-wrap justify-center">
          <Link
            href="/contact"
            className="btn-blue inline-flex items-center gap-2 px-7 py-3.5 text-[15px] font-semibold"
          >
            Start a Project
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-[15px] font-semibold text-[#0A0A0A] rounded-full border border-black/10 bg-white/70 backdrop-blur-sm hover:bg-white transition-all duration-200"
          >
            View Our Work
          </Link>
        </div> */}
      </div>

      {/* ── Full-width Clients marquee band — pinned to bottom of hero ── */}
      <div className="relative z-10 flex-shrink-0 border-t border-black/[0.07] bg-white/40 backdrop-blur-sm">
        <div className="flex items-stretch" style={{ height: "88px" }}>
          {/* Left label — pinned */}
          <div
            className="flex-shrink-0 flex flex-col justify-center border-r border-black/[0.07] bg-white/60 px-8"
            style={{ minWidth: "148px" }}
            aria-label="Our clients"
          >
            <p className="text-[10px] font-semibold text-[#FF6B00] uppercase tracking-[0.18em] mb-0.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] flex-shrink-0" />
              OUR
            </p>
            <p className="text-[22px] font-bold text-[#0A0A0A] leading-none tracking-tight">
              Clients
            </p>
          </div>

          {/* Scrolling marquee — fills remaining width, separators span full height */}
          <div
            className="flex-1 overflow-hidden"
            style={{ height: "88px" }}
            aria-hidden="true"
          >
            <div className="marquee-left h-full flex">
              {marqueeItems.map((client, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 flex items-center border-r border-black/[0.08] px-8 h-full"
                >
                  <span className="text-[15px] font-medium text-[#5A5A5A] whitespace-nowrap hover:text-[#0A0A0A] transition-colors duration-200 cursor-default">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Floating consultation widget ── */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link
          href="/contact"
          className="flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-all duration-200 hover:-translate-y-0.5"
        >
          <div className="relative flex-shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center overflow-hidden">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="15" r="8" fill="rgba(255,255,255,0.4)" />
                <ellipse cx="20" cy="38" rx="14" ry="10" fill="rgba(255,255,255,0.3)" />
              </svg>
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#2ECC71] rounded-full border-2 border-white" />
          </div>
          <span className="text-[13px] font-semibold text-[#0A0A0A] leading-tight whitespace-nowrap">
            Book a free <br />
            consultation
          </span>
        </Link>
      </div>
    </section>
  );
}
