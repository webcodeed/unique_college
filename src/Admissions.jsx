import { motion } from "motion/react"
import {
    CheckCircle,
    FileText,
    Users,
    Calendar,
    Phone,
    Mail,
    MapPin,
    Clock,
    ArrowRight,
    BookOpen,
    GraduationCap,
    Award,
} from "lucide-react"
import { Link } from "react-router"

function Admissions() {
    // Admission requirements data
    const requirements = [
        {
            icon: Award,
            title: "Academic Qualification",
            description:
                "Minimum of 5 credits in SSCE, NECO, or equivalent including English, Mathematics, Biology, Chemistry, and Physics",
            color: "primary-green",
        },
        {
            icon: FileText,
            title: "Application Form",
            description:
                "Completed physical application form with accurate personal and academic information",
            color: "secondary-blue",
        },
        {
            icon: Users,
            title: "Assessment",
            description:
                "Entrance examination or screening interview to evaluate academic readiness and commitment",
            color: "accent-red",
        },
    ]

    // Application steps
    const applicationSteps = [
        {
            step: 1,
            title: "Contact Admissions Office",
            description:
                "Reach out to our admissions team for guidance and to obtain application materials",
            icon: Phone,
        },
        {
            step: 2,
            title: "Complete Application Form",
            description:
                "Fill out the comprehensive application form with accurate personal and academic details",
            icon: FileText,
        },
        {
            step: 3,
            title: "Submit Required Documents",
            description:
                "Provide all necessary academic transcripts, certificates, and supporting documents",
            icon: BookOpen,
        },
        {
            step: 4,
            title: "Pay Application Fee",
            description:
                "Complete payment of the non-refundable application processing fee",
            icon: CheckCircle,
        },
        {
            step: 5,
            title: "Take Entrance Examination",
            description:
                "Attend the scheduled entrance examination to assess your academic knowledge and readiness for the program",
            icon: CheckCircle,
        },
        {
            step: 6,
            title: "Await Admission Decision",
            description:
                "Our admissions committee will review your application and notify you of the decision",
            icon: GraduationCap,
        },
    ]

    // Contact information
    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            details: ["+234 123 456 7890", "+234 987 654 3210"],
            color: "primary-green",
        },
        {
            icon: Mail,
            title: "Email",
            details: ["admissions@uniquecity.edu.ng", "info@uniquecity.edu.ng"],
            color: "secondary-blue",
        },
        {
            icon: MapPin,
            title: "Office Location",
            details: ["Unique City College of Health", "Lagos, Nigeria"],
            color: "accent-red",
        },
        {
            icon: Clock,
            title: "Office Hours",
            details: [
                "Monday - Friday: 8:00 AM - 5:00 PM",
                "Saturday: 9:00 AM - 2:00 PM",
            ],
            color: "primary-green",
        },
    ]

    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-r from-primary-green/10 to-secondary-blue/10">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/portrait-nurse-scrubs-clinic.jpg"
                        alt="Admissions at Unique City College"
                        className="w-full h-full object-cover object-center opacity-20"
                    />
                    <div className="absolute inset-0 bg-white/85"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.h1
                            className="text-4xl md:text-5xl lg:text-6xl font-bold font-merriweather text-dark-gray mb-6 leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            <span className="text-primary-green">
                                Begin Your Journey
                            </span>
                            <br />
                            With Us
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl text-dark-gray mb-8 font-roboto leading-relaxed max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                        >
                            We welcome students who are passionate about
                            healthcare and eager to build a career that changes
                            lives.
                        </motion.p>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.7 }}
                        >
                            <a
                                href="https://wa.me/2348123456789?text=Hello%20i%20will%20like%20to%20schedule%20a%20call%20to%20make%20enquiries%20about%20admissions%20at%20unique%20city%20college%2C%20my%20name%20is%20"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary-green text-white hover:bg-primary-green/90 font-montserrat font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-flex items-center justify-center group whitespace-nowrap"
                            >
                                Contact Admissions Office
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                            <Link
                                to="/courses"
                                className="border-2 border-secondary-blue text-secondary-blue hover:bg-secondary-blue hover:text-white font-montserrat font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
                            >
                                View Programs
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Admission Requirements Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-merriweather text-dark-gray mb-6">
                            Admission{" "}
                            <span className="text-secondary-blue">
                                Requirements
                            </span>
                        </h2>
                        <p className="text-lg text-dark-gray font-roboto max-w-3xl mx-auto leading-relaxed">
                            Ensure you meet our admission criteria to begin your
                            healthcare education journey with us.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {requirements.map((requirement, index) => {
                            const IconComponent = requirement.icon
                            const colorClasses = {
                                "primary-green": {
                                    bg: "bg-primary-green/10",
                                    text: "text-primary-green",
                                    border: "border-primary-green/20",
                                },
                                "secondary-blue": {
                                    bg: "bg-secondary-blue/10",
                                    text: "text-secondary-blue",
                                    border: "border-secondary-blue/20",
                                },
                                "accent-red": {
                                    bg: "bg-accent-red/10",
                                    text: "text-accent-red",
                                    border: "border-accent-red/20",
                                },
                            }
                            const colors = colorClasses[requirement.color]

                            return (
                                <motion.div
                                    key={index}
                                    className={`bg-white border-2 ${colors.border} rounded-xl p-6 hover:shadow-lg transition-all duration-300 group`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.2,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <div
                                        className={`${colors.bg} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <IconComponent
                                            className={`h-8 w-8 ${colors.text}`}
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold font-montserrat text-dark-gray mb-4">
                                        {requirement.title}
                                    </h3>
                                    <p className="text-dark-gray font-roboto leading-relaxed">
                                        {requirement.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* How to Apply Section */}
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
                            How to{" "}
                            <span className="text-primary-green">Apply</span>
                        </h2>
                        <p className="text-lg text-dark-gray font-roboto max-w-3xl mx-auto leading-relaxed">
                            Follow these simple steps to complete your
                            application and join our healthcare community.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {applicationSteps.map((step, index) => {
                            const IconComponent = step.icon
                            const isLast = index === applicationSteps.length - 1

                            return (
                                <motion.div
                                    key={index}
                                    className="relative flex items-start mb-12"
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.2,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    {/* Step Number and Icon */}
                                    <div className="flex-shrink-0 relative">
                                        <div className="w-16 h-16 bg-primary-green text-white rounded-full flex items-center justify-center font-bold text-xl font-montserrat shadow-lg">
                                            {step.step}
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary-blue text-white rounded-full flex items-center justify-center">
                                            <IconComponent className="h-4 w-4" />
                                        </div>
                                        {!isLast && (
                                            <div className="absolute top-16 left-1/2 w-0.5 h-12 bg-gray-300 transform -translate-x-1/2"></div>
                                        )}
                                    </div>

                                    {/* Step Content */}
                                    <div className="ml-6 flex-1">
                                        <h3 className="text-xl font-semibold font-montserrat text-dark-gray mb-3">
                                            {step.title}
                                        </h3>
                                        <p className="text-dark-gray font-roboto leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Important Dates Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-merriweather text-dark-gray mb-6">
                            Important{" "}
                            <span className="text-accent-red">Dates</span>
                        </h2>
                        <p className="text-lg text-dark-gray font-roboto max-w-3xl mx-auto leading-relaxed">
                            Stay informed about key admission deadlines and
                            important dates.
                        </p>
                    </motion.div>

                    <motion.div
                        className="max-w-2xl mx-auto bg-gradient-to-r from-accent-red/10 to-primary-green/10 rounded-2xl p-8 text-center"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <Calendar className="h-16 w-16 text-accent-red mx-auto mb-6" />
                        <h3 className="text-2xl font-bold font-montserrat text-dark-gray mb-4">
                            Applications Open
                        </h3>
                        <p className="text-lg font-roboto text-dark-gray mb-6">
                            Applications for the next academic session are now
                            open. Don't miss this opportunity to secure your
                            place in our healthcare programs.
                        </p>
                        <div className="bg-white rounded-lg p-4 inline-block shadow-md">
                            <p className="text-accent-red font-bold text-xl font-montserrat">
                                Contact Admissions Office for Specific Dates
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Information Section */}
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
                            Contact{" "}
                            <span className="text-secondary-blue">
                                Admissions Office
                            </span>
                        </h2>
                        <p className="text-lg text-dark-gray font-roboto max-w-3xl mx-auto leading-relaxed">
                            Get in touch with our admissions team for
                            personalized guidance and support throughout your
                            application process.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {contactInfo.map((contact, index) => {
                            const IconComponent = contact.icon
                            const colorClasses = {
                                "primary-green": {
                                    bg: "bg-primary-green/10",
                                    text: "text-primary-green",
                                    hover: "hover:bg-primary-green hover:text-white",
                                },
                                "secondary-blue": {
                                    bg: "bg-secondary-blue/10",
                                    text: "text-secondary-blue",
                                    hover: "hover:bg-secondary-blue hover:text-white",
                                },
                                "accent-red": {
                                    bg: "bg-accent-red/10",
                                    text: "text-accent-red",
                                    hover: "hover:bg-accent-red hover:text-white",
                                },
                            }
                            const colors = colorClasses[contact.color]

                            return (
                                <motion.div
                                    key={index}
                                    className={`bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group ${colors.hover}`}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <div
                                        className={`${colors.bg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors duration-300`}
                                    >
                                        <IconComponent
                                            className={`h-8 w-8 ${colors.text} group-hover:text-white transition-colors duration-300`}
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold font-montserrat text-dark-gray mb-3 group-hover:text-white transition-colors duration-300">
                                        {contact.title}
                                    </h3>
                                    <div className="space-y-1">
                                        {contact.details.map((detail, idx) => (
                                            <p
                                                key={idx}
                                                className="text-sm text-dark-gray font-roboto group-hover:text-white/90 transition-colors duration-300"
                                            >
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-16 bg-gradient-to-r from-primary-green to-secondary-blue">
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
                            Take the first step towards your future in
                            healthcare. Our admissions team is here to guide you
                            through every step of the process.
                        </p>
                        <a
                            href="https://wa.me/2348123456789?text=Hello%20i%20will%20like%20to%20schedule%20a%20call%20to%20make%20enquiries%20about%20admissions%20at%20unique%20city%20college%2C%20my%20name%20is%20"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-primary-green hover:bg-gray-100 font-montserrat font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 inline-flex items-center justify-center group shadow-lg"
                        >
                            Contact Admissions Office
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </a>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

export default Admissions
