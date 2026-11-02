import { Link } from 'react-router-dom';
import { Mail, MessageCircle, ArrowUpRight, Heart } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#121118] text-white/90 border-t border-white/10 mt-28">
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <img
                src={logoImg}
                alt="DocuReady Shop"
                className="h-14 sm:h-16 w-auto object-contain brightness-110 drop-shadow"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.src = "https://images.fillout.com/orgid-539647/flowpublicid-ncmbjjjym4/widgetid-default/q5ZYS4ampLNtqNbJx3azz7/pasted-image-1775016157070.png";
                }}
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              We don't just design or code. We make you look ready. Affordable, high-converting Graphic Design, Web Development, and Android & Web Apps for Indian businesses and founders.
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="mailto:ashleyghose64@gmail.com"
                className="inline-flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span>ashleyghose64@gmail.com</span>
              </a>
              <a
                href="https://wa.me/919004804043"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 text-white/70 hover:text-white text-sm transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                </div>
                <span>WhatsApp: +91 90048 04043</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <p className="font-bold text-white text-sm uppercase tracking-wider mb-5">Our Services</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services?category=Graphic Design" className="text-white/60 hover:text-white transition-colors">
                  Graphic Design & Logos
                </Link>
              </li>
              <li>
                <Link to="/services?category=Web Design" className="text-white/60 hover:text-white transition-colors">
                  Websites & Landing Pages
                </Link>
              </li>
              <li>
                <Link to="/services?category=App Development" className="text-white/60 hover:text-white transition-colors flex items-center gap-2">
                  <span>Android App (₹3,599)</span>
                  <span className="text-[10px] bg-primary/20 text-primary px-1.5 py-0.5 rounded font-bold">Hot</span>
                </Link>
              </li>
              <li>
                <Link to="/services?category=App Development" className="text-white/60 hover:text-white transition-colors">
                  Universal Web Apps (PWA)
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick & Legal Links */}
          <div>
            <p className="font-bold text-white text-sm uppercase tracking-wider mb-5">Quick & Legal</p>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-white/60 hover:text-white transition-colors">
                  About DocuReady Dev
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-white/60 hover:text-white transition-colors">
                  Track My Orders
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white/60 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-white/60 hover:text-white transition-colors">
                  Refund & Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <p>© {new Date().getFullYear()} DocuReady Shop. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted for high performance & ambition <Heart className="w-3.5 h-3.5 text-primary fill-primary" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
}
