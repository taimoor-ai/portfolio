import { motion, animate } from "framer-motion";
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
        background: "rgba(255, 255, 255, 0.15)",
        pointerEvents: "none",
        width: style.width,
        height: style.height,
        top: style.top,
        left: style.left,
      }}
      animate={{
        y: [0, -18, 0],
        opacity: [0.1, 0.4, 0.1],
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
  const rawNum = parseFloat(value);
  const hasSup = !!sup;
  const hasPlusSign = value.endsWith("+");
  const count = useCounter(rawNum, 1.8, inView);

  return (
    <motion.div
      className="flex flex-col gap-1 cursor-default relative group"
      whileHover={{ y: -4, scale: 1.06 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {/* hover glow bg */}
      <div className="absolute -inset-2 rounded-xl bg-white/0 group-hover:bg-white/5 transition-colors duration-300 -z-10" />

      <span className="font-['Syne',sans-serif] text-[clamp(1.3rem,2.5vw,1.65rem)] font-extrabold text-white leading-none flex items-baseline">
        {count}
        {hasPlusSign && !String(count).endsWith("+") ? "+" : ""}
        {hasSup && (
          <sup className="text-[0.55em] text-white/50 font-semibold ml-px">
            {sup}
          </sup>
        )}
      </span>
      <span className="text-[0.68rem] text-white/40 font-normal capitalize tracking-[0.01em] whitespace-nowrap group-hover:text-white/70 transition-colors duration-300">
        {label}
      </span>
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
    visible: { opacity: 1, transition: { staggerChildren: 0.18 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
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
      {/* Syne font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap"
        rel="stylesheet"
      />

      <section
        id="about"
        ref={ref}
        className="min-h-screen flex items-center justify-center bg-[#121212] px-6 py-16 relative overflow-hidden"
      >
        <div className="w-full max-w-[1000px] relative z-10">
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className={`
              relative overflow-hidden min-h-[480px]
              bg-white/[0.03] border border-white/10 rounded-[22px]
              backdrop-blur-xl
              grid ${isMobile ? "grid-cols-1" : "grid-cols-[1fr_360px]"}
              shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_48px_rgba(0,0,0,0.7),inset_0_1px_0_rgba(255,255,255,0.04)]
              hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_12px_64px_rgba(255,255,255,0.06),inset_0_1px_0_rgba(255,255,255,0.06)]
              transition-shadow duration-500
              ${inView ? "title-visible" : ""}
            `}
          >
            {/* Animated border glow ring */}
            {inView && (
              <div
                className="absolute inset-[-1px] rounded-[22px] pointer-events-none animate-[borderPulse_3.5s_ease-in-out_infinite]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05), rgba(255,255,255,0.2)) border-box",
                  border: "1px solid transparent",
                  WebkitMask:
                    "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  maskComposite: "exclude",
                }}
              />
            )}

            {/* Shimmer sweep */}
            <div
              className={`absolute inset-0 pointer-events-none z-10 ${
                shimmer ? "animate-[shimmerSweep_0.9s_ease_forwards]" : ""
              }`}
              style={{
                background:
                  "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.05) 50%, transparent 65%)",
                transform: shimmer ? undefined : "translateX(-100%)",
              }}
            />

            {/* Floating particles */}
            {inView && particles.map((p, i) => <Particle key={i} style={p} />)}

            {/* Vertical separator */}
            {!isMobile && (
              <div
                className="absolute top-[15%] h-[70%] w-px pointer-events-none"
                style={{
                  left: "calc(100% - 280px)",
                  background:
                    "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15) 30%, rgba(255,255,255,0.25) 60%, transparent)",
                }}
              />
            )}

            {/* ── Left Content ── */}
            <motion.div
              className="flex flex-col px-[52px] py-[48px] max-sm:px-6 max-sm:py-7 relative"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {/* Title with underline draw */}
              <motion.h2
                variants={itemVariants}
                className="font-['Syne',sans-serif] text-[clamp(1.6rem,3vw,2.1rem)] font-bold text-white tracking-[-0.01em] m-0 mb-[18px] relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:rounded-sm after:transition-[width] after:duration-[800ms] after:ease-[cubic-bezier(0.16,1,0.3,1)] after:delay-500"
                style={{
                  "--tw-after-width": inView ? "60%" : "0%",
                }}
              >
                About Me
                {/* Manual underline since Tailwind can't animate arbitrary widths easily */}
                <span
                  className="absolute bottom-[-4px] left-0 h-[2px] rounded-sm bg-gradient-to-r from-white/70 to-transparent transition-[width] duration-[800ms] delay-500"
                  style={{ width: inView ? "60%" : "0%" }}
                />
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-[clamp(0.78rem,1.4vw,0.88rem)] text-white/80 leading-[1.75] m-0 font-light flex-1"
              >
                I'm Taimoor Arshad a BS Computer Science student (6th Semester) based in
                Pakistan with a focused mission: become a top 1% backend engineer who
                builds systems that scale. I specialize in the Node.js / Express / MongoDB
                stack and have a deep interest in real-time communication, distributed
                architecture, and low-level networking. My projects aren't just exercises —
                they're proof of my commitment to writing production-quality code. I bridge
                the gap between frontend fluency and backend depth, and I'm currently
                expanding into TypeScript, cloud infrastructure, and systems security.{" "}
                <em>"I don't just learn technologies — I build with them until I understand
                them completely."</em>
              </motion.p>

              {/* Stats row */}
              <motion.div
                variants={itemVariants}
                className="flex gap-7 items-end flex-wrap mt-9 max-sm:gap-4 max-sm:mt-6"
              >
                {stats.map((stat, i) => (
                  <div key={stat.label} className="flex items-end gap-7 max-sm:gap-0">
                    <StatItem
                      value={stat.value}
                      sup={stat.sup}
                      label={stat.label}
                      inView={inView}
                    />
                    {i < stats.length - 1 && (
                      <>
                        <motion.div
                          className="w-px bg-white/20 self-center max-sm:hidden"
                          initial={{ scaleY: 0, opacity: 0 }}
                          animate={inView ? { scaleY: 1, opacity: 1 } : {}}
                          transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
                          style={{ height: 30, transformOrigin: "top" }}
                        />
                        {/* gap spacer on mobile */}
                        <div className="hidden max-sm:block w-3" />
                      </>
                    )}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── Lanyard Column — desktop only ── */}
            {!isMobile && (
              <motion.div
                className="relative w-[280px] flex-shrink-0 self-stretch"
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="absolute inset-0 w-full h-full [&_canvas]:w-full [&_canvas]:h-full [&>div]:w-full [&>div]:h-full [&>div>canvas]:w-full [&>div>canvas]:h-full">
                  <Lanyard position={[0, 0, 14]} gravity={[0, -40, 0]} />
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Keyframe injections for animations Tailwind can't handle */}
        <style>{`
          @keyframes borderPulse {
            0%, 100% { opacity: 0; }
            50%       { opacity: 1; }
          }
          @keyframes shimmerSweep {
            from { transform: translateX(-100%); }
            to   { transform: translateX(200%); }
          }
        `}</style>
      </section>
    </>
  );
}