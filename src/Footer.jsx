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
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

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
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Admissions', href: '#admissions' },
    { name: 'Student Life', href: '#student-life' },
    { name: 'Faculty', href: '#faculty' },
    { name: 'News & Events', href: '#news' }
  ],
  // Available course offerings
  courses: [
    { name: 'Community Health', href: '#community-health' },
    { name: 'Environmental Health', href: '#environmental-health' },
    { name: 'Health Information Management', href: '#health-info' },
    { name: 'Medical Laboratory Science', href: '#med-lab' },
    { name: 'Nursing', href: '#nursing' },
    { name: 'Pharmacy Technology', href: '#pharmacy' }
  ],
  // Admission-related links
  admissions: [
    { name: 'Apply Now', href: '#apply' },
    { name: 'Requirements', href: '#requirements' },
    { name: 'Scholarships', href: '#scholarships' },
    { name: 'Tuition & Fees', href: '#tuition' },
    { name: 'Financial Aid', href: '#financial-aid' },
    { name: 'International Students', href: '#international' }
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
  { title: "Admissions", data: FOOTER_DATA.admissions, hoverColor: "hover:text-accent-red" }
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
 * @param {string} type - Input type (text, email, tel, etc.)
 * @param {string} name - Input name attribute for form submission
 * @param {string} placeholder - Placeholder text
 * @param {string} value - Current input value
 * @param {function} onChange - Change handler function
 * @param {boolean} required - Whether field is required
 * @param {string} className - Additional CSS classes
 */
const FormInput = ({ type, name, placeholder, value, onChange, required = true, className = "" }) => (
  <div className="relative group">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-5 py-4 border-2 border-gray-200 rounded-xl text-dark-gray font-roboto focus:outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 transition-all duration-300 group-hover:border-gray-300 bg-white/80 backdrop-blur-sm placeholder-gray-400 ${className}`}
      required={required}
    />
    {/* Visual indicator showing field completion status */}
    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
      <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${value ? 'bg-green-500' : 'bg-gray-300'}`}></div>
    </div>
  </div>
);

/**
 * Gradient button component with loading states
 * @param {boolean} isLoading - Whether button is in loading state
 * @param {string} loadingText - Text to show during loading
 * @param {ReactNode} children - Button content
 * @param {string} className - Additional CSS classes
 * @param {object} props - Additional button props
 */
const GradientButton = ({ isLoading, loadingText, children, className = "", ...props }) => (
  <button
    className={` whitespace-nowrap w-full px-8 py-4 bg-gradient-to-r from-primary-green to-green-600 text-white font-bold font-montserrat rounded-xl hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-primary-green/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 group ${className}`}
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
 * Renders a footer navigation section with links
 * @param {string} title - Section title
 * @param {Array} data - Array of link objects
 * @param {string} hoverColor - CSS class for hover color
 * @param {number} delay - Animation delay
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
          <a 
            href={item.href} 
            className={`text-gray-300 ${hoverColor} transition-colors duration-200 font-roboto text-sm lg:text-base flex items-center group`}
          >
            <span className="truncate">{item.name}</span>
            {/* External link icon appears on hover */}
            <ExternalLink className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex-shrink-0" />
          </a>
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
 * 
 * Handles form submissions, state management, and renders the complete footer
 * including advisor consultation form, navigation sections, and newsletter signup
 */
function Footer() {
  // ===============================
  // STATE MANAGEMENT
  // ===============================
  
  // Form references for EmailJS direct form submission
  const advisorFormRef = useRef();
  const emailFormRef = useRef();
  
  // Form data state objects
  const [advisorForm, setAdvisorForm] = useState({ name: '', phone: '' });
  const [emailForm, setEmailForm] = useState({ email: '' });
  
  // Loading states for form submissions
  const [isSubmittingAdvisor, setIsSubmittingAdvisor] = useState(false);
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  
  // Message states for user feedback
  const [advisorMessage, setAdvisorMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');

  // ===============================
  // FORM SUBMISSION HANDLERS
  // ===============================

  /**
   * Generic form submission handler following DRY principles
   * Handles EmailJS submission, state updates, and error handling
   * 
   * @param {object} formRef - React ref to the form element
   * @param {function} setLoading - State setter for loading indicator
   * @param {function} setMessage - State setter for status message
   * @param {function} resetForm - Function to reset form state
   * @param {string} successMessage - Message to show on successful submission
   */
  const handleFormSubmit = async (formRef, setLoading, setMessage, resetForm, successMessage) => {
    setLoading(true);
    try {
      // Submit form data using EmailJS
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current,
        EMAILJS_CONFIG.publicKey
      );
      
      // Success: Update message and reset form
      setMessage(successMessage);
      resetForm();
      formRef.current.reset();
    } catch (error) {
      // Error: Show error message
      setMessage('Failed to send. Please try again.');
    }
    setLoading(false);
  };

  /**
   * Advisor consultation form submission handler
   * Processes the "Speak with Advisor" form submission
   */
  const handleAdvisorSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(
      advisorFormRef,
      setIsSubmittingAdvisor,
      setAdvisorMessage,
      () => setAdvisorForm({ name: '', phone: '' }),
      'Request sent successfully! We\'ll contact you soon.'
    );
  };

  /**
   * Newsletter subscription form submission handler
   * Processes the email newsletter signup form
   */
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(
      emailFormRef,
      setIsSubmittingEmail,
      setEmailMessage,
      () => setEmailForm({ email: '' }),
      'Successfully subscribed to our newsletter!'
    );
  };

  // ===============================
  // COMPONENT RENDER
  // ===============================
  
  return (
    <footer className="bg-dark-gray text-white">
      
      {/* ===============================
          ADVISOR CONSULTATION SECTION
          =============================== */}
      {/* Top section with form for users to request advisor consultation */}
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
              
              {/* Advisor consultation form */}
              <form ref={advisorFormRef} onSubmit={handleAdvisorSubmit} className="space-y-5">
                {/* Name input field */}
                <FormInput
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={advisorForm.name}
                  onChange={(e) => setAdvisorForm({...advisorForm, name: e.target.value})}
                />
                
                {/* Phone number input field */}
                <FormInput
                  type="tel"
                  name="email"
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

      {/* ===============================
          MAIN FOOTER NAVIGATION
          =============================== */}
      {/* Four-column footer layout with navigation sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Dynamic footer navigation sections */}
          {/* Renders Quick Links, Courses, and Admissions sections from config */}
          {FOOTER_SECTIONS.map((section, index) => (
            <FooterSection
              key={section.title}
              title={section.title}
              data={section.data}
              hoverColor={section.hoverColor}
              delay={0.1 + index * 0.1}
            />
          ))}

          {/* ===============================
              CONTACT INFORMATION SECTION
              =============================== */}
          {/* Static contact information with icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg lg:text-xl font-bold font-montserrat text-white mb-4 lg:mb-6">Contact Info</h3>
            <div className="space-y-3 lg:space-y-4">
              {/* Physical address */}
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 lg:h-5 lg:w-5 text-primary-green mt-1 flex-shrink-0" />
                <p className="text-gray-300 font-roboto text-sm lg:text-base leading-relaxed whitespace-pre-line">
                  {FOOTER_DATA.contact.address}
                </p>
              </div>
              
              {/* Phone number with click-to-call functionality */}
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 lg:h-5 lg:w-5 text-secondary-blue flex-shrink-0" />
                <a href={`tel:${FOOTER_DATA.contact.phone}`} className="text-gray-300 hover:text-white transition-colors duration-200 font-roboto text-sm lg:text-base truncate">
                  {FOOTER_DATA.contact.phone}
                </a>
              </div>
              
              {/* Email address with click-to-email functionality */}
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 lg:h-5 lg:w-5 text-accent-red flex-shrink-0" />
                <a href={`mailto:${FOOTER_DATA.contact.email}`} className="text-gray-300 hover:text-white transition-colors duration-200 font-roboto text-sm lg:text-base truncate">
                  {FOOTER_DATA.contact.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ===============================
            NEWSLETTER SUBSCRIPTION SECTION
            =============================== */}
        {/* Newsletter signup with glass morphism design */}
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
              <form ref={emailFormRef} onSubmit={handleEmailSubmit} className="space-y-4">
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

        {/* ===============================
            SOCIAL MEDIA & COPYRIGHT SECTION
            =============================== */}
        {/* Bottom footer with social links and legal information */}
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
              © 2025 Unique College of Health Sciences and Technology. All rights reserved.
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
