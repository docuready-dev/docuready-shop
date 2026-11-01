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
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-3">Refund & Cancellation Policy</h1>
            <p className="text-muted-foreground text-sm">Last updated: November 2026</p>
          </div>

          <div className="glass-card rounded-3xl p-8 sm:p-12 border border-white/80 shadow-xl space-y-8 text-sm leading-relaxed text-foreground/90">
            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> 1. Digital Services Overview
              </h2>
              <p>
                At <strong>DocuReady Shop</strong>, we deliver customized digital assets, bespoke graphic designs, custom web platforms, and mobile application engineering. Because our deliverables involve dedicated designer and developer hours tailored specifically to your brief, our refund policy reflects the progressive stages of production.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> 2. Order Cancellation Prior to Work Commencing
              </h2>
              <p>
                If you request cancellation within <strong>24 hours</strong> of placing an order and before our creative or technical team has initiated initial concept explorations, a <strong>100% full refund</strong> will be issued to your original payment method (minus any standard bank processing charges).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> 3. During Active Production & Revisions
              </h2>
              <p className="mb-2">
                Once initial mockups, design drafts, or codebase architecture have been delivered for your review:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-foreground">
                <li><strong>Revision Commitment:</strong> We are committed to achieving your satisfaction through the revision rounds included in your tier. If the initial draft does not align with your vision, we will rework the creative direction based on your constructive feedback.</li>
                <li><strong>Partial Refund:</strong> If a mutual resolution cannot be reached after the first round of concepts, a partial refund of up to 50% may be issued, compensating for the labor and hours committed to date.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> 4. Non-Refundable Milestones
              </h2>
              <p>
                Refunds cannot be issued once the final high-resolution vector assets, final web deploy source code, or signed Android production APK/AAB packages have been approved and delivered to the client.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500" /> 5. How to Initiate a Request
              </h2>
              <p>
                To request a cancellation or refund discussion, message our operations lead directly on WhatsApp at <a href="https://wa.me/919004804043" className="text-primary font-bold hover:underline">+91 90048 04043</a> or write to <a href="mailto:support@docuready.shop" className="text-primary font-bold hover:underline">support@docuready.shop</a> quoting your <strong>Order Reference ID</strong> (e.g. #DR-1041). Valid refunds are processed within 5–7 business days to your original payment method.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
