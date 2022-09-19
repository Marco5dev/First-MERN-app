// req models
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

// app
const app = express();

// db


// middleware
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));

// routes
const testRoutes = require("./routes/test");
app.use("/", testRoutes);

// port
const port = process.env.PORT || 8000;

// listen
app.listen(port, () => {
  console.log(`Server is ready on port : ${port}`);
});
