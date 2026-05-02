import React from 'react';

const BookService: React.FC = () => {
  return (
    <div className="w-full pb-32 pt-16 px-6 max-w-[800px] mx-auto">
      {/* HEADER SECTION */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
          Book Your Appointment. {/* [cite: 415] */}
        </h1>
        <p className="text-xl font-medium text-zoox-dark/70 mb-8">
          No phone tag, no waiting on hold. Select your service, pick a time, and we'll confirm within the hour. {/* [cite: 416] */}
        </p>
        
        {/* Trust Signals */}
        <div className="flex flex-wrap justify-center gap-3 text-xs font-bold tracking-widest uppercase text-zoox-dark/60">
          <span className="bg-zoox-taupe/50 px-4 py-2 rounded-full">Instant Confirmation {/* [cite: 418] */}</span>
          <span className="bg-zoox-taupe/50 px-4 py-2 rounded-full">Transparent Pricing {/* [cite: 420] */}</span>
          <span className="bg-zoox-taupe/50 px-4 py-2 rounded-full">1-Year Warranty {/* [cite: 419] */}</span>
        </div>
      </div>

      {/* BOOKING FORM */}
      <form className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl space-y-12">
        
        {/* Section 1: Vehicle */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-zoox-mint flex items-center justify-center text-sm mr-4">1</span> 
            Your Vehicle {/* [cite: 429] */}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input type="text" placeholder="Year" className="w-full p-4 bg-gray-50 border-none rounded-2xl" /> {/* [cite: 430] */}
            <input type="text" placeholder="Make" className="w-full p-4 bg-gray-50 border-none rounded-2xl" /> {/* [cite: 431] */}
            <input type="text" placeholder="Model *" className="w-full p-4 bg-gray-50 border-none rounded-2xl" required /> {/* [cite: 432] */}
          </div>
        </div>

        {/* Section 2: Service */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-zoox-mint flex items-center justify-center text-sm mr-4">2</span> 
            Service Details {/* [cite: 434] */}
          </h3>
          <select className="w-full p-4 bg-gray-50 border-none rounded-2xl text-lg focus:ring-2 focus:ring-zoox-forest appearance-none" required> {/* [cite: 435] */}
            <option value="">Select Service Required *</option>
            <option>Oil Change {/* [cite: 436] */}</option>
            <option>Tire Change/Seasonal Swap {/* [cite: 437] */}</option>
            <option>Battery Replacement {/* [cite: 438] */}</option>
            <option>Brake Service {/* [cite: 439] */}</option>
            <option>Engine/Transmission {/* [cite: 440] */}</option>
            <option>Diagnostics & Inspection {/* [cite: 441] */}</option>
            <option>Safety Standards Certificate {/* [cite: 442] */}</option>
          </select>
        </div>

        {/* Section 3: Time & Contact */}
        <div>
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <span className="w-8 h-8 rounded-full bg-zoox-mint flex items-center justify-center text-sm mr-4">3</span> 
            Preferred Time {/* [cite: 445] */}
          </h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input type="date" className="w-full p-4 bg-gray-50 border-none rounded-2xl text-zoox-dark/70" required /> {/* [cite: 445] */}
            <select className="w-full p-4 bg-gray-50 border-none rounded-2xl"> {/* [cite: 446] */}
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Either</option>
            </select>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="First Name *" className="w-full p-4 bg-gray-50 border-none rounded-2xl" required /> {/* [cite: 424] */}
            <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 border-none rounded-2xl" /> {/* [cite: 427] */}
          </div>
        </div>

        <button type="submit" className="w-full bg-zoox-dark text-white font-bold tracking-widest uppercase py-6 rounded-full hover:bg-black transition mt-8 text-lg">
          Request Appointment {/* [cite: 453] */}
        </button>
      </form>
    </div>
  );
};

export default BookService;