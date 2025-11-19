// server.js - backend for Rolsa login/signup using SQL (SQLite)

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcrypt');
const cors = require('cors');

const app = express();

// This will create rolsa.db in the same folder as server.js if it doesn't exist
const db = new sqlite3.Database('./rolsa.db');

// Middleware
app.use(cors());
app.use(express.json());

// --- SQL: Create users table if it does not exist ---
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    full_name     TEXT NOT NULL,
    email         TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    country       TEXT,
    phone         TEXT,
    address       TEXT,
    postcode      TEXT,
    created_at    DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

// --- SIGN UP ENDPOINT ---
app.post('/api/signup', (req, res) => {
  const { fullName, email, password, country, phone, address, postcode } = req.body;

  if (!fullName || !email || !password) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) return res.status(500).json({ message: 'Error hashing password' });

    const sql = `
      INSERT INTO users (full_name, email, password_hash, country, phone, address, postcode)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(sql, [fullName, email, hash, country, phone, address, postcode], function (err) {
      if (err) {
        if (err.code === 'SQLITE_CONSTRAINT') {
          // UNIQUE(email) violated
          return res.status(409).json({ message: 'Email already registered' });
        }
        console.error(err);
        return res.status(500).json({ message: 'Database error' });
      }

      return res.status(201).json({
        message: 'User created',
        userId: this.lastID,
      });
    });
  });
});

// --- LOGIN ENDPOINT ---
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' });
  }

  const sql = `
    SELECT id, full_name, password_hash
    FROM users
    WHERE email = ?
  `;

  db.get(sql, [email], (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    bcrypt.compare(password, user.password_hash, (err, same) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Error checking password' });
      }

      if (!same) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      return res.json({
        message: 'Login successful',
        userId: user.id,
        fullName: user.full_name,
      });
    });
  });
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
