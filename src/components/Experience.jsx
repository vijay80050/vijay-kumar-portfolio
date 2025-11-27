import { FaCalendarAlt, FaMapMarkerAlt, FaLaptop } from 'react-icons/fa'
import { 
  FaReact, 
  FaDatabase, 
  FaRobot, 
  FaChartLine, 
  FaPlug,
  FaBolt,
  FaCode
} from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const experiences = [
    {
      company: 'Jellyspace',
      position: 'Software Engineer',
      positionSuffix: '— Remote',
      location: 'Berlin, Germany (Remote)',
      period: 'September 2024 – Present',
      achievements: [
        {
          icon: FaReact,
          title: 'Frontend Development',
          description: (
            <>Improved platform usability and performance using <span className="font-semibold text-primary-600 dark:text-green-400">Angular</span>, while supporting backend data operations with <span className="font-semibold text-primary-600 dark:text-green-400">PostgreSQL</span>.</>
          )
        },
        {
          icon: FaRobot,
          title: 'AI Feature Integration',
          description: (
            <>Implemented AI-driven capabilities using LLMs (<span className="font-semibold text-primary-600 dark:text-green-400">OpenAI GPT</span>, <span className="font-semibold text-primary-600 dark:text-green-400">Azure OpenAI</span>, <span className="font-semibold text-primary-600 dark:text-green-400">Gemini</span>, <span className="font-semibold text-primary-600 dark:text-green-400">LLaMA</span>) through secure API authentication and optimized prompts.</>
          )
        },
        {
          icon: FaChartLine,
          title: 'Automation Workflows',
          description: (
            <>Developed <span className="font-semibold text-primary-600 dark:text-green-400">low-code/no-code workflows</span> enabling users to automate business processes with minimal technical effort.</>
          )
        },
        {
          icon: FaDatabase,
          title: 'AI-Powered Widgets',
          description: 'Built interactive widgets for automated summaries, chart generation, insights, and intelligent responses based on user inputs.'
        },
        {
          icon: FaChartLine,
          title: 'Supply Chain Analytics',
          description: (
            <>Created dashboards visualizing <span className="font-semibold text-primary-600 dark:text-green-400">Risks, Opportunities, and Threats (ROT)</span> through conversational data analysis and reporting.</>
          )
        },
        {
          icon: FaPlug,
          title: 'Third-Party Integrations',
          description: (
            <>Integrated external services including <span className="font-semibold text-primary-600 dark:text-green-400">Chart-img</span>, <span className="font-semibold text-primary-600 dark:text-green-400">Twelve Data</span>, <span className="font-semibold text-primary-600 dark:text-green-400">Alpha Vantage</span>, and <span className="font-semibold text-primary-600 dark:text-green-400">SMTP</span> for enhanced data visualization and communication.</>
          )
        },
        {
          icon: FaBolt,
          title: 'Quantum Computing Integration',
          description: (
            <>Implemented <span className="font-semibold text-primary-600 dark:text-green-400">quantum-compute widgets</span> and configuration, including <span className="font-semibold text-primary-600 dark:text-green-400">IBM Quantum</span> widgets and configuration, <span className="font-semibold text-primary-600 dark:text-green-400">IonQ compute</span> integration, and <span className="font-semibold text-primary-600 dark:text-green-400">PennyLane datasets</span> for advanced quantum computing capabilities.</>
          )
        },
        {
          icon: FaCode,
          title: 'Query Builder & Event Detection',
          description: (
            <>Implemented <span className="font-semibold text-primary-600 dark:text-green-400">Query Builder</span> widget functioning similar to <span className="font-semibold text-primary-600 dark:text-green-400">Swagger</span> and <span className="font-semibold text-primary-600 dark:text-green-400">UDL library</span> that fetches and processes <span className="font-semibold text-primary-600 dark:text-green-400">live data, prediction and detection </span><span className="font-semibold text-primary-600 dark:text-green-400">PEZ-WEZ events</span> based on <span className="font-semibold text-primary-600 dark:text-green-400">Rust</span> backend.</>
          )
        }
      ]
    }
  ]

  return (
    <section id="experience" className="section-container">
      <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          Building innovative, AI-driven, and scalable digital platforms
        </p>
      </div>
      
      <div className={`max-w-4xl mx-auto fade-in-up ${isVisible ? 'visible' : ''}`}>
        {experiences.map((exp, index) => (
          <div key={index} className="card mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold heading-gradient mb-2">
                  {exp.position} <span className="text-gray-600 dark:text-gray-400 font-normal text-xl md:text-2xl">{exp.positionSuffix}</span>
                </h3>
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <p className="text-lg md:text-xl text-primary-600 dark:text-green-400 font-semibold">
                    {exp.company}
                  </p>
                  <span className="text-gray-400 dark:text-gray-500">·</span>
                  <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                    <FaMapMarkerAlt className="text-sm" />
                    <span className="text-base md:text-lg">{exp.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-white bg-gray-100/50 dark:bg-gray-800/50 px-4 py-2 rounded-lg">
                <FaCalendarAlt />
                <span className="font-medium">{exp.period}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {exp.achievements.map((achievement, achIndex) => {
                const IconComponent = achievement.icon
                return (
                  <div
                    key={achIndex}
                    className="p-4 !bg-transparent border border-gray-200/30 dark:border-gray-800/30 rounded-lg hover:!bg-transparent transition-all duration-300"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary-100 dark:bg-green-900/30 rounded-lg flex-shrink-0">
                        <IconComponent className="text-primary-600 dark:text-green-400 text-lg" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-base">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {typeof achievement.description === 'string' ? achievement.description : achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience

