import { 
  FaPython, 
  FaLock, 
  FaTrain, 
  FaCommentDots,
  FaGithub,
  FaExternalLinkAlt
} from 'react-icons/fa'
import { 
  SiFlask, 
  SiDjango, 
  SiSqlite
} from 'react-icons/si'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const projects = [
    {
      title: 'Password Management System',
      description: 'A secure CLI-based password manager for storing, retrieving, and updating credentials with encryption and hashing techniques.',
      technologies: ['Python', 'CLI', 'Encryption', 'Hashing'],
      features: [
        'Secure credential storage and retrieval',
        'Data encryption and hashing',
        'Input validation and security best practices',
        'CLI-based user interface'
      ],
      icon: FaLock,
      color: 'bg-red-500',
      techIcons: [FaPython],
      githubUrl: null, // Add GitHub URL when available
      demoUrl: null // Add demo URL when available
    },
    {
      title: 'Railway Reservation System',
      description: 'Full-stack railway reservation platform with user registration, train search, booking, and complaint modules.',
      technologies: ['Python', 'Flask', 'REST API', 'HTML/CSS', 'SQLite'],
      features: [
        'User registration and authentication',
        'Train search and booking functionality',
        'Ticket cancellation system',
        'Complaint management module',
        'RESTful API design'
      ],
      icon: FaTrain,
      color: 'bg-blue-500',
      techIcons: [FaPython, SiFlask, SiSqlite],
      githubUrl: null, // Add GitHub URL when available
      demoUrl: null // Add demo URL when available
    },
    {
      title: 'Fake Product Review Detection & Sentiment Analysis',
      description: 'Django-based application analyzing product reviews using NLP to detect fake reviews and categorize sentiment levels.',
      technologies: ['Python', 'Django', 'TextBlob', 'NLTK', 'SQLite', 'Matplotlib', 'HTML/CSS', 'jQuery'],
      features: [
        'NLP-based sentiment analysis (7 levels)',
        'Fake review detection using pattern analysis',
        'Color-coded sentiment indicators',
        'User login and review management',
        'Product and order tracking',
        'Matplotlib visualization dashboards'
      ],
      icon: FaCommentDots,
      color: 'bg-green-500',
      techIcons: [FaPython, SiDjango, SiSqlite],
      githubUrl: null, // Add GitHub URL when available
      demoUrl: null // Add demo URL when available
    }
  ]

  return (
    <section id="projects" className="section-container dark:!bg-transparent">
      <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Showcasing my work in full-stack development, security, and AI/ML applications
        </p>
      </div>
      
      <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 fade-in-up ${isVisible ? 'visible' : ''}`}>
        {projects.map((project, index) => {
          const IconComponent = project.icon
          return (
            <div key={index} className="card group">
              <div className={`${project.color} text-white p-4 rounded-lg mb-4 inline-flex group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <IconComponent size={32} />
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold heading-gradient mb-3">
                {project.title}
              </h3>
              
              <p className="text-sm sm:text-base text-gray-600 dark:text-white mb-4">
                {project.description}
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featIndex) => (
                    <li key={featIndex} className="text-xs sm:text-sm text-gray-600 dark:text-white flex items-start group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-primary-600 dark:text-green-400 mr-2 group-hover:scale-125 transition-transform duration-300">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm sm:text-base">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 sm:px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-white rounded-full text-xs font-medium group-hover:scale-105 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                <div className="flex space-x-2">
                  {project.techIcons.map((TechIcon, iconIndex) => (
                    <TechIcon
                      key={iconIndex}
                      className="text-gray-400 dark:text-white text-lg sm:text-xl group-hover:scale-125 transition-transform duration-300"
                    />
                  ))}
                </div>
                <div className="ml-auto flex space-x-3">
                  {/* GitHub and Demo links - Add URLs when available */}
                  {project.githubUrl && (
                  <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    className="text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-green-400 transition-all duration-300 group-hover:scale-125"
                      aria-label={`View ${project.title} on GitHub`}
                  >
                    <FaGithub size={20} />
                  </a>
                  )}
                  {project.demoUrl && (
                  <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    className="text-gray-600 dark:text-white hover:text-primary-600 dark:hover:text-green-400 transition-all duration-300 group-hover:scale-125"
                      aria-label={`View ${project.title} live demo`}
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-gray-600 dark:text-white mb-4">
          More projects showcasing MERN stack development coming soon!
        </p>
        <a
          href="https://github.com/vijay80050"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center space-x-2"
        >
          <FaGithub />
          <span>View All Projects on GitHub</span>
        </a>
      </div>
    </section>
  )
}

export default Projects

