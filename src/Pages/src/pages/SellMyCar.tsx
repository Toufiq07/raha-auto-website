import React from 'react';

const SellMyCar: React.FC = () => {
  return (
    <div className="w-full pb-32">
      {/* HEADER SECTION */}
      <section className="pt-20 pb-24 px-6 max-w-[1000px] mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
          Sell Your Car. {/* [cite: 269] */}
        </h1>
        <h2 className="text-3xl font-bold text-zoox-dark mb-6">
          Get a Fair Offer Today {/* [cite: 270] */}
        </h2>
        <p className="text-xl md:text-2xl font-medium text-zoox-dark/70">
          We buy used cars. Honest valuations, same-day offers, no pressure. {/* [cite: 271] */}
        </p>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="max-w-[1400px] mx-auto px-6 mb-32 grid md:grid-cols-3 gap-8">
        <div className="bg-white p-12 rounded-4xl shadow-sm">
          <div className="w-16 h-16 bg-zoox-mint text-zoox-dark rounded-full flex items-center justify-center font-bold text-2xl mb-8">1</div>
          <h3 className="text-2xl font-bold mb-4">Tell Us About Your Car {/* [cite: 274] */}</h3>
          <p className="text-lg text-zoox-dark/70 font-medium">
            Fill in the form below with your vehicle details: year, make, model, mileage, and condition. The more detail you give, the faster we can get back to you. {/* [cite: 275, 276, 278] */}
          </p>
        </div>
        <div className="bg-zoox-taupe p-12 rounded-4xl shadow-sm md:translate-y-8">
          <div className="w-16 h-16 bg-white text-zoox-dark rounded-full flex items-center justify-center font-bold text-2xl mb-8">2</div>
          <h3 className="text-2xl font-bold mb-4">Get Your Valuation {/* [cite: 277] */}</h3>
          <p className="text-lg text-zoox-dark/70 font-medium">
            We'll review your submission and contact you within 24 hours with a fair market valuation based on current GTA used car prices. {/* [cite: 279] */}
          </p>
        </div>
        <div className="bg-zoox-forest text-zoox-mint p-12 rounded-4xl shadow-sm md:translate-y-16">
          <div className="w-16 h-16 bg-zoox-mint text-zoox-dark rounded-full flex items-center justify-center font-bold text-2xl mb-8">3</div>
          <h3 className="text-2xl font-bold mb-4">Get Paid {/* [cite: 280] */}</h3>
          <p className="text-lg text-zoox-mint/80 font-medium">
            Agree on a price, bring your car in, and walk away with payment the same day. No delays, no hidden fees. {/* [cite: 281, 282] */}
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="max-w-[1000px] mx-auto px-6">
        <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-xl">
          <h3 className="text-3xl font-bold mb-10">Quote Request Form {/* [cite: 283] */}</h3>
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <input type="text" placeholder="First Name *" className="w-full p-4 bg-gray-50 border-none rounded-2xl text-lg focus:ring-2 focus:ring-zoox-forest" required /> {/* [cite: 285] */}
              <input type="text" placeholder="Last Name *" className="w-full p-4 bg-gray-50 border-none rounded-2xl text-lg focus:ring-2 focus:ring-zoox-forest" required /> {/* [cite: 286] */}
              <input type="tel" placeholder="Phone Number *" className="w-full p-4 bg-gray-50 border-none rounded-2xl text-lg focus:ring-2 focus:ring-zoox-forest" required /> {/* [cite: 287] */}
              <input type="email" placeholder="Email Address *" className="w-full p-4 bg-gray-50 border-none rounded-2xl text-lg focus:ring-2 focus:ring-zoox-forest" required /> {/* [cite: 288] */}
            </div>
            
            <hr className="border-gray-200" />
            
            <div className="grid md:grid-cols-2 gap-8">
              <input type="text" placeholder="Year" className="w-full p-4 bg-gray-50 border-none rounded-2xl text-lg focus:ring-2 focus:ring-zoox-forest" /> {/* [cite: 290] */}
              <input type="text" placeholder="Make" className="w-full p-4 bg-gray-50 border-none rounded-2xl text-lg focus:ring-2 focus:ring-zoox-forest" /> {/* [cite: 291] */}
              <input type="text" placeholder="Model *" className="w-full p-4 bg-gray-50 border-none rounded-2xl text-lg focus:ring-2 focus:ring-zoox-forest" required /> {/* [cite: 292] */}
              <input type="number" placeholder="Mileage (km) *" className="w-full p-4 bg-gray-50 border-none rounded-2xl text-lg focus:ring-2 focus:ring-zoox-forest" required /> {/* [cite: 294] */}
              
              <select className="w-full p-4 bg-gray-50 border-none rounded-2xl text-lg focus:ring-2 focus:ring-zoox-forest"> {/* [cite: 296] */}
                <option value="">Condition</option>
                <option>Excellent</option><option>Good</option><option>Fair</option><option>Needs Work</option>
              </select>
              
              <select className="w-full p-4 bg-gray-50 border-none rounded-2xl text-lg focus:ring-2 focus:ring-zoox-forest"> {/* [cite: 297] */}
                <option value="">Accident History</option>
                <option>No</option><option>Yes</option><option>Unknown</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-zoox-dark text-white font-bold tracking-widest uppercase py-5 rounded-full hover:bg-black transition mt-8">
              Submit My Car Details {/* [cite: 305] */}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SellMyCar;