import { motion } from "motion/react";
import {
  Award,
  Target,
  Eye,
  Users,
  Trophy,
  BookOpen,
  Building,
  Compass,
} from "lucide-react";
import aboutImage from "../../assets/aboutImage.jpg";
import teamImage from "../../assets/teamImage.jpg";
import designerImage from "../../assets/designer.jpeg";
import architectImage from "../../assets/beta.jpeg";
// File ke top par ye variables bna dein
// const architectImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500";
// const designerImage = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500";

import AlibdaFullPortfolio from "../components/ui/AlibdaPortfolio.js";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh]">
        <div className="absolute inset-0">
          <img
            src="https://assets.zyrosite.com/YX4247ly5bu0QGjv/corridor-a-YleneaQMLRFP7pOe.jpg"
            alt="About Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl mb-6">
               Vertical Design <br></br><span className=" md:pl-[220px] "> &</span> <br /> Pinakin Interiors
            </h1>
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
              A legacy of design excellence spanning over 36 years, crafting
              refined interior experiences across India .
            </p>
          </motion.div>
        </div>
      </section>

{/* Brand History */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 mb-8">
                Our Story & Vision
              </h2>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  With over <span className="font-bold text-gray-900">36 years of excellence</span>, 
                  Alibda Interiors balances architectural integrity with refined aesthetics. 
                  What began in India as a design-driven practice has now evolved into 
                  a premier studio serving a global clientele in <span className="font-bold text-gray-900">Dubai</span>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="border-l-2 border-[#c5a572] pl-4">
                    <h4 className="font-bold text-gray-900 mb-1">Our Philosophy</h4>
                    <p className="text-sm">Carefully conceived environments that respond to your lifestyle and purpose.</p>
                  </div>
                  <div className="border-l-2 border-[#c5a572] pl-4">
                    <h4 className="font-bold text-gray-900 mb-1">Our Mission</h4>
                    <p className="text-sm">Setting new standards by blending global perspectives with meticulous execution.</p>
                  </div>
                </div>

                <p className="pt-4">
                  Every project is a collaborative journey, ensuring the final outcome 
                  is both visually refined and deeply personal. We create spaces that 
                  enhance the way you live, work, and experience the world.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gray-100 rounded-lg -z-10 transform rotate-2"></div>
              <img
                src="https://i.pinimg.com/736x/27/56/fe/2756fe4138e2be83119452fb4c1f51ca.jpg"
                alt="Our Professional Team"
    className="w-full h-80 md:h-[550px] object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

{/* Founders / Leadership Section */}
<section className="py-24 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="text-[#c5a572] font-bold uppercase tracking-widest text-sm mb-4 block">
        The Visionaries Behind
      </span>
      <h2 className="text-4xl lg:text-5xl font-medium text-gray-900">
        Our Leadership Team
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
      
      {/* Profile 1: Lead Architect */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col"
      >
        <div className="relative mb-8 group">
        <img
  src={architectImage} // Same for designerImage
  alt="Lead Architect"
  // h-[500px] ko h-[400px] ya h-[450px] karke dekhein
  className="w-full h-[450px] md:h-[650px] object-cover object-center rounded-lg shadow-xl "
/>
       
        </div>
        
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">Lead Architect - Mr. Vibhav </h3>

          <p className="text-gray-700 leading-relaxed italic border-l-4 border-[#c5a572] pl-4">
            "Architecture is a visual art, and the buildings speak for themselves."
          </p>
          <p className="text-gray-600">
            Specializing in structural integrity and modern aesthetics, our lead architect ensures that every foundation is built with precision and international standards.
          </p>
        </div>
      </motion.div>

      {/* Profile 2: Interior Designer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="flex flex-col"
      >
        <div className="relative mb-8 group">
          <img
            src={designerImage} // Aapki designer photo ka variable
            alt="Interior Designer"
  className="w-full h-[450px] md:h-[650px] object-cover object-center rounded-lg shadow-xl "
          />
     
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">Interior Designer -  Mr. Vishall Gambheer </h3>
          <p className="text-gray-700 leading-relaxed italic border-l-4 border-black pl-4">
            "Interior design is about how an environment resonates with the soul."
          </p>
          <p className="text-gray-600">
            Focusing on textures, lighting, and spatial harmony, our interior lead transforms empty spaces into curated environments reflecting the owner's personality.
          </p>
        </div>
      </motion.div>

    </div>
  </div>
</section>


      <AlibdaFullPortfolio />
      {/* Dubai Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl mb-8 text-center">
              Design Expertise for a Global Market
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Designing for an international city like Dubai requires a
                refined understanding of architecture, lifestyle, and
                performance-driven interiors. With over 36 years of industry
                experience, Alibda Interiors brings a mature design perspective
                that seamlessly adapts to diverse cultural influences,
                contemporary aesthetics, and global quality expectations.{" "}
              </p>
              <p>
                Our approach combines thoughtful material selection, precise
                detailing, and design solutions that respond to climate, usage,
                and long-term durability. Whether working on luxury residences,
                commercial spaces, or hospitality environments, we ensure that
                every interior is both visually sophisticated and practically
                resilient.{" "}
              </p>
              <p>
                We collaborate with trusted suppliers, skilled craftsmen, and
                execution partners to deliver projects with consistency and
                precision. Our team carefully curates materials, finishes,
                lighting solutions, and custom elements to meet international
                standards while aligning with the functional requirements of
                each project.{" "}
              </p>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[#1a4d2e] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300">
              The principles that guide every project we undertake
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                title: "Visionary Design",
                description:
                  "We create spaces that transcend trends, combining timeless elegance with contemporary innovation. Our designs anticipate future needs while respecting architectural heritage, resulting in interiors that remain relevant and beautiful for decades.",
              },
              {
                icon: Target,
                title: "Excellence Standards",
                description:
                  "Quality is non-negotiable in every aspect of our work. From material selection to installation details, we maintain uncompromising standards that exceed industry benchmarks. Our reputation is built on consistently delivering exceptional results.",
              },
              {
                icon: Users,
                title: "Client Partnership",
                description:
                  "We view each project as a collaborative journey, working closely with clients to understand their vision and bring it to life. Open communication, transparency, and responsiveness define our approach to client relationships.",
              },
              {
                icon: Award,
                title: "Design Innovation",
                description:
                  "While respecting classical principles, we embrace innovation in materials, technology, and design approaches. Our team continuously explores new possibilities to deliver fresh, forward-thinking solutions that distinguish our work.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-[#c5a572]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-[#c5a572]" size={32} />
                </div>
                <h3 className="text-2xl mb-4 text-center">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4">Recognition & Awards</h2>
            <p className="text-xl text-gray-600">
              Industry recognition for design excellence and innovation
            </p>
          </motion.div> */}

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Trophy,
                title: "Middle East Design Award",
                description:
                  "Recognized as Best Luxury Interior Design Firm for three consecutive years, honoring our commitment to excellence and innovation in creating exceptional residential and commercial spaces across the region.",
              },
              {
                icon: BookOpen,
                title: "International Press Features",
                description:
                  "Our projects have been featured in leading design publications including Architectural Digest Middle East, Luxury Interior Design Magazine, Elle Décor Arabia, and Gulf Property Magazine, showcasing our work to global audiences.",
              },
              {
                icon: Building,
                title: "Dubai Design Week",
                description:
                  "Official participants and exhibitors at Dubai Design Week for five consecutive years, contributing to the emirates design dialogue and presenting innovative concepts in luxury interior design.",
              },
              {
                icon: Compass,
                title: "International Design Excellence",
                description:
                  "Recipients of the prestigious International Property Design Prize, recognizing outstanding achievement in creating luxury residential interiors that set new standards for quality, innovation, and aesthetic excellence.",
              },
              {
                icon: Award,
                title: "Best Villa Project",
                description:
                  "Honored with the Dubai Luxury Villa Design Award for our work on a 15,000 sq ft Emirates Hills residence, recognized for exceptional spatial planning, material quality, and integration of smart home technology.",
              },
              {
                icon: Users,
                title: "Client Choice Recognition",
                description:
                  "Consistent 5-star ratings and client testimonials have earned us the prestigious Client Choice Award from luxury property platforms, reflecting our commitment to service excellence and client satisfaction.",
              },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-[#c5a572]/10 rounded-full flex items-center justify-center mb-6">
                  <achievement.icon className="text-[#c5a572]" size={32} />
                </div>
                <h3 className="text-xl mb-4">{achievement.title}</h3>
                <p className="text-gray-700 leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div> */}

<div className="max-w-7xl mx-auto px-6 lg:px-8">
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 text-center items-start">
    {[
      { number: "36+", label: "Years Excellence" },
      { number: "750+", label: "Projects Completed", sublabel: "and counting" },
      { number: "50+", label: "Design Awards" },
      { number: "100%", label: "Client Satisfaction" },
    ].map((stat, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#c5a572] mb-3 tracking-tight">
          {stat.number}
        </div>
        <div className="space-y-1">
          <div className="text-gray-900 font-medium text-sm md:text-base lg:text-lg uppercase tracking-wider">
            {stat.label}
          </div>
          {stat.sublabel && (
            <div className="text-gray-500 text-xs md:text-sm italic">
              {stat.sublabel}
            </div>
          )}
        </div>
      </motion.div>
    ))}
  </div>
</div>
        </div>
      </section>
    </div>
  );
}
