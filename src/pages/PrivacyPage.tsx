import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 text-emerald-600">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">Privacy Policy</h1>
            <p className="text-muted-foreground text-sm">Last updated: November 2026</p>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl space-y-8 text-sm leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> 1. Information We Collect
              </h2>
              <p className="mb-2">
                We collect personal information directly provided by you during the ordering and inquiry process:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li><strong>Contact Identifiers:</strong> Name, business name, email address, and WhatsApp phone number.</li>
                <li><strong>Project Requirements:</strong> Brand briefs, visual preferences, functional app specifications, and uploaded assets.</li>
                <li><strong>Transactional Data:</strong> Order reference IDs, package selections, and payment confirmation statuses. We do not store raw credit card or netbanking passwords on our servers.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> 2. How We Use Your Data
              </h2>
              <p>We use your information exclusively to:</p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground mt-2">
                <li>Communicate directly regarding project progress and deliverable review via WhatsApp and email.</li>
                <li>Generate and fulfill design, web development, and mobile app codebases.</li>
                <li>Enable you to track your order status securely on our website.</li>
                <li>Send official invoices and digital certificates of transfer.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> 3. Data Confidentiality & Non-Disclosure
              </h2>
              <p>
                We hold all proprietary business materials, client lists, internal app logic, and unpublished startup ideas strictly confidential. We do not sell, rent, or trade your contact information or intellectual data to any third-party marketing brokers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> 4. Communication & WhatsApp Messaging
              </h2>
              <p>
                By initiating an order on DocuReady Shop, you consent to receive direct transactional messages on WhatsApp regarding your deliverables. You may opt out of promotional announcements at any time by messaging "STOP" or notifying your account manager.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 font-delight">
                <span className="w-2 h-2 rounded-full bg-emerald-600" /> 5. Data Protection, IT Act Compliance & Privacy Rights
              </h2>
              <p>
                In compliance with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, you maintain full control over your personal information. You may request a verified copy of all project records linked to your account, or request complete deletion of your files from our active servers by reaching our Data Protection & Grievance Officer at <a href="mailto:ashleyghose64@gmail.com" className="text-primary font-semibold hover:underline">ashleyghose64@gmail.com</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
