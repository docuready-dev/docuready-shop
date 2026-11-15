import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, HeartHandshake, BookOpen, ArrowRight, Mail, MessageCircle, ShieldCheck } from 'lucide-react';
import AmbientBackground from '@/components/home/AmbientBackground';

export default function ImpactPage() {
  useEffect(() => {
    document.title = 'Social Impact & Pledge | docuready-dev';
    window.scrollTo(0, 0);
  }, []);

  const commitments = [
    {
      num: '01',
      tag: 'ACCESSIBILITY',
      title: 'Accessible Web & App Engineering',
      icon: Globe,
      text: 'Every website and application we build prioritizes clean semantic structure, responsive performance, and WCAG accessibility standards so digital tools remain usable for people of all abilities.',
      points: [
        'Semantic HTML elements paired with purposeful ARIA labeling',
        'Strict optical contrast ratios for low-vision readability',
        'Complete keyboard navigability and predictable focus indicators',
        'Lightweight asset delivery for low-bandwidth network environments',
      ],
    },
    {
      num: '02',
      tag: 'COMMUNITY',
      title: 'Community & Nonprofit Support',
      icon: HeartHandshake,
      text: 'We allocate dedicated studio hours each quarter to provide pro-bono and reduced-rate brand identity, web design, and technical setup for local nonprofits, educators, and early-stage community organizations.',
      points: [
        'Direct identity marks, typography systems, and vector artwork',
        'Accessible public information portals and intake forms',
        'Domain, DNS, and hosting setup assistance without recurring agency markups',
        'Unconditional IP handover with full client copyright protection',
      ],
    },
    {
      num: '03',
      tag: 'EDUCATION',
      title: 'Open-Source & Developer Education',
      icon: BookOpen,
      text: 'We actively contribute to open-source tools and share practical documentation and learning resources to help aspiring developers and designers build real-world technical skills.',
      points: [
        'Public reference architectures and reproducible codebases on GitHub',
        'Practical documentation explaining performance and typography fundamentals',
        'Technical guidance on modern TypeScript structure and Android runtimes',
        'Transparent architectural specifications for community learning',
      ],
    },
  ];

  return (
    <div className="relative min-h-screen pt-28 pb-28 bg-[#FAFAFA] text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Subtle Hairline Architectural Grid Background */}
      <AmbientBackground />

      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-32 max-w-6xl relative z-10">
        {/* ========================================================= */}
        {/* HERO / HEADER SECTION                                     */}
        {/* ========================================================= */}
        <section className="pt-8 pb-20 border-b border-neutral-200">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
                DocuReady Dev / Social Impact
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
              <span className="text-xs font-mono text-neutral-400">
                Studio Monograph
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-delight-black tracking-tight text-neutral-950 mb-6 leading-[1.02]">
              Our Studio Pledge
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-delight-light text-neutral-800 max-w-4xl leading-snug tracking-tight mb-8">
              Building accessible digital products and supporting community initiatives through practical design and engineering.
            </p>

            <p className="text-sm sm:text-base font-delight-regular text-neutral-600 max-w-3xl leading-relaxed">
              DocuReady Dev operates as an independent engineering atelier focused on custom web development, mobile app engineering, and brand identity design. We believe that dependable software architecture and rigorous typography should not be reserved only for well-funded enterprises. Technology delivers its highest social value when it remains inclusive, accessible, and directly available to community initiatives.
            </p>

            {/* Editorial Metadata Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 mt-10 border-t border-neutral-200 font-mono text-xs">
              <div>
                <span className="text-neutral-400 uppercase tracking-wider block text-[10px] mb-1">Scope</span>
                <span className="text-neutral-900 font-semibold">Web · Mobile · Identity</span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-wider block text-[10px] mb-1">Focus</span>
                <span className="text-neutral-900 font-semibold">Accessibility & Education</span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-wider block text-[10px] mb-1">Allocation</span>
                <span className="text-neutral-900 font-semibold">Quarterly Pro-Bono Hours</span>
              </div>
              <div>
                <span className="text-neutral-400 uppercase tracking-wider block text-[10px] mb-1">Direct Review</span>
                <span className="text-neutral-900 font-semibold">Ashley Ghose (Lead)</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ========================================================= */}
        {/* CORE COMMITMENTS: 3-Column Architectural Card Grid        */}
        {/* ========================================================= */}
        <section className="py-24 border-b border-neutral-200">
          <div className="mb-16">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
              Three Studio Pillars
            </p>
            <h2 className="text-3xl sm:text-5xl font-delight-extrabold text-neutral-950 tracking-tight">
              Core Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {commitments.map((c) => {
              const IconComp = c.icon;
              return (
                <div
                  key={c.num}
                  className="bg-white border border-neutral-200 rounded-2xl p-8 flex flex-col justify-between shadow-xs hover:border-neutral-400 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs text-neutral-400">
                        {c.num} / {c.tag}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-800">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-xl font-delight-bold text-neutral-950 mb-4 tracking-tight leading-snug">
                      {c.title}
                    </h3>

                    <p className="text-sm font-delight-regular text-neutral-700 leading-relaxed mb-6">
                      {c.text}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-neutral-100">
                    <p className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 mb-3">
                      Operational Practice
                    </p>
                    <ul className="space-y-2">
                      {c.points.map((pt, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-delight-regular text-neutral-600 leading-normal">
                          <span className="text-neutral-400 font-mono mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* OPERATIONAL STANDARDS: Grounded Working Methodology      */}
        {/* ========================================================= */}
        <section className="py-20 border-b border-neutral-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-2">
                Implementation Discipline
              </p>
              <h2 className="text-2xl sm:text-4xl font-delight-extrabold text-neutral-950 tracking-tight leading-tight mb-4">
                Practical Execution Without Agency Overhead
              </h2>
              <p className="text-sm sm:text-base font-delight-light text-neutral-600 leading-relaxed">
                We believe social initiatives deserve the exact same engineering quality, clean Git histories, and architectural rigor as commercial enterprise systems.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white border border-neutral-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-4 h-4 text-neutral-900" />
                  <h4 className="font-delight-bold text-sm text-neutral-950">100% Unrestricted Ownership</h4>
                </div>
                <p className="text-xs font-delight-regular text-neutral-600 leading-relaxed">
                  Nonprofits and civic teams own all delivered vector files, source code, and deployment accounts outright with zero ongoing licensing fees.
                </p>
              </div>

              <div className="p-6 bg-white border border-neutral-200 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Globe className="w-4 h-4 text-neutral-900" />
                  <h4 className="font-delight-bold text-sm text-neutral-950">Zero Middlemen Collaboration</h4>
                </div>
                <p className="text-xs font-delight-regular text-neutral-600 leading-relaxed">
                  Community partners collaborate directly with the lead engineer who authors the code and designs the assets, ensuring complete transparency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* PUBLIC VERIFICATION NOTE & CONTACT CALLOUT                */}
        {/* ========================================================= */}
        <section className="pt-20">
          <div className="bg-white border border-neutral-300 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-xs">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 rounded-full font-mono text-[11px] text-neutral-700 uppercase tracking-wider mb-6">
                <span>Public Verification Record</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-delight-extrabold text-neutral-950 tracking-tight mb-4 leading-tight">
                Official Studio Commitment Record
              </h2>

              <p className="text-base sm:text-lg font-delight-light text-neutral-700 leading-relaxed mb-6">
                This page serves as the official public commitment record for docuready-dev. We review our pro-bono allocations, open-source work, and accessibility benchmarks quarterly to ensure our commitments remain active and measurable.
              </p>

              <p className="text-sm font-delight-regular text-neutral-600 leading-relaxed mb-10">
                If you represent a nonprofit organization, educational initiative, or grassroots community group in need of web engineering, mobile application development, or brand identity design, please contact our studio directly to discuss support.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="mailto:ashleyghose64@gmail.com?subject=DocuReady%20Dev%20Community%20Support%20Inquiry"
                  className="inline-flex items-center gap-2.5 bg-neutral-950 text-white hover:bg-neutral-800 px-7 h-12 rounded-xl font-delight-semibold text-xs sm:text-sm transition-all shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Studio (ashleyghose64@gmail.com)</span>
                </a>

                <a
                  href="https://wa.me/919004804043?text=Hi%20Ashley%2C%20I%20am%20reaching%20out%20regarding%20the%20DocuReady%20Dev%20Studio%20Pledge%20and%20community%20support%20initiative."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#1B7A43] hover:bg-[#145E33] text-white px-7 h-12 rounded-xl font-delight-semibold text-xs sm:text-sm transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Ashley (+91 90048 04043)</span>
                </a>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-delight-semibold text-neutral-800 hover:text-black transition-colors underline underline-offset-4 ml-1"
                >
                  <span>Explore Practice Domains</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
