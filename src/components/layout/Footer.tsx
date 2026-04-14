"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Data structure based on the reference images
const footerLinks = {
  infoAndAddress: {
    title: "Info & Address",
    address: "1330 Disk Rd, Anchorage,\nAlaska, United States",
    phone: "+661 058 56978",
    email: "Hello@marketra.com",
  },
  socialLinks: {
    title: "Social Links",
    links: [
      { label: "Facebook", href: "#" },
      { label: "Twitter/X", href: "#" },
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },
  navigation: {
    title: "Navigation",
    links: [
      { label: "About", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Services", href: "/services" },
      { label: "Blog", href: "/blog" },
    ],
  },
  creatorInfo: {
    title: "Creator Info",
    links: [
      { label: "Made in Framer", href: "#" },
      { label: "Visit All Templates", href: "#" },
    ],
  },
  legal: {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
    ],
    copyright: "©2025 Marketra",
  },
};

export default function Footer() {
  return (
    <div className="px-4 pb-4 md:px-6 md:pb-6 lg:px-8 lg:pb-8 pt-10">
      <footer
        className="relative bg-[#0A0A0A] pt-16 pb-12 overflow-hidden font-sans rounded-3xl lg:rounded-[2.5rem]"
        aria-label="Site footer"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 relative z-10">
          
          {/* Top Centered Contact Button */}
          <div className="flex justify-center mb-24">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-[#1400FF] text-white rounded-full pl-6 pr-2 py-2 text-[15px] font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <span className="bg-white text-[#1400FF] p-1.5 rounded-full transition-transform group-hover:scale-110">
              <ArrowUpRight size={16} strokeWidth={2.5} />
            </span>
          </Link>
        </div>

        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-8 text-[14px] font-medium mb-16">
          
          {/* Column 1: Info & Address */}
          <div>
            <h4 className="flex items-center gap-2.5 mb-8 font-semibold text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1400FF]" />
              {footerLinks.infoAndAddress.title}
            </h4>
            <div className="flex flex-col gap-5 text-[#9A9A9A]">
              <p className="whitespace-pre-line leading-[1.6]">
                {footerLinks.infoAndAddress.address}
              </p>
              <p>{footerLinks.infoAndAddress.phone}</p>
              <p>{footerLinks.infoAndAddress.email}</p>
            </div>
          </div>

          {/* Column 2: Social Links */}
          <div>
            <h4 className="flex items-center gap-2.5 mb-8 font-semibold text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1400FF]" />
              {footerLinks.socialLinks.title}
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.socialLinks.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#9A9A9A] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation */}
          <div>
            <h4 className="flex items-center gap-2.5 mb-8 font-semibold text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1400FF]" />
              {footerLinks.navigation.title}
            </h4>
            <ul className="flex flex-col gap-4">
              {footerLinks.navigation.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#9A9A9A] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Creator Info */}
          <div>
            <h4 className="flex items-center gap-2.5 mb-8 font-semibold text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1400FF]" />
              {footerLinks.creatorInfo.title}
            </h4>
            <ul className="flex flex-col gap-4 mb-6">
              {footerLinks.creatorInfo.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#9A9A9A] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-1">
                <span className="text-[12px] text-[#6B6B6B] font-semibold tracking-wide">Created by</span>
                {/* Text fallback for signature. Replace with <img> tag if you have the actual signature file */}
                <div className="font-serif italic text-2xl text-white tracking-tighter pr-4">Sla</div>
            </div>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h4 className="flex items-center gap-2.5 mb-8 font-semibold text-white">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1400FF]" />
              {footerLinks.legal.title}
            </h4>
            <ul className="flex flex-col gap-4 mb-10">
              {footerLinks.legal.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#9A9A9A] hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-[14px] text-[#6B6B6B]">
              {footerLinks.legal.copyright}
            </p>
          </div>
        </div>

        {/* Large Premium Watermark (Marketra®) */}
        <div className="absolute inset-x-0 bottom-0 flex justify-center w-full pointer-events-none z-0 overflow-hidden select-none">
          <svg viewBox="0 0 100 28" className="w-[110%] h-auto max-h-[180px] md:max-h-[220px] text-white/[0.03] fill-current" xmlns="http://www.w3.org/2000/svg">
            <text x="50" y="24" textAnchor="middle" fontSize="26" fontWeight="900" letterSpacing="-0.03em">
              Marketra®
            </text>
          </svg>
        </div>
        
      </div>
    </footer>
    </div>
  );
}