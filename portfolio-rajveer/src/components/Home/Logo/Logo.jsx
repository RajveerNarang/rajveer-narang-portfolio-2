import React from 'react'
import './Logo.scss'
import LogoR from '../../../assets/images/logo-s.png'
import { LazyLoadImage } from 'react-lazy-load-image-component'

const Logo = () => {
  return (
    <>
      <div className="logo-container">
        <LazyLoadImage className="solid-logo" src={LogoR} alt="R-Logo" />
      </div>
    </>
  )
}

export default Logo
