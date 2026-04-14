"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const StarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="text-[#0A0A0A]"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Stars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <StarIcon key={i} />
    ))}
  </div>
);

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="text-[#D1D1D1]"
  >
    <path d="M12 5v14m-7-7h14" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="bg-white py-24 md:py-32 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16 relative">
          
          {/* Left Title */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1400FF]" />
              <span className="text-[13px] font-bold tracking-wide text-[#0A0A0A] uppercase">
                Testimonial
              </span>
            </div>
            <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-medium leading-[1.05] tracking-[-0.03em] text-[#0A0A0A]">
              Words that<br />Inspire us.
            </h2>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start lg:items-start lg:max-w-[400px] gap-6">
            <p className="text-[15px] leading-[1.6] text-[#0A0A0A] font-medium">
              Real feedback from real people. Discover how our design solutions have made a lasting impact on brands and businesses just like yours.
            </p>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-3 bg-[#1400FF] text-white rounded-full pl-6 pr-2 py-2 text-[14px] font-semibold hover:bg-blue-700 transition-colors"
            >
              Visit Case Studies
              <span className="bg-white text-[#1400FF] p-1.5 rounded-full transition-transform group-hover:scale-110">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          
          {/* Column 1: Main Stats Card */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-[20px] p-6 md:p-8 flex flex-col h-full overflow-hidden border border-black/[0.06] shadow-sm">
              
              {/* Top Section */}
              <div className="flex items-start justify-between gap-3 mb-16">
                <div className="flex items-baseline">
                  <span className="text-[52px] lg:text-[60px] font-bold tracking-tight text-[#0A0A0A] leading-[0.85]">
                    4.9
                  </span>
                  <span className="text-[14px] text-[#6B6B6B] font-medium ml-1">
                    /5
                  </span>
                </div>
                <p className="text-[11px] leading-[1.5] text-[#6B6B6B] max-w-[110px] pt-1 pt-1.5">
                  We've delivered <strong className="text-[#0A0A0A] font-semibold">56+ projects</strong> that help companies generate real results.
                </p>
              </div>
              
              <div className="mt-auto"></div>
              
              {/* Bottom Section */}
              <div className="mt-4">
                <h3 className="font-bold text-[18px] tracking-[-0.02em] text-[#0A0A0A] mb-4 flex items-center">
                  Devify<span className="text-[9px] align-top ml-[1px] text-[#6B6B6B]">®</span>
                </h3>
                
                <div className="flex items-start xl:items-center gap-3 mb-6 xl:flex-row flex-col">
                  {/* Overlapping avatars */}
                  <div className="flex -space-x-2.5">
                    <img 
                      src="/images/faq/woman.png" 
                      alt="Client" 
                      className="w-7 h-7 rounded-full border-2 border-white object-cover grayscale-[20%]" 
                    />
                    <img 
                      src="/images/faq/man.png" 
                      alt="Client" 
                      className="w-7 h-7 rounded-full border-2 border-white object-cover grayscale-[20%]" 
                    />
                    <div className="w-7 h-7 rounded-full border-2 border-white bg-[#0A0A0A] text-white text-[9px] font-bold flex items-center justify-center z-10">
                      56+
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <Stars />
                    <span className="text-[10px] font-medium text-[#6B6B6B]">
                      Trusted by <span className="text-[#0A0A0A]">clients worldwide</span>
                    </span>
                  </div>
                </div>
                
                {/* CTA Button */}
                <button className="w-full bg-[#0A0A0A] text-white rounded-full py-3.5 text-[13px] font-semibold transition-colors">
                  Leave a review
                </button>
              </div>

            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3 h-full">
            {/* Author Card */}
            <div className="bg-white rounded-[20px] p-4 px-5 flex items-center gap-3 border border-black/[0.06] shadow-sm">
              <img 
                src="/images/faq/woman.png" 
                alt="Sarah Carter" 
                className="w-9 h-9 rounded-[10px] object-cover" 
              />
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#0A0A0A] leading-snug tracking-[-0.01em]">
                  Sarah Carter
                </span>
                <span className="text-[11px] text-[#6B6B6B] font-medium">
                  Wilson & Co
                </span>
              </div>
            </div>
            
            {/* Testimonial Card */}
            <div className="bg-white rounded-[20px] p-6 md:p-8 flex flex-col justify-between flex-1 border border-black/[0.06] shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <Stars />
                <PlusIcon />
              </div>
              <div className="mt-auto">
                <p className="text-[16px] xl:text-[18px] font-medium text-[#0A0A0A] leading-[1.3] tracking-[-0.01em] pt-8">
                  Incredible team! They delivered exactly what we needed, on time and beyond expectations.
                </p>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3 h-full">
            {/* Testimonial Card */}
            <div className="bg-white rounded-[20px] p-6 md:p-8 flex flex-col justify-between flex-1 border border-black/[0.06] shadow-sm">
              <p className="text-[16px] xl:text-[19px] font-medium text-[#0A0A0A] leading-[1.3] tracking-[-0.01em] mb-8">
                A smooth process from start to finish. Highly professional team!
              </p>
              <div className="flex justify-between items-end mt-auto">
                <Stars />
                <PlusIcon />
              </div>
            </div>
            
            {/* Author Card */}
            <div className="bg-white rounded-[20px] p-4 px-5 flex items-center gap-3 border border-black/[0.06] shadow-sm">
              <img 
                src="/images/faq/man.png" 
                alt="Emily Davis" 
                className="w-9 h-9 rounded-[10px] object-cover grayscale-[50%]" 
              />
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#0A0A0A] leading-snug tracking-[-0.01em]">
                  Emily Davis
                </span>
                <span className="text-[11px] text-[#6B6B6B] font-medium">
                  StartUp Hub
                </span>
              </div>
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-3 h-full">
            {/* Author Card */}
            <div className="bg-white rounded-[20px] p-4 px-5 flex items-center gap-3 border border-black/[0.06] shadow-sm">
              <img 
                src="/images/faq/woman.png" 
                alt="Anna Martinez" 
                className="w-9 h-9 rounded-full object-cover" 
              />
              <div className="flex flex-col">
                <span className="text-[13px] font-bold text-[#0A0A0A] leading-snug tracking-[-0.01em]">
                  Anna Martinez
                </span>
                <span className="text-[11px] text-[#6B6B6B] font-medium">
                  Marketing Director
                </span>
              </div>
            </div>
            
            {/* Testimonial Card */}
            <div className="bg-white rounded-[20px] p-6 md:p-8 flex flex-col justify-between flex-1 border border-black/[0.06] shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <Stars />
                <PlusIcon />
              </div>
              <div className="mt-auto">
                <p className="text-[15px] xl:text-[17px] font-medium text-[#0A0A0A] leading-[1.35] tracking-[-0.01em] pt-8">
                  Our new branding is exactly what we envisioned—clean, modern, and unique. #1 in our industry.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
