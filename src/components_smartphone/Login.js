import './css/Login.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import userInfo from '../data/user_data.json'
import LoginError from './LoginError'

export default function Login({setIsAuth}) {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)

  const handleLogin = () => {
    const matchUser = userInfo.find((user) => {
      return user.user === username
    })

    // userとして存在していたら
    if(matchUser){
      // パスワードの認証を行う
      if(matchUser.password === password){
        setIsAuth(true)
        localStorage.setItem("isAuth", true)
        navigate('/')
      }else{
        setShowError(true)
      }
    }else{
      setShowError(true)
    }
  }

  return (
    <div className='app-login'>
      {!showError ?
      <div className='app-login-card'>
        <h2 className='app-login-title'>Login from</h2>
        <div className='app-login-user'>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='app-login-pass'>
            <label htmlFor="pass">Password </label>
            <input type="password" id="pass" name="password"
                  minLength="8" onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button className='app-login-button' onClick={handleLogin}>login</button>
      </div>
      :
      <LoginError setShowError={setShowError} />
      }
    </div>

  )
}
