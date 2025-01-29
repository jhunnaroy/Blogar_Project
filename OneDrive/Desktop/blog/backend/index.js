const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const path = require('path')
const UserModel = require('./models/Users')
const PostModel = require('./models/PostModel')




const app = express()
app.use(express.json()) 
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(cookieParser())




app.use(express.static('public'))



mongoose.connect('mongodb://127.0.0.1:27017/blog')



const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.json('The token is missing')
    } else {
        jwt.verify(token, 'jwt-secret-key', (err, decoded) => {
            if(err){
                return res.json('The token is wrong')
            } else {
                req.email =  decoded.email;
                req.name = decoded.name;
                next()
            } 
        })
    } 
}  


app.get('/', verifyUser, (req, res) => {
    return res.json({email: req.email, name: req.name})
})


app.post('/register', (req, res) => {
    const {name, age, email, password} = req.body;
    bcrypt.hash(password, 10)
    .then(hash => {
        UserModel.create({name, age, email, password:hash})
        .then(user => res.json(user))
        .catch(err => res.json(err))
    }).catch(err => console.log(err.message))
}) 


app.post('/login', (req, res) => {
    const {email, password} = req.body;    
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, (err, response) => {
                if(response){
                    const token = jwt.sign({ email: user.email, name: user.name }, "jwt-secret-key", { expiresIn: "1d" });
                    res.cookie('token', token)
                    return res.json('Success');
                } else {
                    return res.json('Password is incorrect')
                }
            })
        } else {
            res.json('User not exist')
        }
    })
});




const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, 'file.fieldname' + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

app.post('/create', verifyUser ,upload.single('file'), (req, res) => {
    PostModel.create({title: req.body.title, description: req.body.description, file: req.file.filename, email: req.body.email})
    .then(result => res.json('Success'))
    .catch(err => res.json(err))
})

app.get('/getposts', (req, res) => {
    PostModel.find()
    .then(posts => res.json(posts))
    .catch(err => res.json(err))
})


app.get('/getpostbyid/:id', (req, res) => {
    const id = req.params.id
    PostModel.findById({_id: id})
    .then(post => res.json(post))
    .catch(err => console.log(err))
})


app.put('/editpost/:id', (req, res) => {
    const id = req.params.id;
    PostModel.findByIdAndUpdate(
        {_id: id}, {title: req.body.title, description: req.body.description})
        .then(result => res.json('Success'))
        .catch(err => res.json(err))
})

// Modify the endpoint to return all posts
app.get('/myposts', verifyUser, (req, res) => {
    const userEmail = req.email;
  
    // Find posts based on the logged-in user's email
    PostModel.find({ email: userEmail })
      .then(posts => {
        res.json(posts);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  });
  



app.delete('/deletepost/:id', (req, res) => {
    PostModel.findByIdAndDelete({_id: req.params.id})
    .then(result => res.json('Success'))
    .catch(err => res.json(err))
})


app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json('Success')
})   

app.listen('3001', () => {
     console.log("Server is running on port 3001")
     console.log("Mongodb is Connected")
    })

    





