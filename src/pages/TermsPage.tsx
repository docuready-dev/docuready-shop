import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
              <FileText className="w-7 h-7" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">Terms & Conditions</h1>
            <p className="text-muted-foreground text-sm">Last updated: November 2026</p>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl space-y-8 text-sm leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" /> 1. Agreement to Terms
              </h2>
              <p>
                By accessing or placing an order through <strong>DocuReady Shop</strong> ("we", "us", or "our"), accessible via docuready.shop or our affiliated communication desks, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not utilize our design, web, or mobile app services.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" /> 2. Services Scope & Delivery
              </h2>
              <p className="mb-2">
                DocuReady Shop offers creative and engineering deliverables including Graphic Design, Brand Identity Suites, Responsive Web Platforms, Android Mobile Apps (APKs and Play Store packages), and Universal Web Applications (PWAs).
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li><strong>Delivery Timelines:</strong> Estimated delivery timelines (e.g. 4–15 business days depending on package tier) commence upon receipt of complete client input and creative briefs.</li>
                <li><strong>Format of Delivery:</strong> Visual assets are delivered digitally in standard formats (PNG, SVG, AI, PSD). Web apps are deployed to provided domains or staging links. Android applications are delivered as signed APK / AAB bundles.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" /> 3. Intellectual Property & Ownership
              </h2>
              <p>
                Upon full settlement of project invoices, the client receives full commercial ownership and copyright rights over the final approved logos, designs, custom code, and application deliverables created specifically for their project. DocuReady Shop retains the right to display non-confidential deliverables in our professional portfolio unless an explicit non-disclosure agreement (NDA) is executed prior to kick-off.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" /> 4. Revision Policy & Scope Management
              </h2>
              <p>
                Each service tier specifies included revision rounds (Standard packages include 2–3 revision rounds; Premium packages include ongoing revisions within the original scope). Revisions cover color adjustments, typography refinement, content replacement, and layout tuning. Fundamental architectural pivots or changes to project specifications requested after milestone sign-off will be quoted as separate add-on scopes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" /> 5. Third-Party Services & Store Approvals
              </h2>
              <p>
                For Android App and Web App deployment, any third-party fees (such as Google Play Developer Account fees of $25, custom domain registration, or cloud hosting) are paid directly by the client unless specifically bundled. While our engineering team formats all builds to strictly meet Google Play Store guidelines, final approval and listing timelines remain subject to Google's independent review policies.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" /> 6. Contact Information
              </h2>
              <p>
                For legal inquiries or clarifications regarding your service contract, contact us at <a href="mailto:info@docuready.shop" className="text-primary font-semibold hover:underline">info@docuready.shop</a> or through our WhatsApp business line at <a href="https://wa.me/919004804043" className="text-primary font-semibold hover:underline">+91 90048 04043</a>.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
