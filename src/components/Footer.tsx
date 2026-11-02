import { Link } from 'react-router-dom';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800 mt-28">
      <div className="container mx-auto px-6 sm:px-12 md:px-16 lg:px-24 xl:px-28 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <img
                src={logoImg}
                alt="DocuReady Shop"
                className="h-12 sm:h-14 w-auto object-contain brightness-105"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "https://images.fillout.com/orgid-539647/flowpublicid-ncmbjjjym4/widgetid-default/q5ZYS4ampLNtqNbJx3azz7/pasted-image-1775016157070.png";
                }}
              />
            </Link>
            <p className="text-neutral-400 font-delight-regular text-sm leading-relaxed max-w-sm mb-6">
              Bespoke digital architecture and creative engineering. Affordable, high-converting Graphic Design, Web Applications, and Native Android solutions for Indian businesses and founders.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:ashleyghose64@gmail.com"
                className="inline-flex items-center gap-3 text-neutral-400 hover:text-white text-sm transition-colors group font-delight-medium"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
                  <Mail className="w-4 h-4 text-neutral-300" />
                </div>
                <span>ashleyghose64@gmail.com</span>
              </a>
              <a
                href="https://wa.me/919004804043"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-neutral-400 hover:text-white text-sm transition-colors group font-delight-medium"
              >
                <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:bg-neutral-800 transition-colors">
                  <MessageCircle className="w-4 h-4 text-neutral-300" />
                </div>
                <span>WhatsApp: +91 90048 04043</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <p className="font-delight-bold text-white text-xs uppercase tracking-widest mb-5">Practice Domains</p>
            <ul className="space-y-3 text-sm font-delight-regular">
              <li>
                <Link to="/services?category=Web%20Infrastructure%20%26%20Engineering" className="text-neutral-400 hover:text-white transition-colors">
                  Web Infrastructure & Engineering
                </Link>
              </li>
              <li>
                <Link to="/services?category=Brand%20Identity%20%26%20Industrial%20Systems" className="text-neutral-400 hover:text-white transition-colors">
                  Brand Identity & Industrial Systems
                </Link>
              </li>
              <li>
                <Link to="/services?category=Software%20%26%20Application%20Builds" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
                  <span>Software & Application Builds</span>
                  <span className="font-mono text-[9px] bg-neutral-900 text-neutral-300 border border-neutral-700 px-1.5 py-0.5 rounded font-bold uppercase">Active</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="font-mono text-xs text-neutral-500 hover:text-neutral-300 transition-colors">
                  View Full 10-Tier Catalog →
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick & Legal Links */}
          <div>
            <p className="font-delight-bold text-white text-xs uppercase tracking-widest mb-5">Quick & Legal</p>
            <ul className="space-y-3 text-sm font-delight-regular">
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-white transition-colors">
                  About DocuReady Dev
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-neutral-400 hover:text-white transition-colors">
                  Track My Orders
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-neutral-400 hover:text-white transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-xs font-delight-light">
          <p>© {new Date().getFullYear()} DocuReady Shop. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-delight-medium text-neutral-400">
            Crafted with precision & code ownership in Mumbai, India
          </p>
        </div>
      </div>
    </footer>
  );
}
