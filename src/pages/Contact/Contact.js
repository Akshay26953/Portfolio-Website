import React from 'react'
import '../../utils.css'
import './Contact.scss'

function Contact() {
  return (
    <div className='containerAbout centerX'>
    <p className='title heading centerX'>CONTACT</p>
    <p className='para centerX'><h2><img src="./Assets/513.gif" alt="" /></h2><br />
    You can connect with me and contact me on any of these platforms...</p>
    <p className="subhead centerX"> Let's connect </p>
      <div className="contactSocial">
        <div className="socialLogo linkedin">
            <a href="https://www.linkedin.com/in/kharatakshay/" target="_blank" rel='noreferrer'><i className="fa-brands fa-linkedin-in"></i></a>
        </div>
        <div className="socialLogo github">
            <a href="https://github.com/Akshay26953" target="_blank" rel='noreferrer'><i className="fa-brands fa-github"></i></a>
        </div>
        <div className="socialLogo insta">
            <a href="https://www.instagram.com/a.k.5.3/" target="_blank" rel='noreferrer'><i className="fa-brands fa-instagram"></i></a>
        </div>
        <div className="socialLogo google">
            <a href="mailto:amkharat2695@gmail.com" ><i className="fa-brands fa-google"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Contact