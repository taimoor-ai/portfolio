import { useState } from 'react'
import { Menu, X, Github, Instagram, Linkedin } from 'lucide-react'
import { faGithub ,faInstagram,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['Home', 'About', 'Project', 'Services', 'Contact']
  
  const socialLinks = [
    { icon: faGithub, href: '#github', label: 'GitHub' },
    { icon: faInstagram, href: '#instagram', label: 'Instagram' },
    { icon: faLinkedin, href: '#linkedin', label: 'LinkedIn' }
  ]

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-6 sm:px-6 lg:px-8">
      {/* Navbar Container - Rounded Pill Shape */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#121212] bg-opacity-95 backdrop-blur-md rounded-full px-6 sm:px-8 py-2 flex justify-between items-center border border-gray-700 border-opacity-50">
          
          {/* Logo */}
          <div className="text-white text-xl sm:text-2xl font-bold tracking-tight min-w-fit">
            Taimoor
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors duration-300 text-l font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Desktop Social Icons - Right */}
          <div className="hidden md:flex gap-4 items-center">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="text-gray-300 hover:text-white transition-colors duration-300 p-2"
                >
                  <FontAwesomeIcon icon={Icon} size={30} className="text-2xl" />
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-opacity-95 backdrop-blur-md rounded-3xl px-6 py-6 border border-gray-700 border-opacity-50">
            {/* Mobile Navigation Items */}
            <div className="flex flex-col gap-4 mb-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300 font-medium text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Social Icons */}
            <div className="flex gap-4 border-t border-gray-700 border-opacity-50 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="text-gray-300 hover:text-white transition-colors duration-300 p-2"
                  >
                    <FontAwesomeIcon icon={Icon} className="text-4xl" />
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
