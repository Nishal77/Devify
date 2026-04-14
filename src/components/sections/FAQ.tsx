"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What services does Devify offer?",
    answer:
      "We provide a comprehensive range of services, including Web Development, Search Engine Optimization (SEO), Content Marketing, Social Media Marketing, Brand Strategy, Paid Advertising (PPC), and Web Design & Optimization.",
    authorName: "Sarah Jenkins",
    authorImage: "/images/faq/woman.png",
  },
  {
    question: "Do you offer ongoing marketing contracts or one-time projects?",
    answer:
      "We offer both! Whether you need a one-time website overhaul or ongoing SEO and digital marketing support, we can tailor a contract to fit your specific business needs.",
    authorName: "David Chen",
    authorImage: "/images/faq/man.png",
  },
  {
    question: "How long does it take to see results from SEO efforts?",
    answer:
      "SEO is a long-term strategy. Typically, you can expect to start seeing initial improvements in your rankings and traffic within 3 to 6 months, with the most significant results appearing after 6 to 12 months of consistent effort.",
    authorName: "Sarah Jenkins",
    authorImage: "/images/faq/woman.png",
  },
  {
    question: "What is PPC advertising, and how can it benefit my business?",
    answer:
      "PPC (Pay-Per-Click) is an advertising model where you pay a fee each time your ad is clicked. It allows you to rapidly buy visits to your site rather than earning them organically, driving immediate, targeted traffic to boost leads and sales.",
    authorName: "David Chen",
    authorImage: "/images/faq/man.png",
  },
  {
    question: "How will we communicate and collaborate during our partnership?",
    answer:
      "We believe in complete transparency. We use dedicated Slack channels for day-to-day communication, hold bi-weekly progress syncs, and provide access to a project dashboard where you can track all milestones and outcomes.",
    authorName: "Sarah Jenkins",
    authorImage: "/images/faq/woman.png",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white py-16 md:py-24 font-sans">
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Left Column: Heading and CTA Box */}
          <div className="w-full lg:w-[40%] flex flex-col">
            {/* Tag */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1400FF]" />
              <span className="text-[13px] font-bold tracking-wide text-[#0A0A0A] uppercase">
                FAQ
              </span>
            </div>
            
            {/* Heading */}
            <h2 className="text-[40px] md:text-[52px] font-semibold leading-[1.05] tracking-[-0.03em] text-[#0A0A0A] mb-10 max-w-[350px]">
              We've got the answers.
            </h2>

            {/* Blue CTA Box */}
            <div className="bg-[#1400FF] rounded-[24px] p-8 md:p-10 flex flex-col mt-auto shadow-lg relative overflow-hidden">
              <div className="w-16 h-16 rounded-[16px] overflow-hidden mb-8 border-2 border-white/10 shadow-sm bg-white/5 relative z-10">
                <Image
                  src="/images/faq/man.png"
                  alt="Customer Support"
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="text-white text-[28px] md:text-[32px] font-medium leading-[1.15] tracking-[-0.02em] mb-8 relative z-10">
                Didn't get the answer you were looking for?
              </h3>

              <Link
                href="/contact"
                className="w-full bg-white text-[#1400FF] font-semibold py-4 rounded-full text-center hover:bg-gray-50 transition-colors mb-6 relative z-10"
              >
                Talk with Human
              </Link>

              <p className="text-white/80 text-[13px] leading-relaxed relative z-10 font-medium">
                We will be happy to answer! It should take between 1 to 2 working days.
              </p>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="w-full lg:w-[60%] flex flex-col gap-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`border border-[#E5E5E5] rounded-[16px] overflow-hidden transition-all duration-300 ${
                    isOpen ? "bg-[#F5F5F5] border-transparent" : "bg-white hover:border-[#1400FF]/30"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-6 md:px-8 md:py-7 flex items-center justify-between text-left gap-6 group"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[17px] md:text-[19px] font-medium text-[#0A0A0A] tracking-[-0.01em] pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 text-[#0A0A0A] transition-transform duration-300 group-hover:text-[#1400FF]">
                      {isOpen ? <ChevronUp size={20} className="opacity-60" /> : <ChevronDown size={20} className="opacity-60" />}
                    </span>
                  </button>

                  {/* Expanded Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-8 md:px-8 md:pb-8 pt-0">
                        <p className="text-[#6B6B6B] text-[15px] leading-[1.6] mb-6 pr-4">
                          {faq.answer}
                        </p>
                        
                        {/* Author Info */}
                        <div className="pt-6 border-t border-black/5 flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full overflow-hidden relative shadow-sm border border-black/5">
                            <Image
                              src={faq.authorImage}
                              alt={faq.authorName}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[11px] font-bold text-[#6B6B6B] uppercase tracking-wide">
                              Answered by
                            </span>
                            <span className="text-[14px] font-semibold text-[#0A0A0A]">
                              {faq.authorName}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
}
