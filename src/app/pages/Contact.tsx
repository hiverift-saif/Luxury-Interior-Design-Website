import { motion } from 'framer-motion'; 
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';

const contactImage = 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2ODkyMzkzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  
    if (status.type) setStatus({ type: null, message: '' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.projectType || !formData.message) {
      setStatus({ type: 'error', message: 'Please fill all required fields.' });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    
    const projectTypeMap: Record<string, string> = {
      residential: 'Residential Interior',
      villa: 'Luxury Villa',
      penthouse: 'Penthouse',
      commercial: 'Commercial Space',
      hospitality: 'Hospitality',
      turnkey: 'Turnkey Solution',
    };

    const selectedType = formData.projectType;
    const backendProjectType = projectTypeMap[selectedType] || selectedType; 

    const payload = {
      fullName: formData.name.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phone.trim(),
      projectType: backendProjectType,          
      projectDetails: formData.message.trim(),
    };

    console.log('Sending to backend:', payload); 

    try {
      const response = await fetch('http://192.168.0.112:4000/submitfrom', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus({
          type: 'success',
          message: result.message || 'Your request has been submitted successfully!!',
        });
       
        setFormData({
          name: '',
          email: '',
          phone: '',
          projectType: '',
          message: '',
        });
      } else {
        setStatus({
          type: 'error',
          message: result.message || 'Submission failed. Please try again later.',
        });
      }
    } catch (err) {
      console.error('Error:', err);
      setStatus({
        type: 'error',
        message: 'Something went wrong while submitting. Please try again later.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      {/**/}
      <section className="relative h-[60vh] bg-[#1a4d2e]">
        <div className="absolute inset-0">
          <img src={contactImage} alt="Contact Us" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl lg:text-7xl mb-6">Get In Touch</h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl">
              Let's discuss your next project
            </p>
          </motion.div>
        </div>
      </section>

     
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl mb-8">Schedule Your Consultation</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a572]"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a572]"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a572]"
                    placeholder="+971 XX XXX XXXX"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm mb-2 text-gray-700">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a572]"
                  >
                    <option value="">Select project type</option>
                    <option value="residential">Residential Interior</option>
                    <option value="villa">Luxury Villa</option>
                    <option value="penthouse">Penthouse</option>
                    <option value="commercial">Commercial Space</option>
                    <option value="hospitality">Hospitality</option>
                    <option value="turnkey">Turnkey Solution</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#c5a572]"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full px-8 py-4 bg-[#c5a572] text-white rounded-md transition-colors ${
                    loading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[#b39563]'
                  }`}
                >
                  {loading ? 'Submitting...' : 'Schedule Consultation'}
                </button>

                
                {status.message && (
                  <div
                    className={`mt-4 p-4 rounded-md text-center ${
                      status.type === 'success'
                        ? 'bg-green-100 text-green-800 border border-green-300'
                        : 'bg-red-100 text-red-800 border border-red-300'
                    }`}
                  >
                    {status.message}
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Info + Map -  */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c5a572]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#c5a572]" size={24} />
                    </div>
                    <div>
                      <h4 className="mb-1">Office Address</h4>
                      <p className="text-gray-600">
                        Iris Bay -2205<br />
                        Bussiness Bay Dubai<br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c5a572]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#c5a572]" size={24} />
                    </div>
                    <div>
                      <h4 className="mb-1">Phone</h4>
                    
                       <p className="text-gray-600">+966 559786327</p>
                         <p className="text-gray-600">+91 9650786351</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c5a572]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#c5a572]" size={24} />
                    </div>
                    <div>
                      <h4 className="mb-1">Email</h4>
                      <p className="text-gray-600">info@alibdainteriors.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#c5a572]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-[#c5a572]" size={24} />
                    </div>
                    <div>
                      <h4 className="mb-1">Business Hours</h4>
                      <p className="text-gray-600">
                        9:00 AM - 6:00 PM<br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>

             
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-inner transition-all duration-700 border border-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14441.536768393527!2d55.292557617443834!3d25.1894473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6834927515d1%3A0xc3f124c8b98166c4!2sDubai%20Design%20District!5e0!3m2!1sen!2sae!4v1710000000000!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alibda Interiors Office Location"
                ></iframe>

                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-sm shadow-lg border-l-4 border-[#c5a572] hidden md:block">
                  <p className="text-xs uppercase tracking-widest text-[#c5a572] font-bold mb-1">Our Studio</p>
                  <p className="text-sm font-medium text-gray-900">Building 4, Dubai Design District</p>
                  <p className="text-xs text-gray-500">Dubai, United Arab Emirates</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}