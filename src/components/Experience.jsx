import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const experiences = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'Tech Innovators Inc.',
      period: '2022 - Present',
      description: 'Led development of scalable web applications, mentored junior developers, and architected microservices infrastructure.',
      achievements: ['Reduced load time by 60%', 'Led team of 5 developers', 'Architected real-time features']
    },
    {
      role: 'Full-Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern web technologies and agile methodologies.',
      achievements: ['Delivered 10+ projects on time', 'Implemented CI/CD pipelines', 'Improved code coverage to 85%']
    },
    {
      role: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Contributed to frontend and backend development, learned industry best practices, and built strong foundation.',
      achievements: ['Built responsive UIs', 'Fixed critical bugs', 'Contributed to open source']
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="experience" ref={ref} className="section-container relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 gradient-text">
          Work Experience
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline */}
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-4 h-4 bg-accent-cyan rounded-full border-2 border-dark-bg"
                    whileHover={{ scale: 1.5 }}
                  />
                  {index < experiences.length - 1 && (
                    <div className="w-0.5 h-32 bg-gradient-to-b from-accent-cyan to-transparent mt-4" />
                  )}
                </div>

                <div className="pb-8 flex-1">
                  <motion.div
                    className="glass-effect p-6 rounded-xl hover-glow"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="text-accent-cyan text-sm font-medium">{exp.period}</span>
                    </div>
                    <p className="text-accent-purple font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="px-2 py-1 bg-dark-bg border border-dark-border/50 rounded text-xs text-gray-300"
                        >
                          ✓ {achievement}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
