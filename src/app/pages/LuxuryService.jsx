import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Globe, Zap, EyeOff } from 'lucide-react';

const LuxuryService = () => {
  return (
    <div className="pt-20 pb-10 bg-[#fcf8f3]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline */}
        <div className="text-center mb-20">
          <Crown className="mx-auto text-[#c5a572] mb-2" size={60} />
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-light leading-none italic mb-5 tracking-tighter">
            Ultra <span className="text-[#c5a572]">Luxury</span>
          </h1>
          <p className="text-3xl text-gray-400 font-light italic uppercase tracking-widest">
            Beyond Aesthetics. Beyond Excellence.
          </p>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-32 items-center">
          <div className="lg:col-span-6 space-y-10">
            <h2 className="text-5xl font-light leading-tight text-[#1a4d2e]">
              Ultra Luxury Interior Design <br />
              <span className="italic font-serif">For Premium Villas & Estates</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                At Alibda Interiors, luxury is not just about looks — it’s about comfort, privacy, and refined living. We design ultra-luxury villas, penthouses, and high-end residences for clients who expect exceptional quality and personalized interiors.
              </p>

              <p>
                Our projects typically span 12–24 months, allowing detailed planning, global material sourcing, and precision execution. From rare marble selection to handcrafted finishes, every detail is curated specifically for your home.
              </p>

              <p>
                We follow a "silent luxury" approach — where elegance is felt through perfect proportions, premium materials, seamless finishes, and invisible technology that enhances comfort without visual clutter.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 h-[800px] relative">
            <img
              src="https://i.pinimg.com/736x/fb/c0/ff/fbc0ffd8c3e193760e2e477ebbc5e7c7.jpg"
              alt="Luxury Villa Interior"
              className="w-full h-full object-cover rounded-sm shadow-3xl"
            />
            {/* <div className="absolute -right-12 top-20 bg-[#c5a572] p-12 text-white hidden xl:block shadow-2xl">
              <h4 className="text-4xl font-bold mb-2 uppercase">Zero</h4>
              <p className="text-sm tracking-widest">Compromise Policy</p>
            </div> */}
          </div>
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-32">
          <div className="space-y-6 border-t border-[#c5a572] pt-8">
            <Globe className="text-[#c5a572]" size={40} />
            <h3 className="text-2xl font-bold">Global Procurement</h3>
            <p className="text-gray-600 leading-relaxed">
              We source premium materials, furniture, lighting, and finishes globally — from Europe, the Middle East, and Asia. Our team manages logistics, import handling, and installation for a seamless luxury experience.
            </p>
          </div>

          <div className="space-y-6 border-t border-[#c5a572] pt-8">
            <EyeOff className="text-[#c5a572]" size={40} />
            <h3 className="text-2xl font-bold">Privacy & Security Design</h3>
            <p className="text-gray-600 leading-relaxed">
              Privacy is essential in ultra-luxury homes. We integrate discreet security solutions, private zones, and smart access systems while maintaining elegant interior aesthetics.
            </p>
          </div>

          <div className="space-y-6 border-t border-[#c5a572] pt-8">
            <Zap className="text-[#c5a572]" size={40} />
            <h3 className="text-2xl font-bold">Invisible Smart Engineering</h3>
            <p className="text-gray-600 leading-relaxed">
              From hidden speakers to seamless lighting controls and silent climate systems, we integrate advanced smart home technology without disturbing the visual beauty of your interiors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryService;
