import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className= "gpt3__header section__padding" id="Home">
      <div className='gpt3__header-content'>
        <h1 className="gradient__text">We turn your vision into tangible results with GPT-3 OpenAI</h1>
        <p>Over 300 applications are delivering GPT-3–powered search, conversation, text completion, and other advanced AI features through our API.
        Developers can now fine-tune GPT-3 on their own data, creating a custom version tailored to their application. Customizing makes GPT-3 reliable for a wider variety of use cases and makes running the model cheaper and faster.
        </p>
        
        <div className="gpt3__header-content__input">
          <input type=""email placeholder="Your Email Adddress" />
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt-text="Photo of people who have accessed GPT-3 in the last 24 hours!" />
        </div>
        <p>1,600 people requested access to GPT-3 in the last 24 hours</p>
      </div>
      <div className="gpt3__header-image">
          <img src={ai} alt-text="Artist rendering of what an Artificial Intelligence face would resemble." />
      </div>
    </div>
  )
}

export default Header