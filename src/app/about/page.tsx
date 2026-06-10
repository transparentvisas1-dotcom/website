import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Transparent Visas — 4+ Years of Trusted Visa Expertise",
  description: "Learn about Transparent Visas — 4+ years of immigration consulting, 93% success rate, 300+ cases handled. Your experienced visa expert making global dreams a reality.",
};

export default function AboutPage() {
  return (
    <main className="pb-24">
      {/* Header Banner */}
      <section className="relative w-full h-[400px] md:h-[500px] flex flex-col justify-center items-center text-center mb-16 md:mb-24 px-margin-mobile md:px-margin-desktop overflow-hidden border-b border-burnished-gold/10">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-image.jpg" alt="About Transparent Visas" fill sizes="100vw" priority className="object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian-deep via-obsidian-deep/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian-deep/80 via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl pt-16">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-champagne-highlight rounded-full px-4 py-1.5 text-xs font-label-md uppercase tracking-widest mb-6">
            <div className="w-2 h-2 rounded-full bg-burnished-gold"></div>
            Our Story
          </div>
          <h1 className="kaisei-decol-regular text-fluid-display leading-[1.1] text-white mb-6">
            About Transparent Visas
          </h1>
          <p className="font-body-md text-lg text-white/80 max-w-2xl mx-auto italic">
            "Go into all the Nations."
          </p>
        </div>
      </section>

      {/* Intro & Vision / Mission Section */}
      <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="kaisei-decol-regular text-fluid-h2 leading-[1.1] mb-8 text-on-surface">
            Making Your Global Dreams a Reality
          </h2>
          <div className="font-body-md text-lg text-on-surface-variant leading-relaxed space-y-6">
            <p>Transparent Visas was founded on a simple belief: navigating the visa process should never be opaque, intimidating, or unfair. Too many applicants face rejection not because they are ineligible — but because they lacked the right guidance, the right documentation, or the right strategy.</p>
            <p className="text-white font-semibold">We exist to change that.</p>
            <p>For over 4+ years, we have helped individuals, families, students, business professionals, and religious leaders obtain visas to countries across the globe — including the UK, USA, Canada, Australia, Schengen zone, and GCC countries. Every client receives the same level of dedication, transparency, and personalised attention.</p>
            <p>Our name is our promise. <strong className="text-burnished-gold">Transparent</strong> — in our process, our communication, our pricing, and our results.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
           <div className="bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 lg:p-12 text-center glow-hover group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-burnished-gold/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <span className="material-symbols-outlined text-burnished-gold text-[48px] mb-6 block relative z-10">visibility</span>
              <h3 className="kaisei-decol-regular text-2xl mb-4 text-white relative z-10">Our Vision</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed relative z-10">
                Be a part of making the world a village.
              </p>
           </div>
           <div className="bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 lg:p-12 text-center glow-hover group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-burnished-gold/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <span className="material-symbols-outlined text-burnished-gold text-[48px] mb-6 block relative z-10">rocket_launch</span>
              <h3 className="kaisei-decol-regular text-2xl mb-4 text-white relative z-10">Our Mission</h3>
              <p className="font-body-md text-on-surface-variant leading-relaxed relative z-10">
                Make the necessary arrangements, strategies, and uncompromising documentation efforts to fulfill our vision of a borderless, connected world for our clients.
              </p>
           </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-[120px] bg-charcoal-surface border-t border-b border-outline-variant/20 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-burnished-gold/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="font-label-md text-champagne-highlight uppercase tracking-widest mb-4">What Drives Us</div>
            <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] text-white">Our Core Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-obsidian-deep/50 border border-white/5 rounded-xl p-8">
              <h4 className="kaisei-decol-regular text-xl text-burnished-gold mb-4">Transparency Above All</h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">We believe you deserve to know exactly what's happening with your application at every stage. No hidden fees. No vague timelines. No surprises. We explain the process, the risks, and the strategy in plain language.</p>
            </div>
            <div className="bg-obsidian-deep/50 border border-white/5 rounded-xl p-8">
              <h4 className="kaisei-decol-regular text-xl text-burnished-gold mb-4">Personal Attention</h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">Every case is unique — your nationality, travel history, financial profile, and purpose of travel all shape how we approach your file. We customise our strategy to fit your specific circumstances.</p>
            </div>
            <div className="bg-obsidian-deep/50 border border-white/5 rounded-xl p-8">
              <h4 className="kaisei-decol-regular text-xl text-burnished-gold mb-4">Documentation Excellence</h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">The single most common reason for visa rejection is weak or incomplete documentation. We have built our reputation on meticulous document preparation with the precision that embassies expect.</p>
            </div>
            <div className="bg-obsidian-deep/50 border border-white/5 rounded-xl p-8">
              <h4 className="kaisei-decol-regular text-xl text-burnished-gold mb-4">Relentless Communication</h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">We are always available — responsive to messages, clear in our explanations, and proactive in providing updates. You will never feel left in the dark waiting for a visa decision.</p>
            </div>
            <div className="bg-obsidian-deep/50 border border-white/5 rounded-xl p-8 lg:col-span-2">
              <h4 className="kaisei-decol-regular text-xl text-burnished-gold mb-4">Integrity in Every Case</h4>
              <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">We are honest about your chances. If we see a risk, we tell you. If a case requires more preparation, we advise delay rather than rush a weak application. Our 93% success rate is built on taking the right cases at the right time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Stats */}
      <section className="py-[120px] px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <div className="font-label-md text-champagne-highlight uppercase tracking-widest mb-4">Our Experience</div>
              <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] mb-8 text-on-surface">Why Clients Trust Us</h2>
              <p className="font-body-md text-[18px] text-on-surface-variant leading-relaxed mb-8">
                Our expertise spans every major visa category across 30+ countries. We handle Tourist & Visit Visas, Student Visas, Work & Business Visas, and complex Document Services.
              </p>
              <div className="bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8 mb-8">
                <h4 className="font-headline-md text-burnished-gold mb-3">Visa Refusal Recovery</h4>
                <p className="font-body-md text-sm text-on-surface-variant">This is where we truly stand apart. We have built a specialised practice around overturning visa refusals, particularly UK visit visa rejections. Our refusal analysis methodology is thorough, and our re-application success rate is exceptional.</p>
              </div>
              <div className="bg-charcoal-surface border border-outline-variant/30 rounded-xl p-8">
                <h4 className="font-headline-md text-burnished-gold mb-3">Religious & Faith-Based Travel</h4>
                <p className="font-body-md text-sm text-on-surface-variant">One of our proudest areas of expertise is helping pastors, church leaders, missionaries, and congregational members obtain visit visas for religious purposes with a strong track record of approvals.</p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[#fcfaf5] text-obsidian-deep rounded-2xl p-8 text-center shadow-xl">
                  <div className="text-5xl kaisei-decol-regular font-bold mb-2">4+</div>
                  <div className="font-label-md text-xs uppercase tracking-widest text-obsidian-deep/60">Years Experience</div>
                </div>
                <div className="bg-[#fcfaf5] text-obsidian-deep rounded-2xl p-8 text-center shadow-xl">
                  <div className="text-5xl kaisei-decol-regular font-bold mb-2">93%</div>
                  <div className="font-label-md text-xs uppercase tracking-widest text-obsidian-deep/60">Success Rate</div>
                </div>
                <div className="bg-[#fcfaf5] text-obsidian-deep rounded-2xl p-8 text-center shadow-xl">
                  <div className="text-5xl kaisei-decol-regular font-bold mb-2">300+</div>
                  <div className="font-label-md text-xs uppercase tracking-widest text-obsidian-deep/60">Cases Handled</div>
                </div>
                <div className="bg-[#fcfaf5] text-obsidian-deep rounded-2xl p-8 text-center shadow-xl">
                  <div className="text-5xl kaisei-decol-regular font-bold mb-2">30+</div>
                  <div className="font-label-md text-xs uppercase tracking-widest text-obsidian-deep/60">Countries Covered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-footer CTA */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="max-w-3xl">
          <h2 className="kaisei-decol-regular text-fluid-h1 leading-[1.1] mb-6 text-on-surface">
            Let's Make Your Global Dreams a Reality
          </h2>
          <p className="font-body-md text-[18px] text-on-surface-variant max-w-2xl leading-relaxed">
            Ready to take the first step? Reach out for a free, no-obligation consultation. We'll assess your situation, explain your options, and give you an honest evaluation of your chances.
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
