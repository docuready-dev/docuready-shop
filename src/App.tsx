import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from '@/context/AuthContext';
import { Toaster } from 'sonner';
import Navbar from '@/components/Navbar';
import ScrollToTop from '@/components/ScrollToTop';
import QuickNav from '@/components/QuickNav';
import Footer from '@/components/Footer';

// Pages
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import CartPage from '@/pages/CartPage';
import CheckoutPage from '@/pages/CheckoutPage';
import ClientDashboard from '@/pages/ClientDashboard';
import AdminDashboard from '@/pages/AdminDashboard';
import AuthPage from '@/pages/AuthPage';
import AboutPage from '@/pages/AboutPage';
import TermsPage from '@/pages/TermsPage';
import PrivacyPage from '@/pages/PrivacyPage';
import RefundPage from '@/pages/RefundPage';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter basename={import.meta.env.BASE_URL}>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary">
            <Navbar />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
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
