import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import QuickNav from '@/components/QuickNav';
import Footer from '@/components/Footer';

// Core entry page (direct import for immediate first-paint)
import HomePage from '@/pages/HomePage';

// Lazy-loaded secondary pages (code-split chunks)
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const CartPage = lazy(() => import('@/pages/CartPage'));
const CheckoutPage = lazy(() => import('@/pages/CheckoutPage'));
const ClientDashboard = lazy(() => import('@/pages/ClientDashboard'));
const AdminDashboard = lazy(() => import('@/pages/AdminDashboard'));
const AuthPage = lazy(() => import('@/pages/AuthPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ImpactPage = lazy(() => import('@/pages/ImpactPage'));
const TermsPage = lazy(() => import('@/pages/TermsPage'));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage'));
const RefundPage = lazy(() => import('@/pages/RefundPage'));

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-5 h-5 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin opacity-60" />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
            <Navbar />
            <main className="flex-1">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/impact" element={<ImpactPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/dashboard" element={<ClientDashboard />} />
                  <Route path="/login" element={<AuthPage />} />
                  <Route path="/auth" element={<AuthPage />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/terms" element={<TermsPage />} />
                  <Route path="/privacy" element={<PrivacyPage />} />
                  <Route path="/refund" element={<RefundPage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <QuickNav />
          </div>
          <Toaster richColors position="top-right" />
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}
