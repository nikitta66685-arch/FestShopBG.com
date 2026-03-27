import { Search, MapPin, Calendar, ArrowRight, ShieldCheck, Zap, Heart, Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { MOCK_EVENTS, CITIES } from '../constants';

export default function Home() {
  return (
    <div className="pb-24 md:pb-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,#EFF6FF_0%,#FFFFFF_100%)] opacity-70" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-600 ring-1 ring-inset ring-blue-700/10">
                <Zap size={14} />
                The safest way to buy & sell tickets in Bulgaria
              </span>
              <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
                Find your next <span className="text-blue-600">unforgettable</span> experience
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Buy and resell tickets for concerts, sports, and festivals across Bulgaria. 
                Verified authenticity, secure payments, and instant delivery.
              </p>
            </motion.div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-10 max-w-3xl"
            >
              <div className="relative flex items-center rounded-2xl bg-white p-2 shadow-2xl shadow-blue-100 ring-1 ring-slate-200 focus-within:ring-2 focus-within:ring-blue-600 transition-all">
                <div className="flex flex-1 items-center gap-3 px-4">
                  <Search className="text-slate-400" size={20} />
                  <input
                    type="text"
                    placeholder="Artist, team, or event..."
                    className="w-full border-none bg-transparent py-3 text-slate-900 placeholder:text-slate-400 focus:ring-0 sm:text-sm"
                  />
                </div>
                <div className="hidden h-10 w-px bg-slate-200 sm:block" />
                <div className="hidden flex-1 items-center gap-3 px-4 sm:flex">
                  <MapPin className="text-slate-400" size={20} />
                  <select className="w-full border-none bg-transparent py-3 text-slate-900 focus:ring-0 sm:text-sm appearance-none cursor-pointer">
                    <option>All Cities</option>
                    {CITIES.map(city => <option key={city}>{city}</option>)}
                  </select>
                </div>
                <button className="rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-95">
                  Search
                </button>
              </div>
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                <span className="text-xs font-medium text-slate-400">Popular:</span>
                {['Ed Sheeran', 'UEFA Nations League', 'Spirit of Burgas'].map(tag => (
                  <button key={tag} className="text-xs font-semibold text-slate-600 hover:text-blue-600 transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Events */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Trending Events</h2>
            <p className="mt-1 text-sm text-slate-500">The most anticipated events in Bulgaria right now.</p>
          </div>
          <a href="#" className="group flex items-center gap-1 text-sm font-semibold text-blue-600 hover:text-blue-700">
            View all events
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MOCK_EVENTS.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-900 shadow-sm">
                    {event.category}
                  </span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {event.title}
                </h3>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar size={14} className="text-slate-400" />
                    {new Date(event.date).toLocaleDateString('bg-BG', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <MapPin size={14} className="text-slate-400" />
                    {event.location}, {event.city}
                  </div>
                </div>
                <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-50">
                  <div>
                    <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">From</span>
                    <div className="text-lg font-bold text-slate-900">{event.minPrice} <span className="text-sm font-medium">лв.</span></div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-medium text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">
                      {event.ticketCount} left
                    </span>
                  </div>
                </div>
              </div>
              <a href="#" className="absolute inset-0 z-10" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-slate-900 py-24 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-[100px]" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-[100px]" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why trust BiletBG?</h2>
            <p className="mt-4 text-slate-400">We've built the most secure ticket resale ecosystem in Bulgaria.</p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600/10 text-blue-500 ring-1 ring-blue-500/20">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Escrow Protection</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We hold the payment until you've successfully entered the event. 
                Sellers only get paid after the event is over.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-600/10 text-purple-500 ring-1 ring-purple-500/20">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Ticket Verification</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our team manually verifies high-value listings and uses automated 
                barcode validation for digital tickets.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-500 ring-1 ring-emerald-500/20">
                <Star size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Verified Sellers</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We track seller history and ratings. Top-rated sellers get 
                priority badges and faster payouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden bg-blue-600 px-6 py-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 md:pb-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have extra tickets?
              <br />
              Sell them in 30 seconds.
            </h2>
            <p className="mt-6 text-lg leading-8 text-blue-100">
              List your tickets for free. Set your price, upload the PDF, and get paid 
              directly to your bank account.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <a
                href="#"
                className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-blue-600 shadow-sm hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all active:scale-95"
              >
                List a Ticket
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white group flex items-center gap-1">
                How it works <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://picsum.photos/seed/app/1200/800"
              alt="App screenshot"
              width={1824}
              height={1080}
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
