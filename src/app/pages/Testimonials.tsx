import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronDown, ChevronUp } from 'lucide-react';
const testimonials = [
  // ----- ALIBDA INTERIORS (Dubai) -----
  {
    name: "Ahmed Al Mansoori",
    location: "Dubai",
    rating: 5,
    text: "Alibda Interiors transformed our villa into a luxurious yet comfortable living space. Their attention to detail, premium materials, and smooth execution truly impressed us."
  },
  {
    name: "Priya Mehta",
    location: "Dubai Marina",
    rating: 5,
    text: "Our apartment now feels like a luxury hotel suite. The team perfectly understood our vision and delivered beyond expectations."
  },
  {
    name: "Khalid Al Falasi",
    location: "Dubai",
    rating: 5,
    text: "Exceptional professionalism and international quality standards. I highly recommend Alibda Interiors for luxury projects."
  },
  {
    name: "Fatima Al Zahra",
    location: "Dubai",
    rating: 5,
    text: "Beautiful blend of Arabic elegance with modern aesthetics. The final outcome exceeded our expectations."
  },
  {
    name: "Rahul Khanna",
    location: "JLT Dubai",
    rating: 5,
    text: "Thoughtful lighting design and material selection made our home look sophisticated and welcoming."
  },
  {
    name: "Neha Kapoor",
    location: "Dubai",
    rating: 5,
    text: "Turnkey solution was seamless. We had zero stress throughout the project."
  },
  {
    name: "Sanjay Verma",
    location: "Downtown Dubai",
    rating: 5,
    text: "Excellent craftsmanship and flawless finishing. Worth every investment."
  },
  {
    name: "Aisha Al Suwaidi",
    location: "Dubai",
    rating: 5,
    text: "They captured our vision perfectly and added their creative expertise beautifully."
  },
  {
    name: "Omar Al Hashmi",
    location: "Palm Jumeirah",
    rating: 5,
    text: "Luxury, comfort, and practicality combined perfectly. Truly professional team."
  },
  {
    name: "Ritika Sharma",
    location: "Business Bay",
    rating: 5,
    text: "Our office interior looks premium now. Clients constantly compliment the design."
  },

  // ----- PINAKIN -----
  {
    name: "Rohit Jain",
    location: "Delhi",
    rating: 5,
    text: "Pinakin transformed our home into a stylish yet functional space with impressive attention to detail."
  },
  {
    name: "Sneha Gupta",
    location: "Noida",
    rating: 5,
    text: "Very professional designer who understood our requirements perfectly."
  },
  {
    name: "Vikas Sharma",
    location: "Gurgaon",
    rating: 5,
    text: "Creative ideas and smooth execution made the entire process enjoyable."
  },
  {
    name: "Anita Desai",
    location: "Mumbai",
    rating: 5,
    text: "Beautiful color combinations and thoughtful lighting design."
  },
  {
    name: "Karan Malhotra",
    location: "Delhi",
    rating: 5,
    text: "Great space utilization. Even our compact apartment feels spacious."
  },
  {
    name: "Neha Arora",
    location: "Chandigarh",
    rating: 5,
    text: "Very patient and detail-oriented throughout the project."
  },
  {
    name: "Aditya Kapoor",
    location: "Jaipur",
    rating: 5,
    text: "Fresh design ideas with excellent communication."
  },
  {
    name: "Pooja Verma",
    location: "Lucknow",
    rating: 5,
    text: "Innovative yet practical design solutions."
  },
  {
    name: "Rahul Bansal",
    location: "Delhi",
    rating: 5,
    text: "Reliable designer with excellent creativity."
  },
  {
    name: "Simran Kaur",
    location: "Amritsar",
    rating: 5,
    text: "Modern, functional, and beautifully finished interiors."
  },

  // ----- VERTICAL DESIGN -----
  {
    name: "Rajesh Agarwal",
    location: "Delhi",
    rating: 5,
    text: "Vertical Design delivered a luxurious yet practical living space."
  },
  {
    name: "Anjali Sharma",
    location: "Mumbai",
    rating: 5,
    text: "Handled space constraints beautifully while maintaining elegance."
  },
  {
    name: "Rakesh Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Perfect balance of Vastu principles with modern design."
  },
  {
    name: "Priya Nair",
    location: "Bangalore",
    rating: 5,
    text: "Professional team with thoughtful design execution."
  },
  {
    name: "Siddharth Sen",
    location: "Kolkata",
    rating: 5,
    text: "Creative designs reflecting quality and sophistication."
  },
  {
    name: "Meera Kulkarni",
    location: "Pune",
    rating: 5,
    text: "Material selection and layout planning were exceptional."
  },
  {
    name: "Amit Verma",
    location: "Gurgaon",
    rating: 5,
    text: "Our office interior now looks welcoming and premium."
  },
  {
    name: "Kavita Jain",
    location: "Delhi",
    rating: 5,
    text: "Smooth coordination and timely completion impressed us."
  },
  {
    name: "Nitin Arora",
    location: "Chandigarh",
    rating: 5,
    text: "Innovative ideas combined with practical solutions."
  },
  {
    name: "Shalini Gupta",
    location: "Noida",
    rating: 5,
    text: "Exceeded expectations in both design quality and service."
  }
];


const heroImage = "https://i.pinimg.com/1200x/aa/d4/ba/aad4bae2886bf46121658c4b2706c988.jpg";

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  // Initial display is 2 rows (3 items per row on desktop = 6 items)
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#1a4d2e]">
        <div className="absolute inset-0 overflow-hidden">
          <img src={heroImage} alt="Testimonials" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl lg:text-7xl mb-6 italic font-light">Client Testimonials</h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl">
              Hear from our satisfied clients across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4 font-light">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Excellence reflected in every review</p>
          </motion.div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {displayedTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gray-50 p-8 rounded-sm border border-gray-100 relative group hover:shadow-xl transition-all duration-300"
                >
                  <Quote className="text-[#c5a572]/10 absolute top-4 right-4 group-hover:text-[#c5a572]/20 transition-colors" size={60} />
                  
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-[#c5a572] text-[#c5a572]" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-8 italic leading-relaxed">"{testimonial.text}"</p>

                  <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                    <div className="w-12 h-12 bg-[#1a4d2e] rounded-full flex items-center justify-center text-[#c5a572] font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{testimonial.name}</p>
                      <p className="text-xs uppercase tracking-widest text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Toggle Button */}
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-10 py-4 bg-[#1a4d2e] text-white hover:bg-[#c5a572] transition-colors duration-300 rounded-sm uppercase tracking-widest text-sm font-bold shadow-lg"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={20} /></>
              ) : (
                <>View All 20 Reviews <ChevronDown size={20} /></>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#1a4d2e] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { number: '300+', label: 'Happy Clients' },
              { number: '100%', label: 'Satisfaction Rate' },
              { number: '50+', label: 'Design Awards' },
              { number: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl lg:text-6xl text-[#c5a572] mb-2 font-light">{stat.number}</div>
                <div className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}