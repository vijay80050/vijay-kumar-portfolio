import { useEffect } from 'react'
import { PORTFOLIO_CONFIG } from '../config/constants'

// Google Analytics hook
export const useAnalytics = () => {
  useEffect(() => {
    const gaId = PORTFOLIO_CONFIG.analytics.googleAnalyticsId
    
    if (!gaId) {
      console.log('Google Analytics ID not configured. Add your GA4 tracking ID in src/config/constants.js')
      return
    }

    // Load Google Analytics script
    const script1 = document.createElement('script')
    script1.async = true
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${gaId}', {
        // Enhanced mobile and Android tracking
        send_page_view: true,
        // Track device information
        custom_map: {
          'device_type': 'device_type',
          'platform': 'platform'
        }
      });
      
      // Track device type on page load
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isAndroid = /Android/i.test(navigator.userAgent);
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      
      if (isAndroid) {
        gtag('event', 'android_visit', {
          event_category: 'Device',
          event_label: 'Android Device',
          platform: 'Android'
        });
      }
      
      if (isMobile) {
        gtag('set', { 'device_type': 'Mobile' });
        gtag('event', 'mobile_visit', {
          event_category: 'Device',
          event_label: 'Mobile Device'
        });
      } else {
        gtag('set', { 'device_type': 'Desktop' });
      }
    `
    document.head.appendChild(script2)

    return () => {
      // Cleanup if needed
    }
  }, [])
}

// Track page views
export const trackPageView = (path) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', PORTFOLIO_CONFIG.analytics.googleAnalyticsId, {
      page_path: path,
    })
  }
}

// Track events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

