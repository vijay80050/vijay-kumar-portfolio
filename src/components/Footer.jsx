import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'
import { PORTFOLIO_CONFIG } from '../config/constants'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="!bg-transparent border-t border-gray-800/30 dark:border-gray-800/30 text-gray-900 dark:text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Side - Vijay.dev */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-bold heading-gradient hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              Vijay.dev
            </a>
          </div>
          
          {/* Center - Copyright */}
          <div className="text-center">
            <p className="text-gray-400 dark:text-white">
              © {currentYear} {PORTFOLIO_CONFIG.name}. All rights reserved.
            </p>
          </div>
          
          {/* Right Side - Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href={PORTFOLIO_CONFIG.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-gray-400 dark:text-gray-300 hover:text-primary-600 dark:hover:text-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-400 focus:ring-offset-2 rounded-full p-2 hover:bg-primary-50 dark:hover:bg-green-500/10 hover:scale-110 transform"
              aria-label="GitHub"
            >
              <FaGithub size={22} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative text-gray-400 dark:text-gray-300 hover:text-primary-600 dark:hover:text-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-400 focus:ring-offset-2 rounded-full p-2 hover:bg-primary-50 dark:hover:bg-green-500/10 hover:scale-110 transform"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={22} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.social.email}
              className="group relative text-gray-400 dark:text-gray-300 hover:text-primary-600 dark:hover:text-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-400 focus:ring-offset-2 rounded-full p-2 hover:bg-primary-50 dark:hover:bg-green-500/10 hover:scale-110 transform"
              aria-label="Email"
            >
              <FaEnvelope size={22} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
            <a
              href={PORTFOLIO_CONFIG.social.phone}
              className="group relative text-gray-400 dark:text-gray-300 hover:text-primary-600 dark:hover:text-green-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-400 focus:ring-offset-2 rounded-full p-2 hover:bg-primary-50 dark:hover:bg-green-500/10 hover:scale-110 transform"
              aria-label="Phone"
            >
              <FaPhone size={22} className="group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

