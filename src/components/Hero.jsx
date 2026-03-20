import { useState } from "react";
import myImage from "../assets/myImage.png";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&display=swap');

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-60px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(60px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes ghostText {
    from { opacity: 0; letter-spacing: 0.4em; }
    to   { opacity: 1; letter-spacing: -0.02em; }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%       { transform: translateY(-14px); }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes btnPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(200,200,200,0); }
    50%       { box-shadow: 0 0 12px 2px rgba(200,200,200,0.10); }
  }
  @keyframes lineDraw {
    from { width: 0; opacity: 0; }
    to   { width: 80px; opacity: 1; }
  }
  @keyframes dotPop {
    from { transform: scale(0); opacity: 0; }
    to   { transform: scale(1); opacity: 1; }
  }
  @keyframes scanline {
    0%   { top: -5%; opacity: 0.05; }
    100% { top: 105%; opacity: 0; }
  }
  @keyframes scrollBounce {
    0%, 100% { transform: translateY(0); opacity: 0.45; }
    50%       { transform: translateY(7px); opacity: 1; }
  }
  @keyframes tagline {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .hero-bg { animation: fadeIn 1.4s ease forwards; }
  .hero-scanline {
    position: absolute; left: 0; right: 0; height: 130px;
    background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.022), transparent);
    pointer-events: none;
    animation: scanline 9s linear 2s infinite;
    z-index: 5;
  }
  .hero-vignette {
    position: absolute; inset: 0; z-index: 1;
    background: radial-gradient(ellipse 90% 90% at 50% 50%, transparent 35%, rgba(8,8,8,0.6) 100%);
    pointer-events: none;
    animation: fadeIn 2s ease 0.5s both;
  }
  .hero-left  { animation: slideInLeft  1s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
  .hero-right { animation: slideInRight 1s cubic-bezier(0.16,1,0.3,1) 0.5s both; }

  .hero-name-shimmer {
    background: linear-gradient(
      90deg,
      rgba(210,210,210,0.22) 0%,
      rgba(240,240,240,0.42) 38%,
      rgba(210,210,210,0.22) 58%,
      rgba(210,210,210,0.22) 100%
    );
    background-size: 220% auto;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation:
      ghostText 1.6s cubic-bezier(0.16,1,0.3,1) 0.3s both,
      shimmer 6s linear 2.2s infinite;
  }
  .hero-tagline { animation: tagline 0.9s ease 1s both; }
  .hero-accent-line {
    height: 2px;
    background: linear-gradient(90deg, rgba(200,70,70,0.8), rgba(200,70,70,0));
    border-radius: 2px;
    animation: lineDraw 1s cubic-bezier(0.16,1,0.3,1) 1.2s both;
  }
  .hero-dot {
    width: 7px; height: 7px; border-radius: 50%;
    background: rgba(200,70,70,0.85);
    animation: dotPop 0.5s cubic-bezier(0.34,1.56,0.64,1) 1.3s both;
    flex-shrink: 0;
  }
  .hero-buttons { animation: slideUp 0.9s cubic-bezier(0.16,1,0.3,1) 1.1s both; }
  .hero-btn {
    transition: background 0.25s, border-color 0.25s, transform 0.2s, box-shadow 0.25s;
    animation: btnPulse 3.5s ease-in-out 2s infinite;
  }
  .hero-btn:hover {
    background: rgba(255,255,255,0.09) !important;
    border-color: rgba(255,255,255,0.75) !important;
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 28px rgba(0,0,0,0.4);
  }
  .hero-btn:active { transform: scale(0.97); }

  .hero-img-wrap {
    animation: float 5.5s ease-in-out 1.8s infinite;
    position: relative;
    display: inline-block;
  }
  .hero-img-wrap::after {
    content: '';
    position: absolute;
    bottom: -30px; left: 50%;
    transform: translateX(-50%);
    width: 65%; height: 35px;
    background: radial-gradient(ellipse, rgba(180,50,50,0.22) 0%, transparent 70%);
    pointer-events: none;
  }

  /* ── Image: border + radius on DESKTOP only ── */
  .hero-img {
    border-radius: 0;
    border: none;
  }
  @media (min-width: 769px) {
    .hero-img {
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.15);
    }
  }

  .scroll-hint  { animation: slideUp 1s ease 2s both; }
  .scroll-arrow { animation: scrollBounce 1.9s ease-in-out infinite; }

  /* ── Responsive layout ── */
  @media (max-width: 768px) {
    .hero-layout {
      flex-direction: column-reverse !important;
      align-items: center !important;
      justify-content: flex-end !important;
      padding: 1rem 1.5rem 5rem !important;
      gap: 1rem !important;
    }
    .hero-left {
      align-items: center !important;
      text-align: center !important;
      width: 100% !important;
    }
    .hero-left-accent { justify-content: center !important; }
    .hero-buttons-row { justify-content: center !important; }
    .hero-right {
      width: 100% !important;
      justify-content: center !important;
    }
  }
`;

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <>
      <style>{styles}</style>

      <section
        style={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "stretch",
          backgroundColor: "#1e1e1e",
        }}
      >
        <div
          className="hero-bg"
          style={{
            position: "absolute", inset: 0, zIndex: 0,
            background: "radial-gradient(ellipse 75% 85% at 30% 55%, #2e2e2e 0%, #161616 100%)",
          }}
        />
        <div className="hero-vignette" />
        <div className="hero-scanline" />

        {/* Two-column layout */}
        <div
          className="hero-layout"
          style={{
            position: "relative", zIndex: 2,
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 clamp(2rem, 6vw, 6rem)",
            gap: "clamp(1rem, 3vw, 3rem)",
            minHeight: "100vh",
          }}
        >
          {/* LEFT: Text */}
          <div
            className="hero-left"
            style={{
              flex: "1 1 0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1.4rem",
              maxWidth: "480px",
            }}
          >
            <div
              className="hero-tagline"
              style={{
                fontSize: "0.7rem", letterSpacing: "0.28em",
                color: "rgba(200,70,70,0.85)", textTransform: "uppercase",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              — Portfolio
            </div>

            <h1
              className="hero-name-shimmer"
              style={{
                margin: 0, fontWeight: 900, lineHeight: 1.05,
                fontSize: "clamp(2.8rem, 6.5vw, 6.5rem)",
                letterSpacing: "-0.02em",
                fontFamily: "'Playfair Display', 'Georgia', serif",
              }}
            >
              Hi! I'm<br />Taimoor
            </h1>

            <div
              className="hero-left-accent"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <div className="hero-dot" />
              <div className="hero-accent-line" style={{ width: "80px" }} />
            </div>

            <p
              className="hero-tagline"
              style={{
                margin: 0,
                fontSize: "clamp(0.78rem, 1.2vw, 0.95rem)",
                color: "rgba(180,180,180,0.5)",
                letterSpacing: "0.06em", lineHeight: 1.7, maxWidth: "320px",
              }}
            >
              Developer · Designer · Creator
            </p>

            <div
              className="hero-buttons hero-buttons-row"
              style={{ display: "flex", gap: "0.85rem", flexWrap: "wrap" }}
            >
              {["Contact", "Who I'm"].map((label) => (
                <button
                  key={label}
                  className="hero-btn"
                  style={{
                    padding: "0.55rem 1.5rem",
                    border: "1px solid rgba(200,200,200,0.4)",
                    color: "rgba(225,225,225,0.88)",
                    background: "transparent", borderRadius: "3px",
                    letterSpacing: "0.1em", fontSize: "0.75rem",
                    fontWeight: 500, cursor: "pointer",
                    fontFamily: "inherit", textTransform: "uppercase",
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT: Image */}
          <div
            className="hero-right"
            style={{
              flex: "0 0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="hero-img-wrap">
              <img
                src={myImage}
                alt="Taimoor character"
                onError={() => setImgError(true)}
                className="hero-img filter grayscale"
                style={{
                  height: "clamp(300px, 65vh, 560px)",
                  maxWidth: "clamp(220px, 34vw, 420px)",
                  objectFit: "contain",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="scroll-hint"
          style={{
            position: "absolute", bottom: "1.6rem",
            left: "50%", transform: "translateX(-50%)",
            zIndex: 6, display: "flex", flexDirection: "column",
            alignItems: "center", gap: "6px",
          }}
        >
          <span style={{ fontSize: "0.6rem", letterSpacing: "0.22em", color: "rgba(180,180,180,0.3)", textTransform: "uppercase" }}>
            Scroll
          </span>
          <div
            className="scroll-arrow"
            style={{
              width: 0, height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",
              borderTop: "6px solid rgba(180,180,180,0.28)",
            }}
          />
        </div>
      </section>
    </>
  );
}