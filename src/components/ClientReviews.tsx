"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const REVIEWS = [
  { name: "Pr. Jacson George", role: "In Christ Kollam", image: "/pastor-jackson-george.jpeg", review: "Transparent Visas made our entire travel process incredibly smooth. We are extremely happy about the results and the transparent communication throughout." },
  { name: "Pr. Biji Anchal", role: "Anchal", image: "/pastor-biji-anchal.jpeg", review: "Not only did they handle our religious visit with utmost care, but the actual results we were able to accomplish were amazing. Highly recommended." },
  { name: "Pr. Anson Mathew", role: "River of Life Church Kollam", image: "/pastor-anson-kollam.jpeg", review: "It seems like a trivial thing for us now, but thanks to their meticulous planning, we realised that all visa choices must have a strategic basis." },
  { name: "Pr. Renjith K K & Thara Renjin", role: "Life Blessing Church", image: "/pastor-renjith-and-wife.jpeg", review: "Their team provided exceptional support for our entire congregation. The dedication and transparency they showed is unmatched in this industry." },
  { name: "Pr. Finney Stephen", role: "Religious Visit", review: "We trust them completely with our global travel needs. Their expertise in handling complex religious visas is truly remarkable." },
  { name: "Pr. Nikson Sunny", role: "Religious Visit", review: "A flawless experience from start to finish. They built trust by serving us exceptionally well during our last international conference." },
  { name: "Pr. Damien Antony", role: "Blessing Today Church", review: "Extremely professional service. They ensured all our documentation was perfect before submission, leading to a swift approval." },
  { name: "Pr. Sam Robinson Hillsand", role: "Sand hill, AG Church", review: "I highly recommend Transparent Visas. Their personalized guidance gave us peace of mind throughout the entire application process." },
  { name: "Joel Joshy", role: "Prais Generation, Alappuzha", review: "The transparency they offer is exactly what their name promises. No hidden fees and incredibly fast response times." },
  { name: "Pr. Subash", role: "Kumarkom", review: "Outstanding support for our church's international travel. They truly understand the nuances of religious visa applications." },
  { name: "Pr. Saju Punnose", role: "Sharon Fellowship", review: "We've partnered with them for multiple trips now, and the service remains consistently excellent and reliable." },
  { name: "Mathew T John", role: "Love feast Church, Ernakulam", review: "Their attention to detail prevented what could have been a costly refusal. Cannot thank the team enough for their diligence." },
  { name: "Pr. Satheesh Nelson", role: "International Zion Assembly", review: "A truly dedicated team that genuinely cares about their clients' success. They handled our complex case with ease." },
  { name: "Shibu", role: "Sharon Divine Center, Kayamkulam", review: "Fast, transparent, and incredibly helpful. They took all the stress out of the visa application process." },
  { name: "Pr. Shibu", role: "Hebron Church Trust, Kavalam", review: "Their knowledge of global visa policies is impressive. They guided us perfectly through a very strict embassy process." },
  { name: "Pr. Biju C X", role: "Fort Cochin", review: "Excellent communication and a very streamlined process. We always knew exactly where our application stood." },
  { name: "Pr. Shajumon", role: "Vagamon", review: "The best visa consultancy we have ever worked with. They deliver exactly what they promise with complete integrity." }
];

export default function ClientReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hasVisited = useRef(false);

  const autoScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        const scrollAmount = window.innerWidth >= 768 ? clientWidth / 2 : clientWidth;
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  }, []);

  const startAutoScroll = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(autoScroll, 5000);
  }, [autoScroll]);

  const stopAutoScroll = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!hasVisited.current && scrollRef.current) {
            scrollRef.current.scrollTo({ left: 0 });
            hasVisited.current = true;
          }
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      startAutoScroll();
    } else {
      stopAutoScroll();
    }

    return stopAutoScroll;
  }, [isVisible, startAutoScroll, stopAutoScroll]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = window.innerWidth >= 768 ? clientWidth / 2 : clientWidth;
      scrollRef.current.scrollBy({ 
        left: direction === 'left' ? -scrollAmount : scrollAmount, 
        behavior: 'smooth' 
      });

      if (isVisible) {
        stopAutoScroll();
        startAutoScroll();
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-[120px] md:py-[160px] bg-obsidian-deep overflow-hidden relative border-y border-outline-variant/20">
      <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-3xl">
            <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] mb-6 text-on-surface">
              Build Trust By Serving.
            </h2>
            <p className="font-body-md text-[18px] text-on-surface-variant max-w-2xl leading-relaxed">
              Join hundreds of successful applicants who achieved their global travel dreams. We build lasting trust through proven results and absolute transparency.
            </p>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex items-center gap-4 mb-2 md:mb-0">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-burnished-gold/30 flex items-center justify-center text-burnished-gold hover:bg-burnished-gold hover:text-obsidian-deep transition-all duration-300"
            >
              <FaChevronLeft size={14} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-burnished-gold/30 flex items-center justify-center text-burnished-gold hover:bg-burnished-gold hover:text-obsidian-deep transition-all duration-300"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-8 pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {REVIEWS.map((review, idx) => (
            <div 
              key={idx} 
              className="snap-start shrink-0 w-full md:w-[calc(50%-16px)] flex flex-col justify-between bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 glow-hover"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1.5 mb-6 text-burnished-gold">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={18} />
                  ))}
                </div>
                
                {/* Review Text */}
                <p className="font-body-md text-[20px] md:text-[22px] leading-[1.6] text-on-surface mb-12">
                  "{review.review}"
                </p>
              </div>

              {/* Client Profile */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full flex-shrink-0 overflow-hidden relative">
                   {review.image ? (
                     <Image src={review.image} alt={review.name} fill sizes="48px" className="absolute inset-0 object-cover" />
                   ) : (
                     <div className="w-full h-full bg-gradient-to-br from-burnished-gold to-champagne-highlight flex items-center justify-center font-bold text-obsidian-deep text-lg">
                       {review.name.charAt(0)}
                     </div>
                   )}
                </div>
                <div>
                  <h4 className="font-bold text-[16px] text-on-surface mb-0.5">{review.name}</h4>
                  <span className="font-label-md text-[13px] text-champagne-highlight uppercase tracking-widest">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
