import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import axios from 'axios'

export default function Navbar() {
  const user = useContext(userContext)
  const navigate = useNavigate()

  
  const handleLogout = () => {
    axios.get('http://localhost:3001/logout')
    .then(res => {
      if(res.data === "Success")
        navigate(0)
    }).catch(err => console.log(err))
  }


  return (
    
<nav className='navbar-header'>    
    <Link to='/'>
        <img src="./Images/bloggernav.png" alt="" />
    </Link>
     <div>
        <Link to='/'         className="link">Dashboard</Link>
        {
          user.name ?
          <Link to='/create'   className="link">Create</Link>
          :
          <></>
        }
        {
          user.name ?
          <Link to='/mypost'  className="link">My Post</Link>
          :
          <></>
        }       
        
     </div>
    {
      user.name ?
      <div>
        <input type="button" className='nav-link fs-4' name="logout" id="session" value= 'Logout' onClick={handleLogout} />
      </div>
      :
      <div>
      <Link to='/register' className='view '><h5>Register</h5></Link>
      <Link to='/login' className='view'><h5>Login</h5></Link>
  </div>  
    }   
</nav>
    
  )
}
 