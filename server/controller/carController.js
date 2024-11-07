const CarSales = require("../model/carSaleModel");

const getCar = async (req, res) => {
  try {
    const carSales = await CarSales.find({});
    res.status(200).json({ success: true, data: carSales });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getCar };
