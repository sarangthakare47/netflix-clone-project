import React from 'react'
import './Home.css'
import Navbar from './../../components/Navbar/Navbar'
import rrr from './../../cards/rrrback.jpg'
import rrr_caption from './../../cards/rrrcaption.webp'
import play_img from './../../cards/play_icon.png'
import info_img from './../../cards/info_icon.png'
import TitleCards from '../../components/TitleCards/titlecards'
import Footer from '../../components/Footer/Footer'


const Home1 = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className="hero">
        <img src={rrr} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={rrr_caption} alt="" className='title-img' />
          <p>A fearless revolutionary and an officer in the British force, who once shared a deep bond, decide to join forces and chart out an inspirational path of freedom against the despotic rulers.</p>
          <div className="hero-buttons">
            <button className='btn'><img src={play_img} alt="" />Play</button>
            <button className='btn dark-btn'><img src={info_img} alt="" />Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"Only on Netflix"}/>
      <TitleCards title={"Hollywood Movies"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home1
