import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ===== IMAGE IMPORTS ===== */
import palmVilla from '../../assets/palmVilla.jpg';
// Agar aapke paas club ki image hai toh aise import karein:
import newcinema from '../../assets/newcinema.png';
import dine from '../../assets/dine.png';
import bquite from '../../assets/bquite.png';



const projects = [
  // RESIDENCE CATEGORY
  {
    title: ' Mansion',
    category: 'Residence',
    image: 'https://i.pinimg.com/1200x/01/ed/2b/01ed2b493764a9f9c93dbc0ca8416b4c.jpg',
    description: 'Classic elegance meets modern luxury in this grand residence.',
  },
  {
    title: 'Modern Penthouse',
    category: 'Residence',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
    description: 'Ultra-luxury living with panoramic skyline views.',
  },

  // SHOWROOM CATEGORY
  {
    title: 'Elite Nightclub & Lounge', // Changed from Auto Gallery to Club
    category: 'Showroom',
    image: 'https://i.pinimg.com/736x/0d/a5/d4/0da5d4ef84b2aeb3ee05e0c5c43486c7.jpg', 
    description: 'A high-end social club featuring mood lighting and luxury bespoke seating.',
  },
  {
    title: 'Fashion Boutique',
    category: 'Showroom',
    image: bquite,
    description: 'Chic interior for a high-end designer clothing store.',
  },
  {
    title: 'Jewelry Studio',
    category: 'Showroom',
    image: 'https://i.pinimg.com/1200x/2f/f2/a9/2ff2a9a044b0e00badb7ab6ffef1752f.jpg',
    description: 'Elegant showroom featuring bespoke lighting and security.',
  },

  // COMMERCIAL CATEGORY
  {
    title: 'Boutique Hotel Lobby',
    category: 'Commercial',
    image: 'https://i.pinimg.com/736x/75/36/4b/75364b2b33d09371903d0bea849f4dde.jpg',
    description: '5-star hotel reception and lounge area with bespoke art.',
  },
  {
    title: 'Fine Dining Restaurant',
    category: 'Commercial',
    image: dine,
    description: 'Sophisticated F&B space with atmospheric mood lighting.',
  },
  {
    title: ' Cinema Lounge',
    category: 'Commercial',
    image: newcinema,
    description: 'Multiplex foyer designed for ultimate guest comfort.',
  },

  // OFFICES CATEGORY
  {
    title: 'Tech Hub Office',
    category: 'Offices',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    description: 'Modern workspace designed for collaboration and creativity.',
  },
  {
    title: 'Executive Corporate Suite',
    category: 'Offices',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2',
    description: 'Refined corporate office with premium wood finishes.',
  },
  {
    title: 'Co-working Space',
    category: 'Offices',
    image: 'https://i.pinimg.com/736x/8b/c6/7a/8bc67a20451c8ec2c91efda92c6bfb46.jpg',
    description: 'Dynamic and flexible office layout for modern startups.',
  },
];

const categories = ['All', 'Residence', 'Showroom', 'Commercial', 'Offices'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[45vh] bg-[#1a4d2e]">
        <div className="absolute inset-0">
          <img
            src={projects[0].image}
            alt="Projects"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl lg:text-7xl mb-4 font-medium italic">Our Portfolio</h1>
            <p className="text-xl text-gray-200">Crafting Excellence Across India & Dubai</p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-2.5 rounded-md text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-[#c5a572] text-white shadow-lg'
                    : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            layout 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <div className="relative overflow-hidden rounded-sm h-[400px] mb-6">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[#c5a572] text-xs uppercase tracking-[0.2em] font-bold">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-light text-gray-900 group-hover:text-[#c5a572] transition-colors">
                      {project.title}
                    </h3>
                    {/* <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                      {project.description}
                    </p> */}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}