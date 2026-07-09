import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, X } from 'lucide-react'

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      title: 'Plant E-commerce Platform (Production)',
      description:
        'Engineered a production-grade full-stack e-commerce platform deployed on AWS with EC2, Nginx, PM2, MongoDB Atlas, and S3. Features include admin dashboard, bulk inventory management, and scalable cloud architecture.',
      tags: ['React', 'Node.js', 'MongoDB Atlas', 'AWS', 'Nginx', 'PM2', 'S3'],
      link: 'https://github.com/taimoor-ai/plant-website',
      github: 'https://github.com/taimoor-ai/plant-website',
      image: '/projects/plantify.png',
    },
    {
      title: 'SearchSphere – Web Search Engine',
      description:
        'Developed a production-inspired web search engine implementing web crawling, inverted and positional indexing, BM25 relevance ranking, PageRank, Boolean and phrase search, autocomplete, spell correction, synonym expansion, and asynchronous worker-based indexing',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'Search Engine', 'BM25', 'PageRank'],
      link: 'https://github.com/taimoor-ai/SearchEngine',
      github: 'https://github.com/taimoor-ai/SearchEngine',
      image: '/projects/searchSphere.png',
    },
    {
      title: 'Real-Time Chat Application',
      description:
        'Developed a real-time messaging system using WebSockets with event-driven architecture, enabling low-latency communication and efficient state synchronization across clients.',
      tags: ['ReactNative', 'Node.js', 'Socket.io', 'MongoDb', 'WebSockets'],
      link: 'https://github.com/taimoor-ai/whatsappClone',
      github: 'https://github.com/taimoor-ai/whatsappClone',
      image: '/projects/chatApp.png',
    },
    {
      title: 'Distributed Database System',
      description:
        'Simulated a multi-region distributed database with intelligent query routing and automatic failover mechanism to ensure high availability and fault tolerance.',
      tags: ['Python', 'MySQL', 'Distributed Systems'],
      link: '#',
      github: '#',
      image: '/projects/distributedDatabase.png',
    },
    {
      title: 'AI Plant Detection System',
      description:
        'Built an AI-powered system that identifies plant species from images and returns detailed information, integrating machine learning with a full-stack web interface.',
      tags: ['Java', 'Machine Learning', 'Xml', 'Kotlin', 'Node.js'],
      link: 'https://github.com/taimoor-ai/plantDetectionApp',
      github: 'https://github.com/taimoor-ai/plantDetectionApp',
      image: '/projects/plantIdenification.png',
    },
    {
      title: 'Authentication System with OTP',
      description:
        'Implemented a secure authentication system with email-based OTP verification, token-based sessions, and protected routes for production-level security.',
      tags: ['Node.js', 'Express', 'MongoDB', 'Auth'],
      link: 'https://github.com/taimoor-ai/textRecognitionAppModel',
      github: 'https://github.com/taimoor-ai/textRecognitionAppModel',
      image: '/projects/otp.png',
    },
    {
      title: 'Cricket Dashboard Backend',
      description:
        'Designed a scalable REST API backend for managing and serving cricket data with efficient filtering and structured endpoints for dashboard integration.',
      tags: ['Node.js', 'Express', 'MongoDB', 'ReactJs'],
      link: 'https://github.com/taimoor-ai/cricketDashboard',
      github: 'https://github.com/taimoor-ai/cricketDashboard',
      image: '/projects/cricketDashboard.png',
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

  // Stop link clicks from bubbling up and opening the modal
  const handleLinkClick = (e) => {
    e.stopPropagation()
  }

  return (
    <section id="projects" ref={ref} className="bg-[#1a1a1a] min-h-screen px-5 py-20">
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap');
        #projects { font-family: 'Sora', 'Segoe UI', sans-serif; }

        /* Custom scrollbar for modal */
        .project-modal-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .project-modal-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .project-modal-scroll::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 10px;
        }
        .project-modal-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        .project-modal-scroll {
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.15) transparent;
        }
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
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group bg-neutral-950 border border-white/[0.07] rounded-2xl overflow-hidden flex flex-col h-full
                           hover:border-white/20 hover:shadow-[0_20px_60px_rgba(255,255,255,0.03)]
                           transition-all duration-300 cursor-pointer"
              >
                {/* Preview */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg pointer-events-none"
                  />
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
                      onClick={handleLinkClick}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg
                                 bg-white/[0.04] border border-white/[0.08] text-white/45 text-[11px] font-semibold
                                 no-underline hover:bg-white/10 hover:border-white/20 hover:text-white/75
                                 transition-all duration-200 cursor-pointer"
                    >
                      <Github size={12} />
                      GitHub
                    </a>
                    <a
                      href={project.link}
                      onClick={handleLinkClick}
                      className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg
                                 bg-white text-black text-[11px] font-bold
                                 no-underline hover:bg-neutral-200 hover:scale-[1.02]
                                 transition-all duration-200 cursor-pointer"
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

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/70 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="project-modal-scroll relative bg-neutral-950 border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto cursor-default"
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center
                           rounded-full bg-black/50 border border-white/10 text-white/60
                           hover:bg-black/80 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <X size={16} />
              </button>

              {/* Image */}
              <div className="h-64 w-full overflow-hidden rounded-t-2xl">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-white leading-snug">
                  {selectedProject.title}
                </h3>

                <p className="text-[14px] text-white/50 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10
                                 text-white/60 text-[12px] font-medium tracking-[0.3px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="h-px bg-white/10 my-1" />

                <div className="flex gap-3">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg
                               bg-white/[0.05] border border-white/10 text-white/70 text-[13px] font-semibold
                               no-underline hover:bg-white/10 hover:border-white/20 hover:text-white
                               transition-all duration-200 cursor-pointer"
                  >
                    <Github size={14} />
                    View Code
                  </a>
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg
                               bg-white text-black text-[13px] font-bold
                               no-underline hover:bg-neutral-200 hover:scale-[1.02]
                               transition-all duration-200 cursor-pointer"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}