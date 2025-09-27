import { motion } from "motion/react"
import {
    BookOpen,
    Clock,
    Users,
    Award,
    GraduationCap,
    Stethoscope,
    FlaskConical,
    Shield,
    Heart,
    Globe,
    Filter,
    Search,
    ChevronDown,
} from "lucide-react"
import CourseCard from "./CourseCard"
import { useState, useEffect } from "react"
import { Link } from "react-router"

// Custom debounce hook
function useDebounce(value, delay) {
    const [debouncedValue, setDebouncedValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debouncedValue
}

function Courses() {
    // Courses data with detailed information
    const courses = [
        {
            id: 1,
            title: "Community Health Extension Worker (CHEW)",
            shortTitle: "CHEW",
            slug: "chew",
            image: "/chew (2).jpg",
            duration: "2 Years",
            level: "Certificate",
            category: "Community Health",
            description:
                "Train to become a frontline health worker providing essential healthcare services at the community level. This comprehensive program covers preventive, promotive, and basic curative healthcare.",
            keyFeatures: [
                "Community health assessment and planning",
                "Primary healthcare delivery",
                "Health education and promotion",
                "Disease prevention strategies",
                "Basic clinical procedures",
            ],
            careerPaths: [
                "Community Health Centers",
                "Primary Healthcare Facilities",
                "NGO Health Programs",
                "Government Health Departments",
            ],
            requirements:
                "5 O'Level credits including English, Mathematics, Biology, Chemistry, and one other science subject",
            colorClass: "primary-green",
        },
        {
            id: 2,
            title: "Junior Community Health Extension Worker",
            shortTitle: "Junior CHEW",
            slug: "junior-chew",
            image: "/public health nursing.jpg",
            duration: "1 Year",
            level: "Certificate",
            category: "Community Health",
            description:
                "An entry-level program for students seeking to begin their healthcare career in community service. Provides foundational knowledge in basic healthcare delivery.",
            keyFeatures: [
                "Basic health screening",
                "Community health education",
                "First aid and emergency care",
                "Health record keeping",
                "Immunization support",
            ],
            careerPaths: [
                "Health Posts",
                "Community Health Centers",
                "Mobile Health Clinics",
                "School Health Programs",
            ],
            requirements:
                "4 O'Level credits including English, Mathematics, and two science subjects",
            colorClass: "secondary-blue",
        },
        {
            id: 3,
            title: "Community Health Extension Worker (ND/HND)",
            shortTitle: "CHEW ND/HND",
            slug: "chew-nd-hnd",
            image: "/portrait-nurse-scrubs-clinic.jpg",
            duration: "2-3 Years",
            level: "Diploma/Higher Diploma",
            category: "Community Health",
            description:
                "Advanced program for CHEW practitioners seeking higher qualifications. Combines theoretical knowledge with extensive practical experience in community health management.",
            keyFeatures: [
                "Advanced community health assessment",
                "Health program management",
                "Research in community health",
                "Supervisory and leadership skills",
                "Public health policy analysis",
            ],
            careerPaths: [
                "Senior CHEW positions",
                "Health Program Coordinators",
                "Community Health Supervisors",
                "Public Health Administrators",
            ],
            requirements:
                "CHEW Certificate with good standing or equivalent qualification",
            colorClass: "accent-red",
        },
        {
            id: 4,
            title: "Pharmacy Technician",
            shortTitle: "Pharmacy Tech",
            slug: "pharmacy-technician",
            image: "/pharmacy technician.jpg",
            duration: "2 Years",
            level: "Certificate",
            category: "Pharmaceutical Sciences",
            description:
                "Comprehensive training in pharmaceutical care, drug dispensing, and inventory management. Prepare to work alongside pharmacists in various healthcare settings.",
            keyFeatures: [
                "Pharmaceutical calculations",
                "Drug dispensing procedures",
                "Inventory management systems",
                "Patient counseling basics",
                "Pharmacy law and ethics",
            ],
            careerPaths: [
                "Hospital Pharmacies",
                "Community Pharmacies",
                "Drug Manufacturing Companies",
                "Regulatory Agencies",
            ],
            requirements:
                "5 O'Level credits including English, Mathematics, Chemistry, Biology, and Physics",
            colorClass: "primary-green",
        },
        {
            id: 5,
            title: "Health Assistant",
            shortTitle: "Health Assistant",
            slug: "health-assistant",
            image: "/testimonial picture.jpg",
            duration: "18 Months",
            level: "Certificate",
            category: "General Healthcare",
            description:
                "Multi-disciplinary program preparing students to assist healthcare professionals across various medical specialties and healthcare settings.",
            keyFeatures: [
                "Basic medical procedures",
                "Patient care techniques",
                "Medical equipment handling",
                "Administrative health duties",
                "Infection control practices",
            ],
            careerPaths: [
                "Hospitals and Clinics",
                "Diagnostic Centers",
                "Medical Offices",
                "Healthcare Support Services",
            ],
            requirements:
                "4 O'Level credits including English, Mathematics, Biology, and one science subject",
            colorClass: "secondary-blue",
        },
        {
            id: 6,
            title: "Environmental Health",
            shortTitle: "Environmental Health",
            slug: "environmental-health",
            image: "/chew (2).jpg",
            duration: "2 Years",
            level: "Certificate",
            category: "Public Health",
            description:
                "Focus on environmental factors affecting human health. Learn to assess, prevent, and control environmental health hazards in communities.",
            keyFeatures: [
                "Environmental health assessment",
                "Water and sanitation systems",
                "Food safety and hygiene",
                "Vector and pest control",
                "Occupational health and safety",
            ],
            careerPaths: [
                "Environmental Health Departments",
                "Food and Drug Services",
                "Industrial Health Units",
                "Consulting Firms",
            ],
            requirements:
                "5 O'Level credits including English, Mathematics, Biology, Chemistry, and Physics",
            colorClass: "accent-red",
        },
        {
            id: 7,
            title: "Health Information Management",
            shortTitle: "Health Information",
            slug: "health-information-management",
            image: "/portrait-nurse-scrubs-clinic.jpg",
            duration: "2 Years",
            level: "Certificate",
            category: "Health Informatics",
            description:
                "Specialize in managing health records, data analysis, and health information systems. Essential for modern healthcare delivery and management.",
            keyFeatures: [
                "Medical coding and classification",
                "Health record management",
                "Data analysis and reporting",
                "Health information systems",
                "Privacy and confidentiality",
            ],
            careerPaths: [
                "Hospitals and Clinics",
                "Insurance Companies",
                "Government Health Agencies",
                "Research Institutions",
            ],
            requirements:
                "5 O'Level credits including English, Mathematics, and three other subjects",
            colorClass: "primary-green",
        },
        {
            id: 8,
            title: "Public Health Nursing",
            shortTitle: "Public Health Nursing",
            slug: "public-health-nursing",
            image: "/public health nursing.jpg",
            duration: "3 Years",
            level: "Diploma",
            category: "Nursing",
            description:
                "Comprehensive nursing program focusing on population health, disease prevention, and health promotion in community settings.",
            keyFeatures: [
                "Community health nursing",
                "Epidemiology and disease prevention",
                "Health promotion strategies",
                "Maternal and child health",
                "Public health administration",
            ],
            careerPaths: [
                "Public Health Departments",
                "Community Health Centers",
                "NGO Health Programs",
                "International Health Organizations",
            ],
            requirements:
                "5 O'Level credits including English, Mathematics, Biology, Chemistry, and Physics with credit level",
            colorClass: "secondary-blue",
        },
        {
            id: 9,
            title: "Natural Medicine",
            shortTitle: "Natural Medicine",
            slug: "natural-medicine",
            image: "/chew (2).jpg",
            duration: "2 Years",
            level: "Certificate",
            category: "Alternative Medicine",
            description:
                "Comprehensive training in traditional and natural healing methods, herbal medicine, and holistic healthcare approaches for modern wellness practice.",
            keyFeatures: [
                "Traditional and herbal medicine principles",
                "Nutritional therapy and dietary counseling",
                "Natural healing modalities and techniques",
                "Holistic health assessment methods",
                "Integration with conventional healthcare",
            ],
            careerPaths: [
                "Natural Health Practitioners",
                "Herbal Medicine Consultants",
                "Wellness Center Staff",
                "Health Food Store Consultants",
            ],
            requirements:
                "5 O'Level credits including English, Mathematics, Biology, Chemistry, and one other science subject",
            colorClass: "primary-green",
        },
    ]

    // Filter states
    const [activeCategory, setActiveCategory] = useState("All")
    const [searchTerm, setSearchTerm] = useState("")
    const [selectedLevel, setSelectedLevel] = useState("All")

    // Debounce search term with 300ms delay
    const debouncedSearchTerm = useDebounce(searchTerm, 300)

    // Filter categories
    const categories = [
        "All",
        "Community Health",
        "Pharmaceutical Sciences",
        "General Healthcare",
        "Public Health",
        "Health Informatics",
        "Nursing",
        "Alternative Medicine",
    ]
    const levels = ["All", "Certificate", "Diploma", "Higher Diploma"]

    // Filter courses based on active filters
    const filteredCourses = courses.filter((course) => {
        const matchesCategory =
            activeCategory === "All" || course.category === activeCategory
        const matchesSearch =
            course.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        const matchesLevel =
            selectedLevel === "All" || course.level === selectedLevel

        return matchesCategory && matchesSearch && matchesLevel
    })

    // Statistics data
    const stats = [
        {
            icon: BookOpen,
            number: "9+",
            label: "Academic Programs",
            color: "primary-green",
        },
        {
            icon: Users,
            number: "1200+",
            label: "Current Students",
            color: "secondary-blue",
        },
        {
            icon: Award,
            number: "100%",
            label: "Accredited Programs",
            color: "accent-red",
        },
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-r from-secondary-blue/10 to-primary-green/10">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/pharmacy technician.jpg"
                        alt="Healthcare education programs"
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
                            Explore Our{" "}
                            <span className="text-primary-green">
                                Health Programs
                            </span>
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-dark-gray mb-8 font-roboto leading-relaxed max-w-4xl"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            Unique City College of Health offers a range of
                            accredited programs designed for students ready to
                            build a career in healthcare. Whether you are a
                            recent secondary school graduate or looking to
                            advance your career, our courses give you the
                            knowledge and skills to succeed.
                        </motion.p>

                        {/* Quick Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-8"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            {stats.map((stat, index) => {
                                const IconComponent = stat.icon
                                const colorClasses = {
                                    "primary-green": "text-primary-green",
                                    "secondary-blue": "text-secondary-blue",
                                    "accent-red": "text-accent-red",
                                }

                                return (
                                    <div key={index} className="text-center">
                                        <IconComponent
                                            className={`h-8 w-8 ${
                                                colorClasses[stat.color]
                                            } mx-auto mb-2`}
                                        />
                                        <div className="text-2xl md:text-3xl font-bold font-merriweather text-dark-gray">
                                            {stat.number}
                                        </div>
                                        <p className="text-sm font-roboto text-gray-600">
                                            {stat.label}
                                        </p>
                                    </div>
                                )
                            })}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Filter Section */}
            <section className="py-12 bg-light-gray border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* All Filters - Responsive Layout */}
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-6">
                            {/* Search Bar */}
                            <div className="relative w-full max-w-md mx-auto lg:flex-1 lg:max-w-xs lg:mx-0">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search courses..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-green focus:border-transparent font-roboto"
                                />
                            </div>

                            {/* Dropdown Filters */}
                            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                                {/* Category Dropdown */}
                                <div className="relative w-full sm:w-auto">
                                    <select
                                        value={activeCategory}
                                        onChange={(e) => setActiveCategory(e.target.value)}
                                        className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 font-montserrat font-medium text-dark-gray focus:ring-2 focus:ring-primary-green focus:border-transparent cursor-pointer hover:bg-gray-50 transition-colors duration-300"
                                    >
                                        {categories.map((category) => (
                                            <option key={category} value={category}>
                                                {category === "All" ? "All Categories" : category}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                                </div>

                                {/* Level Dropdown */}
                                <div className="relative w-full sm:w-auto">
                                    <select
                                        value={selectedLevel}
                                        onChange={(e) => setSelectedLevel(e.target.value)}
                                        className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-3 pr-10 font-montserrat font-medium text-dark-gray focus:ring-2 focus:ring-secondary-blue focus:border-transparent cursor-pointer hover:bg-gray-50 transition-colors duration-300"
                                    >
                                        {levels.map((level) => (
                                            <option key={level} value={level}>
                                                {level === "All" ? "All Levels" : level}
                                            </option>
                                        ))}
                                    </select>
                                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Results Count */}
                        <div className="text-center">
                            <p className="text-dark-gray font-roboto">
                                Showing{" "}
                                <span className="font-semibold text-primary-green">
                                    {filteredCourses.length}
                                </span>{" "}
                                of {courses.length} programs
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Courses Grid Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filteredCourses.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredCourses.map((course, index) => (
                                <motion.div
                                    key={course.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.1,
                                    }}
                                >
                                    <Link to={`/course/${course.slug}`}>
                                        <CourseCard
                                            image={course.image}
                                            alt={`${course.title} program`}
                                            title={course.title}
                                            description={course.description}
                                            delay={0}
                                            onClick={() => {}}
                                        />
                                    </Link>

                                    {/* Additional Course Info */}
                                    {/* <div className="mt-4 p-4 bg-light-gray rounded-b-lg border-t-0">
                                        <div className="flex flex-wrap gap-3 mb-3">
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-green/10 text-primary-green">
                                                <Clock className="h-3 w-3 mr-1" />
                                                {course.duration}
                                            </span>
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-secondary-blue/10 text-secondary-blue">
                                                <Award className="h-3 w-3 mr-1" />
                                                {course.level}
                                            </span>
                                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent-red/10 text-accent-red">
                                                <BookOpen className="h-3 w-3 mr-1" />
                                                {course.category}
                                            </span>
                                        </div>

                                        <div className="space-y-2">
                                            <h4 className="font-semibold font-montserrat text-dark-gray text-sm">
                                                Key Features:
                                            </h4>
                                            <ul className="text-xs font-roboto text-gray-600 space-y-1">
                                                {course.keyFeatures
                                                    ?.slice(0, 3)
                                                    .map((feature, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start "
                                                        >
                                                            <div className="w-1 h-1 bg-primary-green rounded-full mt-1 mr-2 flex-shrink-0"></div>
                                                            {feature}
                                                        </li>
                                                    ))}
                                            </ul>
                                        </div>
                                    </div> */}
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div
                            className="text-center py-16"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold font-montserrat text-dark-gray mb-2">
                                No courses found
                            </h3>
                            <p className="text-gray-600 font-roboto">
                                Try adjusting your search criteria or browse all
                                courses.
                            </p>
                            <button
                                onClick={() => {
                                    setActiveCategory("All")
                                    setSearchTerm("")
                                    setSelectedLevel("All")
                                }}
                                className="mt-4 px-6 py-2 bg-primary-green text-white rounded-lg hover:bg-primary-green/90 transition-colors duration-300 font-montserrat font-medium"
                            >
                                Clear Filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Why Choose Our Programs Section */}
            <section className="py-20 bg-light-gray">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-merriweather text-dark-gray mb-6">
                            Why Choose Our{" "}
                            <span className="text-secondary-blue">
                                Programs
                            </span>
                            ?
                        </h2>
                        <p className="text-lg text-dark-gray font-roboto max-w-3xl mx-auto leading-relaxed">
                            Our healthcare programs are designed to meet
                            industry demands while providing students with
                            comprehensive, hands-on learning experiences.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: Stethoscope,
                                title: "Clinical Excellence",
                                description:
                                    "State-of-the-art facilities and equipment for hands-on learning",
                                color: "primary-green",
                            },
                            {
                                icon: Award,
                                title: "Full Accreditation",
                                description:
                                    "All programs recognized by relevant professional bodies",
                                color: "secondary-blue",
                            },
                            {
                                icon: Users,
                                title: "Expert Faculty",
                                description:
                                    "Learn from experienced healthcare professionals and educators",
                                color: "accent-red",
                            },
                            {
                                icon: Globe,
                                title: "Career Support",
                                description:
                                    "Comprehensive job placement and career development services",
                                color: "primary-green",
                            },
                        ].map((feature, index) => {
                            const IconComponent = feature.icon
                            const colorClasses = {
                                "primary-green": {
                                    bg: "bg-primary-green/10",
                                    hoverBg: "group-hover:bg-primary-green",
                                    text: "text-primary-green",
                                    hoverText: "group-hover:text-primary-green",
                                },
                                "secondary-blue": {
                                    bg: "bg-secondary-blue/10",
                                    hoverBg: "group-hover:bg-secondary-blue",
                                    text: "text-secondary-blue",
                                    hoverText:
                                        "group-hover:text-secondary-blue",
                                },
                                "accent-red": {
                                    bg: "bg-accent-red/10",
                                    hoverBg: "group-hover:bg-accent-red",
                                    text: "text-accent-red",
                                    hoverText: "group-hover:text-accent-red",
                                },
                            }

                            const colors = colorClasses[feature.color]

                            return (
                                <motion.div
                                    key={index}
                                    className="text-center group"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <div
                                        className={`flex items-center justify-center w-16 h-16 ${colors.bg} rounded-full mb-4 mx-auto ${colors.hoverBg} group-hover:scale-110 transition-all duration-300`}
                                    >
                                        <IconComponent
                                            className={`h-8 w-8 ${colors.text} group-hover:text-white transition-colors duration-300`}
                                        />
                                    </div>
                                    <h3
                                        className={`text-lg font-semibold font-montserrat text-dark-gray mb-2 ${colors.hoverText} transition-colors duration-300`}
                                    >
                                        {feature.title}
                                    </h3>
                                    <p className="text-dark-gray font-roboto text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 bg-primary-green">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-white mb-6">
                            Ready to Start Your Healthcare Career?
                        </h2>
                        <p className="text-lg text-white/90 font-roboto mb-8 max-w-2xl mx-auto">
                            Join thousands of successful healthcare
                            professionals who started their journey at Unique
                            City College of Health.
                        </p>
                        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center"> */}
                        <Link
                            to={"/admission"}
                            className="border-2 border-white text-white hover:bg-white hover:text-primary-green font-montserrat font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                        >
                            Apply Now
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Courses
