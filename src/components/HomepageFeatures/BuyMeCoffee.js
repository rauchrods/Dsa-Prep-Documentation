import React from "react";

function BuyMeCoffee() {
  return (
    <div style={{ marginTop: "2.5rem", textAlign: "center" }}>
      <p className="hero__subtitle">
        If this documentation helps you in your learning journey, consider
        supporting the project!
      </p>
      <a
        href="https://www.buymeacoffee.com/rauchrods"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
          alt="Buy Me A Coffee"
          style={{
            height: "45px",
            width: "190px",
            borderRadius: "8px",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        />
      </a>
    </div>
  );
}

export default BuyMeCoffee;
