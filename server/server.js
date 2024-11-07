const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const productRouter = require("./routes/productRouter");
require("dotenv").config();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());

// Routes
app.use("/api", productRouter);

mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    console.log("Database is connected");
    app.listen(port, () => console.log(`Server is running on port : ${port}`));
  })
  .catch((err) => console.log(err));
