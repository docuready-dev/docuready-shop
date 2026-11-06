import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Clock, MessageSquare, Award, RefreshCcw } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Rapid Turnaround',
    desc: 'Most graphic and standard web deliverables ready in 3–6 business days. Rush delivery schedules available on request.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assured Delivery',
    desc: 'Every file, layout token, and line of code passes our internal QA checklist before reaching your hands.',
  },
  {
    icon: Clock,
    title: 'Strict Delivery Timelines',
    desc: 'Over 98% of orders delivered strictly on or before the committed delivery calendar with proactive status updates.',
  },
  {
    icon: MessageSquare,
    title: 'Direct Architect Support',
    desc: 'No support queues, no generic bot tickets. Chat directly on WhatsApp with the developer handling your build.',
  },
  {
    icon: Award,
    title: 'Production-Ready Source Assets',
    desc: 'Clean source files, vector SVGs, production web codebases, and installable APK / PWA builds with full IP ownership.',
  },
  {
    icon: RefreshCcw,
    title: 'Revision Support Included',
    desc: 'Every package tier includes dedicated revision rounds to ensure the final deliverable matches your vision.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-neutral-950 text-white py-28 relative overflow-hidden border-t border-neutral-800">
      {/* Subtle Hairline Architectural Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-delight-black tracking-tight text-white mb-4">
            Built for professionals, <span className="text-neutral-400 font-delight-light">priced for growth</span>
          </h2>
          <p className="text-neutral-400 max-w-lg mx-auto text-sm sm:text-base font-delight-regular">
            Zero agency markups. No ambiguous scopes. You get direct execution with full code ownership.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 shadow-sm rounded-3xl p-8 transition-all hover:bg-neutral-900"
            >
              <div className="w-12 h-12 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center mb-6 text-white shadow-sm">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-delight-bold text-lg text-white mb-2">{f.title}</h3>
              <p className="text-neutral-400 text-sm font-delight-regular leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
