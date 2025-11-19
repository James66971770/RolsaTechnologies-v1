// src/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const green = "#009130";
const grey = "#f5f5f5";
const textLight = "#222";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [dark, setDark] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [spin, setSpin] = useState(false);

  const text = dark ? "#ffffff" : textLight;
  const bg = dark ? "#111" : "#ffffff";
  const cardBg = dark ? "#1c1c1c" : "#ffffff";
  const shadow = dark
    ? "0 4px 16px rgba(255,255,255,0.08)"
    : "0 4px 16px rgba(0,0,0,0.08)";

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/home");
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: bg,
        transition: "0.3s ease",
        color: text,
      }}
    >
      <header
        style={{
          width: "100%",
          background: green,
          padding: "14px 28px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 60,
        }}
      >
        <div style={{ display: "flex", gap: 25, alignItems: "center" }}>
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ fontSize: 26, cursor: "pointer", marginTop: 2 }}
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
              marginTop: 2,
              transition: "transform 0.4s ease",
              transform: spin ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            ⚙
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 70,
            left: 30,
            background: cardBg,
            color: text,
            padding: "12px 16px",
            borderRadius: 10,
            boxShadow: shadow,
            width: 180,
            fontSize: 15,
            zIndex: 999,
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
            color: text,
            padding: "12px 16px",
            borderRadius: 10,
            boxShadow: shadow,
            width: 180,
            fontSize: 15,
            zIndex: 999,
          }}
        >
          <div
            style={{
              cursor: "pointer",
              padding: "8px 0",
              borderBottom: `1px solid ${dark ? "#333" : "#ddd"}`,
            }}
            onClick={() => setDark(!dark)}
          >
            {dark ? "Light Mode" : "Dark Mode"}
          </div>
        </div>
      )}

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: 110,
        }}
      >
        <div
          style={{
            maxWidth: 380,
            width: "100%",
            padding: 30,
            background: green,
            borderRadius: 40,
            boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <div style={{ color: "white", fontWeight: 700, marginBottom: 12 }}>
            Rolsa Technologies
          </div>

          <h2 style={{ color: "white", marginBottom: 18 }}>Login</h2>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                marginBottom: 12,
                padding: "12px",
                borderRadius: 10,
                border: "none",
                background: grey,
                fontSize: 15,
                boxSizing: "border-box",
              }}
            />

            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                marginBottom: 12,
                padding: "12px",
                borderRadius: 10,
                border: "none",
                background: grey,
                fontSize: 15,
                boxSizing: "border-box",
              }}
            />

            <button
              type="submit"
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 10,
                border: "none",
                background: "white",
                color: textLight,
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
                boxSizing: "border-box",
              }}
            >
              Login
            </button>
          </form>

          <p style={{ marginTop: 15, color: "white" }}>
            Don’t have an account?{" "}
            <Link to="/signup" style={{ color: "#d9f5ff" }}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
