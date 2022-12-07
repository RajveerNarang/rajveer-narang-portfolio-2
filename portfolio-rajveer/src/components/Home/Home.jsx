import React, { useState } from 'react'
import '../Home/Home.scss'
import LogoR from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedL from '../AnimatedLetters/AnimatedL'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [
    'a',
    'j',
    'v',
    'e',
    'e',
    'r',
    ' ',
    'N',
    'a',
    'r',
    'a',
    'n',
    'g',
  ]
  const jobArray = [
    'W',
    'e',
    'b',
    ' ',
    'D',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi, <br /> I'm
            <img src={LogoR} alt="Rajveer" />
            {/* ajveer Narang */}
            <AnimatedL
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
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
