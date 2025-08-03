import React from 'react'
import './Footer.css'
import youtube_icon from './../../cards/cards2/youtube_icon.png'
import twitter_icon from '../../cards/cards2/twitter_icon.png'
import instagram_icon from '../../cards/cards2/instagram_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={youtube_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={instagram_icon} alt="" />
      </div>
      <ul>
      <li>Audio Description</li>
      <li>Media Centre</li>
      <li>Privacy</li>
      <li>Investor Relation</li>
      <li>Gift Cards</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Legal Notices</li>
      <li>Cookie Preferances</li>
      <li>Contact Us</li>
      <li>Corporate Information</li>
      </ul>
      <p className="copyright-text">1997-2023 Netflix,Inc.</p>
    </div>
  )
}

export default Footer
