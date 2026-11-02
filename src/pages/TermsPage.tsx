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
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 font-delight">Terms & Conditions</h1>
            <p className="text-muted-foreground text-sm">Compliant with the Information Technology Act, 2000 & Consumer Protection Act, 2019 (India) · Last updated: November 2026</p>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl space-y-8 text-sm leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 font-delight">
                <span className="w-2 h-2 rounded-full bg-primary" /> 1. Agreement to Terms & Governing Jurisdiction
              </h2>
              <p>
                By accessing, browsing, or placing an order through <strong>DocuReady Shop</strong> ("we", "us", or "our"), accessible via our web application and official communication channels, you agree to be legally bound by these Terms and Conditions. These terms are governed by and construed in accordance with the substantive laws of the Republic of India, including the Indian Contract Act, 1872, the Information Technology Act, 2000, and the Consumer Protection Act, 2019. Any dispute, claim, or controversy arising out of or relating to these terms shall be subject to the exclusive jurisdiction of the competent courts in India.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 font-delight">
                <span className="w-2 h-2 rounded-full bg-primary" /> 2. Services Scope & Delivery
              </h2>
              <p className="mb-2">
                DocuReady Shop provides bespoke digital engineering, creative branding, and software development services across three core practice domains: Web Infrastructure & Engineering, Brand Identity & Industrial Systems, and Software & Application Builds.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li><strong>Delivery Timelines:</strong> Estimated turnarounds (ranging from 4 to 15 business days based on package tier) commence upon receipt of full creative brief specifications and required initial inputs.</li>
                <li><strong>Format of Delivery:</strong> Visual assets are delivered electronically in standard vector and raster formats (PNG, SVG, AI, PSD, PDF). Web platforms are handed over via deployment links or source repositories. Android applications are delivered as signed, ready-to-install APK files or Google Play Console-compliant AAB packages.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 font-delight">
                <span className="w-2 h-2 rounded-full bg-primary" /> 3. Indian Currency (INR / ₹), Invoicing & Payments
              </h2>
              <p className="mb-2">
                All prices quoted on DocuReady Shop are strictly denominated in <strong>Indian Rupees (INR / ₹)</strong> in compliance with Reserve Bank of India (RBI) guidelines and statutory Indian taxation norms.
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li><strong>Payment Methods:</strong> Payments are processed securely via verified Indian channels, including UPI (Google Pay, PhonePe, Paytm, BHIM), Net Banking across scheduled commercial banks, and authorized Debit/Credit Cards (RuPay, Visa, MasterCard).</li>
                <li><strong>Taxation:</strong> Deliverables and tax invoices are issued in accordance with applicable Goods and Services Tax (GST) provisions in India where mandatory.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 font-delight">
                <span className="w-2 h-2 rounded-full bg-primary" /> 4. Intellectual Property & Commercial Rights
              </h2>
              <p>
                Under Section 17 of the Indian Copyright Act, 1957, upon complete settlement of agreed package fees, all commercial copyright, trademark rights, and intellectual property in the approved final logos, graphics, and custom codebases transfer exclusively to the client. DocuReady Shop retains the limited non-exclusive right to showcase completed works in our professional design and engineering portfolio unless a non-disclosure agreement (NDA) has been formally executed prior to project commencement.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 font-delight">
                <span className="w-2 h-2 rounded-full bg-primary" /> 5. Revisions & Scope Boundaries
              </h2>
              <p>
                Each package includes defined revision rounds to align the output with your business expectations. Revisions include changes to color palettes, font pairings, visual asset positioning, copy refinement, and UI tweaks. Substantial departures from the original brief, additions of new functionality, or changes requested after final milestone approval constitute separate add-on scopes and will be quoted in INR accordingly.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 font-delight">
                <span className="w-2 h-2 rounded-full bg-primary" /> 6. Third-Party Costs & Platform Approvals
              </h2>
              <p>
                External infrastructure charges (such as Google Play Console developer registration of approximately ₹2,000, custom domain registrations, or external cloud hosting servers) are the direct responsibility of the client unless explicitly bundled. While our engineering team guarantees strict adherence to Google Play Store and modern web standards, final approval and indexing remains under the sole discretion of the respective third-party platform providers.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 font-delight">
                <span className="w-2 h-2 rounded-full bg-primary" /> 7. Grievance Redressal Officer (Rule 4, Consumer Protection E-Commerce Rules, 2020)
              </h2>
              <p className="mb-2">
                In accordance with the Information Technology Act, 2000 and the Consumer Protection (E-Commerce) Rules, 2020, the designated Grievance Redressal Officer for DocuReady Shop is:
              </p>
              <div className="bg-primary/5 rounded-2xl p-4 border border-primary/20 space-y-1">
                <p><strong>Grievance Officer:</strong> Ashley Ghose</p>
                <p><strong>Direct Email:</strong> <a href="mailto:ashleyghose64@gmail.com" className="text-primary font-semibold hover:underline">ashleyghose64@gmail.com</a></p>
                <p><strong>WhatsApp Support:</strong> <a href="https://wa.me/919004804043" className="text-primary font-semibold hover:underline">+91 90048 04043</a></p>
                <p><strong>Redressal Timeline:</strong> Grievance acknowledgments are provided within 48 hours, with fair resolution within 30 days of ticket receipt.</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
