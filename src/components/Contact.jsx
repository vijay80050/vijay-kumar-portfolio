import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaHandshake, FaCheckCircle } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { PORTFOLIO_CONFIG } from '../config/constants'
import ContactForm from './ContactForm'

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: PORTFOLIO_CONFIG.email,
      link: PORTFOLIO_CONFIG.social.email,
      color: 'text-red-500',
      bgGradient: 'from-red-500 to-pink-500',
      hoverBg: 'hover:from-red-600 hover:to-pink-600'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: PORTFOLIO_CONFIG.phone,
      link: PORTFOLIO_CONFIG.social.phone,
      color: 'text-green-500',
      bgGradient: 'from-green-500 to-emerald-500',
      hoverBg: 'hover:from-green-600 hover:to-emerald-600'
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: PORTFOLIO_CONFIG.location,
      link: null,
      color: 'text-blue-500',
      bgGradient: 'from-blue-500 to-cyan-500',
      hoverBg: 'hover:from-blue-600 hover:to-cyan-600'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: PORTFOLIO_CONFIG.social.linkedin.replace('https://', ''),
      link: PORTFOLIO_CONFIG.social.linkedin,
      color: 'text-blue-600',
      bgGradient: 'from-blue-600 to-indigo-600',
      hoverBg: 'hover:from-blue-700 hover:to-indigo-700'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: PORTFOLIO_CONFIG.social.github.replace('https://', ''),
      link: PORTFOLIO_CONFIG.social.github,
      color: 'text-gray-800 dark:text-gray-200',
      bgGradient: 'from-gray-700 to-gray-900',
      hoverBg: 'hover:from-gray-800 hover:to-black'
    },
    {
      icon: FaCheckCircle,
      label: 'Availability',
      value: 'Open to Opportunities',
      link: null,
      color: 'text-purple-500',
      bgGradient: 'from-purple-500 to-indigo-500',
      hoverBg: 'hover:from-purple-600 hover:to-indigo-600'
    }
  ]

  return (
    <section id="contact" className="section-container dark:!bg-transparent">
      <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          <span className="font-semibold text-primary-600 dark:text-green-400">Open to Opportunities</span> — I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
      </div>
      
      <div className={`max-w-5xl mx-auto fade-in-up ${isVisible ? 'visible' : ''}`}>
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon
            const content = (
              <div className="group relative card text-center hover:shadow-2xl transition-all duration-300 h-full overflow-hidden">
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon Container */}
                <div className="relative mb-4 flex justify-center">
                  <div className={`p-4 rounded-full bg-gradient-to-br ${info.bgGradient} ${info.hoverBg} transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">{info.label}</h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-primary-600 dark:text-green-400 hover:text-primary-700 dark:hover:text-green-300 break-words transition-colors duration-200 inline-block"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600 dark:text-gray-300 break-words">{info.value}</p>
                )}
              </div>
            )
            
            return info.link ? (
              <a 
                key={index} 
                href={info.link} 
                target={info.link.startsWith('http') ? '_blank' : undefined} 
                rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            )
          })}
        </div>
        
        {/* Let's Work Together Section */}
        <div className="relative text-center border-2 border-primary-400/30 dark:border-green-400/30 rounded-xl p-8 mb-10 bg-gradient-to-br from-primary-50/50 to-transparent dark:from-green-950/20 dark:to-transparent backdrop-blur-sm">
          <div className="absolute top-4 right-4 opacity-20">
            <FaHandshake className="text-primary-600 dark:text-green-400 text-6xl" />
          </div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 heading-gradient flex items-center justify-center gap-3 flex-wrap px-4 pb-2 leading-tight">
              <FaHandshake className="text-primary-600 dark:text-green-400 flex-shrink-0" />
              <span className="inline-block">Let's Work Together</span>
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Ready to discuss opportunities? I'm passionate about contributing to innovative projects and continuously growing as a full-stack developer. Whether you have an exciting project in mind, a creative collaboration opportunity, or simply want to connect and share ideas, I'd love to hear from you. Let's build something amazing together!
            </p>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <div className="card relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-200/20 to-green-200/20 dark:from-primary-900/10 dark:to-green-900/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-green-500 dark:from-green-500 dark:to-green-600 mb-4 shadow-lg">
                  <FaEnvelope className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2 heading-gradient">Send me a message</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Fill out the form below and I'll get back to you as soon as possible
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

