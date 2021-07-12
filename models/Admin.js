const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Create Schema

const AdminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  phone: {
    type: Number,
    required: true,
  },
  admin_id: {
    type: String,
  },
});

module.exports = mongoose.model('Admin', AdminSchema);
