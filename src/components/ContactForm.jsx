import { useState } from 'react'
import { FaEnvelope, FaUser, FaPaperPlane, FaSpinner } from 'react-icons/fa'
import { PORTFOLIO_CONFIG } from '../config/constants'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name' })
      return false
    }
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email' })
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address' })
      return false
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter a message' })
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Option 1: EmailJS (if configured)
      if (PORTFOLIO_CONFIG.contactForm.serviceId && PORTFOLIO_CONFIG.contactForm.templateId && PORTFOLIO_CONFIG.contactForm.publicKey) {
        // EmailJS implementation would go here
        // For now, fallback to mailto
        const mailtoLink = `mailto:${PORTFOLIO_CONFIG.email}?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
        window.location.href = mailtoLink
        setStatus({ type: 'success', message: 'Opening your email client...' })
      }
      // Option 2: Formspree (if configured)
      else if (PORTFOLIO_CONFIG.contactForm.formspreeId) {
        const response = await fetch(`https://formspree.io/f/${PORTFOLIO_CONFIG.contactForm.formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        })

        if (response.ok) {
          setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' })
          setFormData({ name: '', email: '', subject: '', message: '' })
          
          // Track form submission with device info
          if (typeof window !== 'undefined' && window.gtag) {
            const isAndroid = /Android/i.test(navigator.userAgent)
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            
            window.gtag('event', 'form_submission', {
              event_category: 'Contact',
              event_label: 'Contact Form Submitted',
              platform: isAndroid ? 'Android' : isMobile ? 'Mobile' : 'Desktop',
              device_type: isMobile ? 'Mobile' : 'Desktop',
            })
          }
        } else {
          throw new Error('Failed to send message')
        }
      }
      // Option 3: Fallback to mailto
      else {
        const mailtoLink = `mailto:${PORTFOLIO_CONFIG.email}?subject=${encodeURIComponent(formData.subject || 'Contact from Portfolio')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
        window.location.href = mailtoLink
        setStatus({ type: 'success', message: 'Opening your email client...' })
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Sorry, there was an error sending your message. Please try again or email me directly.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
              placeholder="Your Name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300"
          placeholder="Subject (optional)"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white mb-2">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-400 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white transition-all duration-300 resize-none"
          placeholder="Your message..."
        />
      </div>

      {status.message && (
        <div
          className={`p-4 rounded-lg ${
            status.type === 'success'
              ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 border border-green-200 dark:border-green-800'
              : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 border border-red-200 dark:border-red-800'
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-600 dark:bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 dark:hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <FaSpinner className="animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <FaPaperPlane />
            <span>Send Message</span>
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm

