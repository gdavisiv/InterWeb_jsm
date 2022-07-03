import React from 'react';
import Feature from '../../containers/features/Features';
import './what3DM.css';

const What3DM = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature title="What is GPT-3?" text="Generative Pre-trained Transformer 3 is an autoregressive language model that uses deep learning to produce human-like text. It is the third-generation language prediction model in the GPT-n series created by OpenAI, a San Francisco-based artificial intelligence research laboratory"/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The endless applications are beyond your imagination!</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature title="Chatbots" text="Discover which Chatbots apps are powered by GPT-3. An overview of the best Chatbots tools listed on our app store."/>
        <Feature title="Knowledge Base" text="An overview of the best Knowledge Base tools listed on our app store. Discover which Knowledge Base apps are powered by GPT-3. | GPT-3 showcase."/>
        <Feature title="Education" text="GPT-3 can be used to help students write better essays, reports, speeches and stories. The AI-based tool is capable of analyzing more than a hundred thousand sentences per second to ensure that the content being produced is grammatically correct."/>
      </div>
    </div>
  );
}

export default What3DM;