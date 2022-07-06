import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Implementing GPT-3 for Business',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Tristique senectus et netus et malesuada.',
  },
  {
    title: 'Educating your workforce',
    text: 'Lorem ipsum dolor sit amet, tempor incididunt ut labore et dolore magna aliqua. Tristique senectus et netus et malesuada.',
  },
  {
    title: 'Cost and Maintenance',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Tristique senectus et netus et malesuada.',
  },
  {
    title: 'Providing Support for different Organizations',
    text: 'Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Tristique senectus et netus et malesuada.',
  },
];


const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is Now.  Position your business on the cutting edge of AI Technology powered by GPT-3.</h1>
        <p>Request Early Access to get started Today!</p>
      </div>
        <div className="gpt3__features-container">
          {featuresData.map(( item, index) => (
            <Feature title={item.title} text={item.text} key={item.title + index} />
          ))}
        </div>
    </div>
  )
}

export default Features