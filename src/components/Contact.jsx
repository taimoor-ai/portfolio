import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Send, AlertCircle } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={ref} className="section-container relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.h2 variants={itemVariants} className="text-4xl font-bold mb-4 gradient-text">
            Let's Work Together
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg">
            Have a project in mind? I'd love to hear about it. Get in touch and let's create something amazing.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="glass-effect p-6 rounded-xl hover-glow">
              <Mail className="text-accent-cyan mb-3" size={24} />
              <h3 className="text-lg font-bold text-white mb-2">Email</h3>
              <a href="mailto:hello@example.com" className="text-gray-400 hover:text-accent-cyan transition-colors">
                hello@example.com
              </a>
            </div>

            <div className="glass-effect p-6 rounded-xl hover-glow">
              <h3 className="text-lg font-bold text-white mb-4">Follow Me</h3>
              <div className="flex gap-4">
                {['Twitter', 'GitHub', 'LinkedIn'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 flex items-center justify-center bg-dark-bg border border-dark-border/50 rounded-lg text-accent-cyan hover:border-accent-cyan transition-all"
                  >
                    {social[0]}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="glass-effect p-8 rounded-xl space-y-4"
          >
            <div>
              <label className="block text-gray-300 font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-dark-bg border border-dark-border/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-dark-bg border border-dark-border/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-cyan transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full bg-dark-bg border border-dark-border/50 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent-cyan transition-colors resize-none"
                placeholder="Your message..."
              />
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-accent-cyan bg-accent-cyan/10 p-3 rounded-lg"
              >
                <AlertCircle size={16} />
                <span>Message sent! Thanks for reaching out.</span>
              </motion.div>
            )}

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 217, 255, 0.5)' }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-accent-cyan text-dark-bg font-bold py-3 rounded-lg hover:glow transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  )
}
