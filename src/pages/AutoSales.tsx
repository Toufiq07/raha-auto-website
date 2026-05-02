import React from 'react';
import { Link } from 'react-router-dom';

const AutoSales: React.FC = () => {
  const listings = [
    { name: "2020 Toyota Corolla SE", year: "2020", trans: "Automatic", mileage: "25,300 km", price: "$23,000", condition: "Used - clean, well-maintained" },
    { name: "2005 Lexus ES 330", year: "2005", trans: "Automatic", mileage: "221,000 km", price: "$4,800", condition: "Used - great value" },
    { name: "2007 Honda CR-V", year: "2007", trans: "Automatic", mileage: "206,045 km", price: "$6,800 (was $7,000)", condition: "Used" },
    { name: "2013 Nissan Rogue", year: "2013", trans: "Automatic", mileage: "147,500 km", price: "$8,500", condition: "Accident Free - Certified" }
  ];

  return (
    <div className="w-full pb-32 pt-20 px-6 max-w-[1400px] mx-auto">
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">Auto Sale Listings {/* [cite: 236] */}</h1>
        <p className="text-xl font-medium text-zoox-dark/70 max-w-2xl mx-auto">
          Quality vehicles at honest prices. All cars have been inspected and are ready for the road. {/* [cite: 237] */}
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 mb-32">
        {listings.map((car, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="bg-gray-100 aspect-[4/3] rounded-[3rem] mb-8 overflow-hidden flex items-center justify-center relative shadow-sm group-hover:shadow-xl transition-all duration-500">
               <span className="text-gray-400 font-bold tracking-widest uppercase text-sm">Image Placeholder</span>
               <div className="absolute top-6 left-6 bg-white px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase shadow-sm">
                 {car.condition} {/* [cite: 244] */}
               </div>
            </div>
            <div className="flex justify-between items-start px-4">
              <div>
                <h3 className="text-3xl font-bold mb-2">{car.name} {/* [cite: 242] */}</h3>
                <p className="text-lg text-gray-500 font-medium">{car.mileage} • {car.trans} • {car.year} {/* [cite: 241] */}</p>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-zoox-forest">{car.price} {/* [cite: 243] */}</p>
              </div>
            </div>
            <div className="px-4 mt-8">
              <button className="w-full bg-zoox-dark text-white py-4 rounded-full font-bold tracking-widest uppercase hover:bg-black transition">
                Inquire About This Vehicle {/* [cite: 245] */}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-zoox-taupe p-16 rounded-[3rem] text-center max-w-[1000px] mx-auto">
        <h3 className="text-4xl font-bold mb-6">Looking for a specific vehicle? {/* [cite: 259] */}</h3>
        <p className="text-xl text-zoox-dark/70 mb-10">
          Don't see what you're looking for? Contact us and we'll help you find the right car at the right price. {/* [cite: 260] */}
        </p>
        <Link to="/contact-us" className="inline-block bg-zoox-dark text-white px-10 py-5 rounded-full font-bold tracking-widest uppercase hover:bg-black transition">
          Contact Us {/* [cite: 261] */}
        </Link>
      </div>
    </div>
  );
};

export default AutoSales;