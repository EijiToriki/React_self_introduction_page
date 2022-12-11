import React from 'react'
import './css/Navbar.css'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightToBracket, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  return (
    <nav className='app-nav'>
      <div className='app-nav-title'>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/">
          Self Introduction Page
        </Link>
      </div>
      <div className='app-nav-login'>
        <Link style={{ textDecoration: 'none', color: 'black' }} to="/login"><FontAwesomeIcon icon={faArrowRightToBracket} />ログイン</Link>
      </div>
    </nav>
  )
}
