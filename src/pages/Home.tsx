import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* HERO SECTION - Loads immediately */}
      <section className="pt-20 pb-32 px-6 text-center max-w-[1200px] mx-auto opacity-0 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
          Drive Happy.<br />Drive Raha. {/* [cite: 34] */}
        </h1>
        <p className="text-xl md:text-2xl font-medium text-zoox-dark/70 max-w-3xl mx-auto mb-12">
          Honest service, transparent pricing, and a 1-year parts warranty - from a team that genuinely cares about your car and your budget. Located in Scarborough, open 6 days a week. {/* [cite: 36, 37] */}
        </p>
        
        {/* Massive Rounded Hero Image/Video Container */}
        <div className="w-full aspect-[21/9] bg-zoox-forest rounded-4xl mb-12 overflow-hidden relative shadow-2xl">
          <img src="/assets/hero-car.jpg" alt="Raha Auto Hero" className="w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Link to="/book" className="bg-zoox-mint text-zoox-dark px-8 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-white transition hover:scale-105 duration-300 shadow-lg">
              Book a Service {/* [cite: 39] */}
            </Link>
          </div>
        </div>

        {/* Floating Stats - Asymmetrical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-white p-12 rounded-4xl shadow-sm hover:shadow-md transition">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Google Rating {/* [cite: 44] */}</p>
            <p className="text-6xl font-bold">4.9 {/* [cite: 43] */}</p>
          </div>
          <div className="bg-white p-12 rounded-4xl shadow-sm hover:shadow-md transition">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Years Serving GTA {/* [cite: 49] */}</p>
            <p className="text-6xl font-bold">6+ {/* [cite: 48] */}</p>
          </div>
          <div className="bg-zoox-dark text-white p-12 rounded-4xl shadow-sm hover:shadow-md transition">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Vehicles Serviced {/* [cite: 51] */}</p>
            <p className="text-6xl font-bold text-zoox-mint">500+ {/* [cite: 50] */}</p>
          </div>
        </div>
      </section>

      {/* TICKER STRIP - Fades in after 0.2s */}
      <div 
        className="w-full py-8 bg-zoox-taupe overflow-hidden whitespace-nowrap mb-32 opacity-0 animate-fade-in-up" 
        style={{ animationDelay: '0.2s' }}
      >
        <div className="inline-block text-3xl font-medium tracking-tight text-zoox-dark">
          Oil Change • Tire Service • Battery Replacement • Engine Repair • Brake Service • Safety Certificate • 1-Year Parts Warranty • Used Car Sales • Diagnostics • Uber Inspection {/* [cite: 54, 55] */}
        </div>
      </div>

      {/* CUSTOMER REVIEWS - Fades in after 0.4s */}
      <section 
        className="max-w-[1400px] mx-auto px-6 mb-32 grid lg:grid-cols-2 gap-16 items-center opacity-0 animate-fade-in-up"
        style={{ animationDelay: '0.4s' }}
      >
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-zoox-dark/50 mb-6">Customer satisfaction is our commitment. {/* [cite: 59] */}</p>
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Our Customers<br />Have Spoken. {/* [cite: 58] */}
          </h2>
        </div>

        <div className="space-y-6">
          {/* Review Card 1 */}
          <div className="bg-white p-10 rounded-4xl shadow-sm">
            <p className="text-xl font-medium leading-relaxed mb-8">
              "Zahid Bhai is a truly wonderful person. He changed the engine chain of my car perfectly, and always supported me with help and advice..." {/* [cite: 63] */}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold tracking-wide">MD Mamun Ahmod {/* [cite: 63] */}</span>
              <span className="text-yellow-500 font-bold">★★★★★ {/* [cite: 63] */}</span>
            </div>
          </div>
          
          {/* Review Card 2 */}
          <div className="bg-zoox-forest text-zoox-mint p-10 rounded-4xl shadow-sm ml-0 md:ml-12">
            <p className="text-xl font-medium leading-relaxed mb-8">
              "Customer service is top-tier, best one I've experienced so far! They are very honest, knowledgeable and their pricing is very affordable." {/* [cite: 63] */}
            </p>
            <div className="flex items-center justify-between">
              <span className="font-bold tracking-wide">Jojo Galit {/* [cite: 63] */}</span>
              <span className="text-yellow-400 font-bold">★★★★★ {/* [cite: 63] */}</span>
            </div>
          </div>
        </div>
      </section>

      {/* AUTO SALES PREVIEW - Fades in after 0.6s */}
      <section 
        className="bg-white py-32 rounded-[3rem] opacity-0 animate-fade-in-up"
        style={{ animationDelay: '0.6s' }}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-5xl font-bold mb-4">Auto Sale Listings {/* [cite: 86] */}</h2>
              <p className="text-xl text-gray-500">Quality vehicles at honest prices. {/* [cite: 87] */}</p>
            </div>
            <Link to="/cars" className="mt-8 md:mt-0 text-sm font-bold tracking-widest uppercase hover:opacity-60 transition flex items-center">
              See all vehicles <span className="ml-2">→</span> {/* [cite: 91] */}
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Listing 1 */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 aspect-video rounded-4xl mb-6 overflow-hidden flex items-center justify-center relative">
                 <img src="/assets/corolla.jpg" alt="2020 Toyota Corolla SE" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition duration-500"></div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold mb-1">2020 Toyota Corolla SE {/* [cite: 89, 247] */}</h3>
                  <p className="text-gray-500 font-medium">25,300 km • Automatic {/* [cite: 89, 247] */}</p>
                </div>
                <p className="text-2xl font-bold">$23,000 {/* [cite: 89, 247] */}</p>
              </div>
            </div>

            {/* Listing 2 */}
            <div className="group cursor-pointer">
              <div className="bg-gray-100 aspect-video rounded-4xl mb-6 overflow-hidden flex items-center justify-center relative">
                 <img src="/assets/nissan.jpg" alt="2013 Nissan Rogue" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                 <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition duration-500"></div>
              </div>
              <div className="flex justify-between items-start px-2">
                <div>
                  <h3 className="text-2xl font-bold mb-1">2013 Nissan Rogue {/* [cite: 89, 257] */}</h3>
                  <p className="text-gray-500 font-medium">147,500 km • Accident Free {/* [cite: 89, 257] */}</p>
                </div>
                <p className="text-2xl font-bold">$8,500 {/* [cite: 89, 257] */}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;