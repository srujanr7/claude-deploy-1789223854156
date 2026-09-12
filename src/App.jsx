import { useState } from "react";

const TAGLINES = [
  "Something is taking shape here.",
  "Built in the space between ideas and shipping.",
  "A work in progress, on purpose.",
  "Come back soon to see where it's going.",
];

export default function WelcomeScreen() {
  const [index, setIndex] = useState(0);

  const nextTagline = () => {
    setIndex((current) => {
      let next = Math.floor(Math.random() * TAGLINES.length);
      if (next === current && TAGLINES.length > 1) {
        next = (next + 1) % TAGLINES.length;
      }
      return next;
    });
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse 140% 100% at 50% 0%, #12161c 0%, #0c0f13 100%)",
        fontFamily: "'Inter', sans-serif",
        padding: "2rem",
      }}
    >
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,340&family=Inter:wght@400;500&display=swap"
      />

      <div style={{ textAlign: "center", maxWidth: "34rem" }}>
        <svg
          width="36"
          height="36"
          viewBox="0 0 40 40"
          fill="none"
          style={{ margin: "0 auto 2.25rem" }}
        >
          <circle cx="20" cy="20" r="19" stroke="#d6a94b" strokeWidth="1.2" />
          <circle cx="20" cy="20" r="3" fill="#d6a94b" />
        </svg>

        <h1
          style={{
            fontFamily: "'Fraunces', serif",
            fontOpticalSizing: "auto",
            fontWeight: 340,
            fontSize: "clamp(3rem, 9vw, 5.5rem)",
            lineHeight: 1,
            letterSpacing: "-0.01em",
            color: "#ede8de",
            margin: 0,
          }}
        >
          Welcome
        </h1>

        <p
          style={{
            marginTop: "1.15rem",
            fontSize: "1.05rem",
            lineHeight: 1.6,
            color: "#8a95a1",
            minHeight: "1.7em",
          }}
        >
          {TAGLINES[index]}
        </p>

        <button
          onClick={nextTagline}
          style={{
            marginTop: "2rem",
            background: "transparent",
            border: "1px solid #d6a94b",
            color: "#d6a94b",
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.9rem",
            padding: "0.6rem 1.4rem",
            borderRadius: "2px",
            cursor: "pointer",
            transition: "background 200ms ease, color 200ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#d6a94b";
            e.currentTarget.style.color = "#12161c";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#d6a94b";
          }}
        >
          New tagline
        </button>
      </div>
    </div>
  );
}