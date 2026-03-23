import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [focused, setFocused] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // ── Client-side validation ───────────────────────────────────────
  const validate = () => {
    const newErrors = {}

    // Name
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    else if (formData.name.length < 2) newErrors.name = 'Name must be at least 2 characters'
    else if (formData.name.length > 100) newErrors.name = 'Name cannot exceed 100 characters'
    else if (!/^[a-zA-Z\s'-]+$/.test(formData.name))
      newErrors.name = 'Name can only contain letters, spaces, hyphens, and apostrophes'

    // Email
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (formData.email.length > 254) newErrors.email = 'Email is too long'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please provide a valid email address'

    // Subject
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    else if (formData.subject.length < 3) newErrors.subject = 'Subject must be at least 3 characters'
    else if (formData.subject.length > 200) newErrors.subject = 'Subject cannot exceed 200 characters'

    // Message
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters'
    else if (formData.message.length > 2000) newErrors.message = 'Message cannot exceed 2000 characters'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return // stop if invalid

    setLoading(true)
    try {
      const res = await fetch("https://api.pllantify.store/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
        setErrors({})
        setTimeout(() => setSubmitted(false), 4000)
      } else {
        const data = await res.json()
        alert(data.error || "Something went wrong!")
      }
    } catch (err) {
      console.error(err)
      alert("Server error. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  const contactDetails = [
    { icon: Mail, label: 'taimooor786786@gmail.com', href: 'mailto:taimooor786786@gmail.com', delay: 0.5 },
    { icon: Phone, label: '0310-6519763', href: 'tel:0310-6519763', delay: 0.65 },
    { icon: MapPin, label: 'Islamabad Pakistan', href: '#', delay: 0.8 },
  ]

  const inputFields = [
    { name: 'name', type: 'text', placeholder: 'Your Name', delay: 0.3 },
    { name: 'email', type: 'email', placeholder: 'Your Email', delay: 0.45 },
    { name: 'subject', type: 'text', placeholder: 'Subject', delay: 0.6 },
  ]

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen bg-[#1a1a1a] flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden"
    >
      {/* Grid overlay & blobs remain unchanged */}

      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-4xl md:text-5xl font-bold text-white text-center mb-14 tracking-tight relative z-10"
      >
        Contact Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 w-full max-w-4xl relative z-10">
        {/* LEFT — Contact Info */}
        <div className="flex flex-col">
          <motion.h3 initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }} className="text-2xl font-semibold text-white mb-3 tracking-tight">Get In Touch</motion.h3>
          <motion.p initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.32, ease: 'easeOut' }} className="text-[#888] text-sm leading-relaxed mb-9">If you want to work together or have any questions, feel free to contact me.</motion.p>
          <div className="flex flex-col gap-5">
            {contactDetails.map(({ icon: Icon, label, href, delay }) => (
              <motion.a key={label} href={href} initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.55, delay, ease: 'easeOut' }} whileHover={{ x: 5 }} className="flex items-center gap-4 group no-underline">
                <motion.div whileHover={{ scale: 1.12, backgroundColor: 'rgba(255,255,255,0.1)' }} transition={{ duration: 0.2 }} className="w-9 h-9 rounded-lg bg-white/5 border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                  <Icon size={15} className="text-[#aaa]" />
                </motion.div>
                <span className="text-[#bbb] text-sm group-hover:text-white transition-colors duration-200">{label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* RIGHT — Form */}
        <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 40 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-8 backdrop-blur-sm flex flex-col gap-4">
          {inputFields.map(({ name, type, placeholder }) => (
            <motion.div key={name}>
              <motion.input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused('')}
                placeholder={placeholder}
                className="w-full rounded-lg px-4 py-3 text-white text-sm placeholder-[#555] outline-none border border-white/20 bg-white/5"
              />
              {errors[name] && <p className="text-red-500 text-xs mt-1">{errors[name]}</p>}
            </motion.div>
          ))}

          <motion.div>
            <motion.textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              onFocus={() => setFocused('message')}
              onBlur={() => setFocused('')}
              placeholder="Your Message"
              rows={5}
              className="w-full rounded-lg px-4 py-3 text-white text-sm placeholder-[#555] outline-none resize-none border border-white/20 bg-white/5"
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </motion.div>

          <motion.button type="submit" disabled={loading} className="w-full mt-1 bg-[#2a2a2a] border border-white/[0.12] rounded-lg py-3 text-[#ccc] text-sm font-medium flex items-center justify-center gap-2 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
            {loading ? <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.7, repeat: Infinity, ease: 'linear' }} className="w-4 h-4 border-2 border-white/15 border-t-[#aaa] rounded-full" /> : <><Send size={15} /> Send Message</>}
          </motion.button>

          {submitted && <motion.div initial={{ opacity: 0, y: 8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.4, ease: 'easeOut' }} className="bg-green-500/[0.08] border border-green-500/20 rounded-lg px-4 py-3 text-green-400 text-sm text-center">✓ Message sent! I'll get back to you soon.</motion.div>}
        </motion.form>
      </div>
    </section>
  )
}