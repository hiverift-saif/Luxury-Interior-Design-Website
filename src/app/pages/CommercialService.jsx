import React from 'react';
import { motion } from 'framer-motion';
import { Laptop, Layout, Users, TrendingUp, Briefcase, Zap, ShieldCheck, Globe, Target, PenTool } from 'lucide-react';
import cinema from '../../assets/cinema.jpeg';

const CommercialService = () => {
  return (
    <div className="pt-32 pb-10 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section 1: Strategic Title & Introduction */}
        <div className="flex flex-col lg:flex-row gap-12  border-b border-gray-100 pb-20">
          <div className="lg:w-1/2">
            <h1 className="text-4xl lg:text-6xl font-light mb-8 italic text-[#1a4d2e]">
              Commercial <span className="text-[#c5a572] font-bold">Strategy & Design</span>
            </h1>
            <p className="text-2xl text-gray-600 font-light leading-snug">
              Creating high-performance environments that serve as a catalyst for corporate success, brand elevation, and employee wellness.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-end space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              In the globalized business landscapes of Dubai and the emerging tech hubs of India, an office is no longer just a place of work—it is a strategic asset. At Alibda, we bridge the gap between architectural functionality and corporate identity. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our commercial practice is rooted in data. We analyze organizational hierarchies, inter-departmental workflows, and future scalability before proposing a single design element. From DIFC executive suites to Mumbai's boutique retail showrooms, we deliver spaces that inspire.
            </p>
          </div>
        </div>

        {/* Section 2: Massive Narrative Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          <div className="lg:col-span-8 space-y-8 text-gray-700 text-lg leading-relaxed">
            <h2 className="text-3xl font-medium text-[#1a4d2e]">Workplace Psychology & Human-Centric Design</h2>
            <p>
              Workplace design has evolved. Today, the focus is on "The Human Factor." We integrate biophilic elements, circadian lighting systems, and advanced acoustic treatments to reduce employee burnout and increase cognitive focus. Our designs utilize a "Neighborhood" concept, where different zones are created for deep work, collaborative brainstorming, and social decompression.
            </p>
            <p>
              We specialize in "Adaptive Commercial Environments." This means the furniture and partitions we specify are often modular, allowing your office to transform as your team grows. We utilize high-traffic, commercial-grade materials that meet international fire safety and sustainability standards (LEED/WELL), ensuring your investment remains durable for decades.
            </p>
            <p>
              For retail clients, our approach is "Revenue-Driven Design." We study customer journey patterns and heat maps to place high-margin products in strategic "Hot Zones." Our lighting designers work specifically to enhance product colors and create an atmospheric brand experience that converts visitors into loyal customers.
            </p>
          </div>
          <div className="lg:col-span-4 bg-[#fcf8f3] p-10 border-l-4 border-[#c5a572]">
             <h4 className="text-xl font-bold mb-6 text-[#1a4d2e] uppercase tracking-widest">Industry Impact</h4>
             <div className="space-y-8">
                <div>
                   <span className="text-4xl font-bold text-[#c5a572]">25%</span>
                   <p className="text-gray-600 mt-2">Average increase in employee productivity post-redesign.</p>
                </div>
                <div>
                   <span className="text-4xl font-bold text-[#c5a572]">40%</span>
                   <p className="text-gray-600 mt-2">Better space utilization through intelligent planning.</p>
                </div>
                <div>
                   <span className="text-4xl font-bold text-[#c5a572]">LEED</span>
                   <p className="text-gray-600 mt-2">Certified sustainable material procurement protocols.</p>
                </div>
             </div>
          </div>
        </div>

        {/* Section 3: Wide Image Block */}
        <div className="relative mb-32 h-[600px] overflow-hidden rounded-sm group">
          <img 
            src={cinema}
            alt="Office" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-6">
             <h2 className="text-5xl md:text-7xl font-light text-white mb-6 italic">Future-Ready Workspaces</h2>
             <p className="text-gray-300 max-w-2xl text-xl font-light">Integrating advanced digital infrastructure with timeless architectural aesthetics.</p>
             <div className="h-1 w-32 bg-[#c5a572] mt-10"></div>
          </div>
        </div>

        {/* Section 4: Deep Competencies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="space-y-12">
            <h3 className="text-4xl font-light italic text-[#1a4d2e]">Strategic Implementation</h3>
            <p className="text-gray-600 leading-relaxed text-xl font-light">
              Our technical expertise extends beyond the surface. We manage the entire MEP (Mechanical, Electrical, Plumbing) and IT backbone of your commercial space.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <Briefcase className="text-[#c5a572] mb-6" size={36} />
                <h4 className="font-bold text-xl mb-3 text-gray-900">Executive & Board Suites</h4>
                <p className="text-gray-500 leading-relaxed">Ultra-premium environments designed for high-stakes decision making, featuring concealed state-of-the-art AV tech and luxury finishes.</p>
              </div>
              <div className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <Target className="text-[#c5a572] mb-6" size={36} />
                <h4 className="font-bold text-xl mb-3 text-gray-900">Retail Concept Labs</h4>
                <p className="text-gray-500 leading-relaxed">Commercial showrooms designed to maximize product interaction and emphasize brand storytelling through lighting and flow.</p>
              </div>
              <div className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <Globe className="text-[#c5a572] mb-6" size={36} />
                <h4 className="font-bold text-xl mb-3 text-gray-900">Hospitality Hubs</h4>
                <p className="text-gray-500 leading-relaxed">Designing fluid hotel lobbies and F&B spaces that transition effortlessly from morning breakfast zones to evening social lounges.</p>
              </div>
              <div className="p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <ShieldCheck className="text-[#c5a572] mb-6" size={36} />
                <h4 className="font-bold text-xl mb-3 text-gray-900">Secure Tech Parks</h4>
                <p className="text-gray-500 leading-relaxed">Large-scale workspace design for IT hubs requiring high-density planning with sophisticated security and network integration.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1a4d2e] p-12 lg:p-20 rounded-sm text-white">
            <h4 className="text-[#c5a572] uppercase tracking-[0.3em] font-bold mb-12 text-sm">Full Technical Capabilities</h4>
            <div className="space-y-10">
               {[
                 { t: "Acoustic Engineering", d: "Implementation of sound masking and NRC-rated ceiling systems to ensure 100% speech privacy in boardrooms." },
                 { t: "Ergonomic Audit", d: "Selecting BIFMA-certified furniture that reduces posture-related health issues and increases stamina." },
                 { t: "Smart Building Systems", d: "IoT-integrated HVAC and lighting that adjust based on occupancy, reducing energy costs by up to 30%." },
                 { t: "MEP & Data Infrastructure", d: "Cat6A/Cat7 cabling and server room planning with redundant cooling systems for zero downtime." },
                 { t: "Compliance & Safety", d: "Complete adherence to Dubai Civil Defense, Municipality, and RERA regulations for seamless approvals." }
               ].map((item, idx) => (
                 <div key={idx} className="group border-b border-white/10 pb-8 last:border-0">
                    <h5 className="text-2xl font-light text-[#c5a572] mb-2 group-hover:translate-x-2 transition-transform duration-300">{item.t}</h5>
                    <p className="text-gray-400 leading-relaxed text-sm">{item.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommercialService;