import React from 'react';

const ContactUs: React.FC = () => {
  return (
    <div className="w-full pb-32 pt-20 px-6 max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-stretch">
        
        {/* Contact Info Card */}
        <div className="bg-zoox-forest text-zoox-mint p-12 md:p-20 rounded-[3rem] shadow-sm flex flex-col justify-between">
          <div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Contact Us. {/* [cite: 379] */}
            </h1>
            <p className="text-xl font-medium text-zoox-mint/80 mb-16 leading-relaxed max-w-md">
              Get in touch - we're open 6 days a week and happy to help with service bookings, vehicle inquiries, or any questions. {/* [cite: 381, 385] */}
            </p>
          </div>
          
          <div className="space-y-8 text-lg font-medium">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-zoox-mint/50 mb-2">Address {/*  */}</p>
              <p>773 Warden Ave. UNIT 11<br />Scarborough, ON M1L 4C2 {/*  */}</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-zoox-mint/50 mb-2">Phone {/*  */}</p>
              <p>+1 (416) 750-0505 {/*  */}</p>
              <p>+1 (647) 780-2485 (Alt) {/*  */}</p>
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-zoox-mint/50 mb-2">Hours {/*  */}</p>
              <p>Mon - Sat: 10:00 AM - 7:00 PM {/*  */}</p>
              <p>Sunday: 10:00 AM - 5:00 PM {/*  */}</p>
            </div>
          </div>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white p-12 md:p-20 rounded-[3rem] shadow-sm">
          <h2 className="text-3xl font-bold mb-10">Send a Message {/* */}</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input type="text" placeholder="First Name *" className="w-full p-4 bg-gray-50 border-none rounded-2xl" required /> {/* [cite: 388] */}
              <input type="text" placeholder="Last Name" className="w-full p-4 bg-gray-50 border-none rounded-2xl" /> {/* [cite: 389] */}
            </div>
            <input type="email" placeholder="Email *" className="w-full p-4 bg-gray-50 border-none rounded-2xl" required /> {/* [cite: 390] */}
            <input type="tel" placeholder="Phone #" className="w-full p-4 bg-gray-50 border-none rounded-2xl" /> {/* [cite: 391] */}
            
            <div className="pt-4 grid grid-cols-3 gap-4">
              <input type="text" placeholder="Make" className="w-full p-4 bg-gray-50 border-none rounded-2xl" /> {/* [cite: 395] */}
              <input type="text" placeholder="Model" className="col-span-2 w-full p-4 bg-gray-50 border-none rounded-2xl" /> {/* [cite: 396] */}
            </div>

            <textarea placeholder="Additional Notes" rows={5} className="w-full p-4 bg-gray-50 border-none rounded-2xl resize-none"></textarea> {/* [cite: 397] */}
            
            <button type="submit" className="w-full bg-zoox-dark text-white font-bold tracking-widest uppercase py-5 rounded-full hover:bg-black transition mt-8">
              Send Message {/* [cite: 400] */}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;