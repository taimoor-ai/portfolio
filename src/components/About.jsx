import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import Lanyard from "./Lanyard.jsx";

/* ── Animated counter hook ── */
function useCounter(target, duration = 1.6, inView = false) {
  const [display, setDisplay] = useState("0");
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current) return;
    hasRun.current = true;

    const isFloat = String(target).includes(".");
    const numericTarget = parseFloat(target);

    const controls = animate(0, numericTarget, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(val) {
        setDisplay(
          isFloat
            ? val.toFixed(2)
            : Math.round(val) + (String(target).endsWith("+") ? "+" : "")
        );
      },
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  return display;
}

/* ── Floating particle ── */
function Particle({ style }) {
  return (
    <motion.div
      style={{
        position: "absolute",
        borderRadius: "50%",
        background: "rgba(140, 120, 255, 0.35)",
        pointerEvents: "none",
        ...style,
      }}
      animate={{
        y: [0, -18, 0],
        opacity: [0.2, 0.55, 0.2],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: style.duration ?? 3.5,
        repeat: Infinity,
        delay: style.delay ?? 0,
        ease: "easeInOut",
      }}
    />
  );
}

/* ── Stat item with counter & hover ── */
function StatItem({ value, sup, label, inView }) {
  // Strip "+" from raw numeric target
  const rawNum = parseFloat(value);
  const hasSup = !!sup;
  const hasPlusSign = value.endsWith("+");
  const count = useCounter(rawNum, 1.8, inView);

  return (
    <motion.div
      className="stat-item"
      whileHover={{ y: -4, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      style={{ cursor: "default" }}
    >
      <span className="stat-value">
        {count}
        {hasPlusSign && !String(count).endsWith("+") ? "+" : ""}
        {hasSup && <sup>{sup}</sup>}
      </span>
      <span className="stat-label">{label}</span>
    </motion.div>
  );
}

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [isMobile, setIsMobile] = useState(false);
  const [shimmer, setShimmer] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 780);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  /* Periodic shimmer sweep */
  useEffect(() => {
    if (!inView) return;
    const loop = setInterval(() => {
      setShimmer(true);
      setTimeout(() => setShimmer(false), 900);
    }, 4500);
    return () => clearInterval(loop);
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const stats = [
    { value: "10+", label: "Projects Finished" },
    { value: "3+", label: "Years of Experience" },
    { value: "3.40", sup: "/4.00", label: "GPA" },
  ];

  /* Particle definitions */
  const particles = [
    { width: 5, height: 5, top: "18%", left: "8%", delay: 0, duration: 3.8 },
    { width: 3, height: 3, top: "70%", left: "12%", delay: 1.2, duration: 4.5 },
    { width: 6, height: 6, top: "40%", left: "22%", delay: 0.5, duration: 3.2 },
    { width: 4, height: 4, top: "80%", left: "55%", delay: 2, duration: 5 },
    { width: 3, height: 3, top: "25%", left: "65%", delay: 0.8, duration: 3.6 },
    { width: 5, height: 5, top: "60%", left: "75%", delay: 1.6, duration: 4.2 },
    { width: 4, height: 4, top: "15%", left: "88%", delay: 0.3, duration: 3.9 },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Inter:wght@300;400;500&display=swap');

        .about-section {
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          display: flex;
          background:#121212;
          align-items: center;
          justify-content: center;
          padding: 60px 24px;
          position: relative;
          overflow: hidden;
        }

        .about-wrapper {
          width: 100%;
          max-width: 1000px;
          position: relative;
          z-index: 1;
        }

        /* ── Main card ── */
        .about-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(120, 100, 220, 0.22);
          border-radius: 22px;
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 0;
          align-items: stretch;
          position: relative;
          box-shadow:
            0 0 0 1px rgba(100, 80, 200, 0.08),
            0 8px 48px rgba(0, 0, 0, 0.45),
            inset 0 1px 0 rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          overflow: hidden;
          min-height: 480px;
          transition: box-shadow 0.4s ease;
        }

        .about-card:hover {
          box-shadow:
            0 0 0 1px rgba(130, 100, 255, 0.18),
            0 12px 64px rgba(80, 50, 200, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.06);
        }

        @media (max-width: 780px) {
          .about-card {
            grid-template-columns: 1fr;
          }
        }

        /* Glowing border pulse ring */
        .card-glow-ring {
          position: absolute;
          inset: -1px;
          border-radius: 22px;
          border: 1px solid transparent;
          background: linear-gradient(
            135deg,
            rgba(140, 100, 255, 0.45),
            rgba(80, 60, 200, 0.2),
            rgba(140, 100, 255, 0.45)
          ) border-box;
          -webkit-mask:
            linear-gradient(#fff 0 0) padding-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          pointer-events: none;
          opacity: 0;
          animation: borderPulse 3.5s ease-in-out infinite;
        }

        @keyframes borderPulse {
          0%, 100% { opacity: 0; }
          50%       { opacity: 1; }
        }

        /* Shimmer sweep */
        .shimmer-sweep {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            transparent 35%,
            rgba(200, 180, 255, 0.07) 50%,
            transparent 65%
          );
          pointer-events: none;
          z-index: 5;
          transform: translateX(-100%);
          transition: none;
        }

        .shimmer-sweep.active {
          animation: shimmerSweep 0.9s ease forwards;
        }

        @keyframes shimmerSweep {
          from { transform: translateX(-100%); }
          to   { transform: translateX(200%); }
        }

        /* Vertical separator glow */
        .about-card::after {
          content: '';
          position: absolute;
          left: calc(100% - 280px);
          top: 15%;
          height: 70%;
          width: 1px;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(140, 120, 255, 0.3) 30%,
            rgba(100, 80, 220, 0.45) 60%,
            transparent
          );
          pointer-events: none;
        }

        /* ── Left content ── */
        .about-left {
          display: flex;
          flex-direction: column;
          padding: 48px 40px 44px 52px;
          position: relative;
        }

        .about-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.1rem);
          font-weight: 700;
          color: #e8e4ff;
          margin: 0 0 18px 0;
          letter-spacing: -0.01em;
          position: relative;
        }

        /* Underline draw animation on title */
        .about-title::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          height: 2px;
          width: 0%;
          background: linear-gradient(90deg, rgba(140,100,255,0.8), transparent);
          border-radius: 2px;
          transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s;
        }

        .title-visible .about-title::after {
          width: 60%;
        }

        .about-description {
          font-size: clamp(0.78rem, 1.4vw, 0.88rem);
          color: white;
          line-height: 1.75;
          margin: 0;
          font-weight: 300;
          flex: 1;
        }

        /* ── Stats ── */
        .stats-row {
          display: flex;
          gap: 28px;
          align-items: flex-end;
          flex-wrap: wrap;
          margin-top: 36px;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          position: relative;
        }

        /* Hover glow behind stat */
        .stat-item::before {
          content: '';
          position: absolute;
          inset: -6px -8px;
          border-radius: 10px;
          background: rgba(120, 90, 240, 0);
          transition: background 0.3s ease;
          z-index: -1;
        }

        .stat-item:hover::before {
          background: rgba(120, 90, 240, 0.12);
        }

        .stat-value {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.3rem, 2.5vw, 1.65rem);
          font-weight: 800;
          color: #ffffff;
          line-height: 1;
          display: flex;
          align-items: baseline;
        }

        .stat-value sup {
          font-size: 0.55em;
          color: rgba(160, 140, 255, 0.85);
          font-weight: 600;
          margin-left: 1px;
        }

        .stat-label {
          font-size: 0.68rem;
          color: rgba(160, 145, 210, 0.6);
          font-weight: 400;
          text-transform: capitalize;
          letter-spacing: 0.01em;
          white-space: nowrap;
          transition: color 0.3s ease;
        }

        .stat-item:hover .stat-label {
          color: rgba(180, 165, 255, 0.85);
        }

        .stat-divider {
          width: 1px;
          height: 30px;
          background: rgba(120, 100, 200, 0.25);
          align-self: center;
        }

        /* ── Lanyard column ── */
        .lanyard-column {
          position: relative;
          width: 280px;
          flex-shrink: 0;
          align-self: stretch;
          // border-left: 1px solid rgba(120, 100, 220, 0.1);
        }

        .lanyard-canvas-wrapper {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .lanyard-canvas-wrapper canvas,
        .lanyard-canvas-wrapper > div,
        .lanyard-canvas-wrapper > div > canvas {
          width: 100% !important;
          height: 100% !important;
          display: block;
        }

        /* ── Responsive ── */
        @media (max-width: 780px) {
          .about-left {
            padding: 28px 24px 32px;
          }

          .about-card::after {
            display: none;
          }

          .stats-row {
            gap: 16px;
            margin-top: 24px;
          }

          .stat-divider {
            display: none;
          }
        }

        @media (max-width: 420px) {
          .about-left {
            padding: 20px 16px 24px;
          }

          .stats-row {
            gap: 12px;
          }
        }
      `}</style>

      <section id="about" ref={ref} className="about-section">
        <div className="about-wrapper">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`about-card ${inView ? "title-visible" : ""}`}
          >
            {/* Animated border glow ring */}
            {inView && <div className="card-glow-ring" />}

            {/* Shimmer sweep */}
            <div className={`shimmer-sweep ${shimmer ? "active" : ""}`} />

            {/* Floating particles */}
            {inView &&
              particles.map((p, i) => (
                <Particle key={i} style={p} />
              ))}

            {/* ── Left Content ── */}
            <motion.div
              className="about-left"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <motion.h2 variants={itemVariants} className="about-title">
                About Me
              </motion.h2>

              <motion.p variants={itemVariants} className="about-description">
                I'm Taimoor Arshad a BS Computer Science student (6th Semester) based in
                Pakistan with a focused mission: become a top 1% backend
                engineer who builds systems that scale. I specialize in the
                Node.js / Express / MongoDB stack and have a deep interest in
                real-time communication, distributed architecture, and low-level
                networking. My projects aren't just exercises — they're proof of
                my commitment to writing production-quality code. I bridge the
                gap between frontend fluency and backend depth, and I'm
                currently expanding into TypeScript, cloud infrastructure, and
                systems security. "I don't just learn technologies — I build
                with them until I understand them completely."
              </motion.p>

              {/* Stats row */}
              <motion.div variants={itemVariants} className="stats-row">
                {stats.map((stat, i) => (
                  <>
                    <StatItem
                      key={stat.label}
                      value={stat.value}
                      sup={stat.sup}
                      label={stat.label}
                      inView={inView}
                    />
                    {i < stats.length - 1 && (
                      <motion.div
                        className="stat-divider"
                        key={`div-${i}`}
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={inView ? { scaleY: 1, opacity: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                        style={{ transformOrigin: "top" }}
                      />
                    )}
                  </>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Lanyard Column — desktop only ── */}
            {!isMobile && (
              <motion.div
                variants={itemVariants}
                className="lanyard-column"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="lanyard-canvas-wrapper">
                  <Lanyard position={[0, 0, 14]} gravity={[0, -40, 0]} />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </>
  );
}