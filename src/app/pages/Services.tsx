import { motion } from 'motion/react';
import { Home, Building2, Laptop, Hotel, Package, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import residentialImage from '../../assets/residentialImage.jpg';
import villaImage from '../../assets/villaImage.jpg';
import officeImage from '../../assets/officeImagee.jpg';
import hotelImage from '../../assets/hotelImage.jpg';
import bedroomImage from '../../assets/bedroomImagee.jpg';

const services = [
  {
    icon: Home,
    title: 'Bespoke Residential Interiors',
    description: 'Elevating everyday living into an art form through personalized architectural storytelling and soul-stirring aesthetics.',
    extendedDescription: 'Our residential approach goes beyond furniture; we curate emotions. From selecting hand-finished textures to engineering bespoke lighting layouts, we ensure every corner of your home resonates with your personality. We specialize in blending timeless heritage with modern functionality, ensuring a home that is not just a space, but a legacy.',
    image: residentialImage,
    features: ['Artisanal Space Curation', 'Master-Planned Lighting', 'Custom Handcrafted Furniture', 'High-End Texture & Color Palettes'],
    premiumNote: 'Focusing on Ergonomics & Emotional Design.'
  },
  {
    icon: Building2,
    title: 'Luxury Villas & Iconic Penthouses',
    description: 'Redefining opulence for the elite with a focus on rare materials, grand scales, and unparalleled craftsmanship.',
    extendedDescription: 'Catering to ultra-high-net-worth individuals, this service brings global luxury standards to your doorstep. We integrate Italian Carrara marbles, rare exotic woods, and state-of-the-art home automation. Every villa project is treated as a masterpiece, involving meticulous detailing in millwork.',
    image: villaImage,
    features: ['Rare Material Global Sourcing', 'Advanced Smart-Home Ecosystems', 'Architectural Ceiling & Wall Detailing', 'Private Art & Decor Curation'],
    premiumNote: 'Crafting Timeless Estates.'
  },
  {
    icon: Laptop,
    title: 'High-Performance Commercial Spaces',
    description: 'Architecting environments that inspire innovation, reflect corporate prestige, and optimize human potential.',
    extendedDescription: 'Modern workplaces demand a balance of brand identity and employee wellness. We design offices that serve as a physical manifestation of your brand’s mission. Using acoustic engineering, ergonomic workstations, and collaborative breakout zones, we create environments that attract top talent.',
    image: officeImage,
    features: ['Strategic Brand Storytelling', 'Acoustically Optimized Zones', 'Executive Suite Luxury Finishes', 'Sustainable & Green Tech Integration'],
    premiumNote: 'Productivity through Intelligent Design.'
  },
  {
    icon: Hotel,
    title: 'Hospitality & Luxury Retail',
    description: 'Crafting immersive sensory experiences that drive brand loyalty and redefine the standards of guest excellence.',
    extendedDescription: 'In the world of hospitality, first impressions are everything. We design lobbies, boutiques, and fine-dining spaces that captivate the senses. Our designs focus on the "Flow of Experience," ensuring that lighting, acoustics, and tactile surfaces work in harmony.',
    image: hotelImage,
    features: ['Immersive Sensory Experience Design', 'High-Traffic Durability Standards', 'Mood-Driven Lighting Architecture', 'Bespoke Retail Display Systems'],
    premiumNote: 'Memorable Impressions, Guaranteed.'
  },
  {
    icon: Package,
    title: 'Elite Turnkey Solutions',
    description: 'Uncompromising quality delivered through a seamless, single-point-of-contact management experience.',
    extendedDescription: 'Our Turnkey service is for those who value time as much as quality. We take complete ownership—from initial structural approvals and global procurement to the final styling. You receive a "Ready-to-Live" environment, executed with surgical precision and zero stress.',
    image: bedroomImage,
    features: ['End-to-End Project Stewardship', 'Rigorous Quality Audit Systems', 'Global Procurement Logistics', 'Precision Timeline Management'],
    premiumNote: 'Concept to Completion, Flawlessly.'
  }
];

export default function Services() {
  return (
    <div className="bg-[#FCFCFC] font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={residentialImage} alt="Our Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        </div>
        <div className="relative max-w-[1680px] mx-auto px-8 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#c5a572] uppercase tracking-[0.3em] font-semibold text-sm mb-4 block">World-Class Excellence</span>
            <h1 className="text-6xl lg:text-8xl font-light text-white mb-6 leading-tight">
              Design <span className="italic font-serif">Aesthetics</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light">
              Transforming visions into prestigious realities with a meticulous commitment to quality, innovation, and timeless design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20">
        <div className="max-w-[1680px] mx-auto px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-10">
            <div className="max-w-4xl">
              <h2 className="text-4xl lg:text-5xl font-serif text-[#1a4d2e] mb-8">Our Philosophy</h2>
              <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-light">
                At <span className="font-semibold text-black">Alibda Interiors</span>, we believe that design is a silent language. 
                Whether it's the intimate warmth of a home or the grand statement of a luxury hotel, we curate every 
                square inch with global standards and local soul.
              </p>
            </div>
            <div className="h-[2px] w-full md:w-1/4 bg-[#c5a572] mb-4"></div>
          </div>
        </div>
      </section>

      {/* Services Detailed Grid */}
      <section className="pb-24">
        <div className="max-w-[1680px] mx-auto px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col lg:flex-row gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-6">
                      <span className="text-5xl font-serif text-[#c5a572]/30">0{index + 1}</span>
                      <h2 className="text-4xl lg:text-5xl font-serif text-gray-900">{service.title}</h2>
                    </div>
                    <p className="text-2xl text-[#1a4d2e] font-light italic">{service.description}</p>
                  </div>
                  
                  <p className="text-lg lg:text-xl text-gray-600 leading-relaxed font-light">
                    {service.extendedDescription}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-4 text-lg text-gray-800 border-l-2 border-[#c5a572]/20 pl-4">
                        <CheckCircle className="text-[#c5a572]" size={22} />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="pt-6">
                    <Link to="/contact" className="group inline-flex items-center gap-4 text-xl font-medium text-black hover:text-[#c5a572] transition-colors">
                      Start Your Transformation 
                      <div className="w-12 h-12 rounded-full border border-black group-hover:border-[#c5a572] flex items-center justify-center transition-all">
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-[16/10] overflow-hidden rounded-sm shadow-2xl">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-110" 
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-8 shadow-xl hidden md:block max-w-xs border-t-4 border-[#c5a572]">
                    <p className="text-sm uppercase tracking-widest text-[#c5a572] font-bold mb-2">Service Excellence</p>
                    <p className="text-gray-800 font-serif italic text-lg">{service.premiumNote}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#0a1a0f] text-white">
        <div className="max-w-[1680px] mx-auto px-8 text-center">
          <h2 className="text-5xl font-serif mb-20">The Blueprint of Excellence</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {['Discovery', 'Conceptualization', 'Detailing', 'Fabrication', 'Handover'].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-7xl font-serif text-white/5 absolute -top-10 left-1/2 -translate-x-1/2">0{i+1}</div>
                <h3 className="text-2xl font-medium mb-4 relative z-10">{step}</h3>
                <div className="w-12 h-[1px] bg-[#c5a572] mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-[1680px] mx-auto px-8 space-y-10">
          <h2 className="text-5xl lg:text-7xl font-serif text-gray-900">
            Let’s Design Your <span className="italic text-[#c5a572]">Masterpiece</span>
          </h2>
          <Link to="/contact" className="inline-block bg-[#1a4d2e] text-white px-16 py-6 text-xl rounded-sm hover:bg-black transition-all">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}