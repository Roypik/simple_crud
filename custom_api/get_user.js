const pool = require("../Helper/postgres");

const get_user = async function fetchData() {
  try {
    const result = await pool.query("SELECT * FROM public.users");
    return result.rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    return { error: error.message };
    // res.status(500).json({ error: error.message });
  }
};

module.exports = get_user;
