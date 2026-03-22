import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = ["Home", "About", "Project", "Services", "Contact"];

  const socialLinks = [
    { icon: faGithub, href: "https://github.com/taimoor-ai", label: "GitHub" },
    {
      icon: faInstagram,
      href: "https://www.instagram.com/tamuur._here/",
      label: "Instagram",
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/in/taimur-arshad-a7a408260/",
      label: "LinkedIn",
    },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Pill container */}
        <div
          style={{
            backgroundColor: scrolled ? "rgba(18,18,18,0.95)" : "transparent",
            borderColor: scrolled
              ? "rgba(100,100,100,0.5)"
              : "rgba(100,100,100,0)",
            boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.45)" : "none",
            transition:
              "background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
          }}
          className="rounded-full px-6 sm:px-8 py-2 flex justify-between items-center border backdrop-blur-md"
        >
          {/* Logo */}
          <div className="text-white text-xl sm:text-2xl font-bold tracking-tight min-w-fit">
            Taimoor
          </div>

          {/* Desktop nav — centered absolutely */}
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

          {/* Desktop social icons */}
          <div className="hidden md:flex gap-4 items-center">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gray-300 hover:text-white transition-colors duration-300 p-2"
              >
                <FontAwesomeIcon icon={social.icon} className="text-2xl" />
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div
            style={{ backgroundColor: "rgba(18,18,18,0.97)" }}
            className="md:hidden mt-4 backdrop-blur-md rounded-3xl px-6 py-6 border border-gray-700 border-opacity-50"
          >
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

            <div className="flex gap-4 border-t border-gray-700 border-opacity-50 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(social.href, "_blank", "noopener,noreferrer");
                  }}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-gray-300 hover:text-white transition-colors duration-300 p-2"
                >
                  <FontAwesomeIcon icon={social.icon} className="text-4xl" />
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
