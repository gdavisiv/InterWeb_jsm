import React from 'react';
import gpt3Logo from '../../assets/logo.svg'
import './footer.css';

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Step into the future with our suite of tools.</h1>
      </div>
        <div className="gpt3__footer-btn">
            <p>Request Early Access</p>
        </div>
        <div className="gpt3__footer-links">
          <div className="gpt3__footer-links_logo">
            <img src={gpt3Logo} alt="logo" />
            <p>3DMations, All Rights Reserved</p>
          </div>
            <div className="gpt3__footer-links_div">
              <h4>New to GPT-3?</h4>
              <p>What is an AI-Chatbot</p>
              <p>What is 3DMations</p>
              <p>Customer Service</p>
              <p>Versions</p>
            </div>
            <div className="gpt3__footer-links_div">
              <h4>About 3DMations</h4>
              <p>Our Story</p>
              <p>Blog</p>
              <p>Careers</p>
              <p>Give us your feedback</p>
            </div>
            <div className="gpt3__footer-links_div">
              <h4>Popular Links</h4>
              <p>New Release Features</p>
              <p>3DM for Startups</p>
              <p>3DM LIVE</p>
              <p>Newsletter Sign-Up</p>
            </div>
        </div>
        <div className="gpt3__footer-copyright">
          <p>© Copyright 2022 3DMations.  All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer