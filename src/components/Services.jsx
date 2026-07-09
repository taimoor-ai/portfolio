import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Code2,
  Cloud,
  Sparkles,
  Server,
  LayoutDashboard,
  Database,
} from 'lucide-react'

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.15 })

  const services = [
    {
      icon: Code2,
      title: 'Full-Stack Web Development',
      description:
        'End-to-end MERN stack applications — from database schema and REST APIs to polished, responsive frontends built with React and Tailwind.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      icon: Cloud,
      title: 'Cloud Deployment & DevOps',
      description:
        'Production deployments on AWS with EC2, Nginx, PM2, and S3 — configured for uptime, security, and scale, not just a demo that runs locally.',
      tags: ['AWS', 'EC2', 'Nginx', 'PM2', 'Docker'],
    },
    {
      icon: Sparkles,
      title: 'AI & RAG Integration',
      description:
        'LLM-powered features using vector search and retrieval-augmented generation — from prompt engineering to production-ready AI pipelines.',
      tags: ['LLM APIs', 'Vector Search', 'RAG', 'Prompt Engineering'],
    },
    {
      icon: Server,
      title: 'API & Backend Architecture',
      description:
        'Secure, well-structured REST APIs with authentication, validation, and rate limiting — built to handle real traffic, not just happy paths.',
      tags: ['REST APIs', 'Auth', 'Express', 'Security'],
    },
    {
      icon: LayoutDashboard,
      title: 'UI/UX Engineering',
      description:
        'Modern, animated interfaces with attention to micro-interactions and performance, using React, Tailwind CSS, and Framer Motion.',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      icon: Database,
      title: 'Database Design & Optimization',
      description:
        'Efficient schema design and query optimization for MongoDB and SQL databases, built around how the application actually reads and writes data.',
      tags: ['MongoDB', 'MySQL', 'Indexing', 'Schema Design'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="services" ref={ref} className="bg-[#1a1a1a] min-h-screen px-5 py-20">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap');
        #services { font-family: 'Sora', 'Segoe UI', sans-serif; }
      `}</style>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        exit="hidden"
        className="max-w-[1100px] mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/50 text-[11px] font-semibold tracking-[3px] uppercase mb-4">
            What I Offer
          </span>
          <h2 className="text-[clamp(28px,5vw,42px)] font-bold tracking-tight leading-tight m-0">
            <span className="text-white">Services </span>
            <span className="text-white/35">I Provide</span>
          </h2>
          <p className="text-white/30 text-sm mt-2.5 max-w-[460px] leading-relaxed">
            From idea to production — full-stack development, cloud deployment, and AI integration built for real users.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={index} variants={itemVariants} className="h-full">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-neutral-950 border border-white/[0.07] rounded-2xl overflow-hidden flex flex-col h-full p-6 gap-4
                             hover:border-white/20 hover:shadow-[0_20px_60px_rgba(255,255,255,0.03)]
                             transition-all duration-300"
                >
                  {/* Icon */}
                  <div
                    className="w-11 h-11 flex items-center justify-center rounded-xl
                               bg-white/[0.04] border border-white/[0.08] text-white/60
                               group-hover:bg-white group-hover:text-black group-hover:border-white
                               transition-all duration-300"
                  >
                    <Icon size={18} />
                  </div>

                  {/* Body */}
                  <div className="flex flex-col gap-2.5 flex-1">
                    <h3 className="text-[16px] font-bold text-white/85 group-hover:text-white transition-colors duration-200 leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-[12.5px] text-white/35 leading-relaxed flex-1">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08]
                                     text-white/45 text-[10.5px] font-medium tracking-[0.3px]
                                     group-hover:border-white/20 group-hover:text-white/65
                                     transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}