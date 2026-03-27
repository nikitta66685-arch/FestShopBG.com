import { X, CheckCircle2, Target, Zap, Shield, Layout as LayoutIcon, Smartphone, Search, Database, CreditCard, Settings, TrendingUp, Globe, Star, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

interface MasterPlanProps {
  onClose: () => void;
}

export default function MasterPlan({ onClose }: MasterPlanProps) {
  const sections = [
    {
      title: "1. Product Vision",
      icon: <Zap className="text-amber-500" />,
      content: "BiletBG: A premium, trustworthy Bulgarian ticket marketplace. Focus on 60s checkout, mobile-first experience, and localized trust features. Tone: Modern, friendly, minimal friction."
    },
    {
      title: "2. Target Users",
      icon: <Target className="text-red-500" />,
      content: "Buyers (Concerts, Sports, Festivals), Individual Sellers (Fans reselling), Power Sellers (Traders), Event Seekers. Pain points: Fraud, high fees, complex listing."
    },
    {
      title: "3. Core Value Proposition",
      icon: <Star className="text-yellow-500" />,
      content: "Safer than Facebook groups, easier than classifieds, faster than traditional marketplaces. BGN support, transparent pricing, friendly UI."
    },
    {
      title: "4. Core Features (MVP)",
      icon: <CheckCircle2 className="text-green-500" />,
      content: "Buyer: Search, Filter, Seat map, Secure checkout. Seller: 30s listing, PDF/Barcode upload, Auto-pricing, Dashboard. Platform: Escrow, Verified badges, Refund protection."
    },
    {
      title: "5. High-Converting UX Flow",
      icon: <TrendingUp className="text-blue-500" />,
      content: "Buyer: Home -> Search -> Event -> Selection -> Checkout (60s). Seller: Home -> 'Sell' CTA -> Upload -> Price -> Publish. Minimal clicks, urgency indicators."
    },
    {
      title: "6. Homepage Layout",
      icon: <LayoutIcon className="text-purple-500" />,
      content: "Hero (Search + Buy/Sell toggle), Popular Events, Cities, How it Works, Trust Statement, Testimonials. Sticky header, mobile-optimized."
    },
    {
      title: "7. Event Page Structure",
      icon: <Calendar className="text-pink-500" />,
      content: "Title, Date/Location, Ticket list (price sorted), Filters, Seller trust badges, Urgency ('Only 3 left'), Sticky 'Buy Now' CTA."
    },
    {
      title: "8. Ticket Listing Form",
      icon: <CheckCircle2 className="text-emerald-500" />,
      content: "5-step ultra-simple form: Event -> Type -> Price -> Upload -> Publish. Progress bar, earnings preview, price recommendation."
    },
    {
      title: "9. Trust & Safety",
      icon: <Shield className="text-blue-600" />,
      content: "Escrow payments (payout after event), Ticket verification, Fraud detection, Verified seller ratings, Refund policy UI."
    },
    {
      title: "10. Bulgarian Localization",
      icon: <Globe className="text-indigo-500" />,
      content: "Bulgarian default language, BGN currency, Bulgarian cities (Sofia, Plovdiv, etc.), Local payment methods, Legal compliance."
    },
    {
      title: "11. Design System",
      icon: <Settings className="text-slate-500" />,
      content: "Clean, Modern, Minimal. Primary: Trust Blue (#2563eb), Accent: Energetic Purple. Soft shadows, rounded corners, friendly typography (Inter)."
    },
    {
      title: "12. Mobile-First Optimization",
      icon: <Smartphone className="text-slate-800" />,
      content: "One-handed use, Bottom navigation, Sticky buy button, Fast load times, Reduced form fields."
    },
    {
      title: "13. Conversion Elements",
      icon: <Zap className="text-orange-500" />,
      content: "Scarcity ('Only 3 left'), Social proof ('12 viewing'), Price comparison, Urgency countdown, Seller rating."
    },
    {
      title: "14. SEO Structure",
      icon: <Search className="text-blue-400" />,
      content: "City pages, Category pages, Help center. Focus: 'tickets Bulgaria', 'concert tickets Sofia', 'resell tickets Bulgaria'."
    },
    {
      title: "15. Technical Architecture",
      icon: <Database className="text-slate-700" />,
      content: "Frontend: React + Vite + Tailwind. Backend: Express. Database: Users, Events, Tickets, Orders, Payments, Reviews."
    },
    {
      title: "16. Payment Integration",
      icon: <CreditCard className="text-green-600" />,
      content: "Credit/Debit cards, Apple Pay, Google Pay, Local Bulgarian providers, Escrow logic."
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="relative h-full max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-8 py-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">BiletBG Master Plan</h2>
            <p className="text-sm text-slate-500">Product Strategy & UX Architecture</p>
          </div>
          <button 
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="h-full overflow-y-auto px-8 py-8 pb-32">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {sections.map((section, idx) => (
              <div key={idx} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-5 hover:border-blue-100 hover:bg-white transition-all">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  {section.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{section.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{section.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Database Schema Section */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Database className="text-slate-700" size={20} />
              Database Schema (MVP)
            </h3>
            <div className="rounded-2xl bg-slate-900 p-6 text-slate-300 font-mono text-xs leading-relaxed overflow-x-auto">
              <pre>{`
Users: { id, name, email, role, avatar, rating, verified }
Events: { id, title, date, location, city, image, category, minPrice }
Tickets: { id, eventId, sellerId, price, section, type, quantity, status }
Orders: { id, ticketId, buyerId, totalPrice, status, createdAt }
Payments: { id, orderId, amount, provider, status, escrowStatus }
Reviews: { id, sellerId, buyerId, rating, comment, createdAt }
              `}</pre>
            </div>
          </div>

          {/* Feature Prioritization */}
          <div className="mt-12">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <TrendingUp className="text-blue-500" size={20} />
              Feature Prioritization
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-blue-100 bg-blue-50/30 p-6">
                <h4 className="font-bold text-blue-900 mb-4">Phase 1 (MVP)</h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Core Buyer/Seller Flows</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} /> PDF Ticket Upload</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Escrow Payment Logic</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Basic Search & Filter</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-slate-100 bg-slate-50/30 p-6">
                <h4 className="font-bold text-slate-900 mb-4">Phase 2 (Growth)</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Price Drop Alerts</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Referral System</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Advanced Analytics</li>
                  <li className="flex items-center gap-2"><CheckCircle2 size={14} /> Mobile App (iOS/Android)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
