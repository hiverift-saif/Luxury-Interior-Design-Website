import React from 'react';
import { motion } from 'framer-motion';
import { Home, CheckCircle, PenTool, Wind, ShieldCheck, Layers, Coffee, Bed, Bath, Sparkles, Ruler, Search } from 'lucide-react';

const ResidentialService = () => {
  return (
    <div className="pt-40 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section 1: Residential Philosophy */}
        <div className="mb-24">
          <h1 className="text-6xl lg:text-8xl font-light mb-10 italic text-[#1a4d2e]">Residential interior <span className="text-[#c5a572]">Design</span></h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 text-xl text-gray-700 leading-relaxed font-light">
              <p>
                At Alibda Interiors, we believe a home is more than just a structure — it’s a place where comfort, style, and daily living come together. Our residential interior designs focus on creating spaces that are elegant, functional, and tailored to your lifestyle.
              </p>
              <p>
                With over 30 years of experience across India and Dubai, we design homes that blend modern luxury with cultural warmth. Whether it’s an apartment, villa, or penthouse, every project is customized based on location, climate, and personal preferences.
              </p>
            </div>
            <div className="h-[500px] overflow-hidden rounded-sm shadow-2xl relative">
              <img src="https://i.pinimg.com/1200x/2b/76/cc/2b76cc89c6c9553288e83f48495a5357.jpg" alt="Residential Interior Design" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </div>

        {/* Section 2: Design Expertise */}
        <div className="mb-32">
          <h2 className="text-4xl font-light mb-16 border-l-4 border-[#c5a572] pl-6">Our <span className="text-[#c5a572]">Design Expertise</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-6">
              <h3 className="text-3xl font-medium text-[#1a4d2e]">Living & Entertainment Spaces</h3>
              <p className="text-gray-600 leading-relaxed">
                We design living rooms that feel stylish yet comfortable. From smart layouts and layered lighting to acoustic comfort, every detail enhances relaxation and social gatherings.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-medium text-[#1a4d2e]">Modern Kitchen Design</h3>
              <p className="text-gray-600 leading-relaxed">
                Our kitchens combine functionality with modern style. We use durable materials, efficient layouts, and premium fittings to create spaces perfect for cooking and socializing.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-medium text-[#1a4d2e]">Bedroom Interiors</h3>
              <p className="text-gray-600 leading-relaxed">
                Bedrooms are designed as peaceful retreats with comfortable lighting, sound control, smart storage, and customized wardrobes for everyday convenience.
              </p>
            </div>
            <div className="space-y-6">
              <h3 className="text-3xl font-medium text-[#1a4d2e]">Luxury Bathroom Design</h3>
              <p className="text-gray-600 leading-relaxed">
                We create elegant bathrooms using premium materials, modern fittings, and spa-like features that enhance comfort, relaxation, and daily wellness.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Materials */}
        <div className="bg-[#1a4d2e] p-16 lg:p-24 text-white rounded-sm mb-32">
          <h2 className="text-4xl font-light mb-12 italic text-[#c5a572]">Premium <span className="text-white">Materials</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h4 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Natural Stones</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                We source high-quality marble, onyx, and natural stones from trusted global suppliers to ensure durability and luxury appeal.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Fine Woods</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium woods like teak, walnut, and ebony are carefully treated to suit local climate conditions for long-lasting elegance.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4 border-b border-white/20 pb-2">Custom Metal Finishes</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Bespoke metal finishes such as rose gold, champagne, and titanium add a refined and sophisticated touch to interiors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentialService;