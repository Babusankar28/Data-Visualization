const mongoose = require('mongoose');

const carSalesSchema = new mongoose.Schema({
  month: {
    type: String,
    required: true,
    enum: [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
      'September', 'October', 'November', 'December'
    ]
  },
  sedan: {
    type: Number,
    required: true
  },
  suv: {
    type: Number,
    required: true
  },
  truck: {
    type: Number,
    required: true
  },
  electric: {
    type: Number,
    required: true
  }
}, {
  timestamps: true 
});

const CarSales = mongoose.model('CarSales', carSalesSchema);

module.exports = CarSales;
