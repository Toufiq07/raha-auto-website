import React from 'react';

const SellMyCar: React.FC = () => {
  return (
    <div className="w-full pb-32 pt-20 px-6 max-w-[1400px] mx-auto overflow-hidden">
      <div className="text-center mb-16 opacity-0 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">Sell Your Car.</h1> [cite: 269]
        <h2 className="text-3xl font-bold text-zoox-dark mb-6">Get a Fair Offer Today</h2> [cite: 270]
        <p className="text-xl text-zoox-dark/70">We buy used cars. Honest valuations, same-day offers, no pressure. [cite: 271]</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-24">
        <div className="bg-white p-12 rounded-4xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="w-16 h-16 bg-zoox-mint rounded-full flex items-center justify-center font-bold text-2xl mb-8">1</div>
          <h3 className="text-2xl font-bold mb-4">Step 1</h3> [cite: 274]
          <p className="text-lg text-zoox-dark/70">Tell Us About Your Car. Fill in the form with vehicle details. [cite: 274, 275]</p>
        </div>
        <div className="bg-zoox-taupe p-12 rounded-4xl opacity-0 animate-fade-in-up md:translate-y-8" style={{ animationDelay: '0.2s' }}>
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center font-bold text-2xl mb-8">2</div>
          <h3 className="text-2xl font-bold mb-4">Step 2</h3> [cite: 277]
          <p className="text-lg text-zoox-dark/70">Get Your Valuation. We review and contact you within 24 hours. [cite: 277, 279]</p>
        </div>
        <div className="bg-zoox-forest text-zoox-mint p-12 rounded-4xl opacity-0 animate-fade-in-up md:translate-y-16" style={{ animationDelay: '0.3s' }}>
          <div className="w-16 h-16 bg-zoox-mint text-zoox-dark rounded-full flex items-center justify-center font-bold text-2xl mb-8">3</div>
          <h3 className="text-2xl font-bold mb-4">Step 3</h3> [cite: 280]
          <p className="text-lg text-zoox-mint/80">Get Paid. Agree on a price and walk away with payment same-day. [cite: 280, 281]</p>
        </div>
      </div>

      <section className="max-w-[1000px] mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="bg-white p-12 md:p-16 rounded-[3rem] shadow-xl">
          <h3 className="text-3xl font-bold mb-10">Quote Request Form</h3> [cite: 283]
          <form className="grid md:grid-cols-2 gap-8">
            <input type="text" placeholder="First Name *" className="p-4 bg-gray-50 border-none rounded-2xl" required /> [cite: 285]
            <input type="text" placeholder="Last Name *" className="p-4 bg-gray-50 border-none rounded-2xl" required /> [cite: 286]
            <input type="text" placeholder="Model *" className="p-4 bg-gray-50 border-none rounded-2xl" required /> [cite: 292]
            <input type="number" placeholder="Mileage (km) *" className="p-4 bg-gray-50 border-none rounded-2xl" required /> [cite: 294]
            <button type="submit" className="md:col-span-2 w-full bg-zoox-dark text-white font-bold py-5 rounded-full uppercase tracking-widest mt-8">
              Submit My Car Details [cite: 305]
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default SellMyCar;