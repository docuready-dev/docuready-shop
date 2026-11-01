import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Clock, MessageSquare, Award, RefreshCcw } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Rapid Turnaround',
    desc: 'Most graphic and standard web deliverables ready in 3–6 business days. Rush options available.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality Assured Delivery',
    desc: 'Every file and line of code passes our internal QA checklist before reaching your hands.',
  },
  {
    icon: Clock,
    title: 'Strict Deadlines',
    desc: '98.4% of orders delivered strictly on or before the committed delivery calendar.',
  },
  {
    icon: MessageSquare,
    title: 'Direct WhatsApp Support',
    desc: 'No tickets, no endless delays. Chat directly with the developers & designers handling your order.',
  },
  {
    icon: Award,
    title: 'Production Ready Assets',
    desc: 'Clean source files, vector SVGs, production web code, and installable APK / PWA builds.',
  },
  {
    icon: RefreshCcw,
    title: 'Revision Support Included',
    desc: 'Every package comes with revision rounds included to ensure you get exactly what you envisioned.',
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#121118] text-white py-28 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-8 sm:px-14 md:px-20 lg:px-28 xl:px-36 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-bold text-xs uppercase tracking-widest mb-3">Why DocuReady Shop</p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Built for professionals, <span className="gradient-text">priced for everyone</span>
          </h2>
          <p className="text-white/60 max-w-lg mx-auto text-sm sm:text-base">
            No agency markups. No vague scopes. You get direct execution with full ownership.
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
              className="glass-card-dark rounded-3xl p-8 card-hover"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg text-white mb-2">{f.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
