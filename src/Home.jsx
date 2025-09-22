import { motion } from "motion/react"
import { Award, GraduationCap, Globe, Users, BookOpen, Wrench, ArrowRight } from "lucide-react"
import CourseCard from "./CourseCard"

function Home() {
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
              <button 
                className="bg-primary-green/90 hover:bg-primary-green text-white font-montserrat font-bold py-4 px-8 md:py-5 md:px-10 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                onClick={() => {
                  // Add your apply now functionality here
                  console.log('Apply Now clicked');
                }}
              >
                Explore Our Programs
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
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
              className="text-lg md:text-xl text-dark-gray font-roboto max-w-3xl mx-auto leading-relaxed"
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
            {/* Accreditation */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-primary-green/10 rounded-full mb-6 mx-auto group-hover:bg-primary-green group-hover:scale-110 transition-all duration-300">
                <Award className="h-10 w-10 text-primary-green group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-dark-gray mb-4 group-hover:text-primary-green transition-colors duration-300">
                Fully Accredited
              </h3>
              <p className="text-dark-gray font-roboto leading-relaxed">
                Accredited by recognized health regulatory bodies such as Primary Health Care Nigeria and the Community Health Practitioners Registration Board of Nigeria (CHPRBN).
              </p>
            </motion.div>

            {/* International Affiliation */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-secondary-blue/10 rounded-full mb-6 mx-auto group-hover:bg-secondary-blue group-hover:scale-110 transition-all duration-300">
                <Globe className="h-10 w-10 text-secondary-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-dark-gray mb-4 group-hover:text-secondary-blue transition-colors duration-300">
                Global Partnership
              </h3>
              <p className="text-dark-gray font-roboto leading-relaxed">
                Affiliated with UMS Healthcare College, New York, providing international exposure and global standards in health education.
              </p>
            </motion.div>

            {/* Scholarship Opportunities */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-accent-red/10 rounded-full mb-6 mx-auto group-hover:bg-accent-red group-hover:scale-110 transition-all duration-300">
                <GraduationCap className="h-10 w-10 text-accent-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-dark-gray mb-4 group-hover:text-accent-red transition-colors duration-300">
                Scholarship Programs
              </h3>
              <p className="text-dark-gray font-roboto leading-relaxed">
                We provide students with opportunities for half and full tuition scholarships to pursue studies at leading institutions worldwide.
              </p>
            </motion.div>

            {/* Structured Programs */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-primary-green/10 rounded-full mb-6 mx-auto group-hover:bg-primary-green group-hover:scale-110 transition-all duration-300">
                <BookOpen className="h-10 w-10 text-primary-green group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-dark-gray mb-4 group-hover:text-primary-green transition-colors duration-300">
                Structured Curriculum
              </h3>
              <p className="text-dark-gray font-roboto leading-relaxed">
                Structured programs that equip you with the skills to excel in the health sector through comprehensive and industry-aligned coursework.
              </p>
            </motion.div>

            {/* Expert Faculty */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-secondary-blue/10 rounded-full mb-6 mx-auto group-hover:bg-secondary-blue group-hover:scale-110 transition-all duration-300">
                <Users className="h-10 w-10 text-secondary-blue group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-dark-gray mb-4 group-hover:text-secondary-blue transition-colors duration-300">
                Expert Faculty
              </h3>
              <p className="text-dark-gray font-roboto leading-relaxed">
                Guided by experienced faculty who bring both academic excellence and industry knowledge to provide world-class education.
              </p>
            </motion.div>

            {/* Hands-on Training */}
            <motion.div 
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center w-20 h-20 bg-accent-red/10 rounded-full mb-6 mx-auto group-hover:bg-accent-red group-hover:scale-110 transition-all duration-300">
                <Wrench className="h-10 w-10 text-accent-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold font-montserrat text-dark-gray mb-4 group-hover:text-accent-red transition-colors duration-300">
                Practical Training
              </h3>
              <p className="text-dark-gray font-roboto leading-relaxed">
                Gain real-world skills through hands-on training with modern facilities and state-of-the-art equipment in our laboratories.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Courses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
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
              className="text-lg md:text-xl text-dark-gray font-roboto max-w-3xl mx-auto leading-relaxed"
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
    </>
  );
}

export default Home;