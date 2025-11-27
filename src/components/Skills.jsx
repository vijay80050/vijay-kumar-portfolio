import { 
  FaReact, 
  FaNode, 
  FaJs, 
  FaPython, 
  FaJava, 
  FaAws, 
  FaGitAlt,
  FaDocker,
  FaDatabase,
  FaCode
} from 'react-icons/fa'
import { 
  SiMongodb, 
  SiExpress, 
  SiPostgresql, 
  SiMysql, 
  SiTailwindcss, 
  SiBootstrap,
  SiTypescript,
  SiAngular,
  SiDjango,
  SiGooglecloud,
  SiRust,
  SiEthereum
} from 'react-icons/si'
import { FaBolt, FaServer, FaLink } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const skillCategories = [
    {
      title: 'Frontend',
      icon: FaCode,
      skills: [
        { name: 'React.js', icon: FaReact, percentage: 90, color: 'bg-blue-500' },
        { name: 'Angular', icon: SiAngular, percentage: 85, color: 'bg-red-500' },
        { name: 'JavaScript', icon: FaJs, percentage: 92, color: 'bg-yellow-500' },
        { name: 'TypeScript', icon: SiTypescript, percentage: 85, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, percentage: 88, color: 'bg-cyan-500' },
        { name: 'Bootstrap', icon: SiBootstrap, percentage: 80, color: 'bg-purple-500' },
        { name: 'HTML5/CSS3', icon: FaJs, percentage: 95, color: 'bg-orange-500' },
      ]
    },
    {
      title: 'Backend',
      icon: FaServer,
      skills: [
        { name: 'Node.js', icon: FaNode, percentage: 88, color: 'bg-green-600' },
        { name: 'Express.js', icon: SiExpress, percentage: 85, color: 'bg-green-500' },
        { name: 'Django', icon: SiDjango, percentage: 80, color: 'bg-green-700' },
        { name: 'REST APIs', icon: FaNode, percentage: 90, color: 'bg-blue-600' },
        { name: 'Python', icon: FaPython, percentage: 85, color: 'bg-yellow-400' },
      ]
    },
    {
      title: 'Databases',
      icon: FaDatabase,
      skills: [
        { name: 'MongoDB', icon: SiMongodb, percentage: 85, color: 'bg-green-500' },
        { name: 'PostgreSQL', icon: SiPostgresql, percentage: 80, color: 'bg-blue-700' },
        { name: 'MySQL', icon: SiMysql, percentage: 75, color: 'bg-blue-600' },
        { name: 'SQLite', icon: FaDatabase, percentage: 70, color: 'bg-gray-600' },
      ]
    },
    {
      title: 'Languages',
      icon: FaCode,
      skills: [
        { name: 'Python', icon: FaPython, percentage: 85, color: 'bg-yellow-400' },
        { name: 'Java', icon: FaJava, percentage: 80, color: 'bg-orange-500' },
        { name: 'JavaScript', icon: FaJs, percentage: 92, color: 'bg-yellow-500' },
        { name: 'TypeScript', icon: SiTypescript, percentage: 85, color: 'bg-blue-600' },
        { name: 'C/C++', icon: FaJs, percentage: 75, color: 'bg-blue-800' },
        { name: 'Rust', icon: SiRust, percentage: 70, color: 'bg-orange-600' },
        { name: 'SQL', icon: FaDatabase, percentage: 80, color: 'bg-gray-700' },
      ]
    },
    {
      title: 'Blockchain',
      icon: FaLink,
      skills: [
        { name: 'Blockchain', icon: SiEthereum, percentage: 75, color: 'bg-purple-600' },
        { name: 'Hedera', icon: FaLink, percentage: 70, color: 'bg-indigo-600' },
        { name: 'Hyperledger Fabric', icon: FaLink, percentage: 70, color: 'bg-blue-700' },
      ]
    },
    {
      title: 'Tools & Others',
      icon: FaBolt,
      skills: [
        { name: 'Git', icon: FaGitAlt, percentage: 90, color: 'bg-orange-600' },
        { name: 'AWS', icon: FaAws, percentage: 85, color: 'bg-orange-500' },
        { name: 'Google Cloud', icon: SiGooglecloud, percentage: 80, color: 'bg-blue-500' },
        { name: 'Docker', icon: FaDocker, percentage: 85, color: 'bg-blue-500' },
        { name: 'VS Code', icon: FaCode, percentage: 95, color: 'bg-blue-600' },
      ]
    },
  ]

  return (
    <section id="skills" className="section-container dark:!bg-transparent">
      <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">
          Tech <span className="bg-gradient-to-r from-green-500 to-green-400 bg-clip-text text-transparent dark:from-green-400 dark:to-green-300">Stack</span>
        </h2>
        <p className="section-subtitle">
          A comprehensive overview of the technologies and tools I use to build modern, scalable, and performant applications.
        </p>
      </div>
      
      <div className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 fade-in-up ${isVisible ? 'visible' : ''}`}>
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon
          return (
            <div key={index} className="skill-card group">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <IconComponent className="text-white text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold heading-gradient">{category.title}</h3>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const SkillIcon = skill.icon
                  return (
                    <div key={skillIndex} className="transition-all duration-300 group-hover:translate-x-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <SkillIcon className={`${skill.color.replace('bg-', 'text-')} text-base sm:text-lg group-hover:scale-125 transition-transform duration-300`} />
                          <span className="text-gray-800 dark:text-white font-medium text-xs sm:text-sm">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-gray-600 dark:text-white text-xs font-semibold">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200/30 dark:bg-gray-800/30 rounded-full h-2 overflow-hidden">
                        <div
                          className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg`}
                          style={{ width: `${skill.percentage}%` }}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      
      <div className="mt-12 text-center">
        <div className="inline-block px-6 py-3 !bg-transparent border border-primary-300/30 dark:border-green-400/30 rounded-full">
          <p className="text-gray-700 dark:text-white font-semibold">
            <span className="heading-gradient">MERN Stack</span> Specialist | 
            Full Stack Development | 
            DevOps & Cloud Solutions
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
