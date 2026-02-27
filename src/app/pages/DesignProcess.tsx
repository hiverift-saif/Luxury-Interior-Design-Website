import { motion } from 'motion/react';
import { MessageCircle, Lightbulb, PenTool, Hammer, CheckCircle } from 'lucide-react';

const processSteps = [
  {
    icon: MessageCircle,
    title: 'Initial Consultation',
    description: 'We begin with an in-depth consultation to understand your vision, lifestyle, and requirements. This is where we learn about your preferences and aspirations.',
    timeline: 'Week 1',
    points: [
      "Initial site walkthrough & measurement",
      "Detailed project brief creation",
      "Budget & timeline alignment"
    ]
  },
  {
    icon: Lightbulb,
    title: 'Concept Development',
    description: 'Our design team creates initial concepts and mood boards, presenting you with creative solutions that align with your vision and budget.',
    timeline: 'Week 2-3',
    points: [
      "Mood boards & material palettes",
      "2D Furniture layout options",
      "Design direction approval"
    ]
  },
  {
    icon: PenTool,
    title: 'Design Development',
    description: 'We refine the chosen concept with detailed drawings, 3D visualizations, material selections, and technical specifications.',
    timeline: 'Week 4-6',
    points: [
      "Photorealistic 3D visualizations",
      "Selection of finishes & fixtures",
      "Detailed technical GFC drawings"
    ]
  },
  {
    icon: Hammer,
    title: 'Implementation',
    description: 'Our project management team oversees the execution, coordinating with craftsmen and suppliers to ensure flawless implementation.',
    timeline: 'Week 7-12',
    points: [
      "Civil & MEP site execution",
      "Custom furniture manufacturing",
      "On-site quality supervision"
    ]
  },
  {
    icon: CheckCircle,
    title: 'Final Handover',
    description: 'After meticulous quality checks and final touches, we present your transformed space, ready for you to enjoy.',
    timeline: 'Week 13',
    points: [
      "Snag list rectification",
      "Deep cleaning & styling",
      "Final walkthrough & key handover"
    ]
  },
];

const processImage = 'https://images.unsplash.com/photo-1622015663319-e97e697503ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjB2aWxsYXxlbnwxfHx8fDE3Njg4OTgwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral';

export default function DesignProcess() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-[#1a4d2e]">
        <div className="absolute inset-0">
          <img src={processImage} alt="Design Process" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-8 flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl lg:text-7xl mb-6">Design Process</h1>
            <p className="text-xl lg:text-2xl text-gray-200 max-w-2xl">
              A structured journey to perfection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl lg:text-5xl mb-4 text-gray-900 font-medium">From Vision to Reality</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven process ensures exceptional results every time
            </p>
          </motion.div>

          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}>
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <div className="flex items-start gap-6">
                      <div className="w-20 h-20 bg-[#c5a572] rounded-lg flex items-center justify-center flex-shrink-0">
                        <step.icon className="text-white" size={40} />
                      </div>
                      <div>
                        <div className="text-[#c5a572] text-sm mb-2 font-bold tracking-widest">{step.timeline}</div>
                        <h3 className="text-3xl lg:text-4xl mb-4 text-gray-900">{step.title}</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                    <div className="relative">
                      {/* Vertical line indicator for Desktop */}
                      <div className="absolute -left-8 top-0 bottom-0 w-1 bg-[#c5a572]/30 hidden lg:block" />
                      <div className="absolute -left-11 top-1/2 -translate-y-1/2 w-7 h-7 bg-[#c5a572] rounded-full flex items-center justify-center text-white hidden lg:flex font-bold">
                        {index + 1}
                      </div>
                      
                      {/* Dynamic Points Box */}
                      <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                        <div className="space-y-4">
                          {step.points.map((point, pIndex) => (
                            <div key={pIndex} className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-[#c5a572] rounded-full flex-shrink-0" />
                              <span className="text-gray-700 font-medium">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}