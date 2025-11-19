// src/SignUp.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const green = "#009130";
const grey = "#f5f5f5";
const textLight = "#222";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [phoneCode, setPhoneCode] = useState("+44");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [postcode, setPostcode] = useState("");

  const [dark, setDark] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [spin, setSpin] = useState(false);

  const text = dark ? "#fff" : textLight;
  const bg = dark ? "#111" : "#fff";
  const cardBg = dark ? "#1b1b1b" : "#fff";
  const shadow = dark
    ? "0 4px 16px rgba(255,255,255,0.08)"
    : "0 4px 16px rgba(0,0,0,0.08)";

  const navigate = useNavigate();

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
        color: text,
        transition: "0.3s ease",
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

        <div></div>
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
            borderRadius: 12,
            boxShadow: shadow,
            width: 180,
            fontSize: 15,
          }}
        >
          <div
            style={{
              padding: "8px 0",
              cursor: "pointer",
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
            width: "100%",
            maxWidth: 360,
            background: green,
            padding: 30,
            borderRadius: 40,
            boxShadow: "0 8px 28px rgba(0,0,0,0.15)",
            textAlign: "center",
          }}
        >
          <div style={{ color: "white", fontWeight: 700, marginBottom: 12 }}>
            Rolsa Technologies
          </div>

          <h2 style={{ color: "white", marginBottom: 18 }}>Sign Up</h2>

          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <div style={{ width: "94%", marginBottom: 12 }}>
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 10,
                  border: "none",
                  background: grey,
                }}
              />
            </div>

            <div style={{ width: "94%", marginBottom: 12 }}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 10,
                  border: "none",
                  background: grey,
                }}
              />
            </div>

            <div style={{ width: "94%", marginBottom: 12 }}>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 10,
                  border: "none",
                  background: grey,
                }}
              />
            </div>

            <div style={{ width: "94%", marginBottom: 12 }}>
              <input
                type="text"
                placeholder="Country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: 10,
                  border: "none",
                  background: grey,
                }}
              />
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <select
                value={phoneCode}
                onChange={(e) => setPhoneCode(e.target.value)}
                style={{
                  width: "32%",
                  padding: "12px",
                  borderRadius: 10,
                  border: "none",
                  background: grey,
                }}
              >
                <option value="+44">UK +44</option>
                <option value="+1">USA +1</option>
              </select>

              <input
                type="number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                style={{
                  width: "68%",
                  padding: "12px",
                  borderRadius: 10,
                  border: "none",
                  background: grey,
                }}
              />
            </div>

            <div
              style={{
                width: "100%",
                display: "flex",
                gap: 10,
                marginBottom: 12,
              }}
            >
              <input
                type="text"
                placeholder="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                style={{
                  width: "65%",
                  padding: "12px",
                  borderRadius: 10,
                  border: "none",
                  background: grey,
                }}
              />

              <input
                type="text"
                placeholder="Postcode"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
                required
                style={{
                  width: "35%",
                  padding: "12px",
                  borderRadius: 10,
                  border: "none",
                  background: grey,
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: 12,
                borderRadius: 10,
                border: "none",
                background: "white",
                color: textLight,
                fontWeight: 600,
                cursor: "pointer",
                marginTop: 5,
              }}
            >
              Sign Up
            </button>
          </form>

          <p style={{ marginTop: 15, color: "white" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "#d9f5ff" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
