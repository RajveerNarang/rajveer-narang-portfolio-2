import React from 'react'
import '../Home/Home.scss'
import LogoR from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, <br /> I'm
            <img src={LogoR} alt="Rajveer" />
            ajveer Narang
            <br />
            Web Developer
          </h1>
          <h2>Frontend Developer / Writer / Photographer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
    </>
  )
}

export default Home
