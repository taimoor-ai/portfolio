import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#',
      gradient: 'from-accent-cyan to-blue-500'
    },
    {
      title: 'AI Content Assistant',
      description: 'AI-powered content generation tool using modern LLMs, real-time streaming, and collaborative editing features.',
      tags: ['React', 'OpenAI API', 'Express', 'PostgreSQL'],
      link: '#',
      github: '#',
      gradient: 'from-accent-purple to-pink-500'
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Interactive analytics dashboard with live data visualization, custom charts, and performance monitoring.',
      tags: ['React', 'WebSocket', 'D3.js', 'Node.js'],
      link: '#',
      github: '#',
      gradient: 'from-accent-pink to-red-500'
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="projects" ref={ref} className="section-container relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="glass-effect p-6 rounded-xl hover-glow h-full flex flex-col">
                {/* Gradient Line */}
                <div className={`h-1 w-12 bg-gradient-to-r ${project.gradient} rounded-full mb-4`} />

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-dark-bg border border-dark-border/50 rounded text-xs text-accent-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-dark-border/50">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.1 }}
                    className="text-accent-cyan hover:text-accent-pink transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    className="text-gray-400 hover:text-accent-cyan transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
