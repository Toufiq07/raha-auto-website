import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="w-full pb-32">
      {/* HEADER SECTION */}
      <section className="pt-20 pb-24 px-6 max-w-[1200px] mx-auto text-center">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
          Auto Service. {/* [cite: 133] */}
        </h1>
        <p className="text-xl md:text-2xl font-medium text-zoox-dark/70 max-w-3xl mx-auto mb-12">
          Honest Quality Service. Backed with a 1-year parts warranty. {/* [cite: 134] */}
        </p>
        
        {/* Quick Links Pills */}
        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold tracking-widest uppercase">
          <span className="bg-white px-6 py-3 rounded-full shadow-sm">Oil Change</span> {/* [cite: 136] */}
          <span className="bg-white px-6 py-3 rounded-full shadow-sm">Tire Change</span> {/* [cite: 136] */}
          <span className="bg-white px-6 py-3 rounded-full shadow-sm">Battery Services</span> {/* [cite: 136] */}
          <span className="bg-white px-6 py-3 rounded-full shadow-sm">Engine & Transmission</span> {/* [cite: 136] */}
          <span className="bg-white px-6 py-3 rounded-full shadow-sm">Fluids</span> {/* [cite: 136] */}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-8 mb-32">
        {/* Brakes */}
        <div className="bg-white p-12 rounded-4xl shadow-sm hover:shadow-md transition">
          <h2 className="text-3xl font-bold mb-8">Brakes {/* [cite: 138] */}</h2>
          <ul className="space-y-4 text-lg font-medium text-zoox-dark/80">
            <li>• ABS Control Module Replacement {/* [cite: 139] */}</li>
            <li>• ABS Speed Sensor Replacement {/* [cite: 141] */}</li>
            <li>• Brake Booster Replacement {/* [cite: 144] */}</li>
            <li>• Brake Caliper & Pad Replacement {/* [cite: 146, 147] */}</li>
            <li>• Brake Rotor Replacement / Resurfacing {/* [cite: 148] */}</li>
            <li>• Full Brake System Inspection {/* [cite: 150] */}</li>
          </ul>
        </div>

        {/* Engine & Transmission */}
        <div className="bg-zoox-forest text-zoox-mint p-12 rounded-4xl shadow-sm hover:shadow-md transition md:translate-y-12">
          <h2 className="text-3xl font-bold mb-8">Engine & Transmission {/* [cite: 179] */}</h2>
          <ul className="space-y-4 text-lg font-medium text-zoox-mint/80">
            <li>• Axle Shaft Seal Replacement {/* [cite: 180] */}</li>
            <li>• CV Axle Shaft Assembly Replacement {/* [cite: 181] */}</li>
            <li>• Drive Belt Replacement {/* [cite: 187] */}</li>
            <li>• Engine Chain / Timing Chain Replacement {/* [cite: 188] */}</li>
            <li>• Transmission Service {/* [cite: 190] */}</li>
          </ul>
        </div>

        {/* Diagnostics */}
        <div className="bg-white p-12 rounded-4xl shadow-sm hover:shadow-md transition">
          <h2 className="text-3xl font-bold mb-8">Diagnostics & Inspection {/* [cite: 192] */}</h2>
          <ul className="space-y-4 text-lg font-medium text-zoox-dark/80">
            <li>• Check Engine Light Is On {/* [cite: 197] */}</li>
            <li>• Car Is Not Starting / Overheating {/* [cite: 194, 195] */}</li>
            <li>• General & Pre-Sale Inspection {/* [cite: 198, 199] */}</li>
            <li>• Safety Standards Certificate Inspection {/* [cite: 203] */}</li>
            <li>• Uber Vehicle Inspection {/* [cite: 204] */}</li>
          </ul>
        </div>

        {/* Fluids & Battery */}
        <div className="bg-zoox-taupe p-12 rounded-4xl shadow-sm hover:shadow-md transition md:translate-y-12">
          <h2 className="text-3xl font-bold mb-8">Fluids & Battery {/* [cite: 152, 170] */}</h2>
          <ul className="space-y-4 text-lg font-medium text-zoox-dark/80">
            <li>• Oil And Filter Change {/* [cite: 157] */}</li>
            <li>• Brake System & Cooling System Flush {/* [cite: 153, 155] */}</li>
            <li>• Transmission & Differential Fluid Service {/* [cite: 156, 161] */}</li>
            <li>• Battery Boost & Replacement {/* [cite: 171, 173] */}</li>
            <li>• Service Battery And Cables {/* [cite: 177] */}</li>
          </ul>
        </div>
      </section>

      {/* CTA BLOCK */}
      <section className="max-w-[1200px] mx-auto px-6">
        <div className="bg-zoox-dark text-white p-16 rounded-[3rem] text-center">
          <h3 className="text-4xl font-bold mb-6">Don't see the service you need? {/* [cite: 210] */}</h3>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            We offer more services not listed here. Please contact us for more details. {/* [cite: 211] */}
          </p>
          <Link to="/contact-us" className="inline-block bg-zoox-mint text-zoox-dark px-10 py-5 rounded-full font-bold tracking-widest uppercase hover:bg-white transition">
            Contact Us {/* */}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;