import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'GraphQL', 'REST APIs', 'Microservices']
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'DynamoDB', 'Elasticsearch']
    },
    {
      category: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'CI/CD', 'GitHub Actions']
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" ref={ref} className="section-container relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 gradient-text">
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-effect p-6 rounded-xl hover-glow"
            >
              <h3 className="text-xl font-bold text-accent-cyan mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-dark-bg border border-accent-cyan/30 rounded-lg text-gray-300 hover:bg-accent-cyan/10 hover:border-accent-cyan transition-all duration-300 text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
