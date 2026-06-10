import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Landmark, Building2, MapPin, Compass, Globe2, Building } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Countries We Serve | UK, USA, Canada, Australia, GCC Visa Services - Transparent Visas",
  description: "Visa services for 30+ countries including UK, USA, Canada, Australia, Schengen Europe, GCC (UAE, Saudi, Qatar) & more. Tourist, student, work & business visas.",
};

export default function CountriesPage() {
  return (
    <main className="pb-24">
      <section className="relative w-full h-[400px] md:h-[500px] flex flex-col justify-center items-center text-center mb-24 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-burnished-gold/10">
        <div className="absolute inset-0 z-0">
          <Image src="/passport.jpg" alt="Countries Banner" fill sizes="100vw" priority className="object-cover object-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-obsidian-deep/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep/80 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto mt-16">
          <span className="font-label-md text-label-md text-champagne-highlight uppercase tracking-[0.2em] opacity-80 border-b border-champagne-highlight/30 pb-2 inline-block mb-6">
            30+ DESTINATIONS
          </span>
          <h1 className="kaisei-decol-regular text-fluid-display text-burnished-gold mb-6">
            Countries & Visa Types We Serve
          </h1>
          <p className="font-body-lg text-white/90 max-w-3xl mx-auto">
            From the United Kingdom to Australia, from the Schengen zone to the GCC - we process visas for every major destination. Explore the countries and visa types below, or contact us for a personalised assessment.
          </p>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto space-y-24">
        
        {/* UK */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 lg:p-12 glow-hover md:sticky md:top-32 overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image src="/united-kingdom.jpg" alt="United Kingdom" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian-deep/90 via-obsidian-deep/50 to-transparent z-10"></div>
            <div className="relative z-20">
              <Landmark size={64} className="text-burnished-gold mb-6" strokeWidth={1} />
              <h2 className="font-headline-lg-mobile text-on-surface mb-6">United Kingdom</h2>
              <p className="font-body-md text-on-surface-variant mb-8">
                The UK remains one of the most popular and most complex visa destinations. Whether you need a short visit visa or a long-term work permit, our team has deep expertise in UK immigration requirements and a particularly strong track record with UK visit visa refusal cases.
              </p>
              <Link href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer" className="text-champagne-highlight font-label-md uppercase tracking-widest border-b border-champagne-highlight/30 pb-1 hover:border-champagne-highlight transition-all inline-flex items-center gap-2">
                Apply for UK Visa <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="pt-4 md:pt-12">
            <h3 className="font-label-md text-burnished-gold uppercase tracking-widest mb-6">Visa Types Available</h3>
            <ul className="space-y-4 font-body-md text-on-surface-variant mb-12">
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <div><strong className="text-on-surface">Standard Visitor Visa</strong> - Tourism, family visits, religious conferences</div></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <div><strong className="text-on-surface">Student Visa</strong> - Full-time study at a licensed UK institution</div></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <div><strong className="text-on-surface">Skilled Worker Visa</strong> - Employment with an approved UK sponsor</div></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <div><strong className="text-on-surface">Business Visitor Visa</strong> - Conferences, meetings, trade fairs</div></li>
              <li className="flex items-start gap-3"><span className="text-burnished-gold">•</span> <div><strong className="text-on-surface">Dependent Visa</strong> - Joining a family member in the UK</div></li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-label-md text-burnished-gold uppercase tracking-widest mb-4">Key Requirements</h3>
                <ul className="space-y-2 font-body-md text-on-surface-variant text-sm">
                  <li>• Valid passport (6 months validity)</li>
                  <li>• Financial proof (bank statements, ITR)</li>
                  <li>• Travel itinerary & accommodation</li>
                  <li>• TB test certificate (if applicable)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-label-md text-burnished-gold uppercase tracking-widest mb-4">Processing Time</h3>
                <ul className="space-y-2 font-body-md text-on-surface-variant text-sm">
                  <li>• Standard: 15 working days</li>
                  <li>• Priority: 5 working days</li>
                  <li>• Super Priority: Next working day</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-outline-variant/30"></div>

        {/* USA & Canada (Side by side for variation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* USA */}
          <div className="relative bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 lg:p-12 glow-hover overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image src="/United-states-of-america.jpg" alt="United States" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian-deep/90 via-obsidian-deep/50 to-transparent z-10"></div>
            <div className="relative z-20">
              <Building2 size={64} className="text-burnished-gold mb-6" strokeWidth={1} />
              <h2 className="font-headline-md text-on-surface mb-4">United States</h2>
              <p className="font-body-md text-on-surface-variant mb-8 text-sm line-clamp-3">
                US visa applications require careful preparation, especially for the consular interview. Our team guides you through form DS-160, document preparation, and interview coaching to maximise your chances of approval.
              </p>
              <h3 className="font-label-md text-burnished-gold uppercase tracking-widest mb-4">Visas Available</h3>
              <ul className="space-y-2 font-body-md text-on-surface-variant text-sm mb-8">
                <li>• B1/B2 Visitor Visa</li>
                <li>• F1 Student Visa</li>
                <li>• H1B Work Visa</li>
                <li>• L1 Intra-Company Transfer</li>
              </ul>
              <Link href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer" className="text-champagne-highlight font-label-md uppercase tracking-widest hover:text-burnished-gold transition-all inline-flex items-center gap-2">
                Apply for USA Visa <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Canada */}
          <div className="relative bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 lg:p-12 glow-hover overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image src="/canada.jpg" alt="Canada" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian-deep/90 via-obsidian-deep/50 to-transparent z-10"></div>
            <div className="relative z-20">
              <MapPin size={64} className="text-burnished-gold mb-6" strokeWidth={1} />
              <h2 className="font-headline-md text-on-surface mb-4">Canada</h2>
              <p className="font-body-md text-on-surface-variant mb-8 text-sm line-clamp-3">
                Whether you are visiting for tourism, pursuing higher education, or exploring work opportunities, we ensure your application meets IRCC standards.
              </p>
              <h3 className="font-label-md text-burnished-gold uppercase tracking-widest mb-4">Visas Available</h3>
              <ul className="space-y-2 font-body-md text-on-surface-variant text-sm mb-8">
                <li>• Temporary Resident Visa (Visitor)</li>
                <li>• Study Permit</li>
                <li>• Work Permit (LMIA-based & exempt)</li>
                <li>• Business Visa</li>
              </ul>
              <Link href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer" className="text-champagne-highlight font-label-md uppercase tracking-widest hover:text-burnished-gold transition-all inline-flex items-center gap-2">
                Apply for Canada Visa <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-outline-variant/30"></div>

        {/* Australia & Schengen */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Australia */}
          <div className="relative bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 lg:p-12 glow-hover overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image src="/australia.jpg" alt="Australia" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian-deep/90 via-obsidian-deep/50 to-transparent z-10"></div>
            <div className="relative z-20">
              <Compass size={64} className="text-burnished-gold mb-6" strokeWidth={1} />
              <h2 className="font-headline-md text-on-surface mb-4">Australia</h2>
              <p className="font-body-md text-on-surface-variant mb-8 text-sm">
                Australia's visa system uses a subclass-based numbering system. Our team understands the nuances of Australian immigration, including the Genuine Temporary Entrant (GTE) requirement for student visas.
              </p>
              <h3 className="font-label-md text-burnished-gold uppercase tracking-widest mb-4">Visas Available</h3>
              <ul className="space-y-2 font-body-md text-on-surface-variant text-sm mb-8">
                <li>• Visitor Visa (Subclass 600)</li>
                <li>• Student Visa (Subclass 500)</li>
                <li>• Temporary Skill Shortage (Subclass 482)</li>
              </ul>
              <Link href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer" className="text-champagne-highlight font-label-md uppercase tracking-widest hover:text-burnished-gold transition-all inline-flex items-center gap-2">
                Apply for Australia Visa <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Schengen */}
          <div className="relative bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 lg:p-12 glow-hover overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image src="/schengen-europe.jpg" alt="Schengen Europe" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian-deep/90 via-obsidian-deep/50 to-transparent z-10"></div>
            <div className="relative z-20">
              <Globe2 size={64} className="text-burnished-gold mb-6" strokeWidth={1} />
              <h2 className="font-headline-md text-on-surface mb-4">Schengen (Europe)</h2>
              <p className="font-body-md text-on-surface-variant mb-8 text-sm">
                The Schengen visa grants access to 27 European countries with a single application. We help you determine the correct embassy, prepare documentation, and navigate the appointment process.
              </p>
              <h3 className="font-label-md text-burnished-gold uppercase tracking-widest mb-4">Countries Covered</h3>
              <p className="font-body-md text-on-surface-variant text-sm mb-8 leading-relaxed">
                Austria, Belgium, Czech Republic, Denmark, Finland, France, Germany, Greece, Italy, Netherlands, Norway, Poland, Portugal, Spain, Sweden, Switzerland, and more.
              </p>
              <Link href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer" className="text-champagne-highlight font-label-md uppercase tracking-widest hover:text-burnished-gold transition-all inline-flex items-center gap-2">
                Apply for Schengen Visa <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-outline-variant/30"></div>

        {/* GCC Countries */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 lg:p-12 glow-hover md:sticky md:top-32 md:order-last overflow-hidden group">
            <div className="absolute inset-0 z-0">
              <Image src="/gcc-countries.jpg" alt="GCC Countries" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-obsidian-deep/90 via-obsidian-deep/50 to-transparent z-10"></div>
            <div className="relative z-20">
              <Building size={64} className="text-burnished-gold mb-6" strokeWidth={1} />
              <h2 className="font-headline-lg-mobile text-on-surface mb-6">GCC Countries</h2>
              <p className="font-body-md text-on-surface-variant mb-8">
                The Gulf Cooperation Council (GCC) countries are major destinations for Indian travellers - for business, employment, tourism, and religious travel (Umrah/Hajj). We process visas for all six GCC nations with fast turnaround times and thorough documentation.
              </p>
              <Link href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer" className="text-champagne-highlight font-label-md uppercase tracking-widest border-b border-champagne-highlight/30 pb-1 hover:border-champagne-highlight transition-all inline-flex items-center gap-2">
                Apply for GCC Visa <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="pt-4 md:pt-12">
            <h3 className="font-label-md text-burnished-gold uppercase tracking-widest mb-6">Countries & Visa Types</h3>
            <ul className="space-y-6 font-body-md text-on-surface-variant mb-12">
              <li>
                <strong className="text-on-surface block mb-1">🇦🇪 UAE / Dubai</strong>
                <span className="text-sm">Tourist (30/90 days), Business, Work, Transit</span>
              </li>
              <li>
                <strong className="text-on-surface block mb-1">🇸🇦 Saudi Arabia</strong>
                <span className="text-sm">Visit, Business, Work, Umrah / Hajj Visas</span>
              </li>
              <li>
                <strong className="text-on-surface block mb-1">🇶🇦 Qatar</strong>
                <span className="text-sm">Tourist, Business, Work</span>
              </li>
              <li>
                <strong className="text-on-surface block mb-1">🇧🇭 Bahrain & 🇰🇼 Kuwait & 🇴🇲 Oman</strong>
                <span className="text-sm">Visit, Business, Work (Oman: Tourist, Business)</span>
              </li>
            </ul>
            <div className="bg-obsidian-deep/50 p-6 rounded-lg border border-outline-variant/10">
              <h3 className="font-label-md text-burnished-gold uppercase tracking-widest mb-3 text-sm">Processing Time</h3>
              <p className="font-body-md text-on-surface-variant text-sm">Tourist Visas: 3–7 working days<br/>Business Visas: 5–10 working days<br/>Work Visas: 2–6 weeks</p>
            </div>
          </div>
        </div>

        {/* Additional Destinations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
          <div className="bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 text-center glow-hover">
            <h2 className="font-headline-md text-on-surface mb-4">New Zealand</h2>
            <Link href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer" className="text-champagne-highlight font-label-md uppercase tracking-widest hover:text-burnished-gold transition-all inline-flex items-center justify-center gap-2">
              Apply Now <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 text-center glow-hover">
            <h2 className="font-headline-md text-on-surface mb-4">Singapore</h2>
            <Link href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer" className="text-champagne-highlight font-label-md uppercase tracking-widest hover:text-burnished-gold transition-all inline-flex items-center justify-center gap-2">
              Apply Now <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 text-center glow-hover">
            <h2 className="font-headline-md text-on-surface mb-4">Malaysia</h2>
            <Link href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer" className="text-champagne-highlight font-label-md uppercase tracking-widest hover:text-burnished-gold transition-all inline-flex items-center justify-center gap-2">
              Apply Now <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
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
              Common questions about specific countries and visa types.
            </p>
          </div>
          <div className="w-full lg:w-2/3">
            <FAQAccordion faqs={[
              { question: "Do you process Schengen visas for all 27 member states?", answer: "Yes, we handle Schengen visit, tourist, and business visas for all member states. We will guide you on which embassy to apply to based on your itinerary and where you will be spending the most time." },
              { question: "Which countries are included in your GCC visa services?", answer: "Our GCC visa services cover the UAE (Dubai, Abu Dhabi), Saudi Arabia, Qatar, Bahrain, Kuwait, and Oman. We assist with tourist, business, and work visas depending on the specific country's regulations." }
            ]} />
          </div>
        </div>
      </section>

    </main>
  );
}
