const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')
const findOrCreate = require('mongoose-find-or-create')

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

userSchema.plugin(findOrCreate)
userSchema.plugin(uniqueValidator); // add validation to username
const User = mongoose.model('User', userSchema)

module.exports = User