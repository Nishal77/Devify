"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "How Brand Strategy Impacts Business Growth",
    date: "July 2025",
    // Premium abstract/gradient image placeholder
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "aspect-[4/5]",
  },
  {
    id: 2,
    title: "The Rise of Micro-Influencers in Digital Campaigns",
    date: "June 2025",
    // Office / Collaboration placeholder
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: 3,
    title: "Why Your Brand Needs a Visual Identity",
    date: "May 2025",
    // Minimalist Fashion / Identity placeholder
    image: "https://images.unsplash.com/photo-1493655161922-ef9892f5a820?q=80&w=1000&auto=format&fit=crop",
    aspectRatio: "aspect-[4/5]",
  }
];

export default function Blog() {
  return (
    <section className="bg-white py-24 md:py-32 font-sans overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 relative">
          
          {/* Left Title */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1400FF]" />
              <span className="text-[13px] font-bold tracking-wide text-[#0A0A0A] uppercase">
                Blog
              </span>
            </div>
            <h2 className="text-[44px] md:text-[56px] lg:text-[64px] font-medium leading-[1.05] tracking-[-0.03em] text-[#0A0A0A]">
              Insights from<br />the digital edge.
            </h2>
          </div>

          {/* Right Content */}
          <div className="flex flex-col items-start lg:items-start lg:max-w-[400px] gap-6">
            <p className="text-[15px] leading-[1.6] text-[#0A0A0A] font-medium">
              Explore marketing trends, strategies, and expert tips to help your brand grow faster and smarter in the digital world.
            </p>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 bg-[#1400FF] text-white rounded-full pl-6 pr-2 py-2 text-[14px] font-semibold hover:bg-blue-700 transition-colors"
            >
              View All
              <span className="bg-white text-[#1400FF] p-1.5 rounded-full transition-transform group-hover:scale-110">
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 items-start">
          {blogPosts.map((post) => (
            <Link 
              href={`/blog/${post.id}`} 
              key={post.id} 
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Container */}
              <div className={`relative w-full ${post.aspectRatio} rounded-[24px] lg:rounded-[32px] overflow-hidden bg-gray-100 mb-6 shadow-sm`}>
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Text Content */}
              <div className="flex flex-col pr-4">
                <h3 className="text-[22px] lg:text-[26px] font-medium text-[#0A0A0A] leading-[1.25] tracking-[-0.02em] mb-2 group-hover:text-[#1400FF] transition-colors">
                  {post.title}
                </h3>
                <span className="text-[13px] text-[#6B6B6B] font-medium">
                  {post.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
