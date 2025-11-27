import { FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt, FaAward, FaUsers, FaShieldAlt, FaCloud, FaExternalLinkAlt } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Education = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science Engineering',
      institution: 'ABES Institute Of Technology',
      location: 'Ghaziabad, Uttar Pradesh',
      period: '2020 - 2024',
      description: 'Completed B.Tech in Computer Science Engineering with a focus on software development, algorithms, and system design.'
    }
  ]

  return (
    <section id="education" className="section-container">
      <div ref={ref} className={`fade-in-up ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">Education & Credentials</h2>
        <p className="section-subtitle">
          Academic background and continuous learning journey
        </p>
      </div>
      
      <div className={`max-w-4xl mx-auto px-4 sm:px-0 fade-in-up ${isVisible ? 'visible' : ''}`}>
        {/* Education */}
        {education.map((edu, index) => (
          <div key={index} className="card relative pl-12 sm:pl-12 overflow-visible mb-8">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 dark:bg-green-400 rounded-full"></div>
            <div className="absolute left-0 top-6 -ml-6 z-10">
              <div className="bg-primary-600 dark:bg-green-500 text-white p-3 rounded-full shadow-lg">
                <FaGraduationCap size={24} />
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-2xl font-bold heading-gradient mb-1">
                {edu.degree}
              </h3>
              <p className="text-xl text-primary-600 dark:text-green-400 font-semibold mb-2">
                {edu.field}
              </p>
              <p className="text-lg text-gray-700 dark:text-white font-medium mb-3">
                {edu.institution}
              </p>
            </div>
            
            <div className="space-y-2 mb-4">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-white">
                <FaMapMarkerAlt />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-white">
                <FaCalendarAlt />
                <span>{edu.period}</span>
              </div>
            </div>
            
            <p className="text-gray-600 dark:text-white">
              {edu.description}
            </p>
          </div>
        ))}

        {/* Achievements & Credentials */}
        <div className="mt-12">
          <h3 className="text-2xl md:text-3xl font-bold heading-gradient mb-6 text-center">
            Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="card group hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-green-500 rounded-full mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                  GDSC Member
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  <span className="font-semibold text-primary-600 dark:text-green-400">ABESIT</span>
                </p>
              </div>
            </div>

            <div className="card group hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <FaCloud className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                  Google Cloud Facilitator
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  Achieved <span className="font-semibold text-primary-600 dark:text-green-400">Third Milestone</span> in Google Cloud Facilitator Program
                </p>
                <div className="w-full space-y-2 mt-2">
                  <a 
                    href="https://www.cloudskillsboost.google/public_profiles/a6b9609b-8be3-4b19-919d-711b6484a54a/badges/1671067?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm text-primary-600 dark:text-green-400 hover:text-primary-700 dark:hover:text-green-300 transition-colors duration-200"
                  >
                    <span>Learn to Earn Cloud Security Challenge: Level 1</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                  <a 
                    href="https://www.cloudskillsboost.google/public_profiles/a6b9609b-8be3-4b19-919d-711b6484a54a/badges/1648485?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm text-primary-600 dark:text-green-400 hover:text-primary-700 dark:hover:text-green-300 transition-colors duration-200"
                  >
                    <span>Learn to Earn Cloud Security Challenge: Level 2</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                  <a 
                    href="https://www.cloudskillsboost.google/public_profiles/a6b9609b-8be3-4b19-919d-711b6484a54a/badges/1650055?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm text-primary-600 dark:text-green-400 hover:text-primary-700 dark:hover:text-green-300 transition-colors duration-200"
                  >
                    <span>Learn to Earn Cloud Security Challenge: Level 3</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            </div>

            <div className="card group hover:scale-105 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-lg">
                  Cybersecurity Certificate
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                  From <span className="font-semibold text-primary-600 dark:text-green-400">Indian Institute of Technology, Kanpur</span>
                </p>
                <div className="w-full mt-2">
                  <a 
                    href="https://drive.google.com/file/d/10hv8tqX6ukRqawBOhZbv5ftsEC5hh1Ec/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm text-primary-600 dark:text-green-400 hover:text-primary-700 dark:hover:text-green-300 transition-colors duration-200"
                  >
                    <span>View Certificate</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

