const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
  user:{
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  day: {
    type: String,
    required: true
  },
  hour: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Messages', MessageSchema);