import { motion } from "framer-motion";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const socialLinks = [
  { icon: faGithub, href: "https://github.com/taimoor-ai", label: "GitHub" },
  { icon: faInstagram, href: "https://www.instagram.com/tamuur._here/", label: "Instagram" },
  { icon: faLinkedin, href: "https://www.linkedin.com/in/taimur-arshad-a7a408260/", label: "LinkedIn" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #0d0d0d 0%, #111111 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top glow line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "40%",
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(100,200,255,0.25), transparent)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 1.5rem",
        }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "52px",
          }}
        >
          {/* Left — copyright */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "0.78rem",
              letterSpacing: "0.02em",
              color: "rgba(160,160,160,0.75)",
              fontFamily: '"DM Mono", "Fira Mono", monospace',
              margin: 0,
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              userSelect: "none",
            }}
          >
            <span
              style={{ color: "rgba(100,200,255,0.5)", fontSize: "0.7rem" }}
            >
              ©
            </span>
            {currentYear} M Taimoor Arshad
          </motion.p>

          {/* Right — social icons */}
          <motion.div
            variants={containerVariants}
            style={{ display: "flex", alignItems: "center", gap: "0.2rem" }}
          >
            {socialLinks.map(({ icon: icon, href, label, hoverColor }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                variants={itemVariants}
                whileHover={{ scale: 1.18, y: -2 }}
                whileTap={{ scale: 0.92 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "34px",
                  height: "34px",
                  borderRadius: "8px",
                  color: "rgba(160,160,160,0.65)",
                  textDecoration: "none",
                  transition: "color 0.22s ease, background 0.22s ease",
                  position: "relative",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = hoverColor;
                  e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(160,160,160,0.65)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <FontAwesomeIcon icon={icon} className="text-2xl" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
