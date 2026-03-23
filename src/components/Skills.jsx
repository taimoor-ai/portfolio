import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React','ReactNative', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Next.js']
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="skills" ref={ref} className="bg-black text-white py-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-6xl mx-auto"
      >
        <motion.h2 
          variants={itemVariants} 
          className="text-4xl font-bold mb-12 text-white"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-sm hover:border-white/30 transition"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {category.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-black border border-white/20 rounded-lg text-gray-300 hover:bg-white hover:text-black transition-all duration-300 text-sm font-medium"
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