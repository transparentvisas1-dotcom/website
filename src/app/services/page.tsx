import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Visa Services | Religious Visits, Passport & Attestation - Transparent Visas",
  description: "Expert services for Religious Visit Visas, standard visas, Passport services, and complete Document Attestation (PCC, HRD, MEA, WES).",
};

export default function ServicesPage() {
  return (
    <main className="pb-24">
      {/* Header Banner */}
      <section className="relative w-full h-[400px] md:h-[500px] flex flex-col justify-center items-center text-center mb-24 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-burnished-gold/10">
        <div className="absolute inset-0 z-0">
          <Image src="/religious-visa.jpg" alt="Services Banner" fill sizes="100vw" priority className="object-cover object-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-obsidian-deep/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep/80 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto mt-16">
          <span className="font-label-md text-label-md text-champagne-highlight uppercase tracking-[0.2em] opacity-80 border-b border-champagne-highlight/30 pb-2 inline-block mb-6">
            COMPREHENSIVE SOLUTIONS
          </span>
          <h1 className="kaisei-decol-regular text-fluid-display text-burnished-gold mb-6">
            Our Primary Services
          </h1>
          <p className="font-body-lg text-white/90 max-w-3xl mx-auto">
            End-to-end visa assistance, passport processing, and complete document attestation - all under one roof. Every service is delivered with transparency, precision, and personal attention.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto space-y-24">
        
        {/* Service 1: Visa Services (Mainly Religious) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 lg:p-12 glow-hover md:sticky md:top-32 overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image src="/visit-visa.jpg" alt="Visa Services" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian-deep/90 via-obsidian-deep/50 to-transparent z-10"></div>
            <div className="relative z-20">
              <span className="material-symbols-outlined text-burnished-gold text-[48px] mb-6 block">flight_takeoff</span>
            <h2 className="font-headline-lg-mobile text-on-surface mb-6">Visa Services</h2>
            <h3 className="font-label-md text-champagne-highlight uppercase tracking-widest mb-4">Specialising in Religious Visits</h3>
            <p className="font-body-md text-on-surface-variant mb-4">
              We specialise primarily in facilitating Religious Visits for church leaders, pastors, and congregations. We understand the specific documentation requirements and faith-based nuances required for these sensitive applications.
            </p>
            <p className="font-body-md text-on-surface-variant mb-8">
              Beyond religious travel, we also process standard Tourist, Work, and Student visas, managing everything from eligibility assessment to application submission and tracking.
            </p>
            <Link href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer" className="text-champagne-highlight font-label-md uppercase tracking-widest border-b border-champagne-highlight/30 pb-1 hover:border-champagne-highlight transition-all inline-flex items-center gap-2">
              Apply for a Visa <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            </div>
          </div>
          <div className="pt-4 md:pt-12">
            <h3 className="font-label-md text-burnished-gold uppercase tracking-widest mb-6">Countries Covered</h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant mb-12">
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <strong className="text-on-surface">UK</strong></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <strong className="text-on-surface">Canada</strong></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <strong className="text-on-surface">USA</strong></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <strong className="text-on-surface">New Zealand</strong></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <strong className="text-on-surface">Australia</strong></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <strong className="text-on-surface">Schengen Countries</strong></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <strong className="text-on-surface">GCC Countries</strong></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <strong className="text-on-surface">Singapore</strong></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <strong className="text-on-surface">Malaysia</strong></li>
            </ul>
            <h3 className="font-label-md text-burnished-gold uppercase tracking-widest mb-6">What's Included</h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant">
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-[20px] text-burnished-gold">check</span> Complete document checklist tailored to your destination</li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-[20px] text-burnished-gold">check</span> Cover letter, invitation letter guidance, and itinerary preparation</li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-[20px] text-burnished-gold">check</span> Financial document review and application submission</li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-outline-variant/30"></div>

        {/* Service 2: Passport Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 lg:p-12 glow-hover md:sticky md:top-32 md:order-last overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image src="/passport.jpg" alt="Passport Services" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian-deep/90 via-obsidian-deep/50 to-transparent z-10"></div>
            <div className="relative z-20">
              <span className="material-symbols-outlined text-burnished-gold text-[48px] mb-6 block">menu_book</span>
              <h2 className="font-headline-lg-mobile text-on-surface mb-6">Passport Services</h2>
              <p className="font-body-md text-on-surface-variant mb-4">
                Your international journey starts with a valid passport. We offer streamlined support for new passport applications, renewals, corrections, and expedited processing to ensure your travel plans are never delayed by paperwork.
              </p>
              <p className="font-body-md text-on-surface-variant mb-8">
                Our experts guide you through the appointment booking, documentation requirements, and police verification procedures required for Indian passports.
              </p>
              <Link href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer" className="text-champagne-highlight font-label-md uppercase tracking-widest border-b border-champagne-highlight/30 pb-1 hover:border-champagne-highlight transition-all inline-flex items-center gap-2">
                Get Passport Help <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="pt-4 md:pt-12">
            <h3 className="font-label-md text-burnished-gold uppercase tracking-widest mb-6">Services Offered</h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant mb-12">
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <div><strong className="text-on-surface">New Passport Applications</strong></div></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <div><strong className="text-on-surface">Passport Renewals</strong></div></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <div><strong className="text-on-surface">Name / Address Corrections</strong></div></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <div><strong className="text-on-surface">Tatkaal (Expedited) Passports</strong></div></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <div><strong className="text-on-surface">Lost or Damaged Passports</strong></div></li>
            </ul>
          </div>
        </div>

        <div className="w-full h-px bg-outline-variant/30"></div>

        {/* Service 3: Document Attestation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 lg:p-12 glow-hover md:sticky md:top-32 overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image src="/documentations.jpg" alt="Document Attestation" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian-deep/90 via-obsidian-deep/50 to-transparent z-10"></div>
            <div className="relative z-20">
              <span className="material-symbols-outlined text-burnished-gold text-[48px] mb-6 block">verified</span>
              <h2 className="font-headline-lg-mobile text-on-surface mb-6">Document Attestation</h2>
              <p className="font-body-md text-on-surface-variant mb-4">
                Proper document authentication is crucial for working, studying, or migrating abroad. We handle the entire attestation lifecycle securely and efficiently, ensuring your certificates are globally recognized.
              </p>
              <p className="font-body-md text-on-surface-variant mb-8">
                From state HRD to Ministry of External Affairs and final Embassy legalization, we take the hassle out of complex bureaucratic procedures.
              </p>
              <Link href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer" className="text-champagne-highlight font-label-md uppercase tracking-widest border-b border-champagne-highlight/30 pb-1 hover:border-champagne-highlight transition-all inline-flex items-center gap-2">
                Start Attestation <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="pt-4 md:pt-12">
            <h3 className="font-label-md text-burnished-gold uppercase tracking-widest mb-6">Attestation Services</h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant mb-12">
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-[20px] text-burnished-gold">check</span> <strong className="text-on-surface">PCC & OCI Support</strong></li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-[20px] text-burnished-gold">check</span> <strong className="text-on-surface">HRD Attestation</strong></li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-[20px] text-burnished-gold">check</span> <strong className="text-on-surface">MEA (Ministry of External Affairs) Attestation</strong></li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-[20px] text-burnished-gold">check</span> <strong className="text-on-surface">Embassy / Consulate Attestation</strong></li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-[20px] text-burnished-gold">check</span> <strong className="text-on-surface">WES & ICAS Attestation (for Canada/Australia)</strong></li>
              <li className="flex items-start gap-3"><span className="material-symbols-outlined text-[20px] text-burnished-gold">check</span> <strong className="text-on-surface">Document Translations</strong></li>
            </ul>
          </div>
        </div>

      </section>

      {/* Pre-footer CTA */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto text-center border-t border-outline-variant/30 mt-24">
        <h2 className="font-headline-md text-burnished-gold mb-6">Need Assistance With Your Paperwork?</h2>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          Whether it's a religious visit visa, passport renewal, or WES attestation, we provide transparent and fast processing. Get in touch for a free consultation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer"
            className="bg-burnished-gold text-obsidian-deep font-label-md uppercase tracking-widest px-8 py-4 rounded-DEFAULT hover:bg-champagne-highlight transition-colors duration-300"
          >
            Contact Us Today →
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-[120px] md:py-[160px] relative border-t border-outline-variant/20 bg-obsidian-deep px-margin-mobile md:px-margin-desktop">
        <div className="w-full max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] mb-6 text-on-surface">
              FAQs
            </h2>
            <p className="font-body-md text-[18px] text-on-surface-variant leading-relaxed">
              Common questions about our visa, passport, and document attestation services.
            </p>
          </div>
          <div className="w-full lg:w-2/3">
            <FAQAccordion faqs={[
              { question: "How long does document attestation usually take?", answer: "The timeline for document attestation varies depending on the specific requirements (HRD, MEA, Embassy) and the issuing state. On average, complete attestation can take anywhere from 10 to 25 working days. We provide tracking updates throughout the process." },
              { question: "Do you help with police clearance certificates (PCC)?", answer: "Yes, we provide end-to-end assistance with obtaining Police Clearance Certificates (PCC), including guiding you on the required documents, booking appointments, and ensuring the final certificate is properly formatted for your visa application." }
            ]} />
          </div>
        </div>
      </section>

    </main>
  );
}
