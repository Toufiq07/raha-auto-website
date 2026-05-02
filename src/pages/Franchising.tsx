import React from 'react';

const Franchising: React.FC = () => {
  return (
    <div className="w-full pb-32 pt-20 px-6 max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column: Info */}
        <div>
          <p className="text-xs font-bold tracking-widest uppercase text-zoox-dark/50 mb-6">Join the Network {/* */}</p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Our Franchise Opportunity. {/* [cite: 315] */}
          </h1>
          <p className="text-xl font-medium text-zoox-dark/80 mb-6 leading-relaxed">
            Raha Auto is currently seeking new franchisees across Canada, including immediate, prime opportunities in the Greater Toronto Area. {/* [cite: 316] */}
          </p>
          <p className="text-lg font-medium text-zoox-dark/70 mb-12 leading-relaxed">
            Our franchise has been carefully structured to provide exceptional business opportunities to motivated, experienced entrepreneurs. This includes a comprehensive training program, large protected territories, a competitive start-up investment... {/* [cite: 318, 319] */}
          </p>
          
          <h2 className="text-3xl font-bold mb-8">Benefits {/* [cite: 325] */}</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-lg font-medium text-zoox-dark/80">
            <div className="flex items-start">
              <span className="text-zoox-forest mr-3">✓</span> Highly Respected Brand Name {/* [cite: 327] */}
            </div>
            <div className="flex items-start">
              <span className="text-zoox-forest mr-3">✓</span> Competitive Start-Up Investment {/* [cite: 329] */}
            </div>
            <div className="flex items-start">
              <span className="text-zoox-forest mr-3">✓</span> Profitable Business Model {/* [cite: 330] */}
            </div>
            <div className="flex items-start">
              <span className="text-zoox-forest mr-3">✓</span> Premium Territories Available {/* [cite: 330] */}
            </div>
            <div className="flex items-start">
              <span className="text-zoox-forest mr-3">✓</span> Full Training Provided {/* [cite: 330] */}
            </div>
            <div className="flex items-start">
              <span className="text-zoox-forest mr-3">✓</span> Industry-Leading Support {/* [cite: 330] */}
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-xl h-fit">
          <h3 className="text-3xl font-bold mb-8">Franchise Application {/* [cite: 344] */}</h3>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="First Name *" className="w-full p-4 bg-gray-50 border-none rounded-2xl" required /> {/* [cite: 346] */}
              <input type="text" placeholder="Last Name *" className="w-full p-4 bg-gray-50 border-none rounded-2xl" required /> {/* [cite: 347] */}
            </div>
            <input type="email" placeholder="Email Address *" className="w-full p-4 bg-gray-50 border-none rounded-2xl" required /> {/* [cite: 349] */}
            <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 border-none rounded-2xl" /> {/* [cite: 348] */}
            
            <hr className="border-gray-200 my-4" />
            
            <input type="text" placeholder="Which city / area are you interested in? *" className="w-full p-4 bg-gray-50 border-none rounded-2xl" required /> {/* [cite: 357] */}
            <input type="number" placeholder="Estimated amount to invest (CAD $) *" className="w-full p-4 bg-gray-50 border-none rounded-2xl" required /> {/* [cite: 359] */}
            
            <div className="pt-4">
              <label className="flex items-start space-x-4 text-sm font-medium text-zoox-dark/70 cursor-pointer">
                <input type="checkbox" className="mt-1 w-5 h-5 rounded border-gray-300 text-zoox-forest focus:ring-zoox-forest" /> {/* [cite: 369] */}
                <span>I agree to receive other communications from Raha Auto. You can unsubscribe at any time. See our Privacy Policy for full details. {/* [cite: 369, 370] */}</span>
              </label>
            </div>
            
            <button type="submit" className="w-full bg-zoox-dark text-white font-bold tracking-widest uppercase py-5 rounded-full hover:bg-black transition mt-8">
              Submit {/* [cite: 372] */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Franchising;