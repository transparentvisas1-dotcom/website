"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={index}
            className={`bg-charcoal-surface border transition-all duration-300 rounded-2xl overflow-hidden cursor-pointer ${
              isOpen ? "border-burnished-gold/50 shadow-[0_0_15px_rgba(255,212,29,0.1)]" : "border-outline-variant/30 hover:border-outline-variant/60"
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="p-6 md:p-8 flex items-center justify-between gap-4">
              <h3 className="font-headline-md text-lg md:text-xl text-on-surface m-0">
                {faq.question}
              </h3>
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                  isOpen ? "bg-burnished-gold text-obsidian-deep rotate-180" : "bg-obsidian-deep border border-outline-variant/30 text-burnished-gold"
                }`}
              >
                <ChevronDown size={20} />
              </div>
            </div>
            
            <div 
              className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? "max-h-[500px] pb-6 md:pb-8 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-outline-variant/20 to-transparent mb-6"></div>
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
