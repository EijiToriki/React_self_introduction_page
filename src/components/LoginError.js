import React from 'react'
import "./css/LoginError.css"

export default function LoginError({setShowError}) {
  const backLogin = () => {
    setShowError(false)
  }
  return (
    <div className='login-error-content'>
      <p className='login-error-letter'>ユーザ名 または パスワードが違います</p>
      <button className='login-error-button' onClick={backLogin}>login画面へ</button>
    </div>
  )
}
