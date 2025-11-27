import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaDownload } from 'react-icons/fa'
import { HiArrowDown } from 'react-icons/hi'
import { PORTFOLIO_CONFIG } from '../config/constants'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 md:pt-28 relative">
      <div className="section-container text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-green-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary-200 dark:border-green-400/50 shadow-2xl ring-4 ring-primary-100 dark:ring-green-900/50">
                <img 
                  src="/profile-photo.jpg" 
                  alt="Vijay Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <div className="inline-block px-4 py-2 !bg-transparent border border-primary-300/30 dark:border-green-400/30 text-primary-700 dark:text-white rounded-full text-sm font-semibold mb-4">
              Full Stack Developer & DevOps Engineer
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Hi, I'm </span>
            <span className="heading-gradient">Vijay Kumar</span>
            <span className="heading-gradient-shine text-2xl md:text-4xl font-semibold"> (Vijay Raj)</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-white mb-8 leading-relaxed max-w-3xl mx-auto">
            I build <span className="font-semibold text-primary-600 dark:text-green-400">scalable, secure, and user-focused</span> web applications using the{' '}
            <span className="font-semibold text-primary-600 dark:text-green-400">MERN Stack</span>, strengthened by{' '}
            <span className="font-semibold text-primary-600 dark:text-green-400">DevOps</span> best practices.
            <br className="hidden md:block" />
            <span className="block mt-2 md:inline md:mt-0"> With <span className="font-semibold text-primary-600 dark:text-green-400">1 year+</span> of hands-on experience, I've worked with{' '}
            <span className="font-semibold text-primary-600 dark:text-green-400">Angular</span>,{' '}
            <span className="font-semibold text-primary-600 dark:text-green-400">Node.js</span>,{' '}
            <span className="font-semibold text-primary-600 dark:text-green-400">Rust</span>,{' '}
            <span className="font-semibold text-primary-600 dark:text-green-400">Blockchain</span> technologies,{' '}
            <span className="font-semibold text-primary-600 dark:text-green-400">MongoDB</span>, and{' '}
            <span className="font-semibold text-primary-600 dark:text-green-400">PostgreSQL</span> to deliver reliable and modern digital solutions.</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#projects')
              }}
              className="btn-primary inline-flex items-center dark:bg-green-500 dark:hover:bg-green-600"
            >
              View My Work
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('#contact')
              }}
              className="btn-secondary inline-flex items-center dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              download="Vijay_Kumar_Resume.pdf"
              className="btn-secondary inline-flex items-center space-x-2 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-gray-900"
              onClick={() => {
                // Track download event if analytics is configured
                if (typeof window !== 'undefined' && window.gtag) {
                  const isAndroid = /Android/i.test(navigator.userAgent)
                  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                  
                  window.gtag('event', 'download', {
                    event_category: 'Resume',
                    event_label: 'Resume Download',
                    platform: isAndroid ? 'Android' : isMobile ? 'Mobile' : 'Desktop',
                    device_type: isMobile ? 'Mobile' : 'Desktop',
                  })
                }
              }}
            >
              <FaDownload />
              <span>Download Resume</span>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href={PORTFOLIO_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-400 focus:ring-offset-2 rounded-full p-2"
              aria-label="GitHub"
            >
              <FaGithub size={28} />
            </a>
            <a
              href={PORTFOLIO_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-400 focus:ring-offset-2 rounded-full p-2"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href={PORTFOLIO_CONFIG.social.email}
              className="text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-400 focus:ring-offset-2 rounded-full p-2"
              aria-label="Email"
            >
              <FaEnvelope size={28} />
            </a>
            <a
              href={PORTFOLIO_CONFIG.social.phone}
              className="text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-400 focus:ring-offset-2 rounded-full p-2"
              aria-label="Phone"
            >
              <FaPhone size={28} />
            </a>
          </div>
          
          <div className="animate-bounce">
            <button
              onClick={() => scrollToSection('#about')}
              className="text-gray-400 dark:text-white hover:text-primary-600 dark:hover:text-green-400 transition-colors duration-200"
              aria-label="Scroll down"
            >
              <HiArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

