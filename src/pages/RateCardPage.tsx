import { useState } from 'react';
import { 
  Printer, 
  MessageCircle, 
  ArrowRight, 
  Clock, 
  ChevronRight, 
  ChevronLeft 
} from 'lucide-react';
import { ALL_PACKAGES } from '@/data/packages';

export default function RateCardPage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [viewMode, setViewMode] = useState<'slides' | 'scroll'>('slides');

  const webPackages = ALL_PACKAGES.filter(p => p.category === 'Web Infrastructure & Engineering');
  const brandPackages = ALL_PACKAGES.filter(p => p.category === 'Brand Identity & Industrial Systems');
  const softwarePackages = ALL_PACKAGES.filter(p => p.category === 'Software & Application Builds');

  const slides = [
    { id: 'cover', title: '01 / Overview & Manifesto' },
    { id: 'web', title: '02 / Web Infrastructure' },
    { id: 'brand', title: '03 / Brand Identity Systems' },
    { id: 'software', title: '04 / Software & Application Builds' },
    { id: 'order', title: '05 / Direct WhatsApp Protocol' },
  ];

  const handlePrint = () => {
    window.print();
  };

  const getWhatsAppLink = (packageName?: string) => {
    const text = packageName
      ? `Hi Ashley, I am reviewing your Landscape Rate Card and would like to commission the "${packageName}" package.`
      : `Hi Ashley, I reviewed your Studio Rate Card and would like to discuss my project requirements.`;
    return `https://wa.me/919004804043?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-[#F5F5F7] text-neutral-900 pt-24 pb-20 selection:bg-neutral-900 selection:text-white print:p-0 print:m-0 print:bg-white print:text-black">
      {/* ========================================================= */}
      {/* SCREEN CONTROL BAR (Hidden during Print)                 */}
      {/* ========================================================= */}
      <div className="container mx-auto px-6 max-w-7xl mb-8 print:hidden">
        <div className="bg-white/95 backdrop-blur-md border border-neutral-300/80 rounded-2xl p-4 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 block leading-tight">
                DocuReady Dev · Client Rate Card Deck
              </span>
              <span className="text-sm font-delight-bold text-neutral-950">
                Architectural Specifications & Investment Matrix (2026)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* View Mode Switcher */}
            <div className="inline-flex items-center bg-neutral-100 p-1 rounded-xl border border-neutral-200 text-xs font-delight-medium">
              <button
                onClick={() => setViewMode('slides')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'slides'
                    ? 'bg-white text-neutral-950 shadow-xs font-delight-bold'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                Landscape Slides
              </button>
              <button
                onClick={() => setViewMode('scroll')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  viewMode === 'scroll'
                    ? 'bg-white text-neutral-950 shadow-xs font-delight-bold'
                    : 'text-neutral-500 hover:text-neutral-900'
                }`}
              >
                Continuous Document
              </button>
            </div>

            {/* Print / Save PDF Button */}
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 bg-neutral-950 hover:bg-neutral-800 text-white px-4 py-2 rounded-xl text-xs font-delight-semibold transition-all shadow-xs"
              title="Print or Save Landscape PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Save / Print PDF</span>
            </button>

            {/* Direct WhatsApp CTA */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2 rounded-xl text-xs font-delight-semibold transition-all shadow-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

        {/* Slide Navigation Tabs (When in Slides Mode) */}
        {viewMode === 'slides' && (
          <div className="flex items-center justify-between mt-4 border-b border-neutral-300 pb-2">
            <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto">
              {slides.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveSlide(idx)}
                  className={`text-xs whitespace-nowrap pb-2 transition-all font-mono uppercase tracking-wider ${
                    activeSlide === idx
                      ? 'border-b-2 border-neutral-950 text-neutral-950 font-bold'
                      : 'text-neutral-400 hover:text-neutral-700'
                  }`}
                >
                  {s.title}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setActiveSlide((prev) => Math.max(0, prev - 1))}
                disabled={activeSlide === 0}
                className="w-8 h-8 rounded-lg border border-neutral-300 bg-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 transition-colors"
                title="Previous Slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="font-mono text-xs text-neutral-500">
                {activeSlide + 1} / {slides.length}
              </span>
              <button
                onClick={() => setActiveSlide((prev) => Math.min(slides.length - 1, prev + 1))}
                disabled={activeSlide === slides.length - 1}
                className="w-8 h-8 rounded-lg border border-neutral-300 bg-white flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-100 transition-colors"
                title="Next Slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================= */}
      {/* PRINT-OPTIMIZED STYLES                                   */}
      {/* ========================================================= */}
      <style>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 12mm 15mm 12mm 15mm;
          }
          body {
            background-color: #ffffff !important;
            color: #18191e !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .landscape-page {
            page-break-after: always;
            page-break-inside: avoid;
            min-height: 180mm;
            padding: 0 !important;
            margin-bottom: 20mm;
            box-shadow: none !important;
            border: none !important;
          }
          .landscape-page:last-child {
            page-break-after: auto;
          }
        }
      `}</style>

      {/* ========================================================= */}
      {/* SPREADS CONTAINER                                         */}
      {/* ========================================================= */}
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        {/* ========================================================================= */}
        {/* SPREAD 1: COVER & EXECUTIVE PROFILE                                      */}
        {/* ========================================================================= */}
        {(viewMode === 'scroll' || activeSlide === 0) && (
          <div className="landscape-page bg-white border border-neutral-300 rounded-3xl p-8 sm:p-12 lg:p-16 mb-12 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[620px]">
            {/* Top Monogram & Meta */}
            <div className="border-b border-neutral-200 pb-8 flex flex-col sm:flex-row justify-between sm:items-end gap-6">
              <div>
                <div className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-2">
                  Atelier Dossier · 2026 Architectural Suite
                </div>
                <div className="text-3xl sm:text-4xl font-delight-extrabold tracking-tight text-neutral-950">
                  DocuReady Dev
                </div>
                <div className="text-xs font-delight-medium text-neutral-500 mt-1">
                  Dual-Dispatch Engineering & Identity Atelier · Mumbai, India
                </div>
              </div>

              <div className="font-mono text-xs text-neutral-600 sm:text-right space-y-1">
                <div><span className="text-neutral-400">Architect:</span> Ashley Ajoy Ghose (ॲशले घोष)</div>
                <div><span className="text-neutral-400">Direct WhatsApp:</span> +91 90048 04043</div>
                <div><span className="text-neutral-400">Web Presence:</span> docuready.space</div>
              </div>
            </div>

            {/* Central Typographic Statement (Monolithic Abstract Scale) */}
            <div className="my-10 lg:my-14">
              <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">
                01 / Philosophy & Direct Craftsmanship
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-delight-black tracking-tight text-neutral-950 leading-[0.98] mb-6">
                Engineered for Rigor.<br />Authored without Middlemen.
              </h1>
              <p className="text-lg sm:text-2xl font-delight-light text-neutral-700 max-w-4xl leading-relaxed">
                We design and build verified web infrastructure, sharp vector identity systems, and signed Android runtimes for logistics fleets, industrial manufacturers, and ambitious founders. Every deliverable is hand-authored with ruthless attention to typography, sub-second execution, and full commercial copyright ownership.
              </p>
            </div>

            {/* Bottom 3 Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-neutral-200">
              <div>
                <div className="font-mono text-xs text-neutral-400 mb-1">PRACTICE DOMAIN 01</div>
                <div className="text-base font-delight-bold text-neutral-950 mb-1">Web Infrastructure</div>
                <p className="text-xs font-delight-light text-neutral-600 leading-relaxed">
                  Verified corporate digital footprints, RFQ matrices, and edge-routed enterprise portals with zero bloated code.
                </p>
              </div>

              <div>
                <div className="font-mono text-xs text-neutral-400 mb-1">PRACTICE DOMAIN 02</div>
                <div className="text-base font-delight-bold text-neutral-950 mb-1">Brand Identity Systems</div>
                <p className="text-xs font-delight-light text-neutral-600 leading-relaxed">
                  Precision geometric vector marks, complete stationery systems, and dimensional vehicle/container livery blueprints.
                </p>
              </div>

              <div>
                <div className="font-mono text-xs text-neutral-400 mb-1">PRACTICE DOMAIN 03</div>
                <div className="text-base font-delight-bold text-neutral-950 mb-1">Software & App Builds</div>
                <p className="text-xs font-delight-light text-neutral-600 leading-relaxed">
                  Lightweight Android APKs, Progressive Web Apps, and full-stack operational back-office suites.
                </p>
              </div>
            </div>

            {/* Micro Footer Notice */}
            <div className="mt-8 pt-4 border-t border-neutral-100 flex flex-wrap justify-between items-center text-[10px] font-mono text-neutral-400">
              <span>DOCUMENT REF: DRD-RATECARD-2026.V3</span>
              <span>100% INTELLECTUAL PROPERTY TRANSFERS UNDER INDIAN COPYRIGHT ACT, 1957</span>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SPREAD 2: WEB INFRASTRUCTURE & ENGINEERING                              */}
        {/* ========================================================================= */}
        {(viewMode === 'scroll' || activeSlide === 1) && (
          <div className="landscape-page bg-white border border-neutral-300 rounded-3xl p-8 sm:p-12 lg:p-14 mb-12 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[620px]">
            {/* Header */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-neutral-200 pb-5 mb-8 gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                    02 / PRACTICE DOMAIN
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-delight-extrabold text-neutral-950 tracking-tight">
                    Web Infrastructure & Engineering
                  </h2>
                </div>
                <div className="font-mono text-xs text-neutral-500 sm:text-right">
                  <span>Investment Spectrum: ₹18,000 – ₹1,60,000+</span><br />
                  <span className="text-neutral-400">Turnaround: 7 to 35 Business Days</span>
                </div>
              </div>

              {/* Preferable Variant Editorial Note */}
              <div className="mb-6 bg-neutral-50 border-l-2 border-neutral-950 p-4 rounded-r-xl text-xs sm:text-sm font-delight-regular text-neutral-700">
                <span className="font-delight-bold text-neutral-950 not-italic">How They Differ: </span>
                Tier 1 is designed for corporate vendor onboarding audits and tenders. Tier 2 introduces dynamic RFQ capture, interactive branch maps, and spec sheet downloads. Tier 3 is a comprehensive custom B2B web app with role-gated client portals, freight rate engines, and API interoperability.
                <div className="mt-2 text-xs font-delight-medium italic text-neutral-800">
                  ★ Recommended for most expanding operations: Enterprise Grid (Tier 2) delivers the optimal balance of dynamic RFQ intake, technical spec downloads, and multi-hub mapping within a fast 2 to 3 week delivery window.
                </div>
              </div>

              {/* 3 Package Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {webPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="border border-neutral-200 rounded-2xl p-6 bg-white hover:border-neutral-400 transition-all flex flex-col justify-between group shadow-2xs relative"
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 right-5 bg-neutral-950 text-white font-mono text-[9px] uppercase px-2.5 py-0.5 rounded-full tracking-widest shadow-xs">
                        Most Commissioned
                      </div>
                    )}

                    <div>
                      {/* Tier & Price */}
                      <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-2">
                        <span>{pkg.tier}</span>
                        <span className="inline-flex items-center gap-1 text-neutral-600">
                          <Clock className="w-3 h-3" />
                          {pkg.deliveryTimeline}
                        </span>
                      </div>

                      <h3 className="text-xl font-delight-bold text-neutral-950 tracking-tight mb-2">
                        {pkg.name}
                      </h3>

                      <div className="text-2xl font-mono font-semibold text-neutral-950 mb-4">
                        {pkg.priceDisplay}
                      </div>

                      <p className="text-xs font-delight-light text-neutral-600 leading-relaxed mb-5 pb-4 border-b border-neutral-100">
                        {pkg.suitability}
                      </p>

                      {/* Core Features */}
                      <div className="mb-5">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-2">
                          Core Architectural Features
                        </span>
                        <ul className="space-y-1.5 text-xs font-delight-regular text-neutral-700">
                          {pkg.features.slice(0, 4).map((f, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-neutral-400 font-mono text-[10px] mt-0.5">•</span>
                              <span className="leading-snug">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Deliverables */}
                      <div className="mb-6">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-2">
                          Handed-off Deliverables
                        </span>
                        <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-neutral-600">
                          {pkg.deliverables.map((d, i) => (
                            <span key={i} className="bg-neutral-100 px-2 py-0.5 rounded-md border border-neutral-200">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Order Action Button */}
                    <a
                      href={getWhatsAppLink(pkg.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white text-neutral-900 font-delight-semibold text-xs transition-all"
                    >
                      <span>Inquire via WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Meta Bar */}
            <div className="mt-8 pt-4 border-t border-neutral-200 flex justify-between items-center text-[10px] font-mono text-neutral-400">
              <span>ALL TIERS INCLUDE DNS LINKING, SSL CONFIGURATION, AND CLEAN CROSS-BROWSER VERIFICATION</span>
              <span>DIRECT DISPATCH VIA WHATSAPP (+91 90048 04043)</span>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SPREAD 3: BRAND IDENTITY & INDUSTRIAL SYSTEMS                           */}
        {/* ========================================================================= */}
        {(viewMode === 'scroll' || activeSlide === 2) && (
          <div className="landscape-page bg-white border border-neutral-300 rounded-3xl p-8 sm:p-12 lg:p-14 mb-12 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[620px]">
            {/* Header */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-neutral-200 pb-5 mb-8 gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                    03 / PRACTICE DOMAIN
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-delight-extrabold text-neutral-950 tracking-tight">
                    Brand Identity & Industrial Systems
                  </h2>
                </div>
                <div className="font-mono text-xs text-neutral-500 sm:text-right">
                  <span>Investment Spectrum: ₹1,999 – ₹12,499</span><br />
                  <span className="text-neutral-400">Turnaround: 2 to 10 Business Days</span>
                </div>
              </div>

              {/* Preferable Variant Editorial Note */}
              <div className="mb-6 bg-neutral-50 border-l-2 border-neutral-950 p-4 rounded-r-xl text-xs sm:text-sm font-delight-regular text-neutral-700">
                <span className="font-delight-bold text-neutral-950 not-italic">How They Differ: </span>
                Tier 1 focuses strictly on a sharp, mathematical geometric logo mark suitable for CNC, embroidery, and signage. Tier 2 broadens this into a complete commercial identity system covering invoices, letterheads, and social skins. Tier 3 delivers physical real-world blueprints with millimeter scale markers for truck fleets, containers, and factory floor workwear.
                <div className="mt-2 text-xs font-delight-medium italic text-neutral-800">
                  ★ Recommended for growing transport firms & industrial suppliers: System Identity Matrix (Tier 2 at ₹5,499) unifies every customer-facing interaction—from WhatsApp invoice skins and formal purchase orders to digital letterheads—creating an instant enterprise impression.
                </div>
              </div>

              {/* 3 Package Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {brandPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="border border-neutral-200 rounded-2xl p-6 bg-white hover:border-neutral-400 transition-all flex flex-col justify-between group shadow-2xs relative"
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 right-5 bg-neutral-950 text-white font-mono text-[9px] uppercase px-2.5 py-0.5 rounded-full tracking-widest shadow-xs">
                        Most Commissioned
                      </div>
                    )}

                    <div>
                      {/* Tier & Price */}
                      <div className="flex items-center justify-between font-mono text-xs text-neutral-400 mb-2">
                        <span>{pkg.tier}</span>
                        <span className="inline-flex items-center gap-1 text-neutral-600">
                          <Clock className="w-3 h-3" />
                          {pkg.deliveryTimeline}
                        </span>
                      </div>

                      <h3 className="text-xl font-delight-bold text-neutral-950 tracking-tight mb-2">
                        {pkg.name}
                      </h3>

                      <div className="text-2xl font-mono font-semibold text-neutral-950 mb-4">
                        {pkg.priceDisplay}
                      </div>

                      <p className="text-xs font-delight-light text-neutral-600 leading-relaxed mb-5 pb-4 border-b border-neutral-100">
                        {pkg.suitability}
                      </p>

                      {/* Core Features */}
                      <div className="mb-5">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-2">
                          System Specifications
                        </span>
                        <ul className="space-y-1.5 text-xs font-delight-regular text-neutral-700">
                          {pkg.features.map((f, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-neutral-400 font-mono text-[10px] mt-0.5">•</span>
                              <span className="leading-snug">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Deliverables */}
                      <div className="mb-6">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400 block mb-2">
                          Master Production Assets
                        </span>
                        <div className="flex flex-wrap gap-1.5 font-mono text-[10px] text-neutral-600">
                          {pkg.deliverables.map((d, i) => (
                            <span key={i} className="bg-neutral-100 px-2 py-0.5 rounded-md border border-neutral-200">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Order Action Button */}
                    <a
                      href={getWhatsAppLink(pkg.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white text-neutral-900 font-delight-semibold text-xs transition-all"
                    >
                      <span>Inquire via WhatsApp</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Meta Bar */}
            <div className="mt-8 pt-4 border-t border-neutral-200 flex justify-between items-center text-[10px] font-mono text-neutral-400">
              <span>ALL VECTOR ASSETS DELIVERED IN SVG, HIGH-RES PNG, AND PRINT-READY CMYK PDF FORMATS</span>
              <span>DIRECT DISPATCH VIA WHATSAPP (+91 90048 04043)</span>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SPREAD 4: SOFTWARE & APPLICATION BUILDS                                 */}
        {/* ========================================================================= */}
        {(viewMode === 'scroll' || activeSlide === 3) && (
          <div className="landscape-page bg-white border border-neutral-300 rounded-3xl p-8 sm:p-12 lg:p-14 mb-12 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[620px]">
            {/* Header */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-neutral-200 pb-5 mb-8 gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                    04 / PRACTICE DOMAIN
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-delight-extrabold text-neutral-950 tracking-tight">
                    Software & Application Builds
                  </h2>
                </div>
                <div className="font-mono text-xs text-neutral-500 sm:text-right">
                  <span>Android APKs & Full-Stack Cloud SPAs</span><br />
                  <span className="text-neutral-400">Starting at ₹3,999 to ₹9,999</span>
                </div>
              </div>

              {/* Preferable Variant Editorial Note */}
              <div className="mb-6 bg-neutral-50 border-l-2 border-neutral-950 p-4 rounded-r-xl text-xs sm:text-sm font-delight-regular text-neutral-700">
                <span className="font-delight-bold text-neutral-950 not-italic">How They Differ: </span>
                Mobile Utility (Android Tier 1 at ₹3,999) is a lean, signed APK for quick internal reference and driver dispatch without app store friction. Core Android Runtime (Tier 2 at ₹9,999) delivers dynamic database synchronization, authenticated operator accounts, and Play Store AAB bundles. Progressive Edge PWA (Tier 3 at ₹3,999) offers zero-install universal browser reach across iOS and Android. Full-Stack Application (Tier 4 at ₹9,999) provides a complete operational command dashboard with role-based access, shipment ledger CRUD, and CSV analytics.
                <div className="mt-2 text-xs font-delight-medium italic text-neutral-800">
                  ★ Recommended for internal field teams: Core Android Runtime (Tier 2) when physical drivers and warehouse handlers need verified accounts and live tracking; or Full-Stack Application (Tier 4) when back-office staff require a desktop operational command center.
                </div>
              </div>

              {/* 4 Package Grid (2x2 on Desktop) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {softwarePackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="border border-neutral-200 rounded-2xl p-5 bg-white hover:border-neutral-400 transition-all flex flex-col justify-between group shadow-2xs relative"
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 right-4 bg-neutral-950 text-white font-mono text-[8px] uppercase px-2 py-0.5 rounded-full tracking-widest shadow-xs">
                        Featured
                      </div>
                    )}

                    <div>
                      {/* Runtime Type & Tier */}
                      <div className="flex items-center justify-between font-mono text-[10px] text-neutral-400 mb-2">
                        <span className="font-bold text-neutral-600">{pkg.appType || pkg.tier}</span>
                        <span>{pkg.deliveryTimeline}</span>
                      </div>

                      <h3 className="text-base font-delight-bold text-neutral-950 tracking-tight mb-1">
                        {pkg.name}
                      </h3>

                      <div className="text-xl font-mono font-semibold text-neutral-950 mb-3">
                        {pkg.priceDisplay}
                      </div>

                      <p className="text-[11px] font-delight-light text-neutral-600 leading-snug mb-4 pb-3 border-b border-neutral-100">
                        {pkg.suitability}
                      </p>

                      {/* Core Features */}
                      <div className="mb-4">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 block mb-1.5">
                          Capabilities
                        </span>
                        <ul className="space-y-1 text-[11px] font-delight-regular text-neutral-700">
                          {pkg.features.slice(0, 3).map((f, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-neutral-400 font-mono text-[8px] mt-0.5">•</span>
                              <span className="leading-snug">{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Key Deliverables */}
                      <div className="mb-4">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 block mb-1">
                          Delivery
                        </span>
                        <div className="flex flex-wrap gap-1 font-mono text-[9px] text-neutral-600">
                          {pkg.deliverables.map((d, i) => (
                            <span key={i} className="bg-neutral-100 px-1.5 py-0.5 rounded border border-neutral-200">
                              {d}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Order Action Button */}
                    <a
                      href={getWhatsAppLink(pkg.name)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-xl border border-neutral-300 hover:border-neutral-950 hover:bg-neutral-950 hover:text-white text-neutral-900 font-delight-semibold text-[11px] transition-all"
                    >
                      <span>Inquire on WhatsApp</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Meta Bar */}
            <div className="mt-8 pt-4 border-t border-neutral-200 flex justify-between items-center text-[10px] font-mono text-neutral-400">
              <span>ALL SOURCE REPOSITORIES, SIGNED KEYSTORES, AND DEPLOYMENT SCRIPTS TRANSFERRED UPON SIGN-OFF</span>
              <span>DIRECT DISPATCH VIA WHATSAPP (+91 90048 04043)</span>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SPREAD 5: THE DIRECT WHATSAPP ROUTE & ORDERING PROTOCOL                  */}
        {/* ========================================================================= */}
        {(viewMode === 'scroll' || activeSlide === 4) && (
          <div className="landscape-page bg-white border border-neutral-300 rounded-3xl p-8 sm:p-12 lg:p-14 mb-12 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[620px]">
            {/* Header */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-neutral-200 pb-5 mb-8 gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-1">
                    05 / COMMERCIAL PROTOCOL
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-delight-extrabold text-neutral-950 tracking-tight">
                    How to Commission & Proceed
                  </h2>
                </div>
                <div className="font-mono text-xs text-neutral-500 sm:text-right">
                  <span>Single-Hop Communication · Zero Agency Fluff</span><br />
                  <span className="text-neutral-400">Direct Line: +91 90048 04043</span>
                </div>
              </div>

              {/* The "Why No Impersonal Payment Gateway" Philosophy Manifesto */}
              <div className="bg-neutral-950 text-white rounded-2xl p-6 sm:p-8 mb-8">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-2">
                  The Direct-to-Maker Philosophy
                </span>
                <h3 className="text-xl sm:text-2xl font-delight-bold tracking-tight mb-3">
                  Why We Intentionally Avoid Automated Payment Gateways
                </h3>
                <p className="text-sm font-delight-light text-neutral-300 leading-relaxed mb-4 max-w-4xl">
                  Automated checkout carts work for mass-produced e-commerce, but bespoke engineering and brand architecture demand a real, collaborative relationship. We intentionally route every project inquiry through a direct 1-on-1 WhatsApp dialogue with Ashley. This ensures your technical scope, edge-cases, delivery milestones, and brand tone are rigorously evaluated before a single rupee changes hands.
                </p>
                <div className="font-mono text-xs text-neutral-400 flex flex-wrap gap-4 pt-3 border-t border-neutral-800">
                  <span>✓ Direct Human Dialogue</span>
                  <span>✓ Tailored Milestone Scope</span>
                  <span>✓ No Disconnected Support Tickets</span>
                  <span>✓ Strict Quality Guarantee</span>
                </div>
              </div>

              {/* 4-Step Onboarding Workflow */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="p-5 border border-neutral-200 rounded-2xl bg-neutral-50/50">
                  <span className="font-mono text-xs text-neutral-400 block mb-2">STEP 01</span>
                  <h4 className="text-base font-delight-bold text-neutral-950 mb-1">Tier Selection</h4>
                  <p className="text-xs font-delight-light text-neutral-600 leading-relaxed">
                    Identify your target specification tier from the rate card based on your operational scale and delivery timeline.
                  </p>
                </div>

                <div className="p-5 border border-neutral-200 rounded-2xl bg-neutral-50/50">
                  <span className="font-mono text-xs text-neutral-400 block mb-2">STEP 02</span>
                  <h4 className="text-base font-delight-bold text-neutral-950 mb-1">WhatsApp Dispatch</h4>
                  <p className="text-xs font-delight-light text-neutral-600 leading-relaxed">
                    Tap to trigger a direct WhatsApp message to Ashley (+91 90048 04043) referencing your chosen package and custom needs.
                  </p>
                </div>

                <div className="p-5 border border-neutral-200 rounded-2xl bg-neutral-50/50">
                  <span className="font-mono text-xs text-neutral-400 block mb-2">STEP 03</span>
                  <h4 className="text-base font-delight-bold text-neutral-950 mb-1">Scope & Milestone Sign-off</h4>
                  <p className="text-xs font-delight-light text-neutral-600 leading-relaxed">
                    Receive a formal scope of work document with clear delivery dates and verified technical requirements.
                  </p>
                </div>

                <div className="p-5 border border-neutral-200 rounded-2xl bg-neutral-50/50">
                  <span className="font-mono text-xs text-neutral-400 block mb-2">STEP 04</span>
                  <h4 className="text-base font-delight-bold text-neutral-950 mb-1">Direct Bank / UPI Kickoff</h4>
                  <p className="text-xs font-delight-light text-neutral-600 leading-relaxed">
                    Initiate with 50% milestone kick-off via direct NEFT/IMPS or UPI, with the remaining 50% due on verified production delivery.
                  </p>
                </div>
              </div>

              {/* Direct Initiation Action */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-6 bg-neutral-100 rounded-2xl border border-neutral-300 gap-4">
                <div>
                  <h4 className="text-base font-delight-bold text-neutral-950">
                    Ready to initiate your build?
                  </h4>
                  <p className="text-xs font-delight-light text-neutral-600">
                    Average response time: Under 30 minutes during Indian business hours (9:00 AM – 9:00 PM IST).
                  </p>
                </div>

                <a
                  href="https://wa.me/919004804043?text=Hi%20Ashley%2C%20I%20have%20reviewed%20your%20Rate%20Card%20deck%20and%20would%20like%20to%20discuss%20initiating%20a%20project."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-6 py-3 rounded-xl text-xs font-delight-bold transition-all shadow-sm shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start Direct WhatsApp Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Bottom Legal Notice */}
            <div className="mt-8 pt-4 border-t border-neutral-200 flex flex-wrap justify-between items-center text-[10px] font-mono text-neutral-400 gap-2">
              <span>DOCUREADY DEV · ASHLEY AJOY GHOSE · MUMBAI, MAHARASHTRA, INDIA</span>
              <span>TERMS: 50% MILESTONE KICK-OFF / 50% FINAL SIGN-OFF · ZERO HIDDEN FEES</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
