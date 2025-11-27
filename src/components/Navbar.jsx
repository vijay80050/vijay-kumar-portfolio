import { useState, useEffect } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import { useActiveSection } from '../hooks/useActiveSection'

const Navbar = ({ isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [savedScrollY, setSavedScrollY] = useState(0)
  const { theme, toggleTheme } = useTheme()

  // Prevent body scroll when menu is open and ensure menu is visible
  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY
      setSavedScrollY(scrollY)
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      // Restore scroll position
      document.body.style.overflow = 'unset'
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      // Scroll position will be handled by handleNavClick
    }
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [isMenuOpen])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const activeSection = useActiveSection(navItems)

  const handleNavClick = (href) => {
    // Close menu first
    setIsMenuOpen(false)
    
    // Wait for menu to close and body styles to be restored
    setTimeout(() => {
      // Restore body styles
      document.body.style.overflow = 'unset'
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      
      // Restore scroll position first
      if (savedScrollY > 0) {
        window.scrollTo(0, savedScrollY)
      }
      
      // Then scroll to target section
      setTimeout(() => {
        const element = document.querySelector(href)
        if (element) {
          // Calculate offset (navbar height + some padding)
          const offset = 80
          const elementPosition = element.getBoundingClientRect().top
          const currentScrollY = window.pageYOffset || document.documentElement.scrollTop
          const offsetPosition = elementPosition + currentScrollY - offset

          // Scroll to section
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          })
        }
      }, 50) // Small delay to ensure scroll position is restored
    }, 150) // Wait for menu animation to start closing
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled
          ? 'py-3 backdrop-blur-md shadow-lg'
          : 'py-4'
      } ${
        isScrolled
          ? 'bg-gradient-to-r from-blue-500/10 via-blue-400/10 to-green-500/10 dark:from-cyan-500/20 dark:via-blue-400/20 dark:to-green-500/20 border-b border-blue-200/30 dark:border-cyan-500/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Left Side */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#home')
            }}
            className="text-2xl font-bold heading-gradient hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            Vijay.dev
          </a>
          
          {/* Centered Menu - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.href)
                  }}
                  className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-blue-600 to-green-500 dark:from-cyan-500 dark:to-green-400 shadow-lg shadow-blue-500/50 dark:shadow-cyan-500/50 scale-105'
                      : 'text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-green-400 hover:bg-blue-50/50 dark:hover:bg-cyan-500/10'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></span>
                  )}
                </a>
              )
            })}
          </div>

          {/* Right Side - Icons & Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Social Icons - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://github.com/vijay80050"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-green-400 transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/vijay-kumar-702b921bb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-green-400 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="mailto:vijaykumar.cse002@gmail.com"
                className="text-gray-700 dark:text-white hover:text-primary-600 dark:hover:text-green-400 transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative !bg-transparent border border-gray-300/30 dark:border-green-400/30 backdrop-blur-none p-2 rounded-full !shadow-none hover:!shadow-none transition-all duration-300 hover:scale-110 group"
              aria-label="Toggle theme"
            >
              <div className="relative flex items-center justify-center">
              {theme === 'light' ? (
                <FaMoon 
                    className="text-gray-700 dark:text-white text-lg transition-all duration-300 relative z-10 group-hover:translate-y-[-2px] moon-rise" 
                />
              ) : (
                <FaSun 
                    className="text-yellow-400 text-lg transition-all duration-300 relative z-10 sun-glow" 
                />
              )}
                {/* Glow effect for sun */}
                {theme === 'dark' && (
                  <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-md animate-pulse"></div>
                )}
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-700 dark:text-white focus:outline-none ml-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <FaTimes size={24} />
              ) : (
                <FaBars size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 dark:bg-black/70 z-[200] lg:hidden"
              onClick={() => setIsMenuOpen(false)}
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
            />
            
            {/* Mobile Menu Panel */}
            <div 
              className={`fixed top-0 left-0 right-0 bottom-0 z-[201] lg:hidden flex flex-col mobile-menu-enter overflow-hidden ${
                theme === 'dark' 
                  ? 'bg-gray-900' 
                  : 'bg-gray-800'
              }`}
              style={{ 
                position: 'fixed', 
                top: 0, 
                left: 0, 
                right: 0, 
                bottom: 0, 
                height: '100vh', 
                width: '100vw',
                maxHeight: '100vh',
                overflowY: 'auto'
              }}
            >
              {/* Header - Logo, Theme Toggle, Close */}
              <div className={`flex items-center justify-between px-6 py-6 border-b ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-600'
              }`}>
                {/* Logo */}
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#home')
                  }}
                  className="mobile-menu-item text-2xl font-bold heading-gradient"
                  style={{ animationDelay: '0.1s' }}
                >
                  Vijay.dev
                </a>
                
                {/* Theme Toggle & Close Button */}
                <div className="flex items-center space-x-4">
                  {/* Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    className={`mobile-menu-icon relative ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-600'
                    } p-3 rounded-full hover:bg-gray-600 transition-all duration-300 group`}
                    aria-label="Toggle theme"
                    style={{ animationDelay: '0.2s' }}
                  >
                    <div className="relative flex items-center justify-center">
                    {theme === 'light' ? (
                        <FaMoon className="text-white text-lg relative z-10 moon-rise" />
                    ) : (
                        <FaSun className="text-yellow-400 text-lg relative z-10 sun-glow" />
                    )}
                      {/* Glow effect for sun */}
                      {theme === 'dark' && (
                        <div className="absolute inset-0 rounded-full bg-yellow-400/30 blur-md animate-pulse"></div>
                      )}
                    </div>
                  </button>
                  
                  {/* Close Button */}
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className={`mobile-menu-icon ${
                      theme === 'dark' ? 'bg-gray-700' : 'bg-gray-600'
                    } p-3 rounded-full hover:bg-gray-600 transition-all duration-300`}
                    aria-label="Close menu"
                    style={{ animationDelay: '0.25s' }}
                  >
                    <FaTimes className="text-white text-xl" />
                  </button>
                </div>
              </div>

              {/* Navigation Links - Centered */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-8 px-6">
                {navItems.map((item, index) => {
                  const sectionId = item.href.replace('#', '')
                  const isActive = activeSection === sectionId
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault()
                        handleNavClick(item.href)
                      }}
                      className={`mobile-menu-item text-2xl font-bold transition-all duration-300 transform hover:scale-110 ${
                        isActive
                          ? 'text-white heading-gradient'
                          : 'text-gray-300 dark:text-gray-400 hover:text-white'
                      }`}
                      style={{
                        animationDelay: `${index * 0.08}s`
                      }}
                    >
                      {item.name}
                    </a>
                  )
                })}
              </div>

              {/* Footer - Social Icons */}
              <div className={`px-6 py-8 border-t ${
                theme === 'dark' ? 'border-gray-700' : 'border-gray-600'
              }`}>
                <div className="flex items-center justify-center space-x-6">
                  <a
                    href="https://github.com/vijay80050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-menu-icon text-white hover:text-primary-400 dark:hover:text-green-400 transition-all duration-300 transform hover:scale-110"
                    aria-label="GitHub"
                    style={{ animationDelay: '0.6s' }}
                  >
                    <FaGithub size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/vijay-kumar-702b921bb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mobile-menu-icon text-white hover:text-primary-400 dark:hover:text-green-400 transition-all duration-300 transform hover:scale-110"
                    aria-label="LinkedIn"
                    style={{ animationDelay: '0.7s' }}
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href="mailto:vijaykumar.cse002@gmail.com"
                    className="mobile-menu-icon text-white hover:text-primary-400 dark:hover:text-green-400 transition-all duration-300 transform hover:scale-110"
                    aria-label="Email"
                    style={{ animationDelay: '0.8s' }}
                  >
                    <FaEnvelope size={24} />
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar

