import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "FAQ | Common Visa Questions Answered — Transparent Visas",
  description: "Find answers to common visa questions — processing times, document requirements, refusal recovery, fees, and more. Expert answers from Transparent Visas.",
};

export default function FAQPage() {
  return (
    <main className="pb-24">
      {/* Header Banner */}
      <section className="relative w-full h-[400px] md:h-[500px] flex flex-col justify-center items-center text-center mb-16 md:mb-24 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-burnished-gold/10">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-image.jpg" alt="FAQ Banner" fill sizes="100vw" priority className="object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-obsidian-deep/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep/80 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl pt-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-champagne-highlight rounded-full px-4 py-1.5 text-xs font-label-md uppercase tracking-widest mb-6">
            <div className="w-2 h-2 rounded-full bg-burnished-gold"></div>
            ANSWERS YOU NEED
          </div>
          <h1 className="kaisei-decol-regular text-fluid-display leading-[1.1] text-white mb-6">
            Frequently Asked Questions
          </h1>
          <p className="font-body-md text-lg text-white/80 max-w-2xl mx-auto">
            Everything you need to know about the visa application process, our services, and how we can help you. Can't find your answer here? Contact us directly.
          </p>
        </div>
      </section>

      {/* General Questions */}
      <section className="py-12 md:py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] mb-6 text-on-surface">
              General Questions
            </h2>
            <p className="font-body-md text-[18px] text-on-surface-variant leading-relaxed">
              Basic information about who we are and what we do.
            </p>
          </div>
          <div className="w-full lg:w-2/3">
            <FAQAccordion faqs={[
              { question: "What services does Transparent Visas offer?", answer: "We offer comprehensive visa consulting and application support for tourist, student, work, business, and dependent visas across 30+ countries. We also handle visa refusal cases, document attestation (HRD, MEA, Embassy, WES, ICAS), document translation, flight bookings, travel insurance, CA valuation assistance, and ITR filing support." },
              { question: "Which countries do you provide visa services for?", answer: "We process visas for the United Kingdom, United States, Canada, Australia, Schengen countries (all 27 European nations), GCC countries (UAE, Saudi Arabia, Qatar, Bahrain, Kuwait, Oman), New Zealand, and many other destinations worldwide." },
              { question: "What is your success rate?", answer: "We maintain a 93% visa approval success rate across all countries and visa types. This rate is built on 4+ years of experience, meticulous documentation standards, and honest case assessment." },
              { question: "How long have you been in business?", answer: "Transparent Visas has been providing visa consulting services for over 4+ years. In that time, we have handled over 300 cases and built deep expertise across every major visa category." }
            ]} />
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-12 md:py-20 px-margin-mobile md:px-margin-desktop bg-charcoal-surface/50 border-t border-b border-outline-variant/10">
        <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] mb-6 text-on-surface">
              Application Process
            </h2>
            <p className="font-body-md text-[18px] text-on-surface-variant leading-relaxed">
              How we work together to secure your visa.
            </p>
          </div>
          <div className="w-full lg:w-2/3">
            <FAQAccordion faqs={[
              { question: "How do I start my visa application with you?", answer: "Simply contact us via phone/WhatsApp (+91 88917 44344) for a free consultation. We'll discuss your travel plans, assess your eligibility, explain the process, and provide a clear quote — all with no obligation." },
              { question: "What documents do I need for a visa application?", answer: "Document requirements vary, but typically include: Valid passport, photographs, bank statements, employment/business proof, ITR, travel itinerary, and purpose-of-visit evidence. We provide a detailed checklist tailored to your case." },
              { question: "How long does the visa process take?", answer: "Processing times vary: Tourist Visas (1–3 weeks), Student & Work Visas (5–13 weeks), Business Visas (1–3 weeks), Refusal Re-applications (2–4 weeks). These are estimates — we provide a specific timeline for your case during consultation." },
              { question: "Do you fill out the application form for me?", answer: "Yes. We handle the complete application form filling, review it for accuracy, and ensure every field is completed correctly. You review and approve before submission." },
              { question: "Do I need to visit your office?", answer: "No — most of our work is done remotely via WhatsApp, email, and phone. However, if you prefer a face-to-face consultation, you are welcome to visit our office by appointment." }
            ]} />
          </div>
        </div>
      </section>

      {/* Pricing & Fees */}
      <section className="py-12 md:py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] mb-6 text-on-surface">
              Pricing & Fees
            </h2>
            <p className="font-body-md text-[18px] text-on-surface-variant leading-relaxed">
              Transparent details about our service charges.
            </p>
          </div>
          <div className="w-full lg:w-2/3">
            <FAQAccordion faqs={[
              { question: "How much do your services cost?", answer: "Our fees depend on the destination country, visa type, and case complexity. We provide a clear, upfront quote during your initial consultation with a complete breakdown of costs. There are no hidden fees." },
              { question: "Does your fee include the embassy/visa application fee?", answer: "No. Our service fee covers consultation, document preparation, application filing, and tracking. Embassy fees are paid separately by you directly to the embassy or VFS centre." },
              { question: "Do you offer refunds if my visa is rejected?", answer: "Our service fee covers the work we do on your behalf. Since visa decisions are made by embassies and are outside our control, service fees are generally non-refundable. However, we discuss refund terms during our initial consultation." },
              { question: "Are there any additional costs I should be aware of?", answer: "Beyond our service fee and the embassy fee, potential costs may include: VFS service centre charges, biometric appointment fees, document attestation fees, translation fees, travel insurance premiums, and courier charges." }
            ]} />
          </div>
        </div>
      </section>

      {/* Visa Refusal */}
      <section className="py-12 md:py-20 px-margin-mobile md:px-margin-desktop bg-charcoal-surface/50 border-t border-b border-outline-variant/10">
        <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] mb-6 text-on-surface">
              Visa Refusals
            </h2>
            <p className="font-body-md text-[18px] text-on-surface-variant leading-relaxed">
              Questions about overturning denied applications.
            </p>
          </div>
          <div className="w-full lg:w-2/3">
            <FAQAccordion faqs={[
              { question: "Can you help if my visa was previously refused?", answer: "Absolutely. Visa refusal recovery is one of our core specialisations. We analyse your refusal letter, audit your previous application, identify weaknesses, and build a significantly stronger resubmission." },
              { question: "How soon can I reapply after a refusal?", answer: "In most cases, you can reapply immediately. However, we strongly recommend taking adequate time to properly strengthen your application. Our typical preparation time for refusal cases is 5–10 working days." },
              { question: "Will a previous refusal affect my new application?", answer: "Yes — visa officers can see your refusal history. This is precisely why the re-application must be substantially stronger than the original. Our strategy specifically addresses previous refusal reasons." },
              { question: "Can you help with multiple refusals?", answer: "Yes. We have successfully overturned cases with two and three prior refusals. Multiple refusals require a more strategic approach and stronger documentation, but they are not insurmountable." }
            ]} />
          </div>
        </div>
      </section>

      {/* Document Services */}
      <section className="py-12 md:py-20 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3 lg:sticky lg:top-32">
            <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] mb-6 text-on-surface">
              Document Services
            </h2>
            <p className="font-body-md text-[18px] text-on-surface-variant leading-relaxed">
              Attestations, translations, and more.
            </p>
          </div>
          <div className="w-full lg:w-2/3">
            <FAQAccordion faqs={[
              { question: "What attestation services do you offer?", answer: "We handle HRD Attestation, MEA Attestation, Embassy Attestation, WES Attestation, and ICAS Attestation." },
              { question: "Do you provide document translation?", answer: "Yes. We offer certified document translation for personal, educational, and professional documents. Our translations are accepted by embassies worldwide." },
              { question: "How long does attestation take?", answer: "Attestation timelines vary: HRD (3–7 days), MEA (3–5 days), Embassy (5–15 days), WES/ICAS (15–35 days). We provide specific estimates for your documents during consultation." }
            ]} />
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="max-w-3xl">
          <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] mb-6 text-on-surface">
            Still Have Questions?
          </h2>
          <p className="font-body-md text-[18px] text-on-surface-variant max-w-2xl leading-relaxed">
            If your question isn't answered here, we'd love to hear from you. Contact us for a free, no-obligation consultation and we'll provide personalised answers based on your specific situation.
          </p>
        </div>
        <div className="flex flex-col items-start md:items-end gap-6 flex-shrink-0">
          <Link
            href="https://wa.me/918891744344" target="_blank" rel="noopener noreferrer"
            className="bg-burnished-gold text-obsidian-deep font-label-md uppercase tracking-widest px-8 py-4 rounded-DEFAULT hover:bg-champagne-highlight transition-colors duration-300 shadow-xl"
          >
            Contact Us Today →
          </Link>
          <div className="flex gap-4 items-center">
             <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px] text-burnished-gold">call</span>
             </div>
             <div>
                <div className="font-label-md text-[10px] uppercase tracking-widest text-white/50 mb-1">Direct Line</div>
                <div className="font-headline-md text-white">+91 88917 44344</div>
             </div>
          </div>
        </div>
      </section>

    </main>
  );
}
