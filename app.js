const express = require("express");
const createError = require("http-errors");
// const dotenv = require('dotenv').config();

const app = express();

// Middleware
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const Route = require("./Routes/path");
app.use("/api", Route);

// 404 handler and pass to error handler
app.use((req, res, next) => {
  /*
  const err = new Error('Not found');
  err.status = 404;
  next(err);
  */
  // You can use the above code if your not using the http-errors module
  next(createError(404, "Not found"));
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
