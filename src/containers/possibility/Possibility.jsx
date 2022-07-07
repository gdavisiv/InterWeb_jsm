import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="Future Possibilities with GPT-3"></img>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request early access to get started.</h4>
        <h1 className="gradient__text">The possibilities are endless, turn your company vision into tangible results!</h1>
        <p>Get started today, and one of our skilled professional will contact you at your earlist convenience.  We strive to make sure your transiition will be a smooth and painless process.</p>
        <h4>Click here to schedule your consultation.</h4>
      </div>
    </div>
  )
}

export default Possibility