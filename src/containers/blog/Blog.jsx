import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Troubleshooting and how-to tips for GPT3 products</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="May 23, 2022" title="Overview: The OpenAI API is powered by a family of models with different capabilities and price points." />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="April 5, 2022" title="What is GPT3: Our models can understand and generate natural language." />
          <Article imgUrl={blog03} date="Feb 17, 2022" title="How to use Ada: usually the fastest model and can perform tasks like parsing text." />
          <Article imgUrl={blog04} date="Jan 29, 2022" title="Feature-specific models: The main GPT-3 models are meant to be used with the text completion endpoint" />
          <Article imgUrl={blog05} date="Jan 11, 2022" title="What is Curie: Curie is extremely powerful, yet very fast. While Davinci is stronger when it comes to analyzing"/>
        </div>
      </div>
    </div>
  )
}

export default Blog