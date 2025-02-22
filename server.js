
console.log("🚀 Starting server...");

const cors = require('cors');

app.use(cors({
    origin: '*',  // Allow requests from any origin
    methods: ['GET', 'POST'],  // Allow these request methods
    allowedHeaders: ['Content-Type', 'Authorization']  // Allow specific headers
}));

const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(cors());  // Allows frontend requests from different origins

// Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Wildcardqueen@1',
    database: process.env.DB_NAME || 'ps'
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('✅ Connected to MySQL');
    }
});

// Login Route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(sql, [username, password], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        if (results.length > 0) {
            res.json({ message: '✅ Login Successful' });
        } else {
            res.status(401).json({ message: '❌ Invalid Credentials' });
        }
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});

