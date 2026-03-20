import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-surface/50 border-t border-dark-border/50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400"
          >
            <p className="flex items-center gap-2">
              <span className="text-accent-cyan">•</span>
              Designed & Built by Me
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <span className="text-gradient-text">
              © {currentYear}
            </span>
            <span className="text-gray-400">All rights reserved</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex gap-4"
          >
            <a
              href="#about"
              className="text-gray-400 hover:text-accent-cyan transition-colors text-sm"
            >
              Back to top
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
