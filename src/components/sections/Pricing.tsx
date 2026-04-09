"use client";

import Link from "next/link";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="bg-[#FAFAFA] py-16 md:py-24 overflow-hidden font-sans"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1400FF]" />
            <span className="text-[13px] font-semibold tracking-wide text-[#0A0A0A] uppercase">
              Pricing
            </span>
          </div>
          <h2
            id="pricing-heading"
            className="text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.1] tracking-[-0.03em] text-[#0A0A0A] text-center max-w-[600px]"
          >
            Transparent pricing, tangible value.
          </h2>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1150px] mx-auto items-center">
          
          {/* Card 1: Essentials */}
          <div className="bg-[#F2F2F2] rounded-[24px] p-7 lg:p-8 flex flex-col h-full shadow-sm">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#1400FF]" />
              <h3 className="text-[22px] font-medium text-[#0A0A0A] tracking-[-0.02em]">
                Essentials
              </h3>
            </div>

            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[14px]">🔥</span>
              <span className="text-[10px] font-bold text-[#0A0A0A] uppercase tracking-wider">
                Most Popular
              </span>
            </div>
            
            <p className="text-[15px] font-semibold text-[#0A0A0A] mb-5">
              Services Included
            </p>

            <ul className="flex flex-col gap-3 mb-auto">
              {["Search Engine Optimization (SEO)", "Social Media Marketing", "Paid Advertising", "Web Design & Optimization"].map((service, i) => (
                <li key={i} className="flex items-center gap-3 text-[13px] font-medium text-[#0A0A0A] pb-3 border-b border-black/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1400FF] flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-2 flex flex-col items-center">
              <div className="mb-5 flex items-baseline gap-1">
                <span className="text-[42px] font-medium tracking-[-0.04em] text-[#0A0A0A] leading-none">
                  $2,500
                </span>
                <span className="text-[13px] font-medium text-[#0A0A0A]">
                  /month
                </span>
              </div>
              <Link
                href="/contact"
                className="w-full py-3.5 rounded-full bg-[#1400FF] hover:bg-[#0A00CC] transition-colors text-white text-[14px] font-semibold flex items-center justify-center mb-3"
              >
                Contact Us
              </Link>
              <p className="text-[12px] text-[#6B6B6B] font-medium">
                Need a custom plan? Contact us.
              </p>
            </div>
          </div>

          {/* Card 2: Accelerator */}
          <div className="bg-[#F2F2F2] rounded-[24px] p-7 lg:p-8 flex flex-col h-full shadow-sm">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#1400FF]" />
              <h3 className="text-[22px] font-medium text-[#0A0A0A] tracking-[-0.02em]">
                Accelerator
              </h3>
            </div>

            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[14px]">🤝</span>
              <span className="text-[10px] font-bold text-[#0A0A0A] uppercase tracking-wider">
                Recommended for All
              </span>
            </div>
            
            <p className="text-[15px] font-semibold text-[#0A0A0A] mb-5">
              Services Included
            </p>

            <ul className="flex flex-col gap-3 mb-auto">
              {["Search Engine Optimization (SEO)", "Social Media Marketing", "Brand Strategy", "Paid Advertising", "Web Design & Optimization"].map((service, i) => (
                <li key={i} className="flex items-center gap-3 text-[13px] font-medium text-[#0A0A0A] pb-3 border-b border-black/5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1400FF] flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-2 flex flex-col items-center">
              <div className="mb-5 flex items-baseline gap-1">
                <span className="text-[42px] font-medium tracking-[-0.04em] text-[#0A0A0A] leading-none">
                  $5,000
                </span>
                <span className="text-[13px] font-medium text-[#0A0A0A]">
                  /month
                </span>
              </div>
              <Link
                href="/contact"
                className="w-full py-3.5 rounded-full bg-[#1400FF] hover:bg-[#0A00CC] transition-colors text-white text-[14px] font-semibold flex items-center justify-center mb-3"
              >
                Contact Us
              </Link>
              <p className="text-[12px] text-[#6B6B6B] font-medium">
                Need a custom plan? Contact us.
              </p>
            </div>
          </div>

          {/* Card 3: Dominance */}
          <div className="bg-[#1400FF] rounded-[24px] p-7 lg:p-8 flex flex-col h-full shadow-xl relative z-10 transform md:scale-[1.03] border border-blue-600">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-white" />
              <h3 className="text-[22px] font-medium text-white tracking-[-0.02em]">
                Dominance
              </h3>
            </div>

            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-[14px]">⚡</span>
              <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                Most Valued
              </span>
            </div>
            
            <p className="text-[15px] font-semibold text-white mb-5">
              Services Included
            </p>

            <ul className="flex flex-col gap-3 mb-auto">
              {/* Combined Content & Social Media to save vertical space */}
              {["Search Engine Optimization (SEO)", "Content & Social Media", "Brand Strategy", "Paid Advertising", "Web Design & Optimization"].map((service, i) => (
                <li key={i} className="flex items-center gap-3 text-[13px] font-medium text-white pb-3 border-b border-white/15">
                  <div className="w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                  {service}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-2 flex flex-col items-center">
              <div className="mb-5 flex items-baseline gap-1">
                <span className="text-[42px] font-medium tracking-[-0.04em] text-white leading-none">
                  $10,000
                </span>
                <span className="text-[13px] font-medium text-white/80">
                  /month
                </span>
              </div>
              <Link
                href="/contact"
                className="w-full py-3.5 rounded-full bg-white hover:bg-gray-50 transition-colors text-[#1400FF] text-[14px] font-semibold flex items-center justify-center mb-3"
              >
                Contact Us
              </Link>
              <p className="text-[12px] text-white/80 font-medium">
                Need a custom plan? Contact us.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}