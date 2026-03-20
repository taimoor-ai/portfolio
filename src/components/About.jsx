import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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
    <section id="about" ref={ref} className="section-container relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-12 gradient-text">
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience building web applications that users love. My journey in tech started with a curiosity about how things work, and it evolved into a career dedicated to creating exceptional digital experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in modern web technologies, with deep expertise in React, Node.js, and cloud platforms. I'm committed to writing clean, maintainable code and building applications that are not just functional but also a joy to use.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not coding, I'm exploring new technologies, contributing to open source, or sharing my knowledge with the community. I believe in continuous learning and staying at the forefront of web development.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="glass-effect p-8 rounded-xl hover-glow"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-accent-cyan font-bold mb-2">Education</h3>
                <p className="text-gray-300">B.S. Computer Science</p>
                <p className="text-gray-400 text-sm">Tech University, 2019</p>
              </div>
              <div>
                <h3 className="text-accent-cyan font-bold mb-2">Experience</h3>
                <p className="text-gray-300">5+ Years in Full-Stack Development</p>
                <p className="text-gray-400 text-sm">Startups & Tech Companies</p>
              </div>
              <div>
                <h3 className="text-accent-cyan font-bold mb-2">Focus</h3>
                <p className="text-gray-300">Web Applications, Performance, UX</p>
                <p className="text-gray-400 text-sm">Modern JavaScript Ecosystem</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
