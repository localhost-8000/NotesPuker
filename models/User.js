const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String
  },
  image: {
    type: String,
  },
  collegeName: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  pdfs: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pdfs'
  }]
})

module.exports = mongoose.model('User', UserSchema)
