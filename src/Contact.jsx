/**
 * Contact Component
 * 
 * A comprehensive contact page featuring:
 * - Contact form with EmailJS integration
 * - Sticky WhatsApp chat button
 * - Contact information display
 * - Address and office hours
 * - Responsive design with animations
 * 
 * Uses Motion for animations and follows the existing design system
 */

import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, User, FileText, Loader, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';

// ===============================
// CONFIGURATION & CONSTANTS
// ===============================

/**
 * EmailJS configuration object (reusing from Footer)
 * Contains credentials for form submission service
 */
const EMAILJS_CONFIG = {
  serviceId: "service_acbmt6w",
  templateId: "template_2hdiu34", 
  publicKey: "AR80Vtcg_4DdpFWdQ"
};

/**
 * Contact information data
 */
const CONTACT_INFO = {
  phone: "+234 123 456 7890",
  email: "info@uniquecollege.edu",
  address: "123 Healthcare Avenue, Medical District, Lagos, Nigeria",
  whatsapp: "+2347012345678",
  officeHours: {
    weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
    saturday: "Saturday: 9:00 AM - 2:00 PM",
    sunday: "Sunday: Closed"
  }
};

// ===============================
// REUSABLE COMPONENTS
// ===============================

/**
 * Loading spinner component
 */
const LoadingSpinner = () => (
  <Loader className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
);

/**
 * Status message component for form feedback
 */
const StatusMessage = ({ message, type = "success" }) => (
  <motion.div 
    className={`mt-6 p-4 rounded-xl flex items-center space-x-3 ${
      type === "success" 
        ? 'bg-green-50 text-primary-green border border-primary-green/70' 
        : 'bg-red-50 text-accent-red border border-accent-red/70'
    }`}
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    {type === "success" ? (
      <CheckCircle className="h-5 w-5 text-green-500" />
    ) : (
      <XCircle className="h-5 w-5 text-red-500" />
    )}
    <p className="font-roboto">{message}</p>
  </motion.div>
);

/**
 * Form input component with enhanced styling (no labels)
 */
const FormInput = ({ 
  type, 
  name, 
  placeholder, 
  value, 
  onChange, 
  required = true, 
  className = "",
  isTextarea = false 
}) => (
  <div className="relative group">
    {isTextarea ? (
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={5}
        className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-dark-gray font-roboto focus:outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 transition-all duration-300 group-hover:border-gray-300 bg-white placeholder-gray-400 resize-none ${className}`}
        required={required}
      />
    ) : (
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-3 border-2 border-gray-200 rounded-xl text-dark-gray font-roboto focus:outline-none focus:border-primary-green focus:ring-4 focus:ring-primary-green/10 transition-all duration-300 group-hover:border-gray-300 bg-white placeholder-gray-400 ${className}`}
        required={required}
      />
    )}
    {/* Visual indicator */}
    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
      <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
        value ? 'bg-green-500' : 'bg-gray-300'
      }`}></div>
    </div>
  </div>
);

/**
 * Contact info card component with varied designs
 */
const ContactInfoCard = ({ icon: Icon, title, content, delay, variant = 'default' }) => {
  const variants = {
    default: {
      container: "bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100",
      iconBg: "bg-primary-green/10 p-3 rounded-lg",
      iconColor: "text-primary-green",
      layout: "flex items-start space-x-4"
    },
    centered: {
      container: "bg-gradient-to-br from-secondary-blue/5 to-secondary-blue/10 p-6 rounded-xl border-2 border-secondary-blue/20 hover:border-secondary-blue/30 transition-all duration-300",
      iconBg: "bg-secondary-blue/10 p-4 rounded-full mx-auto mb-4",
      iconColor: "text-secondary-blue",
      layout: "text-center"
    },
    minimal: {
      container: "bg-white p-6 rounded-xl border-l-4 border-primary-green shadow-md hover:shadow-lg transition-all duration-300",
      iconBg: "bg-primary-green/10 p-3 rounded-lg",
      iconColor: "text-primary-green",
      layout: "flex items-start space-x-4"
    },
    highlight: {
      container: "bg-gradient-to-r from-primary-green/5 to-primary-green/20 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-green/20",
      iconBg: "bg-primary-green p-3 rounded-lg",
      iconColor: "text-white",
      layout: "flex items-start space-x-4"
    }
  };

  const style = variants[variant];

  return (
    <motion.div
      className={style.container}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <div className={style.layout}>
        <div className={style.iconBg}>
          <Icon className={`h-6 w-6 ${style.iconColor}`} />
        </div>
        <div className={variant === 'centered' ? '' : 'flex-1'}>
          <h3 className="text-lg font-bold font-montserrat text-dark-gray mb-2">{title}</h3>
          <div className="text-gray-600 font-roboto space-y-1">
            {Array.isArray(content) ? (
              content.map((line, index) => (
                <p key={index}>{line}</p>
              ))
            ) : (
              <p>{content}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * Sticky WhatsApp button component
 */
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello! I'm interested in learning more about Unique City College of Health programs. Could you please provide me with information about admissions?"
    );
    const url = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <MessageCircle className="h-6 w-6" />
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Chat with an admissions officer
      </div>
    </motion.button>
  );
};

// ===============================
// MAIN CONTACT COMPONENT
// ===============================

function Contact() {
  // ===============================
  // STATE MANAGEMENT
  // ===============================
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [messageType, setMessageType] = useState('success');

  // ===============================
  // FORM HANDLERS
  // ===============================

  /**
   * Handle input changes
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  /**
   * Handle form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      // Create structured email content
      const emailContent = {
        name: "School Enquiry",
        message: `
New Contact Form Submission from Website

From: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}

Message:
${formData.message}

---
IMPORTANT: Please respond to this inquiry as soon as possible. The sender is waiting for your response.
Contact the sender at: ${formData.email} or ${formData.phone}
        `.trim()
      };

      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        emailContent,
        EMAILJS_CONFIG.publicKey
      );

      setStatusMessage('Thank you for your message! We\'ll get back to you within 24 hours.');
      setMessageType('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatusMessage('Sorry, there was an error sending your message. Please try again or contact us directly.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ===============================
  // COMPONENT RENDER
  // ===============================

  return (
    <div className="min-h-screen bg-light-gray">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-green to-primary-green/80 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-bold font-montserrat mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl lg:text-2xl font-roboto text-green-100 max-w-3xl mx-auto">
              Have questions or need guidance? Our admissions and support team are ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl p-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold font-montserrat text-dark-gray mb-8">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <FormInput
                type="text"
                name="name"
                placeholder="Enter your full name *"
                value={formData.name}
                onChange={handleInputChange}
                required
              />

              <FormInput
                type="email"
                name="email"
                placeholder="Enter your email address *"
                value={formData.email}
                onChange={handleInputChange}
                required
              />

              <FormInput
                type="tel"
                name="phone"
                placeholder="Enter your phone number *"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />

              <FormInput
                type="text"
                name="subject"
                placeholder="What is this about? *"
                value={formData.subject}
                onChange={handleInputChange}
                required
              />

              <FormInput
                name="message"
                placeholder="Tell us how we can help you... *"
                value={formData.message}
                onChange={handleInputChange}
                required
                isTextarea
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary-green to-green-600 text-white font-bold font-montserrat py-4 px-8 rounded-xl hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-primary-green/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <LoadingSpinner />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {statusMessage && (
              <StatusMessage message={statusMessage} type={messageType} />
            )}
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div>
              <h2 className="text-3xl font-bold font-montserrat text-dark-gray mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                <ContactInfoCard
                  icon={Phone}
                  title="Phone"
                  content={CONTACT_INFO.phone}
                  delay={0.1}
                  variant="highlight"
                />

                <ContactInfoCard
                  icon={Mail}
                  title="Email"
                  content={CONTACT_INFO.email}
                  delay={0.2}
                  variant="minimal"
                />

                <ContactInfoCard
                  icon={MapPin}
                  title="Address"
                  content={CONTACT_INFO.address}
                  delay={0.3}
                  variant="centered"
                />

                <ContactInfoCard
                  icon={Clock}
                  title="Office Hours"
                  content={[
                    CONTACT_INFO.officeHours.weekdays,
                    CONTACT_INFO.officeHours.saturday,
                    CONTACT_INFO.officeHours.sunday
                  ]}
                  delay={0.4}
                  variant="default"
                />
              </div>
            </div>

            {/* Quick Actions */}
            <motion.div
              className="bg-secondary-blue/10 p-6 rounded-xl border border-secondary-blue/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-bold font-montserrat text-dark-gray mb-4">
                Need Immediate Help?
              </h3>
              <p className="text-gray-600 font-roboto mb-4">
                For urgent inquiries or immediate assistance, you can reach us directly through WhatsApp.
              </p>
              <button
                onClick={() => {
                  const message = encodeURIComponent(
                    "Hello! I need immediate assistance regarding Unique City College of Health programs."
                  );
                  const url = `https://wa.me/${CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`;
                  window.open(url, '_blank');
                }}
                className="bg-green-500 hover:bg-green-600 text-white font-bold font-montserrat py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat with an admissions officer now</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sticky WhatsApp Button */}
      <WhatsAppButton />
    </div>
  );
}

export default Contact;