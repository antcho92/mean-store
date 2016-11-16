var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name cannot be blank'],
    unique: true,
    minlength: [3, 'Must be at least 3 chars'],
    maxlength: [20, 'Must be less than 20 chars'],
    validate:[{
      validator: function(name) {
        // email regex
        return /^\w+\s?\w*$/.test(name);
      },
      message: '{VALUE} is not a valid name'
    }]
  },
  orders: [{
    type: Schema.Types.ObjectId,
    ref: 'Order'
  }]
}, {
  timestamps: true
});

mongoose.model('Customer', customerSchema);
