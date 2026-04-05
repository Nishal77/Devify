"use client";

import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <nav
        className="max-w-[1400px] mx-auto flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0"
          aria-label="Devify home"
        >
          <LogoIcon />
        </Link>

        {/* Center nav pill */}
        <div className="nav-pill px-2 py-1.5 hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[#0A0A0A] hover:text-[#1400FF] rounded-full hover:bg-white/60 transition-all duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="btn-blue px-5 py-2.5 text-sm font-semibold hidden md:inline-flex items-center"
        >
          Contact Us
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Open menu"
        >
          <span className="w-5 h-0.5 bg-[#0A0A0A] block" />
          <span className="w-5 h-0.5 bg-[#0A0A0A] block" />
          <span className="w-3.5 h-0.5 bg-[#0A0A0A] block" />
        </button>
      </nav>
    </header>
  );
}

function LogoIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Infinity/loop style logo similar to Marketra */}
      <rect width="40" height="40" rx="12" fill="#0A0A0A" />
      <path
        d="M20 14C16.5 14 13.5 16.2 13.5 20C13.5 23.8 16.5 26 20 26C23.5 26 24.5 24 26.5 20C28.5 16 29.5 14 33 14C36.5 14 38 16.5 38 20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        transform="translate(-10, 0) scale(0.85)"
      />
      <path
        d="M8 20C8 23 9.5 26 13 26C16.5 26 17.5 24 19.5 20C21.5 16 22.5 14 26 14C29.5 14 30 16.5 30 20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        transform="translate(2, 0) scale(0.75)"
      />
    </svg>
  );
}
