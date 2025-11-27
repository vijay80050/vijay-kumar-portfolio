import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <section id="about" className="section-container">
      <div ref={ref} className={`max-w-4xl mx-auto fade-in-up ${isVisible ? 'visible' : ''}`}>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Passionate Software Engineer focused on building scalable, high-performance web applications
        </p>
        
        <div className="prose prose-lg max-w-none text-gray-800 dark:text-white space-y-4">
          <p>
            I'm a passionate <span className="font-semibold text-primary-600 dark:text-green-400">Software Engineer</span> focused on building <span className="font-semibold text-primary-600 dark:text-green-400">scalable, high-performance</span> web applications using modern technologies. I specialize in <span className="font-semibold text-primary-600 dark:text-green-400">React</span>, <span className="font-semibold text-primary-600 dark:text-green-400">Node.js</span>, and crafting <span className="font-semibold text-primary-600 dark:text-green-400">intuitive, responsive</span> user experiences.
          </p>
          
          <p>
            I currently work <span className="font-semibold text-primary-600 dark:text-green-400">remotely</span> for <span className="font-semibold text-primary-600 dark:text-green-400">Jellyspace</span>, a Berlin, Germany–based company, where I contribute to developing innovative digital platforms and delivering impactful user-centric solutions. With expertise in full-stack development—particularly the <span className="font-semibold text-primary-600 dark:text-green-400">MERN stack</span> (<span className="font-semibold text-primary-600 dark:text-green-400">MongoDB</span>, <span className="font-semibold text-primary-600 dark:text-green-400">Express.js</span>, <span className="font-semibold text-primary-600 dark:text-green-400">React.js</span>, <span className="font-semibold text-primary-600 dark:text-green-400">Node.js</span>)—I bring <span className="font-semibold text-primary-600 dark:text-green-400">end-to-end product thinking</span> to every project.
          </p>
          
          <p>
            My experience includes building dynamic <span className="font-semibold text-primary-600 dark:text-green-400">React</span> interfaces, developing <span className="font-semibold text-primary-600 dark:text-green-400">secure and efficient</span> backend services with <span className="font-semibold text-primary-600 dark:text-green-400">Node.js</span> and <span className="font-semibold text-primary-600 dark:text-green-400">Express.js</span>, and managing data using <span className="font-semibold text-primary-600 dark:text-green-400">MongoDB</span> and <span className="font-semibold text-primary-600 dark:text-green-400">PostgreSQL</span>. I also work with <span className="font-semibold text-primary-600 dark:text-green-400">DevOps</span> practices and cloud platforms such as <span className="font-semibold text-primary-600 dark:text-green-400">AWS</span> and <span className="font-semibold text-primary-600 dark:text-green-400">Google Cloud</span> to ensure <span className="font-semibold text-primary-600 dark:text-green-400">reliable deployments</span> and <span className="font-semibold text-primary-600 dark:text-green-400">scalable infrastructure</span>.
          </p>
          
          <p>
            I've integrated <span className="font-semibold text-primary-600 dark:text-green-400">AI-powered features</span> using LLMs like <span className="font-semibold text-primary-600 dark:text-green-400">OpenAI GPT</span>, <span className="font-semibold text-primary-600 dark:text-green-400">Azure OpenAI</span>, <span className="font-semibold text-primary-600 dark:text-green-400">Gemini</span>, and <span className="font-semibold text-primary-600 dark:text-green-400">LLaMA</span>, developed <span className="font-semibold text-primary-600 dark:text-green-400">low-code/no-code automation workflows</span>, and created <span className="font-semibold text-primary-600 dark:text-green-400">analytics dashboards</span> for better decision-making. <span className="font-semibold text-primary-600 dark:text-green-400">Clean architecture</span>, <span className="font-semibold text-primary-600 dark:text-green-400">maintainable code</span>, and <span className="font-semibold text-primary-600 dark:text-green-400">continuous improvement</span> are core to my engineering approach.
          </p>
          
          <p>
            Outside of work, I enjoy exploring <span className="font-semibold text-primary-600 dark:text-green-400">emerging technologies</span>, contributing to <span className="font-semibold text-primary-600 dark:text-green-400">open-source projects</span>, and continually expanding my knowledge to stay ahead in the ever-evolving tech landscape.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About

