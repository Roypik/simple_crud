const express = require("express");
// const pool = require("./config/db");
const pool = require("../Helper/postgres");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Get all users (Example Query)
app.get("/users", async (req, res) => {
  try {
    // console.log("Starting application...");
    const result = await pool.query("SELECT * FROM public.user_log");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: error.message });
  }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
