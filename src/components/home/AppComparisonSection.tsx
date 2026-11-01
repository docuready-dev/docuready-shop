import { motion } from 'framer-motion';
import { Smartphone, Globe, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export default function AppComparisonSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
      <div className="container mx-auto px-8 sm:px-14 md:px-20 lg:px-28 xl:px-36 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" /> Direct Comparison
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Understanding the <span className="gradient-text">App Distinctions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Both **Android Apps** and **Universal Web Apps** share identical transparent pricing: **₹3,599** for Standard and **₹8,999** for Premium. Here is how to choose the right fit for your business:
          </p>
        </motion.div>

        {/* 2-Column Distinguishing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {/* Android Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 border border-white/70 shadow-lg relative overflow-hidden"
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Android Mobile App</h3>
                <p className="text-xs text-muted-foreground font-semibold">Dedicated Smartphone Experience</p>
              </div>
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed mb-6">
              Delivered as an installable **Android APK** (Standard) or **Google Play Store package** (Premium). Provides an icon on your client’s home screen and utilizes device capabilities.
            </p>

            <div className="space-y-3 mb-8 text-sm">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Platform:</strong> Specifically tailored for Android phones & tablets.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Installation:</strong> Direct APK sideloading or Google Play distribution.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Hardware Integration:</strong> Push notifications, camera, local storage, vibration.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                <span><strong>Best For:</strong> High client retention, field service apps, internal company tools.</span>
              </div>
            </div>

            <Link to="/services?category=App Development">
              <Button variant="outline" className="w-full rounded-xl gap-2 font-semibold border-emerald-500/30 text-emerald-700 hover:bg-emerald-50">
                View Android Packages (from ₹3,599) <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>

          {/* Web App Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8 border border-white/70 shadow-lg relative overflow-hidden"
          >
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Universal Web App (PWA)</h3>
                <p className="text-xs text-muted-foreground font-semibold">Zero-Install Universal Reach</p>
              </div>
            </div>

            <p className="text-sm text-foreground/80 leading-relaxed mb-6">
              A high-performance progressive web app accessed instantly via a standard link. Works uniformly across **iPhones, Android, Windows & Mac** without requiring app store approval.
            </p>

            <div className="space-y-3 mb-8 text-sm">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Platform:</strong> Works on all browsers (Chrome, Safari, iOS & Android).</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Frictionless Access:</strong> Instant link load + optional "Add to Home Screen".</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Updates:</strong> Real-time instant updates without waiting for app store reviews.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span><strong>Best For:</strong> Customer portals, instant booking, directory portals, SaaS MVPs.</span>
              </div>
            </div>

            <Link to="/services?category=App Development">
              <Button className="w-full rounded-xl gap-2 font-semibold">
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
          className="glass-card rounded-3xl p-6 sm:p-10 border border-white/60 shadow-xl overflow-x-auto"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-2">Standard (₹3,599) vs. Premium (₹8,999)</h3>
          <p className="text-xs sm:text-sm text-muted-foreground text-center mb-8">
            How the two tiers differ in scope, database connectivity, and production depth:
          </p>

          <table className="w-full text-left text-sm min-w-[540px]">
            <thead>
              <tr className="border-b border-border/70 text-muted-foreground text-xs uppercase tracking-wider">
                <th className="py-3 px-4">Feature / Capability</th>
                <th className="py-3 px-4 font-bold text-foreground">Standard Tier (₹3,599)</th>
                <th className="py-3 px-4 font-extrabold text-primary">Premium Tier (₹8,999)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border/50">
              <tr>
                <td className="py-3.5 px-4 font-semibold text-foreground">Screen & View Limit</td>
                <td className="py-3.5 px-4 text-muted-foreground">Up to 4 Core Screens / Views</td>
                <td className="py-3.5 px-4 font-bold text-primary">Up to 8–10 Comprehensive Screens</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-foreground">Backend & Database</td>
                <td className="py-3.5 px-4 text-muted-foreground">Static / Caching data (No recurring DB)</td>
                <td className="py-3.5 px-4 font-bold text-primary">Live Real-Time Database Integration</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-foreground">User Authentication</td>
                <td className="py-3.5 px-4 text-muted-foreground">Not included (Open access catalog)</td>
                <td className="py-3.5 px-4 font-bold text-primary">Full Login/Signup (OTP / Email)</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-foreground">Online Payment Gateway</td>
                <td className="py-3.5 px-4 text-muted-foreground">WhatsApp Direct Ordering Form</td>
                <td className="py-3.5 px-4 font-bold text-primary">Integrated Razorpay / UPI In-App</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-foreground">Admin Control Dashboard</td>
                <td className="py-3.5 px-4 text-muted-foreground">Standard manual data format</td>
                <td className="py-3.5 px-4 font-bold text-primary">Dedicated Web Admin Control Panel</td>
              </tr>
              <tr>
                <td className="py-3.5 px-4 font-semibold text-foreground">Delivery Turnaround</td>
                <td className="py-3.5 px-4 text-muted-foreground">5–7 Working Days</td>
                <td className="py-3.5 px-4 font-bold text-primary">12–15 Working Days</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
