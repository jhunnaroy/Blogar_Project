import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Register() {
  const [name, setName] =useState()
  const [age, setAge] =useState()
  const [email, setEmail] =useState()
  const [password, setPassword] =useState()
  const navigate = useNavigate()  




  const handleSubmit = (e) => { 
    e.preventDefault()
    axios.post("http://localhost:3001/register", {name, age, email, password}) 
  .then(result => {console.log(result)
    let passone = document.getElementById('pass')
    let passree = document.getElementById('repass')
    if (passone.value !== passree.value) {
      alert("Passwords do not match.")
      return false;
      } else {
        navigate('/login')
        }
    
  })  
  .catch(err => console.log(err));
  }



  return (    
    <>
    <div className='registerpage-view'>     
      <div className='register-view'>
        <form onSubmit={handleSubmit}>
        <h1 style={{textAlign:'center'}}>Register</h1>
        <label htmlFor="name">Name:</label>
        <input type="text" className='form-control mb-3'
        onChange={(e) => setName(e.target.value)}/>


        <label htmlFor="age">Age:</label>
        <input type="number" className='form-control mb-3'
        onChange={(e) => setAge(e.target.value)}/>


        <label htmlFor="email">Email:</label>
        <input type="email" className='form-control mb-3'
        onChange={(e) => setEmail(e.target.value)}/>


        <label htmlFor="password">Password:</label>
        <input id='pass' type="password" className='form-control mb-3'
        onChange={(e) =>setPassword(e.target.value)} />
        <label htmlFor="password">ReEnter Password:</label>
        <input type="text" id='repass'  className='form-control mb-3'
        onChange={(e) =>setPassword(e.target.value)} />


        <div className='button-view'>
        <button className='btn btn-primary w-100 mb-2'>Register</button>
        <Link to ='/login' >Already have an account</Link>
        </div>
        </form>
      </div>
    </div>
    </>
  )
}
