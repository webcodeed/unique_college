import { motion } from "motion/react"
import { Award, Target, Users, BookOpen, Heart, Globe, Shield, Lightbulb, GraduationCap, Building, Calendar, MapPin } from "lucide-react"

function About() {
  // Our Values data
  const values = [
    {
      id: 1,
      icon: Heart,
      title: "Compassion",
      description: "We foster empathy and care in all our interactions, ensuring our graduates serve with genuine concern for human welfare.",
      colorClass: "primary-green",
      delay: 0.1
    },
    {
      id: 2,
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in education, research, and service delivery to our communities.",
      colorClass: "secondary-blue",
      delay: 0.2
    },
    {
      id: 3,
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge teaching methods and encourage creative solutions to healthcare challenges.",
      colorClass: "accent-red",
      delay: 0.3
    },
    {
      id: 4,
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest quality in education, ensuring our graduates meet and exceed industry standards.",
      colorClass: "primary-green",
      delay: 0.4
    },
    {
      id: 5,
      icon: Users,
      title: "Community",
      description: "We build strong relationships with local and global communities to create meaningful healthcare impact.",
      colorClass: "secondary-blue",
      delay: 0.5
    },
    {
      id: 6,
      icon: Globe,
      title: "Global Perspective",
      description: "We prepare students for both local service and international healthcare opportunities.",
      colorClass: "accent-red",
      delay: 0.6
    }
  ];

  // Leadership data
  const leadership = [
    {
      id: 1,
      name: "Dr. Adebayo Ogundimu",
      position: "Provost & Chief Executive",
      qualification: "PhD in Public Health, MPH",
      bio: "With over 20 years in health education and administration, Dr. Ogundimu has led the college's transformation into a premier healthcare institution. His vision for accessible, quality health education continues to drive our institutional growth.",
      image: "/portrait-nurse-scrubs-clinic.jpg"
    },
    {
      id: 2,
      name: "Dr. Fatima Yusuf",
      position: "Dean of Academic Affairs",
      qualification: "PhD in Nursing Science, RN",
      bio: "Dr. Yusuf oversees all academic programs and curriculum development. Her expertise in nursing education and commitment to student success has elevated our academic standards significantly.",
      image: "/testimonial picture.jpg"
    },
    {
      id: 3,
      name: "Prof. Michael Adebisi",
      position: "Director of Research & Innovation",
      qualification: "PhD in Community Health, FWCP",
      bio: "Leading our research initiatives and community outreach programs, Prof. Adebisi ensures our institution remains at the forefront of healthcare innovation and community service.",
      image: "/public health nursing.jpg"
    }
  ];

  // Partners and Accreditation data
  const partners = [
    {
      id: 1,
      name: "Primary Health Care Nigeria",
      type: "Accreditation Body",
      description: "Official recognition for our healthcare programs"
    },
    {
      id: 2,
      name: "Community Health Practitioners Registration Board of Nigeria (CHPRBN)",
      type: "Professional Body",
      description: "Certification and professional standards oversight"
    },
    {
      id: 3,
      name: "UMS Healthcare College, New York",
      type: "International Partner",
      description: "Global standards and international exposure programs"
    },
    {
      id: 4,
      name: "Federal Ministry of Health",
      type: "Government Partner",
      description: "Policy alignment and workforce development collaboration"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-r from-primary-green/10 to-secondary-blue/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="/chew (2).jpg" 
            alt="Healthcare education environment" 
            className="w-full h-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-white/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-merriweather text-dark-gray mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Building Tomorrow's <span className="text-primary-green">Healthcare Professionals</span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-dark-gray mb-8 font-roboto leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Unique City College of Health was founded with a clear mission: to produce competent, compassionate, and innovative health professionals. With accredited programs and a strong commitment to community service, we have become a trusted choice for aspiring healthcare practitioners.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div className="flex items-center text-primary-green font-medium">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Established 2019</span>
              </div>
              <div className="flex items-center text-secondary-blue font-medium">
                <MapPin className="h-5 w-5 mr-2" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center text-accent-red font-medium">
                <GraduationCap className="h-5 w-5 mr-2" />
                <span>500+ Graduates</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Vision */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-secondary-blue/10 rounded-full">
                  <Target className="h-8 w-8 text-secondary-blue" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-dark-gray">
                  Our Vision
                </h2>
              </div>
              <p className="text-lg md:text-xl text-secondary-blue font-semibold font-roboto italic leading-relaxed">
                "To be a leading institution recognized for excellence in health education, research, and community impact."
              </p>
              <p className="text-dark-gray font-roboto leading-relaxed">
                We envision a future where our graduates are at the forefront of healthcare innovation, serving communities with distinction and contributing to the global advancement of health sciences.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary-green/10 rounded-full">
                  <BookOpen className="h-8 w-8 text-primary-green" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-dark-gray">
                  Our Mission
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-dark-gray font-roboto">
                    <span className="font-semibold">Provide high-quality, affordable health programs</span> that meet international standards while remaining accessible to students from diverse backgrounds.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-dark-gray font-roboto">
                    <span className="font-semibold">Equip students with practical and professional skills</span> through hands-on training and real-world experience in healthcare settings.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-dark-gray font-roboto">
                    <span className="font-semibold">Foster research, innovation, and community service</span> in health to address local and global healthcare challenges.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-merriweather text-dark-gray mb-8">
                Our <span className="text-primary-green">Story</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-dark-gray font-roboto leading-relaxed">
                  Founded in 2019, Unique City College of Health emerged from a vision to bridge the gap between healthcare education and community needs in Nigeria. Recognizing the critical shortage of skilled healthcare professionals, our founders established an institution that would combine academic excellence with practical, community-focused training.
                </p>
                
                <p className="text-dark-gray font-roboto leading-relaxed">
                  From our humble beginnings with just 50 students and 3 programs, we have grown into a respected institution serving over 1,200 students across multiple healthcare disciplines. Our commitment to affordability, quality, and accessibility has made healthcare education attainable for students from all backgrounds.
                </p>
                
                <p className="text-dark-gray font-roboto leading-relaxed">
                  Today, our graduates serve in hospitals, clinics, and community health centers across Nigeria and beyond. Their success stories fuel our continued dedication to producing healthcare professionals who are not only technically competent but also compassionate leaders in their communities.
                </p>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold font-merriweather text-primary-green mb-2">1,200+</div>
                    <p className="text-dark-gray font-roboto text-sm">Current Students</p>
                  </div>
                  <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold font-merriweather text-secondary-blue mb-2">500+</div>
                    <p className="text-dark-gray font-roboto text-sm">Alumni Serving</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Story Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="/pharmacy technician.jpg" 
                  alt="Students in healthcare training" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-green/20 to-transparent"></div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Building className="h-8 w-8 text-secondary-blue" />
                  <div>
                    <div className="text-lg font-bold font-montserrat text-dark-gray">5+ Years</div>
                    <p className="text-sm text-gray-600 font-roboto">of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-merriweather text-dark-gray mb-6">
              Our <span className="text-secondary-blue">Leadership</span>
            </h2>
            <p className="text-lg text-dark-gray font-roboto max-w-3xl mx-auto leading-relaxed">
              Meet the visionary leaders who guide our institution toward excellence in health education and community service.
            </p>
          </motion.div>

          {/* Leadership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.id}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold font-montserrat text-dark-gray mb-2">
                    {leader.name}
                  </h3>
                  <p className="text-primary-green font-semibold font-roboto mb-2">
                    {leader.position}
                  </p>
                  <p className="text-secondary-blue text-sm font-roboto mb-4">
                    {leader.qualification}
                  </p>
                  <p className="text-dark-gray font-roboto text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-merriweather text-dark-gray mb-6">
              Our <span className="text-accent-red">Values</span>
            </h2>
            <p className="text-lg text-dark-gray font-roboto max-w-3xl mx-auto leading-relaxed">
              These core values guide everything we do, from curriculum development to community service, ensuring our graduates embody the highest standards of healthcare practice.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => {
              const IconComponent = value.icon;
              
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
              
              const colors = colorClasses[value.colorClass];

              return (
                <motion.div
                  key={value.id}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: value.delay }}
                  viewport={{ once: true }}
                >
                  <div className={`flex items-center justify-center w-16 h-16 ${colors.bg} rounded-full mb-6 ${colors.hoverBg} group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className={`h-8 w-8 ${colors.text} group-hover:text-white transition-colors duration-300`} />
                  </div>
                  <h3 className={`text-xl font-bold font-montserrat text-dark-gray mb-4 ${colors.hoverText} transition-colors duration-300`}>
                    {value.title}
                  </h3>
                  <p className="text-dark-gray font-roboto leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Accreditation & Partners Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-merriweather text-dark-gray mb-6">
              Accreditation & <span className="text-primary-green">Partners</span>
            </h2>
            <p className="text-lg text-dark-gray font-roboto max-w-3xl mx-auto leading-relaxed">
              Our programs are recognized and accredited by leading health organizations, ensuring our graduates meet the highest professional standards.
            </p>
          </motion.div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="bg-light-gray rounded-xl p-8 border border-gray-200 hover:border-primary-green/30 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary-green/10 rounded-lg group-hover:bg-primary-green group-hover:scale-110 transition-all duration-300">
                    <Award className="h-6 w-6 text-primary-green group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold font-montserrat text-dark-gray mb-2 group-hover:text-primary-green transition-colors duration-300">
                      {partner.name}
                    </h3>
                    <p className="text-secondary-blue font-semibold font-roboto text-sm mb-2">
                      {partner.type}
                    </p>
                    <p className="text-dark-gray font-roboto text-sm leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;