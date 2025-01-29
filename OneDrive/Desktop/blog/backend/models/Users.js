const mongoose = require('mongoose')

UserSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})
UserModel = mongoose.model('data', UserSchema)



module.exports = UserModel;