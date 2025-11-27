import { useState, useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react'
import { ThemeProvider } from './context/ThemeContext'
import { useAnalytics } from './hooks/useAnalytics'
import ErrorBoundary from './components/ErrorBoundary'
import SkipToContent from './components/SkipToContent'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AnimatedBackground from './components/AnimatedBackground'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Initialize Analytics
  useAnalytics()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <ErrorBoundary>
    <ThemeProvider>
      <div className="min-h-screen relative">
          <SkipToContent />
          <ScrollProgress />
        <AnimatedBackground />
        <div className="relative z-10">
          <Navbar isScrolled={isScrolled} />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </div>
          <BackToTop />
      </div>
      <Analytics />
    </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App

