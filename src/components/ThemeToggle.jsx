import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 !bg-transparent border border-gray-300/30 dark:border-green-400/30 backdrop-blur-none p-4 rounded-full !shadow-none hover:!shadow-none transition-all duration-300 hover:scale-110 group"
      aria-label="Toggle theme"
    >
      <div className="relative w-8 h-8 flex items-center justify-center">
        {theme === 'light' ? (
          <FaMoon 
            className="text-gray-700 dark:text-white text-2xl group-hover:rotate-12 transition-all duration-300" 
          />
        ) : (
          <FaSun 
            className="text-yellow-400 text-2xl group-hover:rotate-180 transition-all duration-300" 
          />
        )}
      </div>
      <span className="absolute -top-10 right-0 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </span>
    </button>
  )
}

export default ThemeToggle

