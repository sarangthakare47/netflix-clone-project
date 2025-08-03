import React from 'react'
import './Navbar.css'
import logo from './../../cards/netfliximg.png.png'
import search_icon from './../../cards/search_icon.svg'
import bell_icon from './../../cards/bell_icon.svg'
import profile_img from './../../cards/profile_img.png'
import caret_icon from './../../cards/caret_icon.svg'
import { logout } from '../../../firebase'
// import Login from '../../pages/Login/Login'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt=""/>
        <ul></ul>
        <li>Home</li>
        <li>Movies</li>
        <li>TV Shows</li>
        <li>My Watchlist</li>
        <li>Browse by Language</li>
      
      </div>
      <div className="navbar-right">
        <img src={search_icon} className='icons'/>
        <p>Children</p>
        <img src={bell_icon} className='icons'/>
        <div className="navbar-profile">
        <img src={profile_img} className='profile'/>
        <img src={caret_icon} alt="" className='caret'/>
        <div className="dropdown">
          <p onClick={()=>{logout()}}>Sign Out of Neflix</p>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Navbar
