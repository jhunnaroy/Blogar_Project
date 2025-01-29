import React from 'react';


export default function Footer() {
  return (
    <footer className='footer-view'>
      <div className="first-controler">
        <label className="logo-address">
            <div className='row'>
                <div className='col-2'>
                <img src="./Images/blogger.png"  alt="Fantasy Blogger Logo" className="logo" />
                </div>
                <div className='col-10'>
                <div className='address ms-5'>
                    <h5>Fantasy Blogger</h5>
                    <p>175 FOREST STREET</p>
                    <p>JAIPUR RAJASTHAN</p>
                    <p>PIN 302019</p>
          </div>
                </div>
            </div>
          
         
        </label>
      </div>

      <div className="second-controler ">
        <h5 className='nav-link text-primary '>Follow US.</h5>
        <div className="social-icons mb-3">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <img src='./Images/instagram.png' alt="Instagram Logo" className="social-icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img src='./Images/facebook.png' alt="Facebook Logo" className="social-icon" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img src='./Images/twitter.png' alt="Twitter Logo" className="social-icon" />
          </a>
          <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
            <img src='./Images/telegram.png' alt="Telegram Logo" className="social-icon" />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <img src='./Images/github.png' alt="GitHub Logo" className="social-icon" />
          </a>
        </div>
        <h5 className='nav-link text-primary'>Visit Us:-</h5>
        <ul className='list-view'>            
          <li>Map & Direction</li>
          <li>Plan your visit.</li>
          <li>Virtual tour.</li>
        </ul>
      </div>

      <div className="third-controler">
        <div>
          <h5 className='nav-link text-primary mb-4 '>Support US:-</h5>
          <button className='btn btn-light mb-5'>Make A Gift.</button>
        </div>
        <div>
          <h5 className='nav-link text-primary mb-1'>Work with us:-</h5>
          <p >View Jobs.</p>
        </div>
      </div>

      <div className="fourth-controler mb-3">
        <h5 className='nav-link text-primary mb-2'>Resources & Links:-</h5>
<div className='row mb-5'>
    <div className='col-6'>
    <ul className='list-view ms-5'>
          <li>Library</li>
          <li>Title IX</li>
          <li>Register</li>
        </ul>
    </div>
    <div className='col-6'>
    <ul className='list-view float-left'>
          <li>Blackboard</li>
          <li>My Bentley</li>
          <li>Emergency info</li>
        </ul>
    </div>
</div>
        
        
      </div>
    </footer>
  );
}
