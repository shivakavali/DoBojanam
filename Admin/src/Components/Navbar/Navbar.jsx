import React from 'react'
import assets from '../../admin_assets/assets.js'
import './Navbar.css';
const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <img className = "logo" src={assets.logo} alt="" />
        <img className = "profile" src={assets.profile_image} alt="" />
      </div>
    </div>
  )
}

export default Navbar
