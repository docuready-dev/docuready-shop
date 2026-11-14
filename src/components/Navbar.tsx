import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, User as UserIcon, LogOut } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import logoBlackImg from '../assets/logo-black.png';

export default function Navbar() {
  const { count } = useCart();
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Triple-click on logo triggers hidden admin portal navigation
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleLogoClick = (e: React.MouseEvent) => {
    clickCountRef.current += 1;
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current);

    if (clickCountRef.current >= 3) {
      e.preventDefault();
      clickCountRef.current = 0;
      navigate('/admin');
    } else {
      clickTimerRef.current = setTimeout(() => {
        clickCountRef.current = 0;
      }, 550);
    }
  };

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services & Pricing' },
    { to: '/about', label: 'About' },
    { to: '/dashboard', label: 'Track Orders' },
  ];

  const isActive = (to: string) => location.pathname === to;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-[0_1px_3px_0_rgba(0,0,0,0.02)]">
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 h-20 flex items-center justify-between">
        {/* Brand Logo - Triple Click for Hidden Admin Access */}
        <Link to="/" onClick={handleLogoClick} className="flex items-center group select-none py-0 shrink-0" title="DocuReady Shop">
          <img
            src={logoBlackImg}
            alt="DocuReady Shop"
            className="h-10 sm:h-12 md:h-[58px] w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            onError={(e) => {
              // Graceful fallback if local image fails
              const target = e.currentTarget;
              target.src = "https://images.fillout.com/orgid-539647/flowpublicid-ncmbjjjym4/widgetid-default/q5ZYS4ampLNtqNbJx3azz7/pasted-image-1775016157070.png";
              target.style.filter = "brightness(0)";
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm tracking-wide transition-colors ${
                isActive(link.to)
                  ? 'text-neutral-950 border-b-2 border-neutral-950 pb-1 font-delight-bold'
                  : 'text-neutral-600 hover:text-neutral-950 font-delight-medium'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* User Sign In / Account Button */}
          {isAuthenticated ? (
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/dashboard">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 rounded-xl border-neutral-200 text-neutral-900 bg-white hover:bg-neutral-50 px-3.5 h-10 shadow-xs font-delight-medium"
                >
                  <UserIcon className="w-4 h-4 text-neutral-950" />
                  <span className="text-xs truncate max-w-[100px]">
                    {user?.name.split(' ')[0] || 'Account'}
                  </span>
                </Button>
              </Link>
              <button
                onClick={logout}
                title="Sign Out"
                className="text-neutral-400 hover:text-destructive p-2 transition-colors rounded-lg"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link to="/login" className="hidden sm:block">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 rounded-xl border-neutral-200 text-neutral-900 bg-white hover:bg-neutral-50 px-3.5 h-10 font-delight-bold text-xs shadow-xs"
              >
                <UserIcon className="w-3.5 h-3.5 text-neutral-950" />
                <span>Sign In</span>
              </Button>
            </Link>
          )}

          <Link to="/cart" className="relative">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-xl border-neutral-200 text-neutral-900 bg-white hover:bg-neutral-50 px-4 h-10 shadow-xs font-delight-medium"
            >
              <ShoppingCart className="w-4 h-4 text-neutral-950" />
              <span className="text-xs sm:text-sm">Cart</span>
              {count > 0 && (
                <span className="w-5 h-5 bg-neutral-950 text-white text-xs rounded-full flex items-center justify-center text-center leading-none font-delight-bold shadow-sm ml-1">
                  {count}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-neutral-900 hover:text-neutral-950 p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-neutral-200 px-6 py-5 flex flex-col gap-4 shadow-xl">
          {isAuthenticated ? (
            <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
              <span className="text-sm font-delight-bold text-neutral-900 flex items-center gap-2">
                <UserIcon className="w-4 h-4 text-neutral-950" /> {user?.name}
              </span>
              <button onClick={() => { logout(); setMobileOpen(false); }} className="text-xs text-destructive font-delight-semibold">
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-delight-bold text-neutral-950 py-1 flex items-center gap-2"
            >
              <UserIcon className="w-4 h-4" /> Sign In / Create Account
            </Link>
          )}

          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`text-base py-1 transition-colors ${
                isActive(link.to) ? 'text-neutral-950 font-delight-bold' : 'text-neutral-600 hover:text-neutral-950 font-delight-medium'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-slate-200 pt-3 flex justify-between items-center text-xs text-slate-500">
            <Link to="/terms" onClick={() => setMobileOpen(false)}>Terms</Link>
            <Link to="/privacy" onClick={() => setMobileOpen(false)}>Privacy</Link>
            <Link to="/refund" onClick={() => setMobileOpen(false)}>Refund Policy</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
