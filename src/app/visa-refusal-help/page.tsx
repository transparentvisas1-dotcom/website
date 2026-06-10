import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { Phone, Mail, Landmark, Building2, MapPin, Compass, Globe2, Building } from "lucide-react";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Visa Refusal Help | UK Visa Refused? Expert Re-Application — Transparent Visas",
  description: "Visa refused? We specialise in visa refusal cases, especially UK visit visa rejections. Expert refusal analysis, documentation correction & high-success resubmission. Contact us.",
};

export default function VisaRefusalHelpPage() {
  return (
    <main className="pb-24">
      {/* Header Banner */}
      <section className="relative w-full h-[400px] md:h-[500px] flex flex-col justify-center items-center text-center mb-24 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-error/10">
        <div className="absolute inset-0 z-0">
          <Image src="/visa-refusal-solving.jpg" alt="Visa Refusal Help Banner" fill sizes="100vw" priority className="object-cover object-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-obsidian-deep/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep/80 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 w-full max-w-container-max mx-auto mt-16">
          <span className="font-label-md text-label-md text-error uppercase tracking-[0.2em] opacity-90 border-b border-error/30 pb-2 inline-block mb-6">
            REFUSAL RECOVERY SPECIALISTS
          </span>
          <h1 className="kaisei-decol-regular text-fluid-display text-burnished-gold mb-6">
            Visa Refused? We Can Help.
          </h1>
          <p className="font-body-lg text-white/90 max-w-3xl mx-auto">
            A visa refusal is not the end — it's a second chance to get it right. We specialise in overturning visa refusals with expert analysis, stronger documentation, and a proven re-application strategy.
          </p>
        </div>
      </section>

      {/* Core Message */}
      <section className="px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto mb-24">
        <div className="bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 lg:p-16 max-w-4xl mx-auto text-center">
          <h2 className="font-headline-md text-burnished-gold mb-4">We Undertake All Refusal Cases</h2>
          <h3 className="font-label-md text-champagne-highlight uppercase tracking-widest mb-8 text-xl">Especially UK Visit Visa Refusal Cases</h3>
          <p className="font-body-md text-on-surface-variant mb-6 text-left md:text-center">
            Most visa refusals are not caused by ineligibility. They are caused by weak documentation, unclear purpose of travel, insufficient financial evidence, or poorly written cover letters. The good news? All of these are fixable.
          </p>
          <p className="font-body-md text-on-surface-variant mb-6 text-left md:text-center">
            At Transparent Visas, we have built a dedicated practice around visa refusal recovery. Our team analyses your refusal letter word by word, identifies every weakness in your previous application, and builds a fundamentally stronger case for resubmission.
          </p>
          <p className="font-body-md text-on-surface-variant text-left md:text-center">
            We have a particularly strong track record with <strong className="text-on-surface">UK visit visa refusals</strong> — one of the most common and most complex refusal scenarios. Whether it's your first refusal or your third, we approach every case with the same rigour and determination.
          </p>
        </div>
      </section>

      {/* 5-Step Process */}
      <section className="px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto mb-24">
        <div className="text-center mb-12">
          <span className="font-label-md text-label-md text-champagne-highlight uppercase tracking-[0.2em] opacity-80 border-b border-champagne-highlight/30 pb-2 inline-block mb-4">OUR APPROACH</span>
          <h2 className="font-headline-md text-burnished-gold">Our 5-Step Refusal Recovery Process</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-burnished-gold/20 -translate-x-1/2"></div>
          
          {/* Step 1 */}
          <div className="md:col-span-5 md:text-right relative">
            <h3 className="font-label-md text-on-surface text-xl mb-3"><span className="text-burnished-gold mr-2 md:hidden">1.</span>Refusal Letter Analysis</h3>
            <p className="font-body-md text-on-surface-variant">We obtain and carefully review your complete refusal notice. Every refusal letter contains specific reasons for the decision — we decode these and translate them into actionable items.</p>
          </div>
          <div className="hidden md:flex md:col-span-2 justify-center relative">
            <div className="w-12 h-12 rounded-full bg-obsidian-deep border-2 border-burnished-gold flex items-center justify-center text-burnished-gold font-headline-md text-xl z-10">1</div>
          </div>
          <div className="md:col-span-5"></div>

          {/* Step 2 */}
          <div className="md:col-span-5"></div>
          <div className="hidden md:flex md:col-span-2 justify-center relative">
            <div className="w-12 h-12 rounded-full bg-obsidian-deep border-2 border-burnished-gold flex items-center justify-center text-burnished-gold font-headline-md text-xl z-10">2</div>
          </div>
          <div className="md:col-span-5 relative mt-8 md:mt-0">
            <h3 className="font-label-md text-on-surface text-xl mb-3"><span className="text-burnished-gold mr-2 md:hidden">2.</span>Previous Application Audit</h3>
            <p className="font-body-md text-on-surface-variant">We review your entire previous application package — the form, the supporting documents, the cover letter, the financial evidence. We identify every gap, inconsistency, and weak point that contributed to the refusal.</p>
          </div>

          {/* Step 3 */}
          <div className="md:col-span-5 md:text-right relative mt-8 md:mt-0">
            <h3 className="font-label-md text-on-surface text-xl mb-3"><span className="text-burnished-gold mr-2 md:hidden">3.</span>Strategy Development</h3>
            <p className="font-body-md text-on-surface-variant">Based on our analysis, we develop a tailored re-application strategy. This isn't about resubmitting the same documents with minor tweaks — it's about building a completely new, stronger case that directly addresses every concern raised by the visa officer.</p>
          </div>
          <div className="hidden md:flex md:col-span-2 justify-center relative">
            <div className="w-12 h-12 rounded-full bg-obsidian-deep border-2 border-burnished-gold flex items-center justify-center text-burnished-gold font-headline-md text-xl z-10">3</div>
          </div>
          <div className="md:col-span-5"></div>

          {/* Step 4 */}
          <div className="md:col-span-5"></div>
          <div className="hidden md:flex md:col-span-2 justify-center relative">
            <div className="w-12 h-12 rounded-full bg-obsidian-deep border-2 border-burnished-gold flex items-center justify-center text-burnished-gold font-headline-md text-xl z-10">4</div>
          </div>
          <div className="md:col-span-5 relative mt-8 md:mt-0">
            <h3 className="font-label-md text-on-surface text-xl mb-3"><span className="text-burnished-gold mr-2 md:hidden">4.</span>Documentation Rebuilding</h3>
            <p className="font-body-md text-on-surface-variant mb-4">This is where the real work happens. We:</p>
            <ul className="space-y-2 font-body-md text-on-surface-variant">
              <li>• Rewrite your cover letter to clearly address refusal reasons</li>
              <li>• Strengthen your financial evidence with additional support</li>
              <li>• Prepare a new, compelling travel itinerary</li>
              <li>• Gather additional proof of ties to your home country</li>
              <li>• Obtain fresh supporting letters (employer, bank, sponsor)</li>
              <li>• Ensure every document meets current embassy standards</li>
            </ul>
          </div>

          {/* Step 5 */}
          <div className="md:col-span-5 md:text-right relative mt-8 md:mt-0">
            <h3 className="font-label-md text-on-surface text-xl mb-3"><span className="text-burnished-gold mr-2 md:hidden">5.</span>Confident Resubmission</h3>
            <p className="font-body-md text-on-surface-variant">We compile your complete application package, conduct a final quality review, and submit. We track the application and keep you informed at every stage.</p>
          </div>
          <div className="hidden md:flex md:col-span-2 justify-center relative">
            <div className="w-12 h-12 rounded-full bg-obsidian-deep border-2 border-burnished-gold flex items-center justify-center text-burnished-gold font-headline-md text-xl z-10">5</div>
          </div>
          <div className="md:col-span-5"></div>
        </div>
      </section>

      {/* Why We Succeed */}
      <section className="py-[120px] relative border-t border-b border-outline-variant/20 bg-surface-dim mb-24">
        <div className="w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10 flex flex-col md:flex-row gap-16">
          <div className="w-full md:w-1/3 space-y-8 md:sticky md:top-32 h-fit">
            <span className="font-label-md text-label-md text-burnished-gold uppercase tracking-[0.2em] border-b border-burnished-gold/30 pb-2 inline-block">
              WHAT MAKES US DIFFERENT
            </span>
            <h2 className="font-headline-lg-mobile md:text-headline-lg text-on-surface leading-tight">
              Why Our Refusal Cases Succeed
            </h2>
          </div>

          <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-label-md text-label-md text-champagne-highlight uppercase tracking-widest mb-2">Expert Re-Application Guidance</h4>
              <p className="font-body-md text-on-surface-variant text-sm">Our consultants have handled dozens of refusal cases across multiple countries. We know what visa officers look for, what red flags they identify, and how to present your case in the strongest possible light.</p>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-champagne-highlight uppercase tracking-widest mb-2">Strong Documentation Correction</h4>
              <p className="font-body-md text-on-surface-variant text-sm">Documentation is where most applications fail — and where we excel. We don't just fix errors; we rebuild your document package from the ground up with evidence that directly addresses each refusal reason.</p>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-champagne-highlight uppercase tracking-widest mb-2">Refusal Analysis & Strategy</h4>
              <p className="font-body-md text-on-surface-variant text-sm">We don't guess why your visa was refused. We systematically analyse the refusal letter, cross-reference it with your previous application, and develop a data-driven strategy for resubmission.</p>
            </div>
            <div>
              <h4 className="font-label-md text-label-md text-champagne-highlight uppercase tracking-widest mb-2">High Success Re-Submission Approach</h4>
              <p className="font-body-md text-on-surface-variant text-sm">Our approach is built on 4+ years of experience and a deep understanding of immigration decision-making. We know when a case is ready for resubmission — and we know when it needs more time and preparation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Refusal Cases We Handle & Common Reasons */}
      <section className="px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="font-headline-md text-burnished-gold mb-6">Refusal Cases We Handle</h2>
          <p className="font-body-md text-on-surface-variant mb-8">We handle visa refusal cases for all major destinations, with particular expertise in:</p>
          <div className="space-y-4 font-body-md text-on-surface-variant">
            <div className="p-4 bg-charcoal-surface rounded-lg border border-outline-variant/20">
              <strong className="text-on-surface flex items-center gap-2 mb-1"><Landmark size={16} className="text-burnished-gold" /> United Kingdom</strong> Visit visa refusal, student visa refusal, dependent visa refusal
            </div>
            <div className="p-4 bg-charcoal-surface rounded-lg border border-outline-variant/20">
              <strong className="text-on-surface flex items-center gap-2 mb-1"><Building2 size={16} className="text-burnished-gold" /> United States</strong> B1/B2 refusal (214b), F1 refusal
            </div>
            <div className="p-4 bg-charcoal-surface rounded-lg border border-outline-variant/20">
              <strong className="text-on-surface flex items-center gap-2 mb-1"><MapPin size={16} className="text-burnished-gold" /> Canada</strong> Visitor visa refusal, study permit refusal
            </div>
            <div className="p-4 bg-charcoal-surface rounded-lg border border-outline-variant/20">
              <strong className="text-on-surface flex items-center gap-2 mb-1"><Compass size={16} className="text-burnished-gold" /> Australia</strong> Visitor visa refusal (Subclass 600), student visa refusal
            </div>
            <div className="p-4 bg-charcoal-surface rounded-lg border border-outline-variant/20">
              <strong className="text-on-surface flex items-center gap-2 mb-1"><Globe2 size={16} className="text-burnished-gold" /> Schengen</strong> Short-stay visa refusal
            </div>
            <div className="p-4 bg-charcoal-surface rounded-lg border border-outline-variant/20">
              <strong className="text-on-surface flex items-center gap-2 mb-1"><MapPin size={16} className="text-burnished-gold" /> New Zealand</strong> Visitor visa refusal
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-headline-md text-burnished-gold mb-6">Common Reasons for Refusal</h2>
          <p className="font-body-md text-on-surface-variant mb-8">Understanding why visas get refused is the first step toward a successful re-application.</p>
          <div className="space-y-6">
            <div>
              <h4 className="font-label-md text-on-surface uppercase tracking-widest mb-2">Insufficient Financial Evidence</h4>
              <p className="font-body-md text-on-surface-variant text-sm">The embassy was not convinced you have enough funds, or documents were unclear/inconsistent.</p>
            </div>
            <div>
              <h4 className="font-label-md text-on-surface uppercase tracking-widest mb-2">Weak Ties to Home Country</h4>
              <p className="font-body-md text-on-surface-variant text-sm">The visa officer was not satisfied that you have strong enough reasons to return home.</p>
            </div>
            <div>
              <h4 className="font-label-md text-on-surface uppercase tracking-widest mb-2">Incomplete/Inconsistent Documents</h4>
              <p className="font-body-md text-on-surface-variant text-sm">Missing documents, conflicting information, or docs that don't meet specifications.</p>
            </div>
            <div>
              <h4 className="font-label-md text-on-surface uppercase tracking-widest mb-2">Unclear Purpose of Travel</h4>
              <p className="font-body-md text-on-surface-variant text-sm">Reason for travel was vague, unconvincing, or not supported by adequate evidence.</p>
            </div>
            <div>
              <h4 className="font-label-md text-on-surface uppercase tracking-widest mb-2">Poor Cover Letter or Application</h4>
              <p className="font-body-md text-on-surface-variant text-sm">A weak, generic, or poorly structured cover letter that fails to present a compelling case.</p>
            </div>
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
              Common questions about overturned visa applications.
            </p>
          </div>
          <div className="w-full lg:w-2/3">
            <FAQAccordion faqs={[
              { question: "Can I re-apply immediately after a visa refusal?", answer: "In most cases, yes, unless the embassy specifically placed a ban on you. However, we strongly recommend against rushing a re-application without addressing the exact reasons for the first refusal. We analyse the refusal letter to ensure your new application is bulletproof." },
              { question: "What is your success rate for UK visit visa refusals?", answer: "We have an exceptional success rate in overturning UK visit visa refusals. The UK is one of the strictest embassies, but through meticulous documentation correction and strong, bespoke cover letters addressing the refusal points, we successfully recover the vast majority of these cases." }
            ]} />
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto text-center border-t border-outline-variant/30">
        <h2 className="font-headline-md text-burnished-gold mb-6">Don't Let a Refusal Stop Your Journey</h2>
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto mb-10">
          A visa refusal feels devastating — but it's not permanent. With the right guidance, the right documents, and the right strategy, your next application can succeed. We've helped dozens of clients overturn refusals and achieve their travel goals. Let us help you too.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <Link
            href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer"
            className="bg-burnished-gold text-obsidian-deep font-label-md uppercase tracking-widest px-8 py-4 rounded-DEFAULT hover:bg-champagne-highlight transition-colors duration-300"
          >
            Get Refusal Help Today →
          </Link>
          <div className="flex flex-col items-start gap-3">
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
