var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name cannot be blank'],
    unique: true
  },
  image: {
    type: String,
    default: 'https://redeem.tokenly.com/images/catalog_default.gif'
  },
  description: {
    type: String,
  },
  quantity: {
    type: Number,
    min: [0, 'insufficient product quantity']
  },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }]
}, {
  timestamps: true
})

mongoose.model('Product', productSchema);
