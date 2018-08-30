const mongoose = require('mongoose');
Schema = mongoose.Schema;

const ordersSchema = new Schema({
     // _user: {
     //      type: Schema.Types.ObjectId,
     //      ref: 'User'
     //      },
     // paymentMethod: String,
     // dishes: [{
     //      type: Schema.Types.ObjectId,
     //      ref: 'Dish'
     //      }],
     // totalPrice: Number

      name : String,
      price : Number
     });

const Order = mongoose.model('Order', ordersSchema)

module.exports = Order;