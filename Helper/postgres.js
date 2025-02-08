const { Pool } = require('pg');
// const { Sequelize } = require("sequelize");
require("dotenv").config();

var pool = new Pool({
    host: process.env.PG_HOST,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_NAME,
    port: process.env.PG_PORT,
    max: 10, // Maximum number of clients in the pool
    idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
});


pool
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Connection error", err));

module.exports = pool;

// const config = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: "postgres",
//     port: process.env.DB_PORT,
//     logging: false, // Set to true if you want to see SQL queries
//   }
// );

// sequelize
//   .authenticate()
//   .then(() => console.log("Database connected..."))
//   .catch((err) => console.error("Database connection error:", err));

// module.exports = sequelize;