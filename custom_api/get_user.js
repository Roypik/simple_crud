// const express = require('express');
const pool = require("../Helper/postgres");

// const app = express();

// var a = app.get("/users", async (req, res) => {
    // try {
    //     const result = await pool.query(
    //         "SELECT username, useraccount, groupname, last_login FROM public.user_log;"
    //     );
    //     res.json(result.rows);
    // } catch (error) {
    //     console.error("Error fetching users:", error);
    //     res.status(500).json({ error: error.message });
    // }
// });

var aa = (async () => {
    try {
        const result = await pool.query("SELECT username, useraccount, groupname, last_login FROM public.user_log;");
        return result.rows;
    } catch (error) {
        console.error("Error fetching users:", error);
        return null;
    }
})();


module.exports = aa;
