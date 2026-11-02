import { motion } from 'framer-motion';
import { Smartphone, Globe, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function AppComparisonSection() {
  return (
    <section className="py-24 bg-[#FAFAFA] border-t border-b border-neutral-200">
      <div className="container mx-auto px-8 sm:px-14 md:px-20 lg:px-28 xl:px-36 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded border border-neutral-300 bg-white text-neutral-800 text-xs font-delight-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-neutral-950" /> Direct Comparison
          </div>
          <h2 className="text-3xl sm:text-5xl font-delight-extrabold tracking-tight mb-4 text-neutral-950">
            Understanding the <span className="font-delight-light text-neutral-400">App Distinctions</span>
          </h2>
          <p className="font-delight-regular text-neutral-600 max-w-2xl mx-auto text-sm sm:text-base">
            Both <strong className="font-delight-bold text-neutral-950">Android Apps</strong> and <strong className="font-delight-bold text-neutral-950">Universal Web Apps</strong> share identical transparent pricing: <strong className="font-delight-bold text-neutral-950">₹3,599</strong> for Standard and <strong className="font-delight-bold text-neutral-950">₹8,999</strong> for Premium. Here is how to choose the right fit for your business:
          </p>
        </motion.div>

        {/* 2-Column Distinguishing Cards (Wide, Balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Android Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-xs card-hover relative overflow-hidden"
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-950">
                <Smartphone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-delight-bold text-neutral-950">Android Mobile App</h3>
                <p className="text-xs font-delight-medium uppercase tracking-wider text-neutral-500">Dedicated Smartphone Experience</p>
              </div>
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed mb-6 font-delight-regular">
              Delivered as an installable <strong className="font-delight-bold text-neutral-950">Android APK</strong> (Standard) or <strong className="font-delight-bold text-neutral-950">Google Play Store package</strong> (Premium). Provides an icon on your client’s home screen and utilizes device capabilities.
            </p>

            <div className="space-y-3 mb-8 text-sm text-neutral-700 font-delight-regular">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Platform:</strong> Specifically tailored for Android phones & tablets.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Installation:</strong> Direct APK sideloading or Google Play distribution.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Hardware Integration:</strong> Push notifications, camera, local storage, vibration.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Best For:</strong> High client retention, field service apps, internal company tools.</span>
              </div>
            </div>

            <Link to="/services?category=App Development">
              <Button variant="outline" className="w-full rounded-lg gap-2 font-delight-semibold border-neutral-300 text-neutral-900 hover:bg-neutral-50 h-12 text-sm shadow-xs">
                View Android Packages (from ₹3,599) <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Web App Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-xs card-hover relative overflow-hidden"
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-950">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-delight-bold text-neutral-950">Universal Web App (PWA)</h3>
                <p className="text-xs font-delight-medium uppercase tracking-wider text-neutral-500">Zero-Install Universal Reach</p>
              </div>
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed mb-6 font-delight-regular">
              A high-performance progressive web app accessed instantly via a standard link. Works uniformly across <strong className="font-delight-bold text-neutral-950">iPhones, Android, Windows & Mac</strong> without requiring app store approval.
            </p>

            <div className="space-y-3 mb-8 text-sm text-neutral-700 font-delight-regular">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Platform:</strong> Works on all browsers (Chrome, Safari, iOS & Android).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Frictionless Access:</strong> Instant link load + optional "Add to Home Screen".</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Updates:</strong> Real-time instant updates without waiting for app store reviews.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-neutral-950 mt-0.5 flex-shrink-0" />
                <span><strong className="font-delight-semibold text-neutral-950">Best For:</strong> Customer portals, instant booking, directory portals, SaaS MVPs.</span>
              </div>
            </div>

            <Link to="/services?category=App Development">
              <Button className="w-full rounded-lg gap-2 font-delight-semibold bg-neutral-950 hover:bg-neutral-800 text-white h-12 text-sm shadow-sm">
                View Web App Packages (from ₹3,599) <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Standard vs. Premium Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 sm:p-10 border border-neutral-200 shadow-xs overflow-x-auto"
        >
          <h3 className="text-xl sm:text-2xl font-delight-bold text-center mb-2 text-neutral-950">Standard (₹3,599) vs. Premium (₹8,999)</h3>
          <p className="text-xs sm:text-sm text-neutral-500 font-delight-regular text-center mb-8">
            How the two tiers differ in scope, database connectivity, and production depth:
          </p>

          <table className="w-full text-left text-sm min-w-[540px]">
            <thead>
              <tr className="border-b border-neutral-200 text-neutral-500 text-xs font-delight-semibold uppercase tracking-wider">
                <th className="py-3 px-4">Feature / Capability</th>
                <th className="py-3 px-4 font-delight-bold text-neutral-900">Standard Tier (₹3,599)</th>
                <th className="py-3 px-4 font-delight-black text-neutral-950">Premium Tier (₹8,999)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 font-delight-regular">
              <tr>
                <td className="py-3.5 px-4 font-delight-semibold text-neutral-950">Screen & View Limit</td>
                <td className="py-3.5 px-4 text-neutral-600">Up to 4 Core Screens / Views</td>
                <td className="py-3.5 px-4 font-delight-bold text-neutral-950">Up to 8–10 Comprehensive Screens</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-delight-semibold text-neutral-950">Backend & Database</td>
                <td className="py-3.5 px-4 text-neutral-600">Static / Caching data (No recurring DB)</td>
                <td className="py-3.5 px-4 font-delight-bold text-neutral-950">Live Real-Time Database Integration</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-delight-semibold text-neutral-950">User Authentication</td>
                <td className="py-3.5 px-4 text-neutral-600">Not included (Open access catalog)</td>
                <td className="py-3.5 px-4 font-delight-bold text-neutral-950">Full Login/Signup (OTP / Email)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-delight-semibold text-neutral-950">Online Payment Gateway</td>
                <td className="py-3.5 px-4 text-neutral-600">WhatsApp Direct Ordering Form</td>
                <td className="py-3.5 px-4 font-delight-bold text-neutral-950">Integrated Razorpay / UPI In-App</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-delight-semibold text-neutral-950">Admin Control Dashboard</td>
                <td className="py-3.5 px-4 text-neutral-600">Standard manual data format</td>
                <td className="py-3.5 px-4 font-delight-bold text-neutral-950">Dedicated Web Admin Control Panel</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-delight-semibold text-neutral-950">Delivery Turnaround</td>
                <td className="py-3.5 px-4 text-neutral-600">5–7 Working Days</td>
                <td className="py-3.5 px-4 font-delight-bold text-neutral-950">12–15 Working Days</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
