import React from 'react';
import Logo from '../Logo/Logo'
import github from './github-logo.png';
import linkedin from './linkedin-logo.png';
import twitter from './twitter-logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <h5>This version of FaceIt is brought to you by</h5>
        <div className='dev-container'>
          <div className='dev'>
            <p>Connie Hong </p>
              <div className='links'>
                <a href='https://github.com/conconartist'><img src={github} alt='Connie GitHub' /></a>
                <a href='https://www.linkedin.com/in/connie-h-hong/'><img src={linkedin} alt='Connie LinkedIn' /></a>
                <a href='https://twitter.com/conconartist?ref_src=twsrc%5Etfw' class='twitter-follow-button' data-show-count='false'><img src={twitter} alt='Connie Twitter' /></a>
              </div>
          </div>
        </div>
        <h4>To view the original version, you can find it here:</h4>
          <div className='links'>
            <a href='https://github.com/conconartist/face-it'><img src={github} alt='FaceIt Repository' /></a>
          </div>
      <Logo />
    </footer>
  )
}

export default Footer;
