/**
 * Footer Component
 * 
 * A comprehensive footer section featuring:
 * - Advisor consultation form with EmailJS integration
 * - Dynamic footer navigation sections (Quick Links, Courses, Admissions)
 * - Contact information display
 * - Newsletter subscription form
 * - Social media links
 * - Copyright and accreditation information
 * 
 * Uses Motion for animations and follows DRY principles with reusable components
 */

import { motion } from "motion/react";
import { Facebook, Instagram, Linkedin, MessageCircle, Phone, Mail, MapPin, ExternalLink, ArrowRight, Loader } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Link } from "react-router";

// ===============================
// CONFIGURATION & CONSTANTS
// ===============================

/**
 * EmailJS configuration object
 * Contains credentials for form submission service
 */
const EMAILJS_CONFIG = {
  serviceId: "service_acbmt6w",
  templateId: "template_2hdiu34", 
  publicKey: "AR80Vtcg_4DdpFWdQ"
};

/**
 * Footer data structure containing all static content
 * Centralized for easy maintenance and updates
 */
const FOOTER_DATA = {
  // Navigation links for different sections
  quickLinks: [
    {name: 'Home', url:'/'},
    { name: 'About Us', url: '/about' },
    { name: 'Courses', url: '/courses' },
    { name: 'Admissions', url: '/admissions' },
    { name: 'Student Life', url: '/student-life' },
    {name: 'Contact Us', url:'/contact'}
  ],
  // Available course offerings
  courses: [
                { name: "Chew", url: "/course/chew" },
                { name: "Junior Chew", url: "/course/junior-chew" },
                { name: "Chew ND/HND", url: "/course/chew-nd-hnd" },
                {
                    name: "Pharmacy Technician",
                    url: "/course/",
                },
                {
                    name: "Health Assistant",
                    url: "/course/health-assistant",
                },
                {
                    name: "Environmental Health",
                    url: "/course/environmental-health",
                },
                { name: "Health Information", url: "/course/health-information-management" },
                {
                    name: "Public Health Nursing",
                    url: "/course/public-health-nursing",
                },
                {
                    name: "Natural Medicine",
                    url: "/course/natural-medicine",
                },
  ],
  // Contact information
  contact: {
    address: "123 Healthcare Avenue\nMedical District\nLagos, Nigeria",
    phone: "+234 123 456 7890",
    email: "info@uniquecollege.edu"
  },
  // Social media platforms with hover colors
  social: [
    { icon: Facebook, href: "#", hoverColor: "hover:text-blue-500" },
    { icon: Instagram, href: "#", hoverColor: "hover:text-pink-500" },
    { icon: Linkedin, href: "#", hoverColor: "hover:text-blue-600" },
    { icon: MessageCircle, href: "#", hoverColor: "hover:text-green-500" }
  ]
};

/**
 * Footer sections configuration
 * Defines the structure and styling for dynamic footer sections
 */
const FOOTER_SECTIONS = [
  { title: "Quick Links", data: FOOTER_DATA.quickLinks, hoverColor: "hover:text-primary-green" },
  { title: "Courses", data: FOOTER_DATA.courses, hoverColor: "hover:text-secondary-blue" },
];

// ===============================
// REUSABLE COMPONENTS
// ===============================

/**
 * Loading spinner component using Lucide Loader icon
 * Used in form submission buttons during loading states
 */
const LoadingSpinner = () => (
  <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
);

/**
 * Status message component for form feedback
 * @param {string} message - Message to display
 * @param {string} type - Message type: 'success' or 'error'
 */
const StatusMessage = ({ message, type = "success" }) => (
  <motion.p 
    className={`mt-4 text-center ${type === "success" ? 'text-green-400' : 'text-red-400'}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
  >
    {message}
  </motion.p>
);

/**
 * Reusable form input component with validation indicator
 */
const FormInput = ({ type, name, placeholder, value, onChange, required = true }) => (
  <div className="relative group">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-dark-gray font-roboto focus:outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 transition-all duration-300 group-hover:border-gray-300 bg-white/80 backdrop-blur-sm placeholder-gray-400"
      required={required}
    />
    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
      <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${value ? 'bg-green-500' : 'bg-gray-300'}`}></div>
    </div>
  </div>
);

/**
 * Gradient button component with loading states
 */
const GradientButton = ({ isLoading, loadingText, children, className = "", ...props }) => (
  <button
    className={`whitespace-nowrap w-full px-8 py-4 bg-gradient-to-r from-primary-green to-green-600 text-white font-bold font-montserrat rounded-xl hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-primary-green/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 group ${className}`}
    disabled={isLoading}
    {...props}
  >
    <span className="flex items-center justify-center">
      {isLoading ? (
        <>
          <LoadingSpinner />
          {loadingText}
        </>
      ) : (
        children
      )}
    </span>
  </button>
);

/**
 * Dynamic footer section component
 */
const FooterSection = ({ title, data, hoverColor, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    viewport={{ once: true }}
  >
    <h3 className="text-lg lg:text-xl font-bold font-montserrat text-white mb-4 lg:mb-6">{title}</h3>
    <ul className="space-y-2 lg:space-y-3">
      {data.map((item, index) => (
        <li key={index}>
          <Link 
            to={item.url} 
            className={`text-gray-300 ${hoverColor} transition-colors duration-200 font-roboto text-sm lg:text-base flex items-center group`}
          >
            <span className="truncate">{item.name}</span>
            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
          </Link>
        </li>
      ))}
    </ul>
  </motion.div>
);

// ===============================
// MAIN FOOTER COMPONENT
// ===============================

/**
 * Main Footer Component
 */
function Footer() {
  // ===============================
  // STATE MANAGEMENT
  // ===============================
  
  const [advisorForm, setAdvisorForm] = useState({ name: '', phone: '' });
  const [emailForm, setEmailForm] = useState({ email: '' });
  const [isSubmittingAdvisor, setIsSubmittingAdvisor] = useState(false);
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [advisorMessage, setAdvisorMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  // ===============================
  // FORM SUBMISSION HANDLERS
  // ===============================

  /**
   * Generic form submission handler using React state
   */
  const handleFormSubmit = async (formData, setLoading, setMessage, resetForm, formType, successMessage) => {
    setLoading(true);
    setMessage('');

    try {
      let emailContent;

      if (formType === 'advisor') {
        // Create structured email content for advisor consultation
        emailContent = {
          name: "Advisor Request",
          message: `
Advisor Consultation Request from Website

From: ${formData.name}
Phone: ${formData.phone}
Request Type: Advisor Consultation Request

Message:
The user is requesting a consultation with an advisor to discuss program options and admission requirements.

---
IMPORTANT: Please contact this person within 24 hours as promised.
Contact the user at: ${formData.phone}
          `.trim()
        };
      } else if (formType === 'newsletter') {
        // Create structured email content for newsletter subscription
        emailContent = {
          name: 'Newsletter Subscriber',
          message: `
Newsletter Subscription from Website

Email: ${formData.email}
Request Type: Newsletter Subscription Request

Message:
A user has requested to be added to the newsletter mailing list.

---
IMPORTANT: Please add this email to the newsletter distribution list.
Subscriber email: ${formData.email}
          `.trim()
        };
      }

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        emailContent,
        EMAILJS_CONFIG.publicKey
      );

      setMessage(successMessage);
      resetForm();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setMessage('Failed to send. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  /**
   * Advisor consultation form submission handler
   * Processes the "Speak with Advisor" form submission
   */
  const handleAdvisorSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(
      advisorForm,
      setIsSubmittingAdvisor,
      setAdvisorMessage,
      () => setAdvisorForm({ name: '', phone: '' }),
      'advisor',
      'Request sent successfully! We\'ll contact you soon.'
    );
  };

  /**
   * Newsletter subscription form submission handler
   * Processes the email newsletter signup
   */
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(
      emailForm,
      setIsSubmittingEmail,
      setEmailMessage,
      () => setEmailForm({ email: '' }),
      'newsletter',
      'Successfully subscribed to our newsletter!'
    );
  };

  // ===============================
  // COMPONENT RENDER
  // ===============================
  
  return (
    <footer className="bg-dark-gray text-white">
      {/* Advisor Consultation Section */}
      <div className="border-b border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Section heading */}
            <h2 className="text-3xl lg:text-4xl font-bold font-merriweather text-white mb-4">
              Speak with an <span className="text-primary-green">Advisor</span>
            </h2>
            <p className="text-gray-300 font-roboto text-lg mb-8">
              Get personalized guidance about our programs and admission process
            </p>
            
            {/* Form container with glass morphism design */}
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-8 max-w-md mx-auto border border-gray-100 backdrop-blur-sm">
              {/* Form header with icon and description */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary-green" />
                </div>
                <h3 className="text-xl font-bold font-montserrat text-dark-gray mb-2">Get Expert Guidance</h3>
                <p className="text-sm text-gray-600 font-roboto">We'll call you within 24 hours</p>
              </div>
              
              <form onSubmit={handleAdvisorSubmit} className="space-y-5">
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={advisorForm.name}
                  onChange={(e) => setAdvisorForm({...advisorForm, name: e.target.value})}
                />
                
                <FormInput
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={advisorForm.phone}
                  onChange={(e) => setAdvisorForm({...advisorForm, phone: e.target.value})}
                />
                
                {/* Submit button with loading state */}
                <GradientButton
                  isLoading={isSubmittingAdvisor}
                  loadingText="Processing..."
                  type="submit"
                >
                  Request Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </GradientButton>
                
                {/* Security indicator */}
                <div className="flex items-center justify-center space-x-2 pt-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  </div>
                  <p className="text-xs text-gray-500 font-roboto ml-3">Secure & Confidential</p>
                </div>
              </form>
            </div>
            
            {/* Success/error message display */}
            {advisorMessage && (
              <StatusMessage 
                message={advisorMessage}
                type={advisorMessage.includes('successfully') ? 'success' : 'error'}
              />
            )}
          </motion.div>
        </div>
      </div>

      {/* Main Footer Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* College Logo & Branding */}
          <motion.div
            className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* College Logo */}
            <div className="mb-6">
              <img 
                src="/logo.jpg" 
                alt="Unique College of Health Sciences and Technology Logo" 
                className="h-20 w-auto sm:h-24 lg:h-28 object-contain rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
            
            {/* College branding text */}
            <div className="space-y-3">
              <h3 className="text-xl lg:text-2xl font-bold font-montserrat text-white">
                Unique City College
              </h3>
              <p className="text-sm lg:text-base text-gray-300 font-roboto leading-relaxed max-w-xs">
                Building Healthcare Leaders for Tomorrow's Challenges
              </p>
              
              {/* Accreditation badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mt-4">
                <span className="px-3 py-1 bg-primary-green/20 text-primary-green text-xs font-medium rounded-full border border-primary-green/30">
                  CHPRBN Accredited
                </span>
                <span className="px-3 py-1 bg-secondary-blue/20 text-secondary-blue text-xs font-medium rounded-full border border-secondary-blue/30">
                  PHC Nigeria
                </span>
              </div>
            </div>
          </motion.div>

          {/* Dynamic footer navigation sections */}
          {FOOTER_SECTIONS.map((section, index) => (
            <FooterSection
              key={section.title}
              title={section.title}
              data={section.data}
              hoverColor={section.hoverColor}
              delay={0.2 + index * 0.1}
            />
          ))}

          {/* Contact Information Section */}
          <motion.div
            className="col-span-2 md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg lg:text-xl font-bold font-montserrat text-white mb-4 lg:mb-6">Contact Info</h3>
            <div className="space-y-4 lg:space-y-5">
              {/* Physical address with improved mobile spacing */}
              <div className="flex items-start space-x-3 group">
                <div className="bg-primary-green/20 p-2 rounded-lg group-hover:bg-primary-green/30 transition-colors duration-300">
                  <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-primary-green flex-shrink-0" />
                </div>
                <p className="text-gray-300 font-roboto text-sm lg:text-base leading-relaxed whitespace-pre-line">
                  {FOOTER_DATA.contact.address}
                </p>
              </div>
              
              {/* Phone number with enhanced styling */}
              <div className="flex items-center space-x-3 group">
                <div className="bg-secondary-blue/20 p-2 rounded-lg group-hover:bg-secondary-blue/30 transition-colors duration-300">
                  <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-secondary-blue flex-shrink-0" />
                </div>
                <a href={`tel:${FOOTER_DATA.contact.phone}`} className="text-gray-300 hover:text-white transition-colors duration-200 font-roboto text-sm lg:text-base">
                  {FOOTER_DATA.contact.phone}
                </a>
              </div>
              
              {/* Email address with enhanced styling */}
              <div className="flex items-center space-x-3 group">
                <div className="bg-accent-red/20 p-2 rounded-lg group-hover:bg-accent-red/30 transition-colors duration-300">
                  <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-accent-red flex-shrink-0" />
                </div>
                <a href={`mailto:${FOOTER_DATA.contact.email}`} className="text-gray-300 hover:text-white transition-colors duration-200 font-roboto text-sm lg:text-base break-all">
                  {FOOTER_DATA.contact.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Subscription Section */}
        <motion.div 
          className="mt-12 pt-8 border-t border-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-center max-w-lg mx-auto">
            {/* Newsletter section header */}
            <div className="mb-6">
              <div className="w-12 h-12 bg-secondary-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-secondary-blue" />
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-white mb-2">Stay in the Loop</h3>
              <p className="text-gray-300 font-roboto">Get the latest updates, program announcements, and success stories delivered to your inbox</p>
            </div>
            
            {/* Newsletter form container */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <form onSubmit={handleEmailSubmit} className="space-y-4">
                {/* Email input with icon */}
                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    value={emailForm.email}
                    onChange={(e) => setEmailForm({email: e.target.value})}
                    className="w-full px-5 py-4 bg-white/90 backdrop-blur-sm border-2 border-transparent rounded-xl text-dark-gray font-roboto focus:outline-none focus:border-secondary-blue focus:ring-4 focus:ring-secondary-blue/20 transition-all duration-300 placeholder-gray-500 group-hover:bg-white"
                    required
                  />
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                
                {/* Newsletter subscribe button */}
                <GradientButton
                  isLoading={isSubmittingEmail}
                  loadingText="Subscribing..."
                  type="submit"
                  className="bg-gradient-to-r from-secondary-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:ring-secondary-blue/30"
                >
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </GradientButton>
                
                {/* Trust indicators */}
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-300">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                    No Spam
                  </span>
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                    Unsubscribe Anytime
                  </span>
                </div>
              </form>
            </div>
            
            {/* Newsletter subscription success/error message */}
            {emailMessage && (
              <StatusMessage 
                message={emailMessage}
                type={emailMessage.includes('Successfully') ? 'success' : 'error'}
              />
            )}
          </div>
        </motion.div>

        {/* Social Media & Copyright Section */}
        <motion.div 
          className="mt-8 pt-8 border-t border-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Social media icons */}
          <div className="flex justify-center space-x-6 mb-6">
            {FOOTER_DATA.social.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a key={index} href={social.href} className={`text-gray-300 ${social.hoverColor} transition-colors duration-200`}>
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          {/* Copyright and accreditation information */}
          <div className="text-center text-gray-400 font-roboto">
            <p className="mb-2">
              © {new Date().getFullYear()} Unique College of Health Sciences and Technology. All rights reserved.
            </p>
            <p className="text-sm">
              Accredited by Primary Health Care Nigeria and the Community Health Practitioners Registration Board of Nigeria (CHPRBN)
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
