const mongoose = require('mongoose');

const schema = new mongoose.Schema(
  {
    sku: {
      // will the value of this attribute automatically apply to the items
      required: true,
      type: String,
      unique: true,
    },
    quantity: {
      // will the value of this attribute automatically apply to the items
      required: true,
      type: Number,
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);

module.exports = mongoose.model('Inventory', schema);
