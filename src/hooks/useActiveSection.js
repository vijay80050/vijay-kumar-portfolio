import { useState, useEffect } from 'react'

export const useActiveSection = (navItems) => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => {
        const element = document.querySelector(item.href)
        if (!element) return null
        return {
          id: item.href.replace('#', ''),
          element,
          top: element.offsetTop,
          bottom: element.offsetTop + element.offsetHeight
        }
      }).filter(Boolean)

      const scrollPosition = window.scrollY + 200 // Offset for navbar height + some padding

      // If at the very top, set home as active
      if (window.scrollY < 50) {
        setActiveSection('home')
        return
      }

      // Find the section that's currently most visible in viewport
      let activeId = 'home'
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (scrollPosition >= section.top - 100) {
          activeId = section.id
          break
        }
      }

      setActiveSection(activeId)
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', throttledScroll, { passive: true })
    handleScroll() // Call once to set initial active section

    return () => window.removeEventListener('scroll', throttledScroll)
  }, [navItems])

  return activeSection
}

