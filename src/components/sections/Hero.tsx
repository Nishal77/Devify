import Link from "next/link";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen hero-gradient overflow-hidden"
      aria-label="Hero section"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-40 pb-20 flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="max-w-[820px] text-[68px] md:text-[80px] lg:text-[88px] font-bold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] mb-6">
          Smart{" "}
          <span className="text-[#1400FF]">Digital Marketing</span>{" "}
          that turns strategy into growth.
        </h1>

        {/* Subtitle */}
        <p className="max-w-[520px] text-[17px] leading-[1.6] text-[#6B6B6B] mb-14 font-normal">
          We combine strategy, creativity, and performance marketing to help
          digital brands grow, compete, and scale with confidence.
        </p>

        {/* Video / Reel mockup */}
        <div className="relative w-full max-w-[640px]">
          {/* Browser-style mockup frame */}
          <div
            className="rounded-[20px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.18)]"
            style={{
              background: "linear-gradient(135deg, #FF6B35 0%, #FF4500 40%, #E8320A 100%)",
            }}
          >
            {/* Mini nav inside mockup */}
            <div className="flex items-center gap-6 px-5 py-3 bg-black/20">
              <span className="text-[10px] font-semibold text-white/90 uppercase tracking-widest">
                Templates
              </span>
              <span className="text-[10px] font-semibold text-[#FFD700] uppercase tracking-widest">
                About
              </span>
              <span className="text-[10px] font-semibold text-white/90 uppercase tracking-widest">
                Contacts
              </span>
            </div>

            {/* Mockup content area */}
            <div className="relative h-[320px] md:h-[360px] flex items-center justify-center overflow-hidden">
              {/* Decorative text */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 640 360"
                  className="w-full h-full opacity-90"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Arched text */}
                  <path
                    id="archPath"
                    d="M 50 280 A 270 270 0 0 1 590 280"
                    fill="none"
                  />
                  <text
                    fill="#FFE870"
                    fontSize="42"
                    fontWeight="900"
                    letterSpacing="4"
                    textAnchor="middle"
                    fontFamily="sans-serif"
                  >
                    <textPath href="#archPath" startOffset="50%">
                      COLORFUL OPENER · TEMPLATES
                    </textPath>
                  </text>

                  {/* Badge */}
                  <circle cx="500" cy="120" r="40" fill="#FF4500" stroke="#FFE870" strokeWidth="2" />
                  <text x="500" y="115" textAnchor="middle" fill="#FFE870" fontSize="11" fontWeight="700" fontFamily="sans-serif">/21</text>

                  {/* Center number text */}
                  <text
                    x="320"
                    y="200"
                    textAnchor="middle"
                    fill="white"
                    fontSize="64"
                    fontWeight="900"
                    fontFamily="sans-serif"
                    opacity="0.15"
                  >
                    21
                  </text>
                </svg>
              </div>

              {/* Photo overlay — simulated person */}
              <div
                className="absolute right-0 top-0 bottom-0 w-[45%]"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(232,50,10,0.3) 30%), linear-gradient(180deg, #c84010 0%, #8B2500 100%)",
                }}
              />

              {/* Play button */}
              <button
                aria-label="Watch reel"
                className="relative z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <Play size={18} fill="white" className="text-white ml-0.5" />
              </button>

              {/* SEE IT button */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                <button className="bg-[#2ECC71] text-white text-xs font-bold px-5 py-2 rounded-full uppercase tracking-wider">
                  See It
                </button>
              </div>
            </div>
          </div>

          {/* Watch Reel label */}
          <p className="mt-4 text-sm font-medium text-[#6B6B6B] text-center">
            Watch Reel
          </p>
        </div>
      </div>

      {/* Floating "Book a consultation" widget */}
      <div className="fixed bottom-6 left-6 z-50">
        <Link
          href="/contact"
          className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition-shadow"
        >
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div
              className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-amber-400 to-orange-500"
              aria-hidden="true"
            >
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <circle cx="20" cy="15" r="8" fill="rgba(255,255,255,0.4)" />
                <ellipse cx="20" cy="38" rx="14" ry="10" fill="rgba(255,255,255,0.3)" />
              </svg>
            </div>
            {/* Green online dot */}
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#2ECC71] rounded-full border-2 border-white" />
          </div>
          <span className="text-sm font-semibold text-[#0A0A0A] leading-tight whitespace-nowrap">
            Book a free <br />
            consultation
          </span>
        </Link>
      </div>
    </section>
  );
}
