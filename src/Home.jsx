import { motion } from "motion/react"
import { Award, GraduationCap, Globe, Users, BookOpen, Wrench, ArrowRight, ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react"
import CourseCard from "./CourseCard"
import { useState } from "react"
import { Link as ScrollLink, Element } from "react-scroll"

function Home() {
  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Grace O.",
      role: "Nursing Science Student",
      category: "Current Student",
      message: "Choosing Unique City College of Health was the best decision for my future. The lecturers are supportive, the practical sessions are hands-on, and I feel confident that I am building the skills I need to succeed as a nurse.",
      image: "/testimonial picture.jpg",
      bgColor: "bg-primary-green"
    },
    {
      id: 2,
      name: "Samuel A.",
      role: "Public Health Graduate",
      category: "Graduate",
      message: "I graduated from the Public Health program and immediately found opportunities with a community health project in Lagos. The training I received prepared me not just for a job, but for a meaningful career in service to others.",
      image: "/testimonial picture.jpg",
      bgColor: "bg-secondary-blue"
    },
    {
      id: 3,
      name: "Mrs. O. Adebayo",
      role: "Parent",
      category: "Parent of Student",
      message: "As a parent, I wanted a college that combined affordability with quality education. Unique City College of Health gave my daughter both. I am proud to see her thriving and motivated to build a career in healthcare.",
      image: "/testimonial picture.jpg",
      bgColor: "bg-accent-red"
    }
  ];

  // Why Choose Us features data
  const whyChooseUsFeatures = [
    {
      id: 1,
      icon: Award,
      title: "Fully Accredited",
      description: "Accredited by recognized health regulatory bodies such as Primary Health Care Nigeria and the Community Health Practitioners Registration Board of Nigeria (CHPRBN).",
      colorClass: "primary-green",
      delay: 0.1
    },
    {
      id: 2,
      icon: Globe,
      title: "Global Partnership",
      description: "Affiliated with UMS Healthcare College, New York, providing international exposure and global standards in health education.",
      colorClass: "secondary-blue",
      delay: 0.2
    },
    {
      id: 3,
      icon: GraduationCap,
      title: "Scholarship Programs",
      description: "We provide students with opportunities for half and full tuition scholarships to pursue studies at leading institutions worldwide.",
      colorClass: "accent-red",
      delay: 0.3
    },
    {
      id: 4,
      icon: BookOpen,
      title: "Structured Curriculum",
      description: "Structured programs that equip you with the skills to excel in the health sector through comprehensive and industry-aligned coursework.",
      colorClass: "primary-green",
      delay: 0.4
    },
    {
      id: 5,
      icon: Users,
      title: "Expert Faculty",
      description: "Guided by experienced faculty who bring both academic excellence and industry knowledge to provide world-class education.",
      colorClass: "secondary-blue",
      delay: 0.5
    },
    {
      id: 6,
      icon: Wrench,
      title: "Practical Training",
      description: "Gain real-world skills through hands-on training with modern facilities and state-of-the-art equipment in our laboratories.",
      colorClass: "accent-red",
      delay: 0.6
    }
  ];

  // FAQ data
  const faqData = [
    {
      id: 1,
      question: "What are the admission requirements?",
      answer: "General admission requires five O'Level credits including English, Mathematics, and science subjects. Some programs may require additional criteria."
    },
    {
      id: 2,
      question: "Is the college accredited?",
      answer: "Yes. Our programs are fully accredited by the relevant health regulatory bodies."
    },
    {
      id: 3,
      question: "Do you provide hostel accommodation?",
      answer: "Yes. Hostel facilities are available for interested students."
    },
    {
      id: 4,
      question: "Can I work while studying?",
      answer: "Yes, but we advise balancing work with your academic commitments."
    },
    {
      id: 5,
      question: "What career support services do you offer?",
      answer: "We provide career counseling, job placement assistance, internship opportunities, and ongoing professional development support to help our graduates succeed in their healthcare careers."
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/portrait-nurse-scrubs-clinic.jpg" 
            alt="Nurse in scrubs at clinic representing healthcare excellence" 
            className="w-full h-full object-cover object-center"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20 "></div>
        </div>

        {/* Hero Content - Responsive Alignment */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center lg:justify-end"
        
        >
          <div className="max-w-2xl text-center lg:text-right">
            {/* Headline */}
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-merriweather text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Shaping Competent <br /><span className="text-secondary-blue">Health Professionals </span> <br/>for Tomorrow.
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-white mb-8 font-semi-bold font-roboto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Unique City College of Science and Technology provides accredited programs that prepare students to serve their communities and thrive in the global health sector.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <ScrollLink
                to="courses"
                smooth={true}
                duration={800}
                offset={-80}
                className="bg-primary-green/90 hover:bg-primary-green text-white font-montserrat font-bold py-4 px-8 md:py-5 md:px-10 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer inline-block"
              >
                Explore Our Programs
              </ScrollLink>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center lg:text-left mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-merriweather text-dark-gray mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Choose <span className="text-secondary-blue">Unique City College</span>?
            </motion.h2>
            <motion.p 
              className="text-base lg:text-xl text-dark-gray font-roboto max-w-3xl lg:max-w-none lg:mx-0 mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our commitment to excellence in health education sets us apart. Discover what makes us the preferred choice for aspiring health professionals.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {whyChooseUsFeatures.map((feature) => {
              const IconComponent = feature.icon;
              
              // Define complete class names for proper Tailwind detection
              const colorClasses = {
                'primary-green': {
                  bg: 'bg-primary-green/10',
                  hoverBg: 'group-hover:bg-primary-green',
                  text: 'text-primary-green',
                  hoverText: 'group-hover:text-primary-green'
                },
                'secondary-blue': {
                  bg: 'bg-secondary-blue/10',
                  hoverBg: 'group-hover:bg-secondary-blue',
                  text: 'text-secondary-blue',
                  hoverText: 'group-hover:text-secondary-blue'
                },
                'accent-red': {
                  bg: 'bg-accent-red/10',
                  hoverBg: 'group-hover:bg-accent-red',
                  text: 'text-accent-red',
                  hoverText: 'group-hover:text-accent-red'
                }
              };
              
              const colors = colorClasses[feature.colorClass];
              
              return (
                <motion.div 
                  key={feature.id}
                  className="text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: feature.delay }}
                  viewport={{ once: true }}
                >
                  <div className={`flex items-center justify-center w-20 h-20 ${colors.bg} rounded-full mb-6 mx-auto ${colors.hoverBg} group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className={`h-10 w-10 ${colors.text} group-hover:text-white transition-colors duration-300`} />
                  </div>
                  <h3 className={`text-xl font-semibold font-montserrat text-dark-gray mb-4 ${colors.hoverText} transition-colors duration-300`}>
                    {feature.title}
                  </h3>
                  <p className="text-dark-gray text-sm lg:text-base font-roboto leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <Element name="courses">
        <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center lg:text-left mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-merriweather text-dark-gray mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our <span className="text-primary-green">Academic Programs</span>
            </motion.h2>
            <motion.p 
              className="text-base lg:text-xl text-dark-gray font-roboto max-w-3xl lg:max-w-none lg:mx-0 mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover our comprehensive health education programs designed to prepare you for excellence in the healthcare sector. Each program combines theoretical knowledge with practical training.
            </motion.p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <CourseCard
              image="/chew (2).jpg"
              alt="Community Health Extension Worker Program"
              title="Community Health Extension Worker (CHEW)"
              description="This program equips students with the knowledge and practical skills to provide essential healthcare services at the community level. Students are trained in preventive, promotive, and basic curative health care."
              delay={0.1}
              onClick={() => console.log('CHEW course clicked')}
            />
            
            <CourseCard
              image="/pharmacy technician.jpg"
              alt="Pharmacy Technician Program"
              title="Pharmacy Technician"
              description="This program prepares students to assist pharmacists in dispensing medications, managing inventories, and providing patient guidance under supervision in various healthcare settings."
              delay={0.2}
              onClick={() => console.log('Pharmacy Technician course clicked')}
            />
            
            <CourseCard
              image="/public health nursing.jpg"
              alt="Public Health Nursing Program"
              title="Public Health Nursing"
              description="This program focuses on the prevention of diseases and the promotion of health within populations. Students learn public health principles, epidemiology, and community-based care."
              delay={0.3}
              onClick={() => console.log('Public Health Nursing course clicked')}
            />
          </div>

          {/* View All Courses CTA */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <button className="bg-primary-green hover:bg-primary-green/90 text-white font-montserrat font-bold py-4 px-8 md:py-5 md:px-12 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center">
              View All Courses
              <ArrowRight className="h-5 w-5 ml-3" />
            </button>
          </motion.div>
        </div>
        </section>
      </Element>

      {/* Testimonials Section */}
      <section className="py-20 bg-light-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center lg:text-left mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-merriweather text-dark-gray mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Hear From <span className="text-secondary-blue">Our Community</span>
            </motion.h2>
            <motion.p 
              className="text-base lg:text-xl text-dark-gray font-roboto max-w-3xl lg:max-w-none lg:mx-0 mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Success in healthcare starts with the right foundation. Discover how our alumni built rewarding careers through Unique City College.
            </motion.p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-dark-gray group-hover:text-primary-green transition-colors duration-300" />
            </button>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-dark-gray group-hover:text-primary-green transition-colors duration-300" />
            </button>

            {/* Testimonials Container */}
            <div className="mx-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={`${index === currentTestimonial ? 'block' : 'hidden'}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: index === currentTestimonial ? 1 : 0, x: index === currentTestimonial ? 0 : 100 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Chat-like Design */}
                  <div className="max-w-4xl mx-auto">
                    {/* User Info Header */}
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                        />
                        <div className={`absolute -bottom-1 -right-1 w-6 h-6 ${testimonial.bgColor} rounded-full border-2 border-white flex items-center justify-center`}>
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-xl font-bold font-montserrat text-dark-gray">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm font-roboto text-gray-600">
                          {testimonial.category} • {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Chat Bubble */}
                    <div className="relative">
                      <div className="bg-white rounded-2xl rounded-tl-md p-8 shadow-lg border border-gray-100">
                        <p className="text-md md:text-xl text-dark-gray font-roboto leading-relaxed italic">
                          "{testimonial.message}"
                        </p>
                      </div>
                      {/* Chat tail */}
                      <div className="absolute -top-2 left-6 w-4 h-4 bg-white border-l border-t border-gray-100 transform rotate-45"></div>
                    </div>

                    {/* Floating Elements for Academic Feel */}
                    <div className={`absolute top-4 right-4 w-12 h-12 ${testimonial.bgColor} rounded-lg opacity-20`}></div>
                    <div className={`absolute bottom-4 left-4 w-10 h-10 ${testimonial.bgColor} rounded-lg opacity-30`}></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial 
                      ? 'bg-primary-green scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Statistics or Additional Info */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-merriweather text-primary-green mb-2">
                500+
              </div>
              <p className="text-dark-gray font-medium font-roboto">Successful Graduates</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-merriweather text-secondary-blue mb-2">
                20+
              </div>
              <p className="text-dark-gray font-medium font-roboto">Qualified Healthcare Professionals</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold font-merriweather text-accent-red mb-2">
                5+
              </div>
              <p className="text-dark-gray font-medium font-roboto">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 lg:items-start">
            {/* Header - Left side on lg screens */}
            <div className="lg:col-span-4 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold font-merriweather text-dark-gray mb-10">
                  Frequently Asked{" "}
                  <span className="text-primary-green">Questions</span>
                </h2>
                {/* <p className="text-base lg:text-xl text-dark-gray font-roboto leading-relaxed mb-8 lg:mb-0">
                  Find answers to common questions about our programs, admission process, and student services.
                </p> */}
              </motion.div>
            </div>

            {/* FAQ Items - Right side on lg screens */}
            <div className="lg:col-span-8">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {faqData.map((faq, index) => (
                  <div key={faq.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left flex items-center justify-between group focus:outline-none"
                    >
                      <h3 className="text-base lg:text-xl font-medium font-montserrat text-primary-green pr-4 group-hover:text-primary-green transition-colors duration-200">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFaqId === faq.id ? (
                          <ChevronUp className="h-6 w-6 text-primary-green transition-transform duration-200" />
                        ) : (
                          <ChevronDown className="h-6 w-6 text-gray-400 group-hover:text-primary-green transition-colors duration-200" />
                        )}
                      </div>
                    </button>
                    
                    <motion.div
                      initial={false}
                      animate={{
                        height: openFaqId === faq.id ? "auto" : 0,
                        opacity: openFaqId === faq.id ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="pt-4">
                        <p className="text-dark-gray font-roboto leading-relaxed text-sm lg:text-md">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;