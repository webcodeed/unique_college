import { motion } from "motion/react"
import { Eye, ArrowRight } from "lucide-react"

const CourseCard = ({ 
  image, 
  alt, 
  title, 
  description, 
  delay = 0,
  onClick 
}) => {
  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border border-gray-100"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image}
          alt={alt}
          className="w-full h-64 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-8">
        <h3 className="text-xl font-bold font-montserrat text-dark-gray mb-4 group-hover:text-primary-green transition-colors duration-300">
          {title}
        </h3>
        <p className="text-dark-gray font-roboto leading-relaxed mb-6">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <button 
            onClick={onClick}
            className="flex items-center text-primary-green hover:text-primary-green/80 font-montserrat font-semibold transition-colors duration-300"
          >
            <Eye className="h-4 w-4 mr-2" />
            Explore Course
          </button>
          <ArrowRight className="h-5 w-5 text-primary-green group-hover:translate-x-1 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  )
}

export default CourseCard