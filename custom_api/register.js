const pool = require("../Helper/postgres");
const bcrypt = require("bcryptjs");

var register = async function regis(req) {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const userCheck = await pool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    if (userCheck.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    // // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Insert user into database
    const newUser = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id, username, email",
      [username, email, hashedPassword]
    );

    // return { message: "User registered successfully" };
    return { message: "User registered successfully", user: newUser.rows[0] };
  } catch (error) {
    console.error(error);
    return { error: "Server error" };
  }
};

module.exports = register;
