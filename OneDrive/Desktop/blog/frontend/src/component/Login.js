import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  


axios.defaults.withCredentials = true;
  const handleSubmit = (e) => {
    e.preventDefault();
   axios.post('http://localhost:3001/login', {email, password})
   .then(res => {
    if(res.data === 'Success'){
        window.location.href = "/"
     }else{
      alert("Invalid Credentials")
     }
   })
   .catch(err => console.log(err))  
  };

  const showPassword = () => {
    let password = document.getElementById("pass");
    let checkbox = document.getElementById("check");
    if (checkbox.checked === true){
      password.type = "text";
      } else {
        password.type = "password";
        }
        


  }

  return (
    <>
      <div className='loginpage-view'>
        <div className='login-view'>
          <form onSubmit={handleSubmit}>
            <h1 style={{ textAlign: 'center' }}>Login</h1>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              className='form-control mb-3'
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor='password'>Password:</label>
            <input
              id='pass'
              type='password'
              className='form-control mb-2'
              onChange={(e) => setPassword(e.target.value)}
            />
           <div class="form-check">
              <input className="form-check-input checkbox" type="checkbox" value="" id="check"onClick={showPassword} />
              <label className='mb-2 checkbox-style' htmlFor='showpassword'>
                Show Password
              </label>
            </div>  

            <div className='button-view'>
              <button className='btn btn-primary w-100 mb-3'>Login</button>
              <Link to='/register'>Don't have an account</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
