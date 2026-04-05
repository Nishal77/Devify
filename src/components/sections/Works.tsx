"use client";

import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    tags: ["E-commerce", "SEO"],
    metric: "140%",
    title: "Scaling E-Commerce Growth for UrbanThread",
    description:
      "Drove a 140% increase in organic revenue through technical SEO, content strategy, and conversion rate optimization.",
    href: "/case-studies/urbanthread",
    bgColor: "#1400FF",
    image: true,
  },
  {
    tags: ["Social Media", "Branding"],
    metric: "320%",
    title: "Building Brand Authority for LuxeHome",
    description:
      "Grew Instagram following from 8K to 95K while doubling site traffic with a cohesive content and influencer strategy.",
    href: "/case-studies/luxehome",
    bgColor: "#0A0A0A",
    image: false,
  },
];

export default function Works() {
  return (
    <section
      id="works"
      className="bg-white py-24 md:py-32"
      aria-labelledby="works-heading"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-14">
          <div>
            <p className="section-label mb-5">Works</p>
            <h2
              id="works-heading"
              className="text-[52px] md:text-[60px] lg:text-[64px] font-bold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] max-w-[420px]"
            >
              Real people,
              <br />
              real results.
            </h2>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-5 lg:pt-20">
            <p className="text-[16px] leading-[1.6] text-[#6B6B6B] max-w-[380px] lg:text-right">
              From strategy to execution, we offer a full suite of marketing
              services designed to grow your brand, reach your audience, and
              drive real results.
            </p>
            <Link
              href="/case-studies"
              className="btn-blue inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold"
            >
              View all works
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        {/* Case study cards */}
        <div className="flex flex-col gap-4">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="rounded-[28px] overflow-hidden relative min-h-[360px] md:min-h-[440px] flex card-hover"
              style={{ backgroundColor: study.bgColor }}
            >
              {/* Left content */}
              <div className="flex flex-col justify-between p-8 md:p-12 flex-1 max-w-[580px]">
                {/* Tags */}
                <div className="flex gap-2 flex-wrap">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white text-[#0A0A0A] text-xs font-semibold px-4 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metric + title */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[80px] md:text-[96px] font-bold text-white leading-none tracking-[-0.04em]">
                      {study.metric}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#2ECC71] flex items-center justify-center flex-shrink-0">
                      <TrendingUp size={18} className="text-white" />
                    </div>
                  </div>
                  <h3 className="text-[22px] md:text-[26px] font-bold text-white leading-tight mb-8">
                    {study.title}
                  </h3>

                  {/* CTA */}
                  <Link
                    href={study.href}
                    className="inline-block w-full text-center py-4 rounded-2xl font-semibold text-[15px] transition-all duration-200"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.12)",
                      color: "white",
                      border: "1px solid rgba(255,255,255,0.2)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        "rgba(255,255,255,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                        "rgba(255,255,255,0.12)";
                    }}
                  >
                    Read Full Case Study
                  </Link>
                </div>
              </div>

              {/* Right image panel */}
              {study.image && (
                <div className="hidden md:block flex-1 relative">
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(20,0,255,0.4), transparent 40%), linear-gradient(135deg, #c8bfe0 0%, #a89cc8 30%, #8a7bb0 60%, #6d5e99 100%)",
                    }}
                  />
                  {/* Decorative signature overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      viewBox="0 0 300 120"
                      className="w-48 opacity-40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 80 C 40 20, 80 100, 100 60 C 120 20, 140 90, 180 50 C 200 30, 220 70, 260 40"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M80 90 C 100 70, 140 100, 160 80"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        fill="none"
                      />
                    </svg>
                  </div>
                  {/* Person silhouette */}
                  <div className="absolute bottom-0 right-0 w-[70%] h-full flex items-end justify-center overflow-hidden">
                    <svg
                      viewBox="0 0 200 280"
                      className="w-full h-full opacity-60"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <ellipse cx="100" cy="55" rx="38" ry="42" fill="rgba(200,185,220,0.6)" />
                      <path
                        d="M30 280 C 30 180 60 160 100 155 C 140 160 170 180 170 280"
                        fill="rgba(180,165,210,0.5)"
                      />
                    </svg>
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
