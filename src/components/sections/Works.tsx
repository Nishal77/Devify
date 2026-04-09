"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp } from "lucide-react";

const caseStudies = [
  {
    tags: ["E-commerce", "SEO"],
    metric: "140%",
    title: "Scaling E-Commerce Growth for UrbanThread",
    description:
      "Drove a 140% increase in organic revenue through technical SEO, content strategy, and conversion rate optimization.",
    href: "/case-studies/urbanthread",
    bgColor: "#1400FF",
    // In a real app, replace this with a local path or next/image
    imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000", 
    hasImage: true,
  },
  {
    tags: ["Social Media", "Branding"],
    metric: "320%",
    title: "Building Brand Authority for LuxeHome",
    description:
      "Grew Instagram following from 8K to 95K while doubling site traffic with a cohesive content and influencer strategy.",
    href: "/case-studies/luxehome",
    bgColor: "#0A0A0A",
    hasImage: false,
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="bg-white py-24 md:py-32 font-sans"
      aria-labelledby="works-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-16">
          <div>
            {/* Label with blue dot */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#1400FF]" />
              <p className="text-sm font-semibold tracking-wide text-gray-900">
                Works
              </p>
            </div>
            
            <h2
              id="works-heading"
              className="text-[32px] md:text-[42px] lg:text-[48px] font-medium leading-[1.1] tracking-[-0.04em] text-[#0A0A0A] max-w-[400px]"
            >
              Real people,
              <br />
              real results.
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-5 lg:mt-8">
            <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#6B6B6B] max-w-[360px] lg:text-left font-medium">
              From strategy to execution, we offer a full suite of marketing
              services designed to grow your brand, reach your audience, and
              drive real results.
            </p>
            <Link
              href="/case-studies"
              className="group inline-flex items-center gap-3 bg-[#1400FF] text-white rounded-full pl-6 pr-2 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors"
            >
              View all works
              <span className="bg-white text-[#1400FF] p-1.5 rounded-full">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>

        {/* Case study cards */}
        <div className="flex flex-col gap-6">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="rounded-[32px] overflow-hidden relative flex flex-col md:flex-row shadow-sm"
              style={{ backgroundColor: study.bgColor }}
            >
              {/* Left content */}
              <div className="flex flex-col justify-between p-8 md:p-14 flex-1 lg:max-w-[55%]">
                {/* Tags */}
                <div className="flex gap-2 flex-wrap mb-16">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white text-[#0A0A0A] text-xs font-semibold px-5 py-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metric + title */}
                <div className="mt-auto">
                  <div className="flex items-end gap-3 mb-2">
                    <span className="text-[80px] md:text-[110px] font-medium text-white leading-[0.85] tracking-[-0.04em]">
                      {study.metric}
                    </span>
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#00FF66] flex items-center justify-center mb-2 md:mb-3 flex-shrink-0">
                      <ArrowUp size={20} className="text-[#1400FF]" strokeWidth={3} />
                    </div>
                  </div>
                  
                  <h3 className="text-[24px] md:text-[32px] font-medium text-white leading-[1.1] mb-10 tracking-tight">
                    {study.title}
                  </h3>

                  {/* CTA */}
                  <Link
                    href={study.href}
                    className="inline-block w-full text-center py-4 md:py-5 rounded-2xl font-semibold text-[15px] bg-white"
                    style={{ color: study.bgColor }}
                  >
                    Read Full Case Study
                  </Link>
                </div>
              </div>

              {/* Right image panel */}
              {study.hasImage && (
                <div className="hidden md:flex flex-1 p-4 pl-0">
                  <div className="relative w-full h-full rounded-[24px] overflow-hidden">
                    <img
                      src={study.imageUrl}
                      alt={study.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Dark gradient overlay to ensure signature readability */}
                    <div className="absolute inset-0 bg-black/10" />
                    
                    {/* Decorative signature overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="font-serif italic text-6xl md:text-8xl text-black/80 rotate-[-10deg] tracking-tighter">
                        Clothes
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}