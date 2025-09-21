import { motion } from "motion/react"

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
              transition={{ duration: 1, delay: 0.2 }}
            >
              Shaping Competent <br /><span className="text-secondary-blue">Health Professionals </span> <br/>for Tomorrow.
            </motion.h1>

            {/* Subtext */}
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-white mb-8 font-semi-bold font-roboto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Unique City College of Science and Technology provides accredited programs that prepare students to serve their communities and thrive in the global health sector.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <button 
                className="bg-primary-green/90 hover:bg-primary-green text-white font-montserrat font-bold py-4 px-8 md:py-5 md:px-10 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                onClick={() => {
                  // Add your apply now functionality here
                  console.log('Apply Now clicked');
                }}
              >
                Our Courses
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;