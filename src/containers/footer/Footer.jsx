import React from 'react';
import gpt3Logo from '../../assets/logo.svg'
import './footer.css';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gadient__text">Step into the future with our suite of tools.</h1>
      </div>
        <div className="gpt3__footer-btn">
            <p>Request Early Access</p>
        </div>
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="logo" />
            <p>New York, NY</p>
          </div>
            <div className="gpt3__footer-links_div"></div>
        </div>
    </div>
  )
}

export default Footer