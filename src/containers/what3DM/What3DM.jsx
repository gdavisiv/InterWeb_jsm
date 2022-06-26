import React from 'react';
import { Feature } from '../../components';
import './what3DM.css';

const What3DM = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient-text">The endless applications are beyond your imagination!</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-component">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  )
}

export default What3DM