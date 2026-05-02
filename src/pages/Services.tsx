import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="w-full pb-32 overflow-hidden">
      <section className="pt-20 pb-24 px-6 max-w-[1200px] mx-auto text-center opacity-0 animate-fade-in-up">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">Auto Service.</h1> [cite: 133]
        <p className="text-xl md:text-2xl font-medium text-zoox-dark/70 max-w-3xl mx-auto mb-12">
          Honest Quality Service. Backed with a 1-year parts warranty. [cite: 134]
        </p>
      </section>

      <section className="max-w-[1400px] mx-auto px-6 grid md:grid-cols-2 gap-8 mb-32">
        <div className="bg-white p-12 rounded-4xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest text-gray-400">Brakes</h2> [cite: 138]
          <ul className="space-y-4 text-lg font-medium text-zoox-dark/80">
            <li>• ABS Control Module Replacement [cite: 139]</li>
            <li>• Brake Booster Replacement [cite: 144]</li>
            <li>• Brake Pad & Rotor Replacement [cite: 147, 148]</li>
            <li>• Full Brake System Inspection [cite: 150]</li>
          </ul>
        </div>

        <div className="bg-zoox-forest text-zoox-mint p-12 rounded-4xl opacity-0 animate-fade-in-up md:translate-y-12" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest opacity-50">Fluids</h2> [cite: 152]
          <ul className="space-y-4 text-lg font-medium text-zoox-mint/80">
            <li>• Oil And Filter Change [cite: 157]</li>
            <li>• Brake & Cooling System Flush [cite: 153, 155]</li>
            <li>• Transmission Fluid Service [cite: 161]</li>
            <li>• Power Steering Fluid Service [cite: 158]</li>
          </ul>
        </div>

        <div className="bg-zoox-taupe p-12 rounded-4xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest text-zoox-dark/40">Inspection</h2> [cite: 200]
          <ul className="space-y-4 text-lg font-medium text-zoox-dark/80">
            <li>• Safety Standards Certificate Inspection [cite: 203]</li>
            <li>• Uber Vehicle Inspection [cite: 204]</li>
            <li>• Pre-Sale Inspection [cite: 199]</li>
            <li>• Check Engine Light Diagnostics [cite: 197]</li>
          </ul>
        </div>

        <div className="bg-white p-12 rounded-4xl opacity-0 animate-fade-in-up md:translate-y-12" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-3xl font-bold mb-8 uppercase tracking-widest text-gray-400">Battery</h2> [cite: 170]
          <ul className="space-y-4 text-lg font-medium text-zoox-dark/80">
            <li>• Battery Boost & Replacement [cite: 171, 173]</li>
            <li>• Battery Cable Replacement [cite: 172]</li>
            <li>• Terminal Replacement [cite: 175, 176]</li>
          </ul>
        </div>
      </section>

      <section className="max-w-[1200px] mx-auto px-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <div className="bg-zoox-dark text-white p-16 rounded-[3rem] text-center">
          <h3 className="text-4xl font-bold mb-6">Don't see what you need?</h3> [cite: 206]
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            We offer more services not listed here. Please contact us for more details. [cite: 211]
          </p>
          <Link to="/contact-us" className="inline-block bg-zoox-mint text-zoox-dark px-10 py-5 rounded-full font-bold tracking-widest uppercase hover:bg-white transition">
            Contact Us [cite: 261]
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;