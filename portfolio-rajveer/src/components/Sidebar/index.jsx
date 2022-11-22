import './index.scss'
import React from 'react'
import LogoS from '../../assets/images/logo-s.png'
import LogoSub from '../../assets/images/logo_sub.png'
const SideBar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="LogoR" />
          <img className="sub-logo" src={LogoSub} alt="Rajveer" />
        </Link>
      </div>
    </>
  )
}

export default SideBar
