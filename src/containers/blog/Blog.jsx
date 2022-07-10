import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Troubleshooting <br /> and how-to tips with our Knowledgebase</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article imgUrl={blog01} date="May 23, 2022" text = "Overview: The OpenAI API is powered by a family of models with different capabilities and price points." />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={blog02} date="April 5, 2022" text = "What is GPT3: Our models can understand and generate.." />
          <Article imgUrl={blog03} date="Feb 17, 2022" text = "How to use Ada: usually the fastest model and can perform.." />
          <Article imgUrl={blog04} date="Jan 29, 2022" text = "Feature-specific models: The main GPT-3 models are meant to be.." />
          <Article imgUrl={blog05} date="Jan 11, 2022" text = "What is Curie: Curie is extremely powerful, yet very fast. While.." />
        </div>
      </div>
    </div>
  )
}

export default Blog;