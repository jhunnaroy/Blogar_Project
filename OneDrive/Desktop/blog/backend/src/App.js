import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { createContext, useEffect, useState } from 'react'
import axios from 'axios';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Create from './component/CreatePost';
import Register from './component/Register';
import Login from './component/Login';
import Footer from './component/Footer';
import Post from './component/Post';
import EditPost from './component/EditPost';
import MyPost from './component/MyPost';




export const userContext = createContext()

function App() {
  const [user, setUser] = useState({})


  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:3001/')
    .then(user => {
      setUser(user.data)
    })
      .catch(err => console.log(err))
    }, [])
  


  return (
    <div className="App">
    <userContext.Provider value = {user}>
   <Router>
    <Navbar/>    
    <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/create' element={<Create />}></Route>
        <Route exact path='/mypost' element={<MyPost />}></Route>
        <Route exact path='/register' element={<Register />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/post/:id' element={<Post />}></Route>
        <Route exact path='/editpost/:id' element={<EditPost />}></Route>
    </Routes>   
        <Footer/>
   </Router>
   </userContext.Provider>
   </div>
  );
}

export default App;
