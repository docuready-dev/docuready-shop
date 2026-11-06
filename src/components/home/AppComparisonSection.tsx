import { motion } from 'framer-motion';
import { Smartphone, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function AppComparisonSection() {
  return (
    <section className="py-24 bg-[#FAFAFA] border-t border-b border-neutral-200">
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-delight-extrabold tracking-tight mb-4 text-neutral-950">
            Software & <span className="font-delight-light text-neutral-500">Application Architecture</span>
          </h2>
          <p className="font-delight-regular text-neutral-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            From lightweight field driver utilities (<span className="font-mono font-bold text-neutral-900">₹3,999</span>) to high-concurrency cloud databases and Play Store runtimes (<span className="font-mono font-bold text-neutral-900">₹9,999</span>). Select the runtime profile built for your operational scale.
          </p>
        </motion.div>

        {/* 2-Column Distinguishing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Android Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/85 backdrop-blur-md rounded-xl p-8 sm:p-10 border border-neutral-300 shadow-sm card-hover relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-950">
                <Smartphone className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center justify-center text-center leading-none font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800">
                APK & AAB RUNTIMES
              </span>
            </div>

            <h3 className="text-2xl font-delight-bold text-neutral-950 mb-1">
              Native Android Runtimes
            </h3>
            <p className="font-mono text-xs text-neutral-500 mb-4">
              Tier 1 Utility: ₹3,999 · Tier 2 Runtime: ₹9,999
            </p>

            <p className="text-sm text-neutral-700 leading-relaxed mb-6 font-delight-regular">
              Delivered as installable <strong className="font-delight-semibold text-neutral-950">signed Android APKs</strong> for direct sideloading or <strong className="font-delight-semibold text-neutral-950">Google Play Store AAB bundles</strong>. Engineered for offline field durability and device hardware integration.
            </p>

            <div className="space-y-3 mb-8 text-xs sm:text-sm text-neutral-700 font-delight-regular">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Environment:</strong> Android OS phones, rugged handhelds & tablet kiosks.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Distribution:</strong> Sideloadable APK or Google Play Store console compliance.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Integration:</strong> Push notification channels, camera barcode scan, offline local storage.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Ideal Scope:</strong> Fleet driver utilities, shop-floor logging, and client tracking portals.</span>
              </div>
            </div>

            <Link to="/services?category=Software%20%26%20Application%20Builds">
              <Button variant="outline" className="w-full rounded-lg gap-2 font-delight-semibold text-xs border-neutral-300 text-neutral-900 hover:bg-neutral-50 h-11 shadow-xs">
                <span>View Android Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </motion.div>

          {/* Web App Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/85 backdrop-blur-md rounded-xl p-8 sm:p-10 border border-neutral-300 shadow-sm card-hover relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center text-neutral-950">
                <Globe className="w-6 h-6" />
              </div>
              <span className="inline-flex items-center justify-center text-center leading-none font-mono text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-800">
                PWA & FULL-STACK SPA
              </span>
            </div>

            <h3 className="text-2xl font-delight-bold text-neutral-950 mb-1">
              Universal Web Applications
            </h3>
            <p className="font-mono text-xs text-neutral-500 mb-4">
              Tier 3 PWA: ₹3,999 · Tier 4 Full-Stack: ₹9,999
            </p>

            <p className="text-sm text-neutral-700 leading-relaxed mb-6 font-delight-regular">
              High-velocity web applications accessible instantaneously on any browser across <strong className="font-delight-semibold text-neutral-950">iOS, Android, macOS & Windows</strong>. Zero app-store friction with optional Add-to-Home-Screen offline capability.
            </p>

            <div className="space-y-3 mb-8 text-xs sm:text-sm text-neutral-700 font-delight-regular">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Cross-Platform:</strong> Runs seamlessly across Chrome, Safari, Edge, iOS, and Desktop.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Deployment:</strong> Instant web-link execution with zero gatekeeping or app store review lag.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Data Layer:</strong> Real-time cloud database (CRUD), CSV export, and Razorpay/UPI hooks.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Ideal Scope:</strong> Client quotation tools, shipment ledgers, and operational dashboards.</span>
              </div>
            </div>

            <Link to="/services?category=Software%20%26%20Application%20Builds">
              <Button className="w-full rounded-lg gap-2 font-delight-semibold text-xs bg-neutral-950 hover:bg-neutral-800 text-white h-11 shadow-sm">
                <span>View Web App Specifications</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Technical Specification Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-md rounded-xl p-8 sm:p-10 border border-neutral-300 shadow-sm overflow-x-auto"
        >
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-delight-bold text-neutral-950">
                Software Capability Matrix
              </h3>
              <p className="text-xs text-neutral-500 font-delight-regular mt-0.5">
                Comparing Utility & PWA Tiers (₹3,999) vs. Runtime & Full-Stack Tiers (₹9,999)
              </p>
            </div>
            <span className="inline-flex items-center justify-center text-center leading-none text-[11px] font-delight-semibold tracking-wider uppercase text-neutral-600 bg-neutral-100 px-3.5 py-1.5 rounded-full border border-neutral-200">
              ISO/IEC 25010 Standards
            </span>
          </div>

          <table className="w-full text-left text-xs sm:text-sm min-w-[580px] border-collapse mt-4">
            <thead>
              <tr className="border-b border-neutral-200 text-neutral-500 font-mono text-[11px] uppercase tracking-wider">
                <th className="py-3 px-4">Capability Metric</th>
                <th className="py-3 px-4">Utility Tiers (₹3,999)</th>
                <th className="py-3 px-4 bg-neutral-50/80 font-bold text-neutral-900">Runtime & Full-Stack (₹9,999)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 text-neutral-700 font-delight-regular">
              <tr>
                <td className="py-3 px-4 font-delight-semibold text-neutral-900">Interface Views / Screens</td>
                <td className="py-3 px-4 font-mono">Up to 4 Core Views</td>
                <td className="py-3 px-4 font-mono bg-neutral-50/80 font-bold text-neutral-950">8 to 12 Dynamic Views</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-delight-semibold text-neutral-900">Authentication & Profiles</td>
                <td className="py-3 px-4">Static / Device-level token</td>
                <td className="py-3 px-4 bg-neutral-50/80 font-bold text-neutral-950">Role-Gated (Admin vs. Client/Driver)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-delight-semibold text-neutral-900">Cloud Database Sync</td>
                <td className="py-3 px-4">Offline assets / Local Cache</td>
                <td className="py-3 px-4 bg-neutral-50/80 font-bold text-neutral-950">Live Cloud CRUD (MongoDB / Firebase)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-delight-semibold text-neutral-900">Payment Gateway Hooks</td>
                <td className="py-3 px-4">WhatsApp / UPI Deep-link</td>
                <td className="py-3 px-4 bg-neutral-50/80 font-bold text-neutral-950">Integrated Razorpay / UPI Checkouts</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-delight-semibold text-neutral-900">Play Store / Production Setup</td>
                <td className="py-3 px-4">Signed APK / Manifest PWA</td>
                <td className="py-3 px-4 bg-neutral-50/80 font-bold text-neutral-950">Google Play AAB + Full Deployment Spec</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-delight-semibold text-neutral-900">Committed Delivery Window</td>
                <td className="py-3 px-4 font-mono">5 to 7 Business Days</td>
                <td className="py-3 px-4 font-mono bg-neutral-50/80 font-bold text-neutral-950">12 to 15 Business Days</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
