import { motion } from 'framer-motion';
import { RefreshCcw } from 'lucide-react';

export default function RefundPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-center mb-12">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mx-auto mb-4 text-amber-600">
              <RefreshCcw className="w-7 h-7" />
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3 font-delight">Refund & Cancellation Policy</h1>
            <p className="text-muted-foreground text-sm">Governed under the Consumer Protection (E-Commerce) Rules, 2020 (India) · All Settlements in INR (₹) · Last updated: November 2026</p>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl space-y-8 text-sm leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 font-delight">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> 1. Nature of Custom Digital Services
              </h2>
              <p>
                <strong>DocuReady Shop</strong> provides bespoke creative, web engineering, and mobile app development services. Because every deliverable involves dedicated human effort, developer hours, and customized design tailored specifically to your project requirements, our cancellation and refund policies adhere strictly to Indian statutory consumer norms while reflecting the progressive milestones of digital production.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 font-delight">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> 2. Cancellation Prior to Work Initiation (100% Full Refund)
              </h2>
              <p>
                In alignment with fair trade practices under the Consumer Protection Act, 2019, if an order cancellation is submitted within <strong>24 hours</strong> of booking and prior to the initiation of design discovery, mockup drafting, or codebase architecture by our team:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground mt-2">
                <li>You are entitled to a <strong>100% full refund</strong> of the amount paid in Indian National Rupees (INR / ₹).</li>
                <li>Refunds are returned via the exact same payment route (original UPI handle, credit/debit card, or net banking account).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 font-delight">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> 3. Progressive Production & Revision Commitments
              </h2>
              <p className="mb-2">
                Once initial design mockups, visual wireframes, or prototype web/app builds have been presented for client evaluation:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li><strong>Revision Priority:</strong> We are committed to achieving complete creative satisfaction. If the initial draft requires changes, we will execute the revision rounds included with your package tier to refine the deliverable to your exact preferences.</li>
                <li><strong>Partial Refund (Up to 50% in INR):</strong> If, after the first round of concept explorations, you choose not to proceed further, a partial refund of up to 50% of the contract value may be issued to reimburse unspent project milestones, while fairly compensating for labor and creative hours already expended.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 font-delight">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> 4. Non-Refundable Deliverables
              </h2>
              <p>
                Refunds cannot be granted after:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground mt-2">
                <li>The client has formally reviewed, approved, and accepted the final vector master files (AI, EPS, SVG), complete web code source files, or signed production Android APK/AAB builds.</li>
                <li>Third-party non-reimbursable disbursements have been made on the client's behalf (e.g. domain registrations, server subscriptions, or Play Store submission filing fees).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 font-delight">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> 5. Indian Banking Settlement Timelines (RBI Compliance)
              </h2>
              <p className="mb-2">
                All approved refunds are initiated through authorized Indian banking channels (Razorpay / Cashfree / direct NEFT or UPI payout) in strict accordance with Reserve Bank of India turnaround norms:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li><strong>Processing Window:</strong> 5 to 7 business working days from formal approval of the refund request.</li>
                <li><strong>Currency of Settlement:</strong> All credits are remitted exclusively in <strong>INR (₹)</strong>. Bank reference numbers (UTR / ARN) are furnished to the client via WhatsApp and email for instantaneous verification.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2 font-delight">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> 6. Grievance Redressal & Refund Requests
              </h2>
              <p className="mb-2">
                To submit a cancellation notice or raise an inquiry regarding a refund, quote your <strong>Order Reference ID</strong> (e.g. #DR-1041) through our official channels:
              </p>
              <div className="bg-amber-500/10 rounded-2xl p-4 border border-amber-500/20 space-y-1">
                <p><strong>Grievance & Accounts Officer:</strong> Ashley Ghose</p>
                <p><strong>Direct Email:</strong> <a href="mailto:ashleyghose64@gmail.com" className="text-primary font-semibold hover:underline">ashleyghose64@gmail.com</a></p>
                <p><strong>WhatsApp Support Desk:</strong> <a href="https://wa.me/919004804043" className="text-primary font-semibold hover:underline">+91 90048 04043</a></p>
                <p><strong>Service Location:</strong> Mumbai, Maharashtra, India</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
