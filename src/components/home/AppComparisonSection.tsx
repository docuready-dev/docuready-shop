import { motion } from 'framer-motion';
import { Smartphone, Globe, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function AppComparisonSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-slate-50/60 to-transparent">
      <div className="container mx-auto px-8 sm:px-14 md:px-20 lg:px-28 xl:px-36 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-violet-50 border border-violet-200/80 text-violet-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-violet-700" /> Direct Comparison
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            Understanding the <span className="gradient-text">App Distinctions</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Both <strong className="font-bold text-slate-900">Android Apps</strong> and <strong className="font-bold text-slate-900">Universal Web Apps</strong> share identical transparent pricing: <strong className="font-bold text-slate-900">₹3,599</strong> for Standard and <strong className="font-bold text-slate-900">₹8,999</strong> for Premium. Here is how to choose the right fit for your business:
          </p>
        </motion.div>

        {/* 2-Column Distinguishing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Android Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.03)] card-hover relative overflow-hidden"
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Android Mobile App</h3>
                <p className="text-xs text-slate-500 font-semibold">Dedicated Smartphone Experience</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              Delivered as an installable <strong className="font-bold text-slate-900">Android APK</strong> (Standard) or <strong className="font-bold text-slate-900">Google Play Store package</strong> (Premium). Provides an icon on your client’s home screen and utilizes device capabilities.
            </p>

            <div className="space-y-3 mb-8 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong className="text-slate-900">Platform:</strong> Specifically tailored for Android phones & tablets.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong className="text-slate-900">Installation:</strong> Direct APK sideloading or Google Play distribution.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong className="text-slate-900">Hardware Integration:</strong> Push notifications, camera, local storage, vibration.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong className="text-slate-900">Best For:</strong> High client retention, field service apps, internal company tools.</span>
              </div>
            </div>

            <Link to="/services?category=App Development">
              <Button variant="outline" className="w-full rounded-xl gap-2 font-semibold border-emerald-600/30 text-emerald-800 hover:bg-emerald-50 h-12">
                View Android Packages (from ₹3,599) <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Web App Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.03)] card-hover relative overflow-hidden"
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-violet-50 border border-violet-200/60 flex items-center justify-center">
                <Globe className="w-6 h-6 text-violet-700" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">Universal Web App (PWA)</h3>
                <p className="text-xs text-slate-500 font-semibold">Zero-Install Universal Reach</p>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              A high-performance progressive web app accessed instantly via a standard link. Works uniformly across <strong className="font-bold text-slate-900">iPhones, Android, Windows & Mac</strong> without requiring app store approval.
            </p>

            <div className="space-y-3 mb-8 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-700 mt-0.5 flex-shrink-0" />
                <span><strong className="text-slate-900">Platform:</strong> Works on all browsers (Chrome, Safari, iOS & Android).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-700 mt-0.5 flex-shrink-0" />
                <span><strong className="text-slate-900">Frictionless Access:</strong> Instant link load + optional "Add to Home Screen".</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-700 mt-0.5 flex-shrink-0" />
                <span><strong className="text-slate-900">Updates:</strong> Real-time instant updates without waiting for app store reviews.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-violet-700 mt-0.5 flex-shrink-0" />
                <span><strong className="text-slate-900">Best For:</strong> Customer portals, instant booking, directory portals, SaaS MVPs.</span>
              </div>
            </div>

            <Link to="/services?category=App Development">
              <Button className="w-full rounded-xl gap-2 font-semibold bg-[#6D28D9] hover:bg-[#5B21B6] text-white shadow-md shadow-violet-900/15 h-12">
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
          className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-[0_4px_24px_-6px_rgba(0,0,0,0.03)] overflow-x-auto"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-2 text-slate-900">Standard (₹3,599) vs. Premium (₹8,999)</h3>
          <p className="text-xs sm:text-sm text-slate-500 text-center mb-8">
            How the two tiers differ in scope, database connectivity, and production depth:
          </p>

          <table className="w-full text-left text-sm min-w-[540px]">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider">
                <th className="py-3 px-4">Feature / Capability</th>
                <th className="py-3 px-4 font-bold text-slate-900">Standard Tier (₹3,599)</th>
                <th className="py-3 px-4 font-extrabold text-violet-700">Premium Tier (₹8,999)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Screen & View Limit</td>
                <td className="py-3.5 px-4 text-slate-600">Up to 4 Core Screens / Views</td>
                <td className="py-3.5 px-4 font-bold text-violet-700">Up to 8–10 Comprehensive Screens</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Backend & Database</td>
                <td className="py-3.5 px-4 text-slate-600">Static / Caching data (No recurring DB)</td>
                <td className="py-3.5 px-4 font-bold text-violet-700">Live Real-Time Database Integration</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">User Authentication</td>
                <td className="py-3.5 px-4 text-slate-600">Not included (Open access catalog)</td>
                <td className="py-3.5 px-4 font-bold text-violet-700">Full Login/Signup (OTP / Email)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Online Payment Gateway</td>
                <td className="py-3.5 px-4 text-slate-600">WhatsApp Direct Ordering Form</td>
                <td className="py-3.5 px-4 font-bold text-violet-700">Integrated Razorpay / UPI In-App</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Admin Control Dashboard</td>
                <td className="py-3.5 px-4 text-slate-600">Standard manual data format</td>
                <td className="py-3.5 px-4 font-bold text-violet-700">Dedicated Web Admin Control Panel</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-slate-900">Delivery Turnaround</td>
                <td className="py-3.5 px-4 text-slate-600">5–7 Working Days</td>
                <td className="py-3.5 px-4 font-bold text-violet-700">12–15 Working Days</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
