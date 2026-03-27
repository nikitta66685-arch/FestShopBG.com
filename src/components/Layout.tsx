import { ReactNode } from 'react';
import { Search, MapPin, User, ShoppingCart, Menu, Ticket } from 'lucide-react';
import { motion } from 'motion/react';

interface LayoutProps {
  children: ReactNode;
  onOpenPlan: () => void;
}

export default function Layout({ children, onOpenPlan }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg shadow-blue-200">
              <Ticket size={24} />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Bilet<span className="text-blue-600">BG</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Events</a>
            <a href="#" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Sell</a>
            <button 
              onClick={onOpenPlan}
              className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors underline underline-offset-4"
            >
              Master Plan
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden rounded-full p-2 text-slate-600 hover:bg-slate-100 md:block">
              <Search size={20} />
            </button>
            <button className="rounded-full p-2 text-slate-600 hover:bg-slate-100">
              <ShoppingCart size={20} />
            </button>
            <button className="flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1.5 pl-1.5 pr-3 text-sm font-medium text-slate-700 shadow-sm hover:border-slate-300 transition-all">
              <div className="h-7 w-7 rounded-full bg-slate-100 flex items-center justify-center">
                <User size={16} />
              </div>
              <span className="hidden sm:inline">Sign In</span>
            </button>
            <button className="md:hidden">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Ticket size={18} />
                </div>
                <span className="text-lg font-bold tracking-tight">BiletBG</span>
              </div>
              <p className="max-w-xs text-sm text-slate-500 leading-relaxed">
                The safest and fastest way to buy and sell tickets in Bulgaria. 
                Verified sellers, escrow payments, and instant delivery.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Marketplace</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600">All Events</a></li>
                <li><a href="#" className="hover:text-blue-600">Sell Tickets</a></li>
                <li><a href="#" className="hover:text-blue-600">Cities</a></li>
                <li><a href="#" className="hover:text-blue-600">Categories</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-600">Buyer Protection</a></li>
                <li><a href="#" className="hover:text-blue-600">Seller Rules</a></li>
                <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-600">Refund Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400">
              © 2026 BiletBG. All rights reserved. Made for Bulgaria with ❤️
            </p>
            <div className="flex gap-4">
               {/* Payment Icons Placeholder */}
               <div className="h-6 w-10 bg-slate-100 rounded"></div>
               <div className="h-6 w-10 bg-slate-100 rounded"></div>
               <div className="h-6 w-10 bg-slate-100 rounded"></div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-slate-200 bg-white px-4 md:hidden">
        <button className="flex flex-col items-center gap-1 text-blue-600">
          <Search size={20} />
          <span className="text-[10px] font-medium">Search</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <MapPin size={20} />
          <span className="text-[10px] font-medium">Cities</span>
        </button>
        <div className="-mt-10 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-200">
          <Ticket size={24} />
        </div>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <User size={20} />
          <span className="text-[10px] font-medium">Profile</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400">
          <Menu size={20} />
          <span className="text-[10px] font-medium">More</span>
        </button>
      </div>
    </div>
  );
}
