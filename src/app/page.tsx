import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import ClientReviews from "@/components/ClientReviews";
import FAQAccordion from "@/components/FAQAccordion";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[100svh] w-full overflow-hidden flex flex-col justify-end pb-4 md:pb-8 pt-20 md:pt-24">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            alt="Hero Background"
            className="object-cover object-center opacity-50"
            src="/hero-image.jpg"
            fill
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian-deep/90 via-obsidian-deep/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-transparent to-transparent"></div>
        </div>

        {/* Main Content (Left Aligned) */}
        <div className="relative z-10 w-full max-w-container-max mx-auto flex-grow flex flex-col justify-center px-margin-mobile md:px-margin-desktop mb-4 md:mb-6">
          
          <div className="max-w-4xl">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full px-4 py-1.5 text-xs font-label-md uppercase tracking-widest mb-6">
              <div className="w-2 h-2 rounded-full bg-[#B2D852]"></div>
              Grow Your Global Reach.
            </div>

            {/* Main Title */}
            <h1 className="kaisei-decol-regular text-fluid-display text-white leading-[1.1] tracking-tight mb-4">
              Your Trusted Partner <br />
              For Religious & Global <br />
              <span className="text-burnished-gold">Visa Solutions</span>
            </h1>
          </div>
        </div>

        {/* Floating Bottom Elements */}
        <div className="relative z-20 w-full pointer-events-none mt-auto">
          <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row justify-between items-end pb-4 md:pb-0">
            
            {/* Left Card */}
            <div className="bg-[#fcfaf5] text-obsidian-deep rounded-t-3xl md:rounded-3xl p-4 md:p-6 w-full md:w-[380px] pointer-events-auto shadow-2xl md:mb-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-burnished-gold/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <div className="relative z-10">
                <div className="text-3xl md:text-4xl kaisei-decol-regular mb-1 font-bold tracking-tighter">300+</div>
              <div className="text-[10px] font-label-md text-obsidian-deep/50 uppercase tracking-widest">Cases Successfully Handled</div>
              <div className="mt-5 border-t border-obsidian-deep/10 pt-5 flex items-center justify-between">
                <div>
                  <div className="text-lg font-bold font-headline-md">4+ Years</div>
                  <div className="text-[11px] text-obsidian-deep/50 font-body-md mt-0.5">Of Immigration Excellence</div>
                </div>
                <div className="text-burnished-gold bg-burnished-gold/10 p-2 rounded-full">
                  <span className="material-symbols-outlined text-[20px]">public</span>
                </div>
              </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="pb-0 flex flex-col items-start md:items-end text-left md:text-right w-full md:w-[400px] pointer-events-auto mt-4 md:mt-0">
              <p className="text-white/80 font-body-md mb-4 leading-relaxed hidden md:block text-sm">
                We build reliable, transparent visa solutions tailored for religious leaders, students, and global travelers. Experience complete clarity in every step.
              </p>
              <Link href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer" className="bg-white text-obsidian-deep px-6 py-3 rounded-full font-label-md text-sm uppercase tracking-widest hover:bg-burnished-gold hover:text-white transition-colors duration-300 shadow-xl flex items-center gap-2">
                Start Application <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Services Overview (Bento Grid) */}
      <section className="py-[120px] md:py-[160px] w-full relative z-10 bg-obsidian-deep overflow-hidden">
        {/* Luxury Glowing Ribbon Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-[10%] -left-[20%] w-[140%] h-[300px] bg-gradient-to-r from-transparent via-[#FFD41D]/15 to-transparent blur-[120px] transform -rotate-[15deg]"></div>
          <div className="absolute bottom-[20%] -right-[10%] w-[120%] h-[250px] bg-gradient-to-l from-transparent via-champagne-highlight/10 to-transparent blur-[100px] transform rotate-[10deg]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FFD41D]/5 rounded-full blur-[150px]"></div>
        </div>

        <div className="px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 space-y-6 md:space-y-0">
          <div className="max-w-3xl">
            <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] mb-6 text-on-surface">
              Visa, Passport & Attestation Services.
            </h2>
            <p className="font-body-md text-[18px] text-on-surface-variant max-w-2xl leading-relaxed">
              End-to-end global visa, passport, and document attestation services. We simplify complex embassy paperwork so you can travel with absolute peace of mind.
            </p>
          </div>
          <Link
            href="/services"
            className="border-b border-burnished-gold/50 text-burnished-gold hover:text-champagne-highlight hover:border-champagne-highlight pb-1 transition-all duration-300 font-label-md text-label-md uppercase tracking-widest whitespace-nowrap"
          >
            View All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px] md:auto-rows-[400px]">
          {/* Card 1: Large Featured */}
          <Link href="/services" className="md:col-span-8 relative group overflow-hidden rounded-xl bg-charcoal-surface border-t border-l border-outline-variant/30 glow-hover transition-all duration-500 cursor-pointer block">
            <Image src="/religious-visa.jpg" alt="Religious Visas" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-obsidian-deep/70 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end z-20">
              <div className="max-w-md">
                <span className="material-symbols-outlined text-burnished-gold text-[32px] mb-4 block">flight_takeoff</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Religious & Visit Visas</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-3">Our primary specialty. We handle religious visits for church leaders and congregations, plus standard tourist visas for the UK, Canada, USA, Australia, Schengen, and more.</p>
              </div>
              <div className="h-10 w-10 rounded-full border border-burnished-gold/50 flex items-center justify-center text-burnished-gold backdrop-blur-md group-hover:bg-burnished-gold group-hover:text-obsidian-deep transition-all duration-300">
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </div>
            </div>
          </Link>

          {/* Card 2: Vertical */}
          <Link href="/services" className="md:col-span-4 relative group overflow-hidden rounded-xl bg-charcoal-surface border-t border-outline-variant/30 glow-hover transition-all duration-500 cursor-pointer block">
            <Image src="/passport.jpg" alt="Passport Services" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-obsidian-deep/80 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-20">
              <span className="material-symbols-outlined text-burnished-gold text-[32px] mb-4 block">menu_book</span>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Passport Services</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-3">Streamlined support for new applications, renewals, corrections, and expedited processing to ensure your travel plans are never delayed.</p>
            </div>
          </Link>

          {/* Card 3: Small Horizontal */}
          <Link href="/services" className="md:col-span-6 relative group overflow-hidden rounded-xl bg-charcoal-surface border-l border-outline-variant/30 glow-hover transition-all duration-500 cursor-pointer block">
            <Image src="/documentations.jpg" alt="Document Attestation" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-obsidian-deep/80 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-20">
              <div className="max-w-md">
                <span className="material-symbols-outlined text-burnished-gold text-[32px] mb-4 block">verified</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Document Attestation</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-2">Proper document authentication for working or studying abroad. We handle the entire lifecycle including HRD, MEA, and Embassy legalization.</p>
              </div>
            </div>
          </Link>

          {/* Card 4: Small Horizontal */}
          <Link href="/visa-refusal-help" className="md:col-span-6 relative group overflow-hidden rounded-xl bg-charcoal-surface border border-outline-variant/20 glow-hover transition-all duration-500 cursor-pointer block">
            <Image src="/visa-refusal-solving.jpg" alt="Visa Refusal Help" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-30 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep/90 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full z-20">
              <div className="max-w-md">
                <span className="material-symbols-outlined text-error text-[32px] mb-4 block">gpp_bad</span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">Visa Refusal? No Problem.</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm line-clamp-2">We specialise in overturning refusals — especially UK visit visa rejections. We analyse, correct, and resubmit for success.</p>
              </div>
            </div>
          </Link>
        </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-[120px] md:py-[160px] relative border-t border-outline-variant/20 bg-surface-dim">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] mb-6 text-on-surface">
              Why Thousands Trust Us With Their Global Dreams.
            </h2>
            <p className="font-body-md text-[18px] text-on-surface-variant max-w-2xl leading-relaxed">
              Experience a stress-free visa application with our 100% transparent pricing, expert personalized guidance, and meticulous documentation support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-charcoal-surface rounded-2xl p-8 border border-outline-variant/30 glow-hover flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-burnished-gold/10 flex items-center justify-center text-burnished-gold mb-8">
                <span className="material-symbols-outlined text-[28px]">search_check</span>
              </div>
              <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-3">Transparent Process</h4>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">No hidden fees, no surprises. We walk you through every step of the visa process so you always know exactly where your application stands and what comes next.</p>
            </div>
            <div className="bg-charcoal-surface rounded-2xl p-8 border border-outline-variant/30 glow-hover flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-burnished-gold/10 flex items-center justify-center text-burnished-gold mb-8">
                <span className="material-symbols-outlined text-[28px]">person_check</span>
              </div>
              <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-3">Personalised Guidance</h4>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">Every applicant is unique. We customise our approach to your specific situation — your nationality, travel history, financial profile, and purpose of travel all inform our strategy.</p>
            </div>
            <div className="bg-charcoal-surface rounded-2xl p-8 border border-outline-variant/30 glow-hover flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-burnished-gold/10 flex items-center justify-center text-burnished-gold mb-8">
                <span className="material-symbols-outlined text-[28px]">description</span>
              </div>
              <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-3">Strong Documentation</h4>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">Documentation is where most visa applications fail. We meticulously review, correct, and strengthen your paperwork to meet embassy standards before submission.</p>
            </div>
            <div className="bg-charcoal-surface rounded-2xl p-8 border border-outline-variant/30 glow-hover flex flex-col">
              <div className="w-14 h-14 rounded-2xl bg-burnished-gold/10 flex items-center justify-center text-burnished-gold mb-8">
                <span className="material-symbols-outlined text-[28px]">support_agent</span>
              </div>
              <h4 className="font-label-md text-label-md text-on-surface uppercase tracking-widest mb-3">Always Available</h4>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">Have a question at 9 PM? Need clarity before your interview? We are always reachable — quick in responses, clear in communication, and dedicated to your peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <ClientReviews />
      
      {/* FAQ Section */}
      <section className="py-[120px] md:py-[160px] relative border-t border-outline-variant/20 bg-obsidian-deep">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] mb-6 text-on-surface">
              FAQs
            </h2>
            <p className="font-body-md text-[18px] text-on-surface-variant leading-relaxed">
              Everything you need to know about our visa services, processing times, and documentation requirements before you apply.
            </p>
          </div>
          <div className="w-full lg:w-2/3">
            <FAQAccordion faqs={[
              { question: "What types of visas do you handle?", answer: "We specialise in a wide range of visas including Tourist, Visit, Student, Work, Business, and Dependent visas for major countries like the UK, Canada, USA, Australia, Schengen countries, and New Zealand. Our primary specialty is handling religious visits for church leaders and congregations." },
              { question: "Do you help with visa refusal cases?", answer: "Yes, absolutely. We have a 93% success rate in handling visa refusal cases, particularly UK visit visa rejections. We meticulously analyse the reasons for refusal, correct the documentation, and build a strong strategy for high-success resubmission." },
              { question: "What is included in your documentation support?", answer: "Documentation is the most critical part of any visa application. We provide comprehensive support including reviewing, correcting, and translating your documents. We also handle full document attestation services (HRD, MEA, Embassy legalization, WES & ICAS)." },
              { question: "Do you assist with ticketing and travel insurance?", answer: "Yes, we provide end-to-end travel solutions. Beyond just securing your visa, we offer comprehensive flight ticketing services, travel insurance tailored to your destination's requirements, CA valuation assistance, and ITR filing assistance." }
            ]} />
          </div>
        </div>
      </section>
      
      {/* Pre-footer CTA */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="max-w-3xl">
          <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] mb-6 text-on-surface">
            Ready to Start Your Journey?
          </h2>
          <p className="font-body-md text-[18px] text-on-surface-variant max-w-2xl leading-relaxed">
            Don't let complex paperwork delay your goals. Contact our visa experts today for a free consultation and secure your travel plans with confidence.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-6 flex-shrink-0">
          <Link
            href="https://wa.me/918891744344"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-burnished-gold text-obsidian-deep font-label-md uppercase tracking-widest px-8 py-4 rounded-DEFAULT hover:bg-champagne-highlight transition-colors duration-300"
          >
            Contact Us Today →
          </Link>
          <div className="flex flex-col items-start md:items-end gap-3">
            <span className="font-label-md text-champagne-highlight tracking-widest flex items-center gap-2">
              <Phone size={16} /> +91 88917 44344
            </span>
            <span className="font-label-md text-champagne-highlight tracking-widest flex items-center gap-2">
              <Mail size={16} /> transparentvisas@gmail.com
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
