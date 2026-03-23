import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const projects = [
    {
      title: 'Plant E-commerce Platform (Production)',
      description:
        'Engineered a production-grade full-stack e-commerce platform deployed on AWS with EC2, Nginx, PM2, MongoDB Atlas, and S3. Features include admin dashboard, bulk inventory management, and scalable cloud architecture.',
      tags: ['React', 'Node.js', 'MongoDB Atlas', 'AWS', 'Nginx', 'PM2', 'S3'],
      link: 'https://github.com/taimoor-ai/plant-website',
      github: 'https://github.com/taimoor-ai/plant-website',
      preview: (
        <div className="bg-neutral-900 w-full h-full flex flex-col gap-2 p-4">
          <div className="flex gap-2">
            <div className="flex-1 h-10 bg-neutral-700 rounded-lg" />
            <div className="flex-1 h-10 bg-white rounded-lg" />
          </div>
          <div className="flex gap-1.5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-1 h-8 bg-neutral-600 rounded" />
            ))}
          </div>
          <div className="h-8 bg-neutral-500 rounded-md" />
          <div className="flex gap-1.5 mt-auto">
            {[1, 2].map((i) => (
              <div key={i} className="flex-1 h-6 bg-neutral-700 rounded" />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'Developed a real-time messaging system using WebSockets with event-driven architecture, enabling low-latency communication and efficient state synchronization across clients.',
      tags: ['ReactNative', 'Node.js', 'Socket.io','MongoDb', 'WebSockets'],
      link: 'https://github.com/taimoor-ai/whatsappClone',
      github: 'https://github.com/taimoor-ai/whatsappClone',
      preview: (
        <div className="bg-black w-full h-full flex flex-col gap-2 p-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white" />
            <span className="text-white text-[10px] font-semibold tracking-widest uppercase">Online Chat</span>
          </div>
          <div className="flex-1 bg-neutral-900 rounded-lg p-3 flex flex-col gap-2">
            <div className="h-1.5 bg-neutral-600 rounded-full w-4/5" />
            <div className="h-1.5 bg-white rounded-full w-1/2 self-end" />
            <div className="h-1.5 bg-neutral-600 rounded-full w-3/5" />
            <div className="h-1.5 bg-white rounded-full w-2/5 self-end" />
          </div>
          <div className="h-7 bg-neutral-800 border border-neutral-700 rounded-lg flex items-center px-3 gap-2">
            <div className="flex-1 h-1.5 bg-neutral-600 rounded-full" />
            <div className="w-4 h-4 rounded-full bg-white flex-shrink-0" />
          </div>
        </div>
      ),
    },
    {
      title: 'Distributed Database System',
      description:
        'Simulated a multi-region distributed database with intelligent query routing and automatic failover mechanism to ensure high availability and fault tolerance.',
      tags: ['Python', 'MySQL', 'Distributed Systems'],
      link: '#',
      github: '#',
      preview: (
        <div className="bg-neutral-900 w-full h-full flex flex-col gap-3 p-4">
          <div className="flex gap-2">
            <div className="flex-1 h-8 bg-white rounded-md flex items-center justify-center">
              <span className="text-black text-[10px] font-bold">Region A</span>
            </div>
            <div className="flex-1 h-8 bg-neutral-400 rounded-md flex items-center justify-center">
              <span className="text-black text-[10px] font-bold">Region B</span>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-px h-4 bg-neutral-500" />
          </div>
          <div className="h-10 bg-neutral-800 rounded-lg border border-neutral-700 flex items-center justify-center">
            <span className="text-neutral-400 text-[10px] tracking-wider">Query Router</span>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex-1 h-6 bg-neutral-700 rounded border border-neutral-600" />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: 'AI Plant Detection System',
      description:
        'Built an AI-powered system that identifies plant species from images and returns detailed information, integrating machine learning with a full-stack web interface.',
      tags: ['Java', 'Machine Learning', 'Xml','Kotlin', 'Node.js'],
      link: 'https://github.com/taimoor-ai/plantDetectionApp',
      github: 'https://github.com/taimoor-ai/plantDetectionApp',
      preview: (
        <div className="bg-black w-full h-full flex flex-col gap-3 p-4">
          <div className="h-12 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
            <span className="text-white/70 text-[10px] tracking-wider">Scanning plant...</span>
          </div>
          <div className="flex-1 bg-neutral-900 rounded-lg p-3 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
              <div className="h-1.5 bg-white rounded-full w-3/5" />
            </div>
            <div className="h-1.5 bg-neutral-600 rounded-full w-2/5" />
            <div className="h-1.5 bg-neutral-700 rounded-full w-4/5" />
            <div className="h-1.5 bg-neutral-700 rounded-full w-3/5" />
          </div>
        </div>
      ),
    },
    {
      title: 'Authentication System with OTP',
      description:
        'Implemented a secure authentication system with email-based OTP verification, token-based sessions, and protected routes for production-level security.',
      tags: ['Node.js', 'Express', 'MongoDB', 'Auth'],
      link: 'https://github.com/taimoor-ai/textRecognitionAppModel',
      github: 'https://github.com/taimoor-ai/textRecognitionAppModel',
      preview: (
        <div className="bg-neutral-950 w-full h-full flex flex-col gap-3 p-4 items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
            <div className="w-5 h-5 rounded-full bg-white/80" />
          </div>
          <div className="w-full h-8 bg-neutral-800 rounded-md border border-neutral-700" />
          <div className="flex gap-2 w-full">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex-1 h-8 bg-neutral-800 rounded border border-neutral-600 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-neutral-400" />
              </div>
            ))}
          </div>
          <div className="w-full h-8 bg-white rounded-md flex items-center justify-center">
            <span className="text-black text-[10px] font-bold tracking-widest uppercase">Verify</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Cricket Dashboard Backend',
      description:
        'Designed a scalable REST API backend for managing and serving cricket data with efficient filtering and structured endpoints for dashboard integration.',
      tags: ['Node.js', 'Express', 'MongoDB','ReactJs'],
      link: 'https://github.com/taimoor-ai/cricketDashboard',
      github: 'https://github.com/taimoor-ai/cricketDashboard',
      preview: (
        <div className="bg-neutral-900 w-full h-full flex flex-col gap-3 p-4">
          <div className="h-8 bg-white rounded-md flex items-center px-3">
            <span className="text-black text-[10px] font-bold tracking-wider">Cricket API</span>
          </div>
          <div className="flex gap-2">
            {[
              { label: 'GET', cls: 'bg-white/10 text-white border-white/20' },
              { label: 'POST', cls: 'bg-white/5 text-neutral-300 border-white/10' },
              { label: 'PUT', cls: 'bg-white/5 text-neutral-400 border-white/10' },
            ].map((m) => (
              <div key={m.label} className={`flex-1 h-6 rounded flex items-center justify-center text-[10px] font-bold border ${m.cls}`}>
                {m.label}
              </div>
            ))}
          </div>
          <div className="flex-1 bg-neutral-800 rounded-lg p-2 flex flex-col gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-2 items-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                <div className="flex-1 h-1.5 bg-neutral-600 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <section id="projects" ref={ref} className="bg-[#1a1a1a] min-h-screen px-5 py-20">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap');
        #projects { font-family: 'Sora', 'Segoe UI', sans-serif; }
      `}</style>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="max-w-[1100px] mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/50 text-[11px] font-semibold tracking-[3px] uppercase mb-4">
            Portfolio
          </span>
          <h2 className="text-[clamp(28px,5vw,42px)] font-bold tracking-tight leading-tight m-0">
            <span className="text-white">Featured </span>
            <span className="text-white/35">Projects</span>
          </h2>
          <p className="text-white/30 text-sm mt-2.5 max-w-[420px] leading-relaxed">
            A curated selection of work spanning full-stack apps, AI tools, and interactive experiences.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants} className="h-full">
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group bg-neutral-950 border border-white/[0.07] rounded-2xl overflow-hidden flex flex-col h-full
                           hover:border-white/20 hover:shadow-[0_20px_60px_rgba(255,255,255,0.03)]
                           transition-all duration-300 cursor-pointer"
              >
                {/* Preview */}
                <div className="relative h-44 overflow-hidden">
                  <div className="w-full h-full">{project.preview}</div>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-all duration-300 pointer-events-none" />
                </div>

                {/* Accent line */}
                <div className="h-px bg-white/5 group-hover:bg-white/15 transition-colors duration-300" />

                {/* Body */}
                <div className="p-5 flex flex-col flex-1 gap-2.5">
                  <h3 className="text-[15px] font-bold text-white/80 group-hover:text-white transition-colors duration-200 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-[12.5px] text-white/30 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
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

                  {/* Divider */}
                  <div className="h-px bg-white/5 my-1" />

                  {/* Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg
                                 bg-white/[0.04] border border-white/[0.08] text-white/45 text-[11px] font-semibold
                                 no-underline hover:bg-white/10 hover:border-white/20 hover:text-white/75
                                 transition-all duration-200"
                    >
                      <Github size={12} />
                      GitHub
                    </a>
                    <a
                      href={project.link}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg
                                 bg-white text-black text-[11px] font-bold
                                 no-underline hover:bg-neutral-200 hover:scale-[1.02]
                                 transition-all duration-200"
                    >
                      <ExternalLink size={12} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}