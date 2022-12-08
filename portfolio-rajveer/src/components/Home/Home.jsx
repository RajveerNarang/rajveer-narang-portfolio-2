import React, { useEffect, useState } from 'react'
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

  useEffect(() => {
    function hoverTime() {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
    hoverTime()
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _11`}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I'</span>
            <span className={`${letterClass} _14`}>m</span>
            <img src={LogoR} alt="Rajveer" />
            {/* ajveer Narang */}
            <AnimatedL
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            {/* Web Developer */}
            <AnimatedL letterClass={letterClass} strArray={jobArray} idx={28} />
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
