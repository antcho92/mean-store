var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new mongoose.Schema({
  _customer: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  _product: {
    type: Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: {
    type: Number
  }
}, {
  timestamps: true
})

mongoose.model('Order', orderSchema);
