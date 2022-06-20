import React from 'react';
import { google, slack, dropbox, atlassian, shopify } from './imports';
import './brand.css';

const Brand = () => {
  return (
    <div className='gtp3__brand section__padding'>
        <div>
          <img src={google} alt="Google Logo" />
        </div>
        <div>
          <img src={slack} alt="Slack Logo" />
        </div>
    </div>
  )
}

export default Brand