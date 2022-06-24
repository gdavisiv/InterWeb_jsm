import React from 'react';
//Helper line to import out assets easily
import { google, slack, dropbox, atlassian, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt="Google Logo" />
    </div>
    <div>
      <img src={slack} alt="Slack Logo" />
    </div>
    <div>
      <img src={atlassian} alt="Atlassian Logo" />
    </div>
    <div>
      <img src={dropbox} alt="Dropbox Logo" />
    </div>
    <div>
      <img src={shopify} alt="Shopify Logo"/>
    </div>
  </div>
);

export default Brand;