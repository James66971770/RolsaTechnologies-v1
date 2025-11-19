// src/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const green = "#009130";
const textLight = "#222";

function Home() {
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
        display: "flex",
        flexDirection: "column",
        color: text,
        transition: ".3s",
      }}
    >
      <header
        style={{
          width: "100%",
          height: 60,
          background: green,
          color: "white",
          padding: "16px 30px",
          display: "flex",
          alignItems: "center",

          gap: 25,
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{ fontSize: 26, cursor: "pointer" }}
          onClick={() => setMenuOpen(!menuOpen)}
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

        <div style={{ marginLeft: "auto" }}>
          <Link
            to="/login"
            style={{
              background: "white",
              padding: "8px 16px",
              borderRadius: 10,
              color: text,
              fontWeight: 600,
              whiteSpace: "nowrap",
              textDecoration: "none",
              transition: "0.2s ease",
            }}
          >
            Logout
          </Link>
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
            to="/about"
            style={{ display: "block", color: text, textDecoration: "none" }}
          >
            About Us
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

      <div
        style={{
          background: green,
          color: "white",
          paddingBottom: 30,
          paddingTop: 10,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontWeight: 700,
            fontSize: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Rolsa Technologies
        </div>

        <h1 style={{ marginTop: 12 }}>Welcome</h1>
        <p>You are now logged in to your dashboard.</p>
      </div>

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
          <h2 style={{ marginTop: 0 }}>Rolsa Dashboard</h2>
          <p style={{ color: dark ? "#ccc" : "#555" }}>Welcome</p>
        </div>
      </main>
    </div>
  );
}

export default Home;
