import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X, User as UserIcon, LogOut } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121118]/95 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="container mx-auto px-6 sm:px-10 lg:px-14 h-18 md:h-20 flex items-center justify-between">
        {/* Brand Logo - Triple Click for Hidden Admin Access */}
        <Link to="/" onClick={handleLogoClick} className="flex items-center group select-none py-0 shrink-0 overflow-visible" title="DocuReady Shop">
          <img
            src="https://images.fillout.com/orgid-539647/flowpublicid-ncmbjjjym4/widgetid-default/q5ZYS4ampLNtqNbJx3azz7/pasted-image-1775016157070.png"
            alt="DocuReady Shop"
            className="h-13 sm:h-14 md:h-15 w-auto object-contain transform origin-left scale-125 sm:scale-130 transition-transform group-hover:scale-[1.35] drop-shadow-md"
            onError={(e) => {
              // Graceful fallback if external image fails
              const target = e.currentTarget;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent && !parent.querySelector('.fallback-brand')) {
                const span = document.createElement('span');
                span.className = 'fallback-brand text-2xl font-black text-white tracking-tight';
                span.innerHTML = 'DocuReady<span class="text-primary font-bold">.Shop</span>';
                parent.appendChild(span);
              }
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-semibold tracking-wide transition-colors ${
                isActive(link.to)
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-white/70 hover:text-white'
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
                  className="gap-2 rounded-xl border-white/20 text-white bg-white/10 hover:bg-white/20 hover:text-white px-3.5 h-10 shadow-sm"
                >
                  <UserIcon className="w-4 h-4 text-emerald-400" />
                  <span className="font-semibold text-xs truncate max-w-[100px]">
                    {user?.name.split(' ')[0] || 'Account'}
                  </span>
                </Button>
              </Link>
              <button
                onClick={logout}
                title="Sign Out"
                className="text-white/40 hover:text-destructive p-2 transition-colors rounded-lg"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link to="/login" className="hidden sm:block">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5 rounded-xl border-white/20 text-white bg-white/10 hover:bg-white/20 hover:text-white px-3.5 h-10 font-bold text-xs shadow-sm"
              >
                <UserIcon className="w-3.5 h-3.5 text-primary" />
                <span>Sign In</span>
              </Button>
            </Link>
          )}

          <Link to="/cart" className="relative">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-xl border-white/20 text-white bg-white/10 hover:bg-white/20 hover:text-white px-4 h-10 shadow-sm"
            >
              <ShoppingCart className="w-4 h-4 text-primary" />
              <span className="font-semibold text-xs sm:text-sm">Cart</span>
              {count > 0 && (
                <span className="w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center font-extrabold shadow-md ml-1 animate-pulse">
                  {count}
                </span>
              )}
            </Button>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white/80 hover:text-white p-2 rounded-lg bg-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-[#121118] border-t border-white/10 px-6 py-5 flex flex-col gap-4 shadow-2xl">
          {isAuthenticated ? (
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-sm font-bold text-white flex items-center gap-2">
                <UserIcon className="w-4 h-4 text-emerald-400" /> {user?.name}
              </span>
              <button onClick={() => { logout(); setMobileOpen(false); }} className="text-xs text-destructive font-semibold">
                Sign Out
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-bold text-primary py-1 flex items-center gap-2"
            >
              <UserIcon className="w-4 h-4" /> Sign In / Create Account
            </Link>
          )}

          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-semibold py-1 transition-colors ${
                isActive(link.to) ? 'text-primary' : 'text-white/80'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-3 flex justify-between items-center text-xs text-white/50">
            <Link to="/terms" onClick={() => setMobileOpen(false)}>Terms</Link>
            <Link to="/privacy" onClick={() => setMobileOpen(false)}>Privacy</Link>
            <Link to="/refund" onClick={() => setMobileOpen(false)}>Refund Policy</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
