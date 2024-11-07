const express = require("express");
const { getCar } = require("../controller/carController");
const productRouter = express.Router();

productRouter.get("/get-car", getCar);

module.exports = productRouter;
