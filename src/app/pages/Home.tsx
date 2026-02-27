import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Award,
  Users,
  CheckCircle,
  Star,
  Building2,
  Crown,
  Palette,
  Laptop,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import heroImage from "../../assets/hero.jpg";
import villaImage from "../../assets/chairmanroom.jpg";
import penthouseImage from "../../assets/reception.jpg";
import hotelImage from "../../assets/clothe.jpg";
import bedroomImage from "../../assets/bedroomImage.jpg";

const projects = [
  {
    title: "Residence",
    category: "Residential",
    image:
      "https://i.pinimg.com/736x/20/1c/b8/201cb811d218e2237b8b16f590ca4075.jpg",
    description:
      "A stunning Mediterranean-inspired villa featuring Italian marble flooring, custom chandeliers, and floor-to-ceiling windows. This project blends classical elegance with contemporary comfort and smart home technology.",
  },
  {
    title: "showroom",
    category: "Commercial",
    image: hotelImage,
    description:
      "An exclusive 5,000 sq ft retail space designed with rare onyx stone and bespoke metalwork. The layout features fluid open-plan areas and strategic lighting to showcase premium collections.",
  },
  {
    title: "Offices",
    category: "Commercial",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=612,h=544,fit=crop/YX4247ly5bu0QGjv/img-20111011-01052-Yan7nlJaVgC3yZek.jpg",
    description:
      "A sophisticated office environment combining modernism with functionality. Featuring rich walnut paneling, ergonomic collaborative zones, and executive suites designed for high-level productivity.",
  },
  {
    title: "Commercial Spaces",
    category: "Commercial",
    image:
      "https://i.pinimg.com/736x/18/96/db/1896db173f7298f8cd2ddf779b8a2629.jpg",
    description:
      "Grand five-star hotel lobby design featuring soaring ceilings and dramatic lighting. We created a welcoming atmosphere using custom-designed furniture and curated artwork for a lasting first impression.",
  },
  {
    title: "Multiplex",
    category: "Entertainment",
    image:
      "https://content.jdmagicbox.com/comp/bhiwadi/f7/9999p1493.1493.140104173856.r5f7/catalogue/srs-cinemas-v-square-mall-bhiwadi-ho-bhiwadi-multiplex-cinema-halls-3p7r9h2.jpg",
    description:
      "A high-end private cinema and entertainment wing. Featuring acoustic wall treatments, premium leather seating, and state-of-the-art audiovisual integration for an immersive luxury experience.",
  },
  {
    title: "Porta Cabin ",
    category: "Pre febricated",
    image:
      "https://i.pinimg.com/736x/66/23/ce/6623cea9b55b6bce00c012d9f9ba7756.jpg", // Isko aap apni image variable se change kar sakte hain
    description:
      "High-quality prefabricated Porta Cabins designed for durability, mobility, and quick installation. Ideal for site offices, security cabins, staff accommodations, classrooms, and storage units. Built with robust steel structures, insulated wall panels, weather-resistant roofing, and customizable interiors to suit commercial, industrial, and residential requirements. Our porta cabins offer cost-effective, low-maintenance, and relocatable space solutions without compromising on comfort and structural strength.",
  },
];
const services = [
  {
    icon: Building2,
    title: "Residential Interiors",
    link: "/services/residential-interiors", // Unique link
    description:
      "Transform your residence into a personalized sanctuary that reflects your unique lifestyle and aspirations. Our residential design service encompasses everything from initial space planning to final styling, ensuring every element harmonizes to create spaces that are both beautiful and functional.",
  },
  {
    icon: Crown,
    title: "Luxury Villas & Penthouses",
    link: "/services/luxury-villas", // Unique link
    description:
      "Exclusive design services for Dubai's most prestigious addresses, from Palm Jumeirah to Emirates Hills. We understand that luxury living demands exceptional attention to detail, rare materials, and impeccable craftsmanship. Our approach combines architectural understanding with interior expertise.",
  },
  {
    icon: Laptop,
    title: "Commercial & Office Spaces",
    link: "/services/commercial-spaces", // Unique link
    description:
      "Create inspiring work environments that enhance productivity while reflecting your corporate identity. Our commercial design service transforms offices into spaces where creativity flourishes and business thrives. We integrate brand elements seamlessly and optimize space utilization.",
  },
  {
    icon: Palette,
    title: "Turnkey Design Solutions",
    link: "/services/turnkey-solutions", // Unique link
    description:
      "Experience hassle-free transformation with our comprehensive turnkey service managing every aspect from concept to completion. We handle design development, procurement, construction coordination, and installation, ensuring seamless execution and exceptional results.",
  },
];

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://i.pinimg.com/736x/e2/38/f1/e238f1e493256a6009caf3d93ba4b6ab.jpg"
            alt="Luxury Interior"
            className="w-full h-full object-fit-cover object-center "
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-white"
          >
            <h1 className="text-4xl lg:text-7xl mb-6 leading-tight">
              Where Architectural Vision Meets Interior Excellence .
            </h1>
            <p className="text-md lg:text-2xl mb-8 text-gray-100 leading-relaxed">
              For over two decades, Vertical Design & Pinakin Interiors has been
              redefining interiors by transforming architectural frameworks into
              sophisticated, tailor-made spaces across India now under the
              umbrella of <span className="font-bold italic">Alibda</span> a joint
              Venture of{" "}
              <span className="font-bold italic">
                {" "}
                Vertical Design & Pinakin{" "}
              </span>{" "}
              we are all set to expand our expertise in Dubai.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1 md:gap-2
  px-3 py-1 md:px-8 md:py-4
  bg-[#c5a572] text-white
  rounded-md
  text-sm md:text-lg
  hover:bg-[#b39563]
  transition-all
  group"
            >
              Book Your Private Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-5xl mb-8 font-medium text-gray-900 leading-tight">
                A Legacy of Design Excellence In India,{" "}
                <br className="hidden md:block" /> Now in Dubai
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                With a combined experience of over 36 years of{" "}
                <span className="font-semibold text-black">
                  Vertical Design
                </span>{" "}
                and <span className="font-semibold text-black">Pinakin</span>,
                is now offering customized services in UAE under the umbrella of{" "}
                <span className="font-extrabold text-[#c5a572] block mt-2 text-xl md:text-2xl">
                  AL IBDA AL MUSTAMIR TECHNICAL SERVICES L.L.C
                </span>
              </p>

              {/* Yahan fix hai: text-left mobile par, text-justify desktop par */}
              {/* 'hyphens-auto' use kiya hai taaki mobile par gaps na banein */}
              <p className="text-base md:text-lg text-gray-700 leading-relaxed text-left md:text-justify hyphens-auto">
                <span className="font-semibold text-black">
                  Vertical Design
                </span>{" "}
                and{" "}
                <span className="font-semibold text-black">
                  Pinakin Interiors
                </span>{" "}
                has built a reputation for excellence, craftsmanship, and trust.
                Rooted in a strong design legacy across India, we now extend our
                bespoke interior design services in Dubai, serving clients who
                value sophistication, quality, and timeless aesthetics.
              </p>

              <p className="text-base md:text-lg text-gray-700 leading-relaxed mt-6 text-left md:text-justify hyphens-auto">
                Our design philosophy is simple yet enduring — every space
                should reflect the lifestyle, personality, and aspirations of
                its owner. From concept development to final execution, we
                transform architectural spaces into thoughtfully curated
                environments using premium materials, precise detailing, and a
                deep understanding of spatial harmony. With a diverse portfolio
                spanning luxury residences, villas, high-end apartments,
                hospitality spaces, and commercial interiors,{" "}
                <span className="font-bold">Alibda Interiors</span> brings
                international design sensibilities to the dynamic Dubai market.
                Our experienced designers and skilled craftsmen work closely
                with clients to create interiors that are not only visually
                striking, but enduring investments in comfort, functionality,
                and long-term value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 container mx-auto">
        {" "}
        {/* 3 columns for better 6-card layout */}
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg shadow-xl bg-white"
          >
            <div className="overflow-hidden">
              <img
                src={project.image} // Yahan fixed link ki jagah project.image use kiya hai
                alt={project.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl mb-4 font-medium text-gray-900">
                {project.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Services Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4 font-light italic">
              Comprehensive Design Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From intimate apartments to grand villas, we offer full-spectrum
              interior design services tailored to your unique requirements and
              aspirations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-10 rounded-sm border border-transparent hover:border-[#c5a572]/30 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-[#c5a572]/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-[#1a4d2e] transition-colors duration-500">
                  <service.icon
                    className="text-[#c5a572] group-hover:text-white"
                    size={32}
                  />
                </div>
                <h3 className="text-2xl mb-4 font-light text-gray-900 group-hover:text-[#c5a572] transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Link component with dynamic 'to' prop */}
                <Link
                  to={service.link}
                  className="text-[#1a4d2e] hover:text-[#c5a572] inline-flex items-center gap-2 group/btn font-bold uppercase tracking-widest text-xs transition-all"
                >
                  Explore This Service
                  <ArrowRight
                    size={16}
                    className="group-hover/btn:translate-x-2 transition-transform"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#1a4d2e] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl mb-4">
              Why Discerning Clients Choose Alibda
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              More then 3 decade of excellence serving in India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Users,
                title: "Expert Design Team",
                description:
                  "Our multidisciplinary team comprises internationally trained designers, architects, and project managers with decades of combined experience. Each team member brings specialized expertise, from space planning to material specification, ensuring every project benefits from comprehensive professional knowledge and creative vision.",
              },

              {
                icon: Crown,
                title: "Bespoke Design Solutions",
                description:
                  "Every project receives completely customized design solutions tailored to your lifestyle, preferences, and aspirations. We never replicate designs, ensuring your space is uniquely yours. From custom furniture pieces to specially commissioned artwork, we create interiors that are authentic expressions of individual taste and style.",
              },
              {
                icon: Award,
                title: "Vastu Compliant Designs",
                description:
                  "Recognized internationally for design innovation and execution quality, with over 50 prestigious awards including the Middle East Interior Design Award and International Property Design Prize. Our work has been featured in leading architecture and design publications, establishing us as thought leaders in luxury interiors.",
              },

              {
                icon: CheckCircle,
                title: "Turnkey Project Management",
                description:
                  "We manage every aspect of your project with meticulous attention to detail, from initial concept through final installation. Our comprehensive approach includes timeline management, quality control, budget oversight, and coordination with contractors and suppliers, delivering a stress-free experience and guaranteed satisfaction.",
              },

              {
                icon: Palette,
                title: "Premium Material Access",
                description:
                  "Through our global network of suppliers and manufacturers, we provide access to the finest materials and finishes available worldwide. From Italian marble to hand-woven textiles, exotic woods to custom metalwork, we source exceptional materials that elevate your interiors to extraordinary levels of luxury and sophistication.",
              },

              {
                icon: Building2,
                title: "Best Quality Standards in Very reasonable Price",
                description:
                  "With over ten years serving Dubai's luxury property sector, we possess deep understanding of local architectural styles, climate considerations, and regulatory requirements. This expertise, combined with our established relationships with premium suppliers and craftsmen, ensures seamless project execution and exceptional results.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-lg"
              >
                <item.icon className="text-[#c5a572] mb-4" size={36} />
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Client Testimonials */}

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-4">Client Experiences</h2>
            <p className="text-xl text-gray-600">
              What our distinguished clients say about working with us
            </p>
          </div>

          {/* Slider */}
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {[
              // ---------- ALIBDA INTERIORS ----------
              // {
              //   name: "Ahmed Al Mansoori",
              //   location: "Dubai",
              //   text: "Alibda Interiors transformed our villa into a luxurious yet comfortable space. Their attention to detail and professionalism exceeded expectations.",
              // },
              // {
              //   name: "Priya Mehta",
              //   location: "Dubai Marina",
              //   text: "Our apartment now feels like a five-star suite. Elegant design, perfect lighting, and smooth execution throughout.",
              // },
              // {
              //   name: "Khalid Al Falasi",
              //   location: "Dubai",
              //   text: "Exceptional design sense and international quality standards. Highly recommended for luxury interiors.",
              // },
              // {
              //   name: "Fatima Al Zahra",
              //   location: "Dubai",
              //   text: "They beautifully blended Arabic elegance with modern style. Absolutely love the final outcome.",
              // },
              // {
              //   name: "Rahul Khanna",
              //   location: "JLT Dubai",
              //   text: "Thoughtful design planning, premium materials, and flawless execution made our home truly special.",
              // },
              // {
              //   name: "Neha Kapoor",
              //   location: "Dubai",
              //   text: "Turnkey service was seamless and stress-free. Great experience from start to finish.",
              // },
              // {
              //   name: "Sanjay Verma",
              //   location: "Downtown Dubai",
              //   text: "Excellent craftsmanship and material quality. Worth every investment.",
              // },
              // {
              //   name: "Aisha Al Suwaidi",
              //   location: "Dubai",
              //   text: "They captured our vision perfectly and enhanced it beautifully with their expertise.",
              // },
              {
                name: "Omar Al Hashmi",
                location: "Palm Jumeirah",
                text: "Luxury, comfort, and practicality combined perfectly. Highly professional team.",
              },
              {
                name: "Ritika Sharma",
                location: "Business Bay",
                text: "Office interior looks premium now. Clients immediately notice the sophistication.",
              },

              // ---------- PINAKIN ----------
              {
                name: "Rohit Jain",
                location: "Delhi",
                text: "Pinakin transformed our home into a stylish yet functional space with great attention to detail.",
              },
              {
                name: "Sneha Gupta",
                location: "Noida",
                text: "Very professional designer who understood our needs perfectly.",
              },
              {
                name: "Vikas Sharma",
                location: "Gurgaon",
                text: "Creative ideas and smooth execution. Our apartment looks premium now.",
              },
              {
                name: "Anita Desai",
                location: "Mumbai",
                text: "Beautiful color combinations and lighting design. Truly impressed.",
              },
              {
                name: "Karan Malhotra",
                location: "Delhi",
                text: "Excellent space utilization. Compact home now feels spacious.",
              },
              {
                name: "Neha Arora",
                location: "Chandigarh",
                text: "Patient, professional, and detail-oriented throughout the project.",
              },
              {
                name: "Aditya Kapoor",
                location: "Jaipur",
                text: "Fresh ideas and great communication. Highly recommended.",
              },
              {
                name: "Pooja Verma",
                location: "Lucknow",
                text: "Innovative design solutions that enhanced both aesthetics and practicality.",
              },
              {
                name: "Rahul Bansal",
                location: "Delhi",
                text: "Reliable designer with excellent creativity and professionalism.",
              },
              {
                name: "Simran Kaur",
                location: "Amritsar",
                text: "Modern, functional, and beautifully finished interiors.",
              },

              // ---------- VERTICAL DESIGN ----------
              {
                name: "Rajesh Agarwal",
                location: "Delhi",
                text: "Vertical Design delivered a luxurious yet practical living space with outstanding finishing.",
              },
              {
                name: "Anjali Sharma",
                location: "Mumbai",
                text: "Handled space constraints beautifully while maintaining elegance.",
              },
              {
                name: "Rakesh Reddy",
                location: "Hyderabad",
                text: "Perfect blend of Vastu principles and modern aesthetics.",
              },
              {
                name: "Priya Nair",
                location: "Bangalore",
                text: "Professional approach and thoughtful design execution.",
              },
              {
                name: "Siddharth Sen",
                location: "Kolkata",
                text: "Creative designs that reflect quality and sophistication.",
              },
              {
                name: "Meera Kulkarni",
                location: "Pune",
                text: "Material selection and layout planning were exceptional.",
              },
              {
                name: "Amit Verma",
                location: "Gurgaon",
                text: "Our office interior now feels welcoming and premium.",
              },
              {
                name: "Kavita Jain",
                location: "Delhi",
                text: "Smooth coordination and timely project completion.",
              },
              {
                name: "Nitin Arora",
                location: "Chandigarh",
                text: "Innovative ideas combined with practical solutions.",
              },
              {
                name: "Shalini Gupta",
                location: "Noida",
                text: "Exceeded expectations in design quality and service.",
              },
            ].map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gray-50 p-6 rounded-lg flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow h-full">
                  <div>
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="fill-[#c5a572] text-[#c5a572]"
                        />
                      ))}
                    </div>

                    <p className="text-gray-700 mb-6 text-sm italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#c5a572] rounded-full flex items-center justify-center text-white font-medium">
                      {testimonial.name.charAt(0)}
                    </div>

                    <div>
                      <p className="font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#c5a572] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl mb-6">
              Begin Your Design Experience
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Engage with our design experts to explore your vision and
              transform your space into a refined interior crafted with
              precision, elegance, and timeless appeal.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#1a4d2e] rounded-md hover:bg-gray-100 transition-all group text-lg font-medium"
            >
              Schedule Your Private Consultation
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
