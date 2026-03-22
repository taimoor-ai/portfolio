import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    }, 1400)
  }

  const contactDetails = [
    { icon: Mail, label: 'taimooor786786@gmail.com', href: 'mailto:taimooor786786@gmail.com', delay: 0.5 },
    { icon: Phone, label: '0310-6519763', href: 'tel:0310-6519763', delay: 0.65 },
    { icon: MapPin, label: 'Islamabad Pakistan', href: '#', delay: 0.8 },
  ]

  const inputFields = [
    { name: 'name', type: 'text', placeholder: 'Your Name', delay: 0.3 },
    { name: 'email', type: 'email', placeholder: 'Your Email', delay: 0.45 },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Animated radial blobs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4, ease: 'easeOut' }}
        className="absolute top-1/2 left-1/4 w-96 h-96 bg-white/[0.025] rounded-full blur-3xl -translate-y-1/2 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.4, delay: 0.2, ease: 'easeOut' }}
        className="absolute top-1/3 right-1/4 w-80 h-80 bg-white/[0.015] rounded-full blur-3xl pointer-events-none"
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-14 tracking-tight relative z-10"
      >
        Contact Me
      </motion.h2>

      {/* Main Grid */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 w-full max-w-4xl relative z-10">

        {/* LEFT — Contact Info */}
        <div className="flex flex-col">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-2xl font-semibold text-white mb-3 tracking-tight"
          >
            Get In Touch
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.32, ease: 'easeOut' }}
            className="text-[#888] text-sm leading-relaxed mb-9"
          >
            If you want to work together or have any questions, feel free to contact me.
          </motion.p>

          <div className="flex flex-col gap-5">
            {contactDetails.map(({ icon: Icon, label, href, delay }) => (
              <motion.a
                key={label}
                href={href}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay, ease: 'easeOut' }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group no-underline"
              >
                <motion.div
                  whileHover={{ scale: 1.12, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  transition={{ duration: 0.2 }}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/[0.08] flex items-center justify-center flex-shrink-0"
                >
                  <Icon size={15} className="text-[#aaa]" />
                </motion.div>
                <span className="text-[#bbb] text-sm group-hover:text-white transition-colors duration-200">
                  {label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT — Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 backdrop-blur-sm flex flex-col gap-4"
        >
          {/* Name & Email inputs */}
          {inputFields.map(({ name, type, placeholder, delay }) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay, ease: 'easeOut' }}
            >
              <motion.input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused('')}
                required
                placeholder={placeholder}
                animate={{
                  borderColor: focused === name ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                  backgroundColor: focused === name ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.04)',
                }}
                transition={{ duration: 0.2 }}
                className="w-full rounded-lg px-4 py-3 text-white text-sm placeholder-[#555] outline-none border transition-all duration-200"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
              />
            </motion.div>
          ))}

          {/* Textarea */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6, ease: 'easeOut' }}
          >
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused('')}
              required
              rows={5}
              placeholder="Your Message"
              animate={{
                borderColor: focused === 'message' ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.1)',
                backgroundColor: focused === 'message' ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.04)',
              }}
              transition={{ duration: 0.2 }}
              className="w-full rounded-lg px-4 py-3 text-white text-sm placeholder-[#555] outline-none resize-none border"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.75, ease: 'easeOut' }}
          >
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.09)', borderColor: 'rgba(255,255,255,0.22)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.18 }}
              className="w-full mt-1 bg-[#2a2a2a] border border-white/[0.12] rounded-lg py-3 text-[#ccc] text-sm font-medium flex items-center justify-center gap-2 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {loading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }}
                  className="w-4 h-4 border-2 border-white/15 border-t-[#aaa] rounded-full"
                />
              ) : (
                <>
                  <Send size={15} />
                  Send Message
                </>
              )}
            </motion.button>
          </motion.div>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="bg-green-500/[0.08] border border-green-500/20 rounded-lg px-4 py-3 text-green-400 text-sm text-center"
            >
              ✓ Message sent! I'll get back to you soon.
            </motion.div>
          )}
        </motion.form>
      </div>
    </section>
  )
}