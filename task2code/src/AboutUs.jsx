// src/AboutUs.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const green = "#009130";
const textLight = "#222";

function AboutUs() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [spin, setSpin] = useState(false);

  const text = dark ? "#fff" : textLight;
  const bg = dark ? "#111" : "#fff";
  const cardBg = dark ? "#1c1c1c" : "#fff";
  const shadow = dark

    ? "0 4px 16px rgba(255,255,255,0.08)"
    : "0 4px 16px rgba(0,0,0,0.08)";

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: bg,
        color: text,
        transition: ".3s",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header
        style={{
          height: 60,
          width: "100%",
          background: green,
          color: "white",
          padding: "12px 30px",
          display: "flex",
          alignItems: "center",
          gap: 25,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ fontSize: 26, cursor: "pointer" }}
        >
          ≡
        </div>

        <div
          onClick={() => {
            setSettingsOpen(!settingsOpen);
            setSpin(!spin);
          }}
          style={{
            fontSize: 24,
            cursor: "pointer",
            transition: ".4s",
            transform: spin ? "rotate(180deg)" : "rotate(0deg)",
          }}
        >
          ⚙
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 70,
            left: 30,
            background: cardBg,
            padding: "12px 16px",
            borderRadius: 10,
            width: 180,
            boxShadow: shadow,
          }}
        >
          <Link
            to="/home"
            style={{ color: text, textDecoration: "none", display: "block" }}
          >
            Home
          </Link>

          <Link
            to="/login"
            style={{
              color: text,
              textDecoration: "none",
              display: "block",
              marginTop: 10,
            }}
          >
            Log In
          </Link>
        </div>
      )}

      {settingsOpen && (
        <div
          style={{
            position: "absolute",
            top: 70,
            left: 75,
            background: cardBg,
            padding: "12px 16px",
            borderRadius: 10,
            width: 180,
            boxShadow: shadow,
          }}
        >
          <div
            onClick={() => setDark(!dark)}
            style={{ padding: "8px 0", cursor: "pointer" }}
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </div>
        </div>
      )}

      <main
        style={{
          flex: 1,
          padding: "40px 5vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 900,
            background: cardBg,
            borderRadius: 20,
            padding: 24,
            boxShadow: shadow,
          }}
        >
          <h1 style={{ marginTop: 0 }}>About Rolsa Technologies</h1>
        </div>
      </main>
    </div>
  );
}

export default AboutUs;
