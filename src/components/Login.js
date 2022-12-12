import React from 'react'
import './css/Login.css'

export default function Login() {
  const handleLogin = () => {

  }


  return (
    <div className='app-login'>
      <div className='app-login-card'>
        <h2 className='app-login-title'>Login from</h2>
        <div className='app-login-user'>
          <label for="username">Username</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className='app-login-pass'>
            <label for="pass">Password </label>
            <input type="password" id="pass" name="password"
                  minlength="8" required />
        </div>
        <button className='app-login-button' onClick={handleLogin}>login</button>
      </div>
    </div>
  )
}
