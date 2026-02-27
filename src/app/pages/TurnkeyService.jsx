import React from 'react';
import { motion } from 'framer-motion';
import { 
  Palette, Truck, HardHat, Settings, ClipboardCheck, 
  Ruler, DollarSign, Clock, ShieldCheck, Search, 
  Map, Construction 
} from 'lucide-react';

const TurnkeyService = () => {
  return (
    <div className="pt-25  bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section 1: Hero & Strategic Narrative */}
        <div className="text-center mb-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-light mb-8 italic text-[#1a4d2e]">
              Turnkey <span className="text-[#c5a572] font-bold">Project Management</span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-5xl mx-auto font-light leading-relaxed mb-10">
              From the initial conceptual sketch to the final turn of the key, Alibda takes absolute responsibility for your project's lifecycle. We eliminate the friction between design and execution.
            </p>
            <div className="h-1 w-40 bg-[#c5a572] mx-auto"></div>
          </motion.div>
        </div>

        {/* Section 2: Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <h2 className="text-4xl font-light italic text-[#1a4d2e]">Why Discerning Clients <br/> Choose Turnkey?</h2>
            <p>
              The most significant risk in high-end interior design is the "Translation Error"—where the artistic vision of the architect is lost during the technical execution by local contractors. Our Turnkey solution bridges this gap by acting as your single point of responsibility.
            </p>
            <p>
              Managing an interior project involves multiple vendors—from HVAC engineers and automation specialists to furniture manufacturers and legal consultants. Our turnkey team handles this entire ecosystem so you enjoy a smooth, stress-free transformation.
            </p>
            <div className="bg-white p-8 border-l-4 border-[#c5a572] shadow-sm italic text-gray-600">
              "You provide the vision, we deliver the reality — on time, on budget, without compromise."
            </div>
          </div>
          <div className="relative">
             <img 
               src="https://i.pinimg.com/736x/ee/77/ce/ee77ce485ed5c434549ca3604aaa470f.jpg" 
               alt="Technical Execution" 
               className="w-full h-[300px] rounded-2xl md:h-[600px] object-cover shadow-2xl"
             />
             <div className="absolute -bottom-10 -right-10 bg-[#1a4d2e] p-12 text-white hidden xl:block">
                <p className="text-5xl font-bold text-[#c5a572] mb-2">100%</p>
                <p className="text-xs uppercase tracking-[0.2em]">Execution Accuracy</p>
             </div>
          </div>
        </div>

        {/* Section 3: Execution Protocol */}
        <div className="mb-32">
          <h2 className="text-4xl font-light mb-16 text-center italic">The <span className="text-[#c5a572]">8-Phase</span> Execution Protocol</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Ruler, title: "Technical Survey", d: "Detailed site measurements, structural checks, and MEP mapping to prevent onsite surprises." },
              { icon: Search, title: "Feasibility Study", d: "Regulatory analysis, budget alignment, and compliance evaluation before design execution." },
              { icon: Palette, title: "Design Development", d: "3D renders, VR walkthroughs, and detailed drawings for precise execution." },
              { icon: ClipboardCheck, title: "Approvals", d: "Handling permits, NOCs, and compliance documentation for smooth approvals." },
              { icon: Truck, title: "Global Procurement", d: "International sourcing, logistics, duties, and secure material handling." },
              { icon: HardHat, title: "Civil & MEP Work", d: "Complete structural, electrical, plumbing, and HVAC execution management." },
              { icon: Construction, title: "Fit-Out", d: "Custom furniture, finishes, and detailed installation for luxury outcomes." },
              { icon: ShieldCheck, title: "Final Handover", d: "Comprehensive quality inspection before client walkthrough." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-10 border border-gray-100 hover:shadow-2xl transition-all group flex flex-col h-full">
                <span className="text-4xl font-bold text-gray-600 mb-6 group-hover:text-[#c5a572]/20 transition-colors">0{i+1}</span>
                <item.icon className="text-[#c5a572] mb-6" size={40} />
                <h3 className="text-xl font-bold mb-4 text-[#1a4d2e]">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{item.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Budget & Timeline */}
        <div className="bg-[#1a4d2e] p-16 lg:p-24 rounded-sm text-white mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="space-y-8">
              <h2 className="text-4xl font-light text-[#c5a572] italic">Financial & Timeline Control</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                We manage budgets and timelines with precision using advanced project management tools and regular reporting for full transparency.
              </p>
              <div className="grid grid-cols-2 gap-10 pt-6">
                <div className="border-l-2 border-[#c5a572] pl-6">
                  <h4 className="text-2xl font-bold">Fixed BOQ</h4>
                  <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">No Hidden Costs</p>
                </div>
                <div className="border-l-2 border-[#c5a572] pl-6">
                  <h4 className="text-2xl font-bold">Weekly Reports</h4>
                  <p className="text-xs text-gray-400 mt-2 uppercase tracking-widest">Full Transparency</p>
                </div>
              </div>
            </div>
            <div className="space-y-10">
               <div className="bg-white/5 p-8 border border-white/10">
                 <h4 className="text-[#c5a572] font-bold mb-4 uppercase tracking-[0.2em] text-sm">Material Sourcing</h4>
                 <p className="text-gray-300 text-sm leading-relaxed">Direct sourcing from global manufacturers ensures better pricing, quality, and authenticity.</p>
               </div>
               <div className="bg-white/5 p-8 border border-white/10">
                 <h4 className="text-[#c5a572] font-bold mb-4 uppercase tracking-[0.2em] text-sm">Safety & Quality</h4>
                 <p className="text-gray-300 text-sm leading-relaxed">International HSE standards, daily inspections, and strict quality controls ensure flawless delivery.</p>
               </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TurnkeyService;