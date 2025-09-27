import { motion } from "motion/react"
import { useParams, Link } from "react-router"
import { useState, useEffect } from "react"
import {
    Clock,
    Users,
    Award,
    BookOpen,
    GraduationCap,
    FileText,
    Calendar,
    Phone,
    Download,
    ChevronDown,
    ChevronUp,
    ArrowRight,
    CheckCircle,
    DollarSign,
    UserCheck,
} from "lucide-react"
import CourseCard from "./CourseCard"

// Course data (same as in Courses.jsx)
const coursesData = [
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
        overview:
            "The Community Health Extension Worker (CHEW) program is designed to prepare students for frontline healthcare delivery in community settings. This comprehensive 2-year certificate program combines theoretical knowledge with practical skills training to produce competent healthcare professionals who can bridge the gap between communities and formal healthcare systems. Students will learn essential healthcare delivery skills, disease prevention strategies, and community engagement techniques that are crucial for improving health outcomes at the grassroots level.",
        keyFeatures: [
            "Community health assessment and planning",
            "Primary healthcare delivery",
            "Health education and promotion",
            "Disease prevention strategies",
            "Basic clinical procedures",
        ],
        careerProspects: [
            {
                title: "Community Health Centers",
                description:
                    "Work as a frontline health worker providing essential healthcare services to rural and urban communities.",
            },
            {
                title: "Primary Healthcare Facilities",
                description:
                    "Support healthcare delivery in primary care settings, assisting nurses and doctors in patient care.",
            },
            {
                title: "NGO Health Programs",
                description:
                    "Join non-governmental organizations focused on community health improvement and disease prevention.",
            },
            {
                title: "Government Health Departments",
                description:
                    "Work with local, state, and federal health agencies in public health initiatives and programs.",
            },
        ],
        outcomes: [
            "Provide comprehensive primary healthcare services at community level",
            "Conduct health education and promotion activities effectively",
            "Implement disease prevention and health protection measures",
            "Manage basic health records and reporting systems",
            "Collaborate with healthcare teams and community stakeholders",
        ],
        fees: {
            tuition: "₦180,000 per year",
            registration: "₦25,000 (one-time)",
            practical: "₦40,000 per year",
            total: "₦445,000 (total program cost)",
        },
        funding: [
            "Merit-based scholarships available",
            "Need-based financial aid",
            "Work-study programs",
            "Flexible payment plans",
        ],
        requirements:
            "5 O'Level credits including English, Mathematics, Biology, Chemistry, and one other science subject",
        applicationSteps: [
            "Complete online application form",
            "Submit required documents (certificates, transcripts)",
            "Pay application fee (₦5,000)",
            "Attend entrance examination",
            "Participate in oral interview",
            "Await admission decision",
        ],
        designedFor: [
            "Recent secondary school graduates interested in healthcare",
            "Individuals seeking career change into healthcare sector",
            "Community volunteers wanting to formalize their skills",
            "Those passionate about improving community health outcomes",
        ],
        colorClass: "primary-green",
        intakeDates: [
            {
                session: "2025 Spring Intake",
                date: "March 15, 2025",
                status: "Open",
            },
            {
                session: "2025 Fall Intake",
                date: "September 20, 2025",
                status: "Coming Soon",
            },
        ],
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
        overview:
            "The Junior Community Health Extension Worker program is a foundational 1-year certificate course designed for individuals beginning their healthcare career journey. This program provides essential knowledge and practical skills needed for entry-level positions in community health settings. Students will gain competency in basic health screening, health education, and support services that are vital for community health improvement.",
        keyFeatures: [
            "Basic health screening",
            "Community health education",
            "First aid and emergency care",
            "Health record keeping",
            "Immunization support",
        ],
        careerProspects: [
            {
                title: "Health Posts",
                description:
                    "Work in rural health posts providing basic healthcare services and health education to communities.",
            },
            {
                title: "Community Health Centers",
                description:
                    "Support senior health workers in delivering comprehensive healthcare services.",
            },
            {
                title: "Mobile Health Clinics",
                description:
                    "Assist in mobile healthcare delivery programs reaching underserved populations.",
            },
            {
                title: "School Health Programs",
                description:
                    "Work in school health initiatives promoting student health and wellness.",
            },
        ],
        outcomes: [
            "Perform basic health screening procedures",
            "Provide first aid and emergency response",
            "Support immunization and vaccination programs",
            "Maintain basic health records and documentation",
            "Conduct community health education sessions",
        ],
        fees: {
            tuition: "₦120,000 per year",
            registration: "₦20,000 (one-time)",
            practical: "₦25,000 per year",
            total: "₦165,000 (total program cost)",
        },
        funding: [
            "Merit scholarships available",
            "Community sponsorship programs",
            "Flexible payment options",
        ],
        requirements:
            "4 O'Level credits including English, Mathematics, and two science subjects",
        applicationSteps: [
            "Complete online application",
            "Submit academic certificates",
            "Pay application fee (₦3,000)",
            "Attend entrance test",
            "Complete registration process",
        ],
        designedFor: [
            "School leavers interested in healthcare",
            "Community volunteers seeking formal training",
            "Individuals wanting quick entry into healthcare sector",
            "Those planning to progress to higher healthcare qualifications",
        ],
        colorClass: "secondary-blue",
        intakeDates: [
            {
                session: "2025 Spring Intake",
                date: "April 1, 2025",
                status: "Open",
            },
            {
                session: "2025 Fall Intake",
                date: "October 5, 2025",
                status: "Coming Soon",
            },
        ],
    },
    {
        id: 3,
        title: "Pharmacy Technician",
        shortTitle: "Pharmacy Tech",
        slug: "pharmacy-technician",
        image: "/pharmacy technician.jpg",
        duration: "2 Years",
        level: "Certificate",
        category: "Pharmaceutical Sciences",
        description:
            "Comprehensive training in pharmaceutical care, drug dispensing, and inventory management. Prepare to work alongside pharmacists in various healthcare settings.",
        overview:
            "The Pharmacy Technician program is a comprehensive 2-year certificate course that prepares students for careers in pharmaceutical care and drug management. This program combines theoretical knowledge of pharmacology with practical skills in drug dispensing, inventory management, and patient counseling. Graduates will be qualified to work in various pharmacy settings, supporting pharmacists in delivering safe and effective pharmaceutical care.",
        keyFeatures: [
            "Pharmaceutical calculations",
            "Drug dispensing procedures",
            "Inventory management systems",
            "Patient counseling basics",
            "Pharmacy law and ethics",
        ],
        careerProspects: [
            {
                title: "Hospital Pharmacies",
                description:
                    "Work in hospital pharmacy departments supporting medication management and patient care.",
            },
            {
                title: "Community Pharmacies",
                description:
                    "Assist pharmacists in retail pharmacy settings serving community medication needs.",
            },
            {
                title: "Drug Manufacturing Companies",
                description:
                    "Support pharmaceutical manufacturing processes and quality control operations.",
            },
            {
                title: "Regulatory Agencies",
                description:
                    "Work with government agencies overseeing pharmaceutical safety and regulation.",
            },
        ],
        outcomes: [
            "Dispense medications safely and accurately",
            "Perform pharmaceutical calculations correctly",
            "Manage pharmacy inventory and supplies effectively",
            "Provide basic patient counseling on medication use",
            "Maintain compliance with pharmacy laws and regulations",
        ],
        fees: {
            tuition: "₦200,000 per year",
            registration: "₦30,000 (one-time)",
            practical: "₦50,000 per year",
            total: "₦530,000 (total program cost)",
        },
        funding: [
            "Pharmacy association scholarships",
            "Industry partnership funding",
            "Merit-based awards",
            "Payment plan options",
        ],
        requirements:
            "5 O'Level credits including English, Mathematics, Chemistry, Biology, and Physics",
        applicationSteps: [
            "Submit online application with documents",
            "Pay application fee (₦6,000)",
            "Take entrance examination",
            "Attend interview session",
            "Complete medical examination",
            "Finalize enrollment",
        ],
        designedFor: [
            "Science students interested in pharmaceuticals",
            "Healthcare workers seeking specialization",
            "Individuals interested in medication management",
            "Those seeking stable healthcare careers",
        ],
        colorClass: "primary-green",
        intakeDates: [
            {
                session: "2025 Spring Intake",
                date: "February 28, 2025",
                status: "Open",
            },
            {
                session: "2025 Fall Intake",
                date: "August 15, 2025",
                status: "Coming Soon",
            },
        ],
    },
    {
        id: 4,
        title: "Community Health Extension Worker (ND/HND)",
        shortTitle: "CHEW ND/HND",
        slug: "chew-nd-hnd",
        image: "/portrait-nurse-scrubs-clinic.jpg",
        duration: "2-3 Years",
        level: "Diploma/Higher Diploma",
        category: "Community Health",
        description:
            "Advanced program for CHEW practitioners seeking higher qualifications. Combines theoretical knowledge with extensive practical experience in community health management.",
        overview:
            "The Community Health Extension Worker (ND/HND) program is an advanced qualification designed for practicing CHEWs and healthcare professionals seeking career advancement. This comprehensive program combines in-depth theoretical knowledge with extensive practical experience in community health management, leadership, and advanced clinical skills. Students will develop expertise in health program management, community health research, and policy development while maintaining their focus on frontline healthcare delivery.",
        keyFeatures: [
            "Advanced community health assessment",
            "Health program management",
            "Research in community health",
            "Supervisory and leadership skills",
            "Public health policy analysis",
        ],
        careerProspects: [
            {
                title: "Senior CHEW Positions",
                description:
                    "Lead community health programs and supervise junior healthcare workers in various settings.",
            },
            {
                title: "Health Program Coordinators",
                description:
                    "Manage and coordinate large-scale community health initiatives and public health programs.",
            },
            {
                title: "Community Health Supervisors",
                description:
                    "Oversee community health operations and provide technical guidance to healthcare teams.",
            },
            {
                title: "Public Health Administrators",
                description:
                    "Work in administrative roles within government health departments and health agencies.",
            },
        ],
        outcomes: [
            "Design and implement comprehensive community health programs",
            "Conduct advanced community health research and evaluation",
            "Provide leadership and supervision to healthcare teams",
            "Develop health policies and protocols for community settings",
            "Manage health resources and coordinate multi-sectoral partnerships",
        ],
        fees: {
            tuition: "₦220,000 per year",
            registration: "₦35,000 (one-time)",
            practical: "₦60,000 per year",
            total: "₦595,000 - ₦875,000 (total program cost)",
        },
        funding: [
            "Government healthcare worker scholarships",
            "Professional development grants",
            "Employer sponsorship programs",
            "Extended payment plans available",
        ],
        requirements:
            "CHEW Certificate with good standing or equivalent qualification, minimum of 2 years work experience",
        applicationSteps: [
            "Submit online application with work experience documentation",
            "Provide CHEW certificate and employment verification",
            "Pay application fee (₦8,000)",
            "Attend professional assessment interview",
            "Complete portfolio review process",
            "Receive admission decision",
        ],
        designedFor: [
            "Practicing CHEWs seeking career advancement",
            "Healthcare supervisors wanting formal qualifications",
            "Community health leaders requiring advanced skills",
            "Healthcare administrators seeking specialized knowledge",
        ],
        colorClass: "accent-red",
        intakeDates: [
            {
                session: "2025 Spring Intake",
                date: "January 20, 2025",
                status: "Open",
            },
            {
                session: "2025 Fall Intake",
                date: "July 15, 2025",
                status: "Coming Soon",
            },
        ],
    },
    {
        id: 5,
        title: "Natural Medicine",
        shortTitle: "Natural Medicine",
        slug: "natural-medicine",
        image: "/chew (2).jpg",
        duration: "2 Years",
        level: "Certificate",
        category: "Alternative Medicine",
        description:
            "Comprehensive training in traditional and natural healing methods, herbal medicine, and holistic healthcare approaches for modern wellness practice.",
        overview:
            "The Natural Medicine program is a comprehensive 2-year certificate course that bridges traditional healing wisdom with modern healthcare practice. Students will explore various natural healing modalities including herbal medicine, nutritional therapy, and holistic wellness approaches. This program prepares graduates to work as complementary healthcare practitioners, supporting conventional medicine with natural therapeutic interventions.",
        keyFeatures: [
            "Traditional and herbal medicine principles",
            "Nutritional therapy and dietary counseling",
            "Natural healing modalities and techniques",
            "Holistic health assessment methods",
            "Integration with conventional healthcare",
        ],
        careerProspects: [
            {
                title: "Natural Health Practitioners",
                description:
                    "Provide holistic healthcare services in wellness centers and alternative medicine clinics.",
            },
            {
                title: "Herbal Medicine Consultants",
                description:
                    "Specialize in herbal remedies and natural therapeutic solutions for various health conditions.",
            },
            {
                title: "Wellness Center Staff",
                description:
                    "Work in wellness centers offering natural health solutions and lifestyle counseling.",
            },
            {
                title: "Health Food Store Consultants",
                description:
                    "Provide expert advice on natural health products and nutritional supplements.",
            },
        ],
        outcomes: [
            "Apply traditional healing principles in modern healthcare settings",
            "Prepare and recommend herbal medicines and natural remedies",
            "Conduct holistic health assessments and wellness planning",
            "Integrate natural medicine with conventional healthcare approaches",
            "Educate clients on natural health promotion and disease prevention",
        ],
        fees: {
            tuition: "₦160,000 per year",
            registration: "₦25,000 (one-time)",
            practical: "₦35,000 per year",
            total: "₦415,000 (total program cost)",
        },
        funding: [
            "Alternative medicine association scholarships",
            "Natural health practitioner grants",
            "Wellness center sponsorship programs",
            "Flexible payment arrangements",
        ],
        requirements:
            "5 O'Level credits including English, Mathematics, Biology, Chemistry, and one other science subject",
        applicationSteps: [
            "Complete online application form",
            "Submit academic certificates and transcripts",
            "Pay application fee (₦5,500)",
            "Attend entrance examination and interview",
            "Complete health and wellness assessment",
            "Finalize enrollment process",
        ],
        designedFor: [
            "Students interested in alternative and complementary medicine",
            "Healthcare workers seeking additional skills in natural healing",
            "Individuals passionate about holistic wellness approaches",
            "Those wanting to start natural health practice businesses",
        ],
        colorClass: "primary-green",
        intakeDates: [
            {
                session: "2025 Spring Intake",
                date: "March 10, 2025",
                status: "Open",
            },
            {
                session: "2025 Fall Intake",
                date: "September 5, 2025",
                status: "Coming Soon",
            },
        ],
    },
    {
        id: 6,
        title: "Health Assistant",
        shortTitle: "Health Assistant",
        slug: "health-assistant",
        image: "/testimonial picture.jpg",
        duration: "18 Months",
        level: "Certificate",
        category: "General Healthcare",
        description:
            "Multi-disciplinary program preparing students to assist healthcare professionals across various medical specialties and healthcare settings.",
        overview:
            "The Health Assistant program is a comprehensive 18-month certificate course designed to prepare students for versatile support roles in healthcare settings. This multi-disciplinary program covers essential skills needed to assist healthcare professionals across various medical specialties. Students will gain competency in patient care, medical office administration, basic clinical procedures, and healthcare support services that are vital for efficient healthcare delivery.",
        keyFeatures: [
            "Basic medical procedures",
            "Patient care techniques",
            "Medical equipment handling",
            "Administrative health duties",
            "Infection control practices",
        ],
        careerProspects: [
            {
                title: "Hospitals and Clinics",
                description:
                    "Provide direct patient care support and assist medical staff in various healthcare settings.",
            },
            {
                title: "Diagnostic Centers",
                description:
                    "Support diagnostic procedures and help with patient preparation for medical tests.",
            },
            {
                title: "Medical Offices",
                description:
                    "Handle administrative duties and provide clinical support in private medical practices.",
            },
            {
                title: "Healthcare Support Services",
                description:
                    "Work in specialized healthcare support roles including medical equipment companies and health agencies.",
            },
        ],
        outcomes: [
            "Provide basic patient care and comfort measures",
            "Assist healthcare professionals with clinical procedures",
            "Maintain accurate medical records and documentation",
            "Operate and maintain basic medical equipment safely",
            "Implement infection control and safety protocols effectively",
        ],
        fees: {
            tuition: "₦140,000 per year",
            registration: "₦22,000 (one-time)",
            practical: "₦30,000 per year",
            total: "₦337,000 (total program cost)",
        },
        funding: [
            "Healthcare worker development scholarships",
            "Hospital partnership funding",
            "Merit-based financial aid",
            "Part-time work-study opportunities",
        ],
        requirements:
            "4 O'Level credits including English, Mathematics, Biology, and one science subject",
        applicationSteps: [
            "Submit complete application with documents",
            "Pay application fee (₦4,500)",
            "Take entrance assessment test",
            "Attend personal interview session",
            "Complete basic health screening",
            "Confirm enrollment and begin classes",
        ],
        designedFor: [
            "Students seeking versatile healthcare career opportunities",
            "Individuals wanting quick entry into healthcare support roles",
            "Career changers interested in healthcare service",
            "Those planning to advance to higher healthcare qualifications",
        ],
        colorClass: "secondary-blue",
        intakeDates: [
            {
                session: "2025 Spring Intake",
                date: "February 15, 2025",
                status: "Open",
            },
            {
                session: "2025 Fall Intake",
                date: "August 20, 2025",
                status: "Coming Soon",
            },
        ],
    },
    {
        id: 7,
        title: "Environmental Health",
        shortTitle: "Environmental Health",
        slug: "environmental-health",
        image: "/chew (2).jpg",
        duration: "2 Years",
        level: "Certificate",
        category: "Public Health",
        description:
            "Focus on environmental factors affecting human health. Learn to assess, prevent, and control environmental health hazards in communities.",
        overview:
            "The Environmental Health program is a specialized 2-year certificate course focusing on the relationship between environmental factors and human health. Students will learn to identify, assess, and control environmental hazards that affect community health. The program combines scientific knowledge with practical skills in environmental health inspection, monitoring, and protection to prepare graduates for careers in environmental health protection and public health safety.",
        keyFeatures: [
            "Environmental health assessment",
            "Water and sanitation systems",
            "Food safety and hygiene",
            "Vector and pest control",
            "Occupational health and safety",
        ],
        careerProspects: [
            {
                title: "Environmental Health Departments",
                description:
                    "Work with government agencies monitoring and protecting environmental health in communities.",
            },
            {
                title: "Food and Drug Services",
                description:
                    "Conduct food safety inspections and ensure compliance with health regulations.",
            },
            {
                title: "Industrial Health Units",
                description:
                    "Monitor workplace safety and environmental health conditions in industrial settings.",
            },
            {
                title: "Consulting Firms",
                description:
                    "Provide expert environmental health consultation services to organizations and communities.",
            },
        ],
        outcomes: [
            "Conduct comprehensive environmental health assessments",
            "Implement water quality testing and sanitation programs",
            "Enforce food safety standards and hygiene practices",
            "Develop vector and pest control strategies",
            "Monitor occupational health and safety compliance",
        ],
        fees: {
            tuition: "₦190,000 per year",
            registration: "₦28,000 (one-time)",
            practical: "₦45,000 per year",
            total: "₦498,000 (total program cost)",
        },
        funding: [
            "Environmental protection agency scholarships",
            "Public health development grants",
            "Industry partnership funding",
            "Government environmental health bursaries",
        ],
        requirements:
            "5 O'Level credits including English, Mathematics, Biology, Chemistry, and Physics",
        applicationSteps: [
            "Complete comprehensive application form",
            "Submit academic certificates and transcripts",
            "Pay application fee (₦6,500)",
            "Take science-based entrance examination",
            "Attend technical interview session",
            "Complete enrollment and orientation",
        ],
        designedFor: [
            "Students passionate about environmental protection and public health",
            "Science graduates interested in environmental health careers",
            "Healthcare workers seeking specialization in environmental health",
            "Individuals committed to community health and safety",
        ],
        colorClass: "accent-red",
        intakeDates: [
            {
                session: "2025 Spring Intake",
                date: "January 25, 2025",
                status: "Open",
            },
            {
                session: "2025 Fall Intake",
                date: "July 30, 2025",
                status: "Coming Soon",
            },
        ],
    },
    {
        id: 8,
        title: "Health Information Management",
        shortTitle: "Health Information",
        slug: "health-information-management",
        image: "/portrait-nurse-scrubs-clinic.jpg",
        duration: "2 Years",
        level: "Certificate",
        category: "Health Informatics",
        description:
            "Specialize in managing health records, data analysis, and health information systems. Essential for modern healthcare delivery and management.",
        overview:
            "The Health Information Management program is a comprehensive 2-year certificate course that prepares students for careers in healthcare data management and health informatics. This program focuses on the collection, analysis, and protection of patient health information. Students will learn to manage electronic health records, conduct health data analysis, and ensure compliance with healthcare information regulations, making them essential professionals in modern healthcare systems.",
        keyFeatures: [
            "Medical coding and classification",
            "Health record management",
            "Data analysis and reporting",
            "Health information systems",
            "Privacy and confidentiality",
        ],
        careerProspects: [
            {
                title: "Hospitals and Clinics",
                description:
                    "Manage patient records and health information systems in various healthcare facilities.",
            },
            {
                title: "Insurance Companies",
                description:
                    "Process medical claims and analyze health data for insurance and reimbursement purposes.",
            },
            {
                title: "Government Health Agencies",
                description:
                    "Work with health departments in data management and health information analysis.",
            },
            {
                title: "Research Institutions",
                description:
                    "Support medical research through data management and statistical analysis of health information.",
            },
        ],
        outcomes: [
            "Manage electronic health records and information systems effectively",
            "Apply medical coding and classification systems accurately",
            "Analyze health data and generate meaningful reports",
            "Ensure compliance with health information privacy regulations",
            "Support healthcare decision-making through information management",
        ],
        fees: {
            tuition: "₦175,000 per year",
            registration: "₦26,000 (one-time)",
            practical: "₦38,000 per year",
            total: "₦452,000 (total program cost)",
        },
        funding: [
            "Health informatics professional scholarships",
            "Technology company sponsorship programs",
            "Healthcare facility partnership funding",
            "Merit-based academic awards",
        ],
        requirements:
            "5 O'Level credits including English, Mathematics, and three other subjects (preferably including a science subject)",
        applicationSteps: [
            "Submit online application with academic documents",
            "Pay application fee (₦5,800)",
            "Take computer literacy and aptitude test",
            "Attend assessment interview",
            "Complete technology orientation session",
            "Finalize enrollment process",
        ],
        designedFor: [
            "Students interested in healthcare technology and data management",
            "Individuals with strong organizational and analytical skills",
            "Healthcare workers seeking specialization in information management",
            "Those interested in combining healthcare with information technology",
        ],
        colorClass: "primary-green",
        intakeDates: [
            {
                session: "2025 Spring Intake",
                date: "February 5, 2025",
                status: "Open",
            },
            {
                session: "2025 Fall Intake",
                date: "August 10, 2025",
                status: "Coming Soon",
            },
        ],
    },
    {
        id: 9,
        title: "Public Health Nursing",
        shortTitle: "Public Health Nursing",
        slug: "public-health-nursing",
        image: "/public health nursing.jpg",
        duration: "3 Years",
        level: "Diploma",
        category: "Nursing",
        description:
            "Comprehensive nursing program focusing on population health, disease prevention, and health promotion in community settings.",
        overview:
            "The Public Health Nursing program is a comprehensive 3-year diploma course that prepares students for advanced nursing practice with a focus on population health and community care. This program emphasizes disease prevention, health promotion, and community health improvement strategies. Students will develop expertise in epidemiology, community health assessment, and public health intervention, preparing them to address health challenges at the population level.",
        keyFeatures: [
            "Community health nursing",
            "Epidemiology and disease prevention",
            "Health promotion strategies",
            "Maternal and child health",
            "Public health administration",
        ],
        careerProspects: [
            {
                title: "Public Health Departments",
                description:
                    "Lead community health initiatives and public health programs in government health agencies.",
            },
            {
                title: "Community Health Centers",
                description:
                    "Provide comprehensive nursing care with focus on population health and disease prevention.",
            },
            {
                title: "NGO Health Programs",
                description:
                    "Work with non-governmental organizations on community health improvement projects.",
            },
            {
                title: "International Health Organizations",
                description:
                    "Participate in global health initiatives and international development programs.",
            },
        ],
        outcomes: [
            "Provide comprehensive community-based nursing care",
            "Implement disease prevention and health promotion programs",
            "Conduct community health assessments and planning",
            "Manage maternal and child health services",
            "Lead public health education and advocacy initiatives",
        ],
        fees: {
            tuition: "₦250,000 per year",
            registration: "₦40,000 (one-time)",
            practical: "₦70,000 per year",
            total: "₦1,000,000 (total program cost)",
        },
        funding: [
            "Nursing council scholarships",
            "Public health development grants",
            "International nursing organization funding",
            "Government nursing education bursaries",
        ],
        requirements:
            "5 O'Level credits including English, Mathematics, Biology, Chemistry, and Physics with credit level, plus additional entry requirements",
        applicationSteps: [
            "Submit comprehensive application with all required documents",
            "Pay application fee (₦10,000)",
            "Take nursing aptitude and science entrance examination",
            "Attend panel interview and assessment",
            "Complete medical and psychological evaluation",
            "Complete registration and begin program",
        ],
        designedFor: [
            "Students passionate about nursing and public health",
            "Individuals committed to community health improvement",
            "Healthcare workers seeking advanced nursing qualifications",
            "Those interested in global health and international development",
        ],
        colorClass: "secondary-blue",
        intakeDates: [
            {
                session: "2025 Spring Intake",
                date: "January 15, 2025",
                status: "Open",
            },
            {
                session: "2025 Fall Intake",
                date: "July 1, 2025",
                status: "Coming Soon",
            },
        ],
    },
]

function CoursePage() {
    const { courseSlug } = useParams()
    const [activeTab, setActiveTab] = useState("overview")

    // Find the course by slug
    const course = coursesData.find((c) => c.slug === courseSlug)

    // Get related courses (same category, excluding current course)
    const relatedCourses = coursesData
        .filter((c) => c.category === course?.category && c.id !== course?.id)
        .slice(0, 3)

    // Scroll to top when course changes
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [courseSlug])

    if (!course) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-dark-gray mb-4">
                        Course Not Found
                    </h1>
                    <p className="text-gray-600 mb-8">
                        The course you're looking for doesn't exist.
                    </p>
                    <Link
                        to="/courses"
                        className="bg-primary-green text-white px-6 py-3 rounded-lg hover:bg-primary-green/90 transition-colors"
                    >
                        Back to Courses
                    </Link>
                </div>
            </div>
        )
    }

    const tabs = [
        { id: "overview", label: "Program Overview", icon: BookOpen },
        { id: "admissions", label: "Admissions & Fees", icon: GraduationCap },
    ]

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-16 bg-gradient-to-r from-primary-green/10 to-secondary-blue/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        {/* Course Info */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className="mb-4">
                                    <span
                                        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                            course.colorClass ===
                                            "primary-green"
                                                ? "bg-primary-green/10 text-primary-green"
                                                : course.colorClass ===
                                                  "secondary-blue"
                                                ? "bg-secondary-blue/10 text-secondary-blue"
                                                : "bg-accent-red/10 text-accent-red"
                                        }`}
                                    >
                                        {course.category}
                                    </span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-merriweather text-dark-gray mb-4">
                                    {course.title}
                                </h1>

                                <p className="text-lg text-dark-gray font-roboto leading-relaxed mb-6">
                                    {course.description}
                                </p>

                                {/* Quick Info */}
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <div className="flex items-center space-x-2">
                                        <Clock className="h-5 w-5 text-primary-green" />
                                        <div>
                                            <p className="text-sm text-gray-600">
                                                Duration
                                            </p>
                                            <p className="font-semibold text-dark-gray">
                                                {course.duration}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Award className="h-5 w-5 text-secondary-blue" />
                                        <div>
                                            <p className="text-sm text-gray-600">
                                                Level
                                            </p>
                                            <p className="font-semibold text-dark-gray">
                                                {course.level}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <BookOpen className="h-5 w-5 text-accent-red" />
                                        <div>
                                            <p className="text-sm text-gray-600">
                                                Category
                                            </p>
                                            <p className="font-semibold text-dark-gray">
                                                {course.category}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Course Image */}
                        <motion.div
                            className="lg:col-span-1"
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="relative overflow-hidden rounded-xl shadow-lg">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-64 lg:h-80 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/20 to-transparent"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            {/* Tab Navigation */}
                            <div className="border-b border-gray-200 mb-8">
                                <nav className="-mb-px flex gap-2 overflow-x-auto">
                                    {tabs.map((tab) => {
                                        const IconComponent = tab.icon
                                        return (
                                            <button
                                                key={tab.id}
                                                onClick={() =>
                                                    setActiveTab(tab.id)
                                                }
                                                className={`flex items-center px-4 py-3 text-sm font-medium rounded-t-lg border-b-2 transition-colors duration-200 whitespace-nowrap flex-shrink-0 ${
                                                    activeTab === tab.id
                                                        ? "border-primary-green text-primary-green bg-primary-green/5"
                                                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                                                }`}
                                            >
                                                <IconComponent className="h-4 w-4 mr-2" />
                                                {tab.label}
                                            </button>
                                        )
                                    })}
                                </nav>
                            </div>

                            {/* Tab Content */}
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                {/* Program Overview Tab */}
                                {activeTab === "overview" && (
                                    <div className="space-y-10">
                                        {/* Program Overview */}
                                        <div>
                                            <h2 className="text-2xl font-bold font-merriweather text-dark-gray mb-4">
                                                Program Overview
                                            </h2>
                                            <p className="text-dark-gray font-roboto leading-relaxed mb-8">
                                                {course.overview}
                                            </p>
                                        </div>

                                        {/* Key Features */}
                                        <div>
                                            <h3 className="text-xl font-semibold font-montserrat text-dark-gray mb-6">
                                                Key Features
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                                {course.keyFeatures.map(
                                                    (feature, index) => (
                                                        <div
                                                            key={index}
                                                            className="flex items-start space-x-3"
                                                        >
                                                            <CheckCircle className="h-5 w-5 text-primary-green mt-0.5 flex-shrink-0" />
                                                            <span className="text-dark-gray font-roboto">
                                                                {feature}
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        {/* Who This Course Is For */}
                                        <div>
                                            <h3 className="text-xl font-semibold font-montserrat text-dark-gray mb-6">
                                                Who This Course Is For
                                            </h3>
                                            <ul className="space-y-3 mb-8">
                                                {course.designedFor.map(
                                                    (item, index) => (
                                                        <li
                                                            key={index}
                                                            className="flex items-start space-x-3"
                                                        >
                                                            <ArrowRight className="h-5 w-5 text-secondary-blue mt-0.5 flex-shrink-0" />
                                                            <span className="text-dark-gray font-roboto">
                                                                {item}
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>

                                        {/* Program Learning Outcomes */}
                                        <div>
                                            <h3 className="text-xl font-semibold font-montserrat text-dark-gray mb-6">
                                                Program Learning Outcomes
                                            </h3>
                                            <p className="text-dark-gray font-roboto leading-relaxed mb-6">
                                                Upon successful completion of
                                                this program, graduates will be
                                                able to:
                                            </p>
                                            <div className="space-y-4 mb-8">
                                                {course.outcomes.map(
                                                    (outcome, index) => (
                                                        <motion.div
                                                            key={index}
                                                            className="flex items-start space-x-4 p-4 bg-light-gray rounded-lg"
                                                            initial={{
                                                                opacity: 0,
                                                                x: -20,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                x: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay:
                                                                    index * 0.1,
                                                            }}
                                                        >
                                                            <div className="flex items-center justify-center w-8 h-8 bg-primary-green/10 rounded-full flex-shrink-0">
                                                                <span className="text-primary-green font-semibold text-sm">
                                                                    {index + 1}
                                                                </span>
                                                            </div>
                                                            <p className="text-dark-gray font-roboto leading-relaxed">
                                                                {outcome}
                                                            </p>
                                                        </motion.div>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        {/* Career Prospects */}
                                        <div>
                                            <h3 className="text-xl font-semibold font-montserrat text-dark-gray mb-6">
                                                Career Prospects
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {course.careerProspects.map(
                                                    (prospect, index) => (
                                                        <motion.div
                                                            key={index}
                                                            className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                                                            initial={{
                                                                opacity: 0,
                                                                y: 20,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay:
                                                                    index * 0.1,
                                                            }}
                                                        >
                                                            <h4 className="text-lg font-semibold font-montserrat text-dark-gray mb-3">
                                                                {prospect.title}
                                                            </h4>
                                                            <p className="text-dark-gray font-roboto text-sm leading-relaxed">
                                                                {
                                                                    prospect.description
                                                                }
                                                            </p>
                                                        </motion.div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Admissions & Fees Tab */}
                                {activeTab === "admissions" && (
                                    <div className="space-y-10">
                                        {/* Fees & Funding */}
                                        <div>
                                            <h2 className="text-2xl font-bold font-merriweather text-dark-gray mb-6">
                                                Fees & Funding
                                            </h2>

                                            {/* Fee Structure */}
                                            <div className="bg-light-gray rounded-lg p-6 mb-8">
                                                <h3 className="text-xl font-semibold font-montserrat text-dark-gray mb-4">
                                                    Fee Structure
                                                </h3>
                                                <div className="space-y-4">
                                                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                        <span className="text-dark-gray font-roboto">
                                                            Tuition Fee
                                                        </span>
                                                        <span className="font-semibold text-primary-green">
                                                            {
                                                                course.fees
                                                                    .tuition
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                        <span className="text-dark-gray font-roboto">
                                                            Registration Fee
                                                        </span>
                                                        <span className="font-semibold text-primary-green">
                                                            {
                                                                course.fees
                                                                    .registration
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                                                        <span className="text-dark-gray font-roboto">
                                                            Practical Fee
                                                        </span>
                                                        <span className="font-semibold text-primary-green">
                                                            {
                                                                course.fees
                                                                    .practical
                                                            }
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-between items-center py-3 bg-primary-green/10 px-4 rounded-lg">
                                                        <span className="font-semibold text-dark-gray">
                                                            Total Program Cost
                                                        </span>
                                                        <span className="font-bold text-primary-green text-lg">
                                                            {course.fees.total}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Funding Options */}
                                            <div>
                                                <h3 className="text-xl font-semibold font-montserrat text-dark-gray mb-4">
                                                    Funding Options
                                                </h3>
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                                    {course.funding.map(
                                                        (option, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg"
                                                            >
                                                                <CheckCircle className="h-5 w-5 text-secondary-blue mt-0.5 flex-shrink-0" />
                                                                <span className="text-dark-gray font-roboto">
                                                                    {option}
                                                                </span>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Entry Requirements */}
                                        <div>
                                            <h2 className="text-2xl font-bold font-merriweather text-dark-gray mb-6">
                                                Entry Requirements
                                            </h2>

                                            <div className="bg-light-gray rounded-lg p-6 mb-6">
                                                <h3 className="text-lg font-semibold font-montserrat text-dark-gray mb-4">
                                                    Academic Requirements
                                                </h3>
                                                <div className="flex items-start space-x-3">
                                                    <CheckCircle className="h-5 w-5 text-primary-green mt-0.5 flex-shrink-0" />
                                                    <p className="text-dark-gray font-roboto leading-relaxed">
                                                        {course.requirements}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="bg-secondary-blue/10 rounded-lg p-6 mb-8">
                                                <h3 className="text-lg font-semibold font-montserrat text-dark-gray mb-4">
                                                    Additional Information
                                                </h3>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start space-x-3">
                                                        <ArrowRight className="h-5 w-5 text-secondary-blue mt-0.5 flex-shrink-0" />
                                                        <span className="text-dark-gray font-roboto">
                                                            All certificates
                                                            must be from
                                                            recognized
                                                            institutions
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <ArrowRight className="h-5 w-5 text-secondary-blue mt-0.5 flex-shrink-0" />
                                                        <span className="text-dark-gray font-roboto">
                                                            International
                                                            students require
                                                            additional
                                                            documentation
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <ArrowRight className="h-5 w-5 text-secondary-blue mt-0.5 flex-shrink-0" />
                                                        <span className="text-dark-gray font-roboto">
                                                            Age requirement:
                                                            Minimum 16 years at
                                                            time of enrollment
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Application Process */}
                                        <div>
                                            <h2 className="text-2xl font-bold font-merriweather text-dark-gray mb-6">
                                                Application Process
                                            </h2>

                                            <div className="space-y-6 mb-8">
                                                {course.applicationSteps.map(
                                                    (step, index) => (
                                                        <motion.div
                                                            key={index}
                                                            className="flex items-start space-x-4 p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow duration-300"
                                                            initial={{
                                                                opacity: 0,
                                                                x: -20,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                x: 0,
                                                            }}
                                                            transition={{
                                                                duration: 0.5,
                                                                delay:
                                                                    index * 0.1,
                                                            }}
                                                        >
                                                            <div className="flex items-center justify-center w-10 h-10 bg-primary-green text-white rounded-full flex-shrink-0">
                                                                <span className="font-bold">
                                                                    {index + 1}
                                                                </span>
                                                            </div>
                                                            <div>
                                                                <h4 className="font-semibold text-dark-gray mb-2">
                                                                    Step{" "}
                                                                    {index + 1}
                                                                </h4>
                                                                <p className="text-dark-gray font-roboto">
                                                                    {step}
                                                                </p>
                                                            </div>
                                                        </motion.div>
                                                    )
                                                )}
                                            </div>

                                            <div className="p-6 bg-accent-red/10 rounded-lg">
                                                <h3 className="text-lg font-semibold font-montserrat text-dark-gray mb-4">
                                                    Important Notes
                                                </h3>
                                                <ul className="space-y-2">
                                                    <li className="flex items-start space-x-3">
                                                        <ArrowRight className="h-5 w-5 text-accent-red mt-0.5 flex-shrink-0" />
                                                        <span className="text-dark-gray font-roboto">
                                                            Application
                                                            deadlines are
                                                            strictly enforced
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <ArrowRight className="h-5 w-5 text-accent-red mt-0.5 flex-shrink-0" />
                                                        <span className="text-dark-gray font-roboto">
                                                            Incomplete
                                                            applications will
                                                            not be processed
                                                        </span>
                                                    </li>
                                                    <li className="flex items-start space-x-3">
                                                        <ArrowRight className="h-5 w-5 text-accent-red mt-0.5 flex-shrink-0" />
                                                        <span className="text-dark-gray font-roboto">
                                                            Application fees are
                                                            non-refundable
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 space-y-6">
                                {/* Apply CTA */}
                                <motion.div
                                    className="bg-primary-green text-white rounded-xl p-6 text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                >
                                    <h3 className="text-xl font-bold font-merriweather mb-4">
                                        Ready to Apply?
                                    </h3>
                                    <p className="text-light-gray font-roboto mb-6">
                                        Start your journey with us today
                                    </p>
                                    <button className="w-full bg-white text-primary-green font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 mb-4">
                                        Apply Now
                                    </button>
                                    <Link to={"/contact-us"}>
                                        <button className="w-full border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-primary-green transition-colors duration-300">
                                            Request Information
                                        </button>
                                    </Link>
                                </motion.div>

                                {/* Contact Advisor */}
                                <motion.div
                                    className="bg-white border border-gray-200 rounded-xl p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.5 }}
                                >
                                    <h4 className="text-lg font-semibold font-montserrat text-dark-gray mb-4">
                                        Contact an Advisor
                                    </h4>
                                    <p className="text-dark-gray font-roboto text-sm mb-4">
                                        Have questions? Speak with our
                                        admissions team
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-center space-x-3">
                                            <Phone className="h-4 w-4 text-secondary-blue" />
                                            <span className="text-dark-gray font-roboto text-sm">
                                                +234 123 456 7890
                                            </span>
                                        </div>
                                        <a
                                            rel="noopener noreferrer"
                                            target="blank"
                                            href="https://wa.me/2348071029309?text=Hello%20i%20will%20like%20to%20schedule%20a%20call%20to%20make%20enquiries%20about%20admissions%20at%20unique%20city%20college%2C%20my%20name%20is%20"
                                        >
                                            <button className="w-full bg-secondary-blue text-white py-3 px-6 rounded-lg hover:bg-secondary-blue/90 transition-colors duration-300">
                                                Schedule Call
                                            </button>
                                        </a>
                                    </div>
                                </motion.div>

                                {/* Intake Dates */}
                                <motion.div
                                    className="bg-white border border-gray-200 rounded-xl p-6"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                >
                                    <h4 className="text-lg font-semibold font-montserrat text-dark-gray mb-4">
                                        Upcoming Intakes
                                    </h4>
                                    <div className="space-y-4">
                                        {course.intakeDates.map(
                                            (intake, index) => (
                                                <div
                                                    key={index}
                                                    className="border border-gray-100 rounded-lg p-4"
                                                >
                                                    <div className="flex items-center justify-between mb-2">
                                                        <Calendar className="h-4 w-4 text-primary-green" />
                                                        <span
                                                            className={`text-xs font-semibold px-2 py-1 rounded-full ${
                                                                intake.status ===
                                                                "Open"
                                                                    ? "bg-green-100 text-green-700"
                                                                    : "bg-yellow-100 text-yellow-700"
                                                            }`}
                                                        >
                                                            {intake.status}
                                                        </span>
                                                    </div>
                                                    <h5 className="font-semibold text-dark-gray">
                                                        {intake.session}
                                                    </h5>
                                                    <p className="text-sm text-gray-600">
                                                        {intake.date}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Courses */}
            {relatedCourses.length > 0 && (
                <section className="py-16 bg-light-gray">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            className="text-center mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-4xl font-bold font-merriweather text-dark-gray mb-4">
                                Related{" "}
                                <span className="text-primary-green">
                                    Courses
                                </span>
                            </h2>
                            <p className="text-lg text-dark-gray font-roboto">
                                Explore other programs in {course.category}
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {relatedCourses.map((relatedCourse, index) => (
                                <Link
                                    key={relatedCourse.id}
                                    to={`/course/${relatedCourse.slug}`}
                                >
                                    <CourseCard
                                        image={relatedCourse.image}
                                        alt={relatedCourse.title}
                                        title={relatedCourse.title}
                                        description={relatedCourse.description}
                                        delay={index * 0.1}
                                        onClick={() => {}}
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}

export default CoursePage
