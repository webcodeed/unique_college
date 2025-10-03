import { motion } from "motion/react"
import { useState } from "react"
import { 
  Users, 
  BookOpen, 
  Camera, 
  Heart, 
  Award, 
  MapPin,
  Clock,
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Stethoscope,
  Globe
} from "lucide-react"

function Student() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Gallery images with descriptions - using available images multiple times with different contexts
  const galleryImages = [
    {
      id: 1,
      src: "/chew (2).jpg",
      alt: "Students during practical session",
      caption: "Hands-on learning in our modern laboratories",
      category: "academics",
      size: "large" // Different sizes for masonry layout
    },
    {
      id: 2,
      src: "/pharmacy technician.jpg",
      alt: "Pharmacy technology students",
      caption: "Future pharmacy technicians mastering their craft",
      category: "academics",
      size: "medium"
    },
    {
      id: 3,
      src: "/portrait-nurse-scrubs-clinic.jpg",
      alt: "Nursing student in clinical setting",
      caption: "Clinical training preparing students for real-world practice",
      category: "clinical",
      size: "medium"
    },
    {
      id: 4,
      src: "/public health nursing.jpg",
      alt: "Public health nursing students",
      caption: "Community health initiatives and fieldwork",
      category: "community",
      size: "large"
    },
    {
      id: 5,
      src: "/testimonial picture.jpg",
      alt: "Student testimonial",
      caption: "Success stories from our graduates",
      category: "success",
      size: "small"
    },
    {
      id: 6,
      src: "/chew (2).jpg",
      alt: "Group study session",
      caption: "Collaborative learning environment",
      category: "academics",
      size: "medium"
    },
    {
      id: 7,
      src: "/pharmacy technician.jpg",
      alt: "Laboratory work",
      caption: "State-of-the-art equipment and facilities",
      category: "facilities",
      size: "small"
    },
    {
      id: 8,
      src: "/portrait-nurse-scrubs-clinic.jpg",
      alt: "Clinical practice",
      caption: "Real-world experience in healthcare settings",
      category: "clinical",
      size: "large"
    },
    {
      id: 9,
      src: "/public health nursing.jpg",
      alt: "Community outreach",
      caption: "Making a difference in local communities",
      category: "community",
      size: "medium"
    },
    {
      id: 10,
      src: "/testimonial picture.jpg",
      alt: "Student achievement",
      caption: "Celebrating academic excellence",
      category: "success",
      size: "small"
    },
    {
      id: 11,
      src: "/chew (2).jpg",
      alt: "Campus life",
      caption: "Vibrant campus community",
      category: "campus",
      size: "medium"
    },
    {
      id: 12,
      src: "/pharmacy technician.jpg",
      alt: "Practical training",
      caption: "Professional skills development",
      category: "academics",
      size: "large"
    }
  ]

  // Activity categories for campus life section
  const campusActivities = [
    {
      icon: Stethoscope,
      title: "Medical Societies",
      description: "Join professional societies and clubs related to your field of study."
    },
    {
      icon: Users,
      title: "Peer Support Groups",
      description: "Connect with fellow students through study groups and peer mentoring programs."
    },
    {
      icon: Globe,
      title: "Community Outreach",
      description: "Participate in health awareness campaigns and community service projects."
    },
    {
      icon: Award,
      title: "Academic Excellence",
      description: "Recognition programs for outstanding academic achievement and leadership."
    }
  ]

  const openModal = (image) => {
    setSelectedImage(image)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedImage(null)
  }

  const getSizeClasses = (size) => {
    switch (size) {
      case 'large':
        return 'md:row-span-2 md:col-span-2'
      case 'medium':
        return 'md:row-span-2'
      case 'small':
      default:
        return 'md:row-span-1'
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary-green/90 to-secondary-blue/90 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-merriweather text-white mb-6 leading-tight"
            >
              Student Life at <br />
              <span className="text-accent-red">Unique City College</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-white/90 mb-8 font-roboto leading-relaxed max-w-3xl mx-auto"
            >
              Experience a vibrant campus community where academic excellence meets personal growth, 
              preparing you for a successful career in healthcare while building lifelong connections.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Learning Beyond the Classroom */}
      <section className="py-16 lg:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-dark-gray mb-6">
                Learning Beyond the <span className="text-secondary-blue">Classroom</span>
              </h2>
              <p className="text-lg text-dark-gray font-roboto mb-6 leading-relaxed">
                At Unique City College of Health, students benefit from both academic excellence 
                and a supportive campus environment. Our holistic approach to education ensures 
                that you develop not just technical skills, but also the critical thinking, 
                leadership, and interpersonal abilities essential for healthcare professionals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <BookOpen className="h-6 w-6 text-primary-green mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark-gray mb-1">Practical Training</h4>
                    <p className="text-sm text-dark-gray/80">Hands-on experience in real healthcare settings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-6 w-6 text-secondary-blue mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-dark-gray mb-1">Peer Learning</h4>
                    <p className="text-sm text-dark-gray/80">Collaborative study groups and mentorship programs</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="/chew (2).jpg"
                alt="Students learning in classroom"
                className="w-full h-80 object-cover rounded-lg shadow-xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Campus Life Activities */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-merriweather text-dark-gray mb-6"
            >
              Campus <span className="text-primary-green">Life & Activities</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-dark-gray font-roboto max-w-3xl mx-auto leading-relaxed"
            >
              Beyond academics, our campus offers numerous opportunities for personal development, 
              community engagement, and professional networking that enrich your college experience.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {campusActivities.map((activity, index) => {
              const IconComponent = activity.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group hover:shadow-lg p-6 rounded-lg transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-primary-green/10 rounded-full mb-4 mx-auto group-hover:bg-primary-green group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="h-8 w-8 text-primary-green group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold font-montserrat text-dark-gray mb-3">
                    {activity.title}
                  </h3>
                  <p className="text-dark-gray/80 font-roboto leading-relaxed">
                    {activity.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Virtual Tour Gallery */}
      <section className="py-16 lg:py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-merriweather text-dark-gray mb-6"
            >
              Virtual <span className="text-secondary-blue">Tour Gallery</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-dark-gray font-roboto max-w-3xl mx-auto leading-relaxed"
            >
              Explore our campus through the eyes of our students. From state-of-the-art laboratories 
              to community outreach programs, see what makes our college experience unique.
            </motion.p>
          </div>

          {/* Masonry Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`group relative overflow-hidden rounded-lg cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 ${getSizeClasses(image.size)}`}
                onClick={() => openModal(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-semibold text-sm leading-tight">
                      {image.caption}
                    </p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Placeholder Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold font-merriweather text-dark-gray mb-6"
            >
              Take a <span className="text-primary-green">Virtual Tour</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg text-dark-gray font-roboto leading-relaxed"
            >
              Experience our campus facilities, classrooms, and student life through our interactive virtual tour.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-gradient-to-br from-primary-green/20 to-secondary-blue/20 rounded-lg overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <img
              src="/chew (2).jpg"
              alt="Virtual tour preview"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-white transition-colors duration-300 group-hover:scale-110 transform">
                  <Play className="h-10 w-10 text-primary-green ml-1" />
                </div>
                <p className="text-white font-bold text-lg">Watch Campus Tour</p>
                <p className="text-white/80 text-sm">Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-primary-green to-secondary-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-merriweather text-white mb-6"
          >
            Ready to Join Our Community?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-white/90 mb-8 font-roboto leading-relaxed"
          >
            Start your journey towards a rewarding career in healthcare. Discover how our supportive 
            environment and comprehensive programs can help you achieve your goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-primary-green font-montserrat font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Apply Now
            </button>
            <button className="border-2 border-white text-white font-montserrat font-bold py-4 px-8 rounded-lg text-lg hover:bg-white hover:text-primary-green transition-all duration-300 transform hover:scale-105">
              Schedule Visit
            </button>
          </motion.div>
        </div>
      </section>

      {/* Image Modal */}
      {isModalOpen && selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors duration-300"
            >
              <X className="h-6 w-6" />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold font-montserrat text-dark-gray mb-2">
                {selectedImage.alt}
              </h3>
              <p className="text-dark-gray/80 font-roboto">
                {selectedImage.caption}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Student