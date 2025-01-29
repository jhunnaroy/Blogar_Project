const mongoose = require('mongoose')

PostSchema = new mongoose.Schema({
    title: String,    
    description: String,
    file: String,
    email: String
})
PostModel = mongoose.model('posts', PostSchema)



module.exports = PostModel;
