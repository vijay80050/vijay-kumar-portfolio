const SkipToContent = () => {
  return (
    <a
      href="#home"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[300] focus:px-4 focus:py-2 focus:bg-primary-600 dark:focus:bg-green-500 focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-green-400 focus:ring-offset-2"
      onClick={(e) => {
        e.preventDefault()
        const element = document.querySelector('#home')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
          element.focus()
        }
      }}
    >
      Skip to main content
    </a>
  )
}

export default SkipToContent

