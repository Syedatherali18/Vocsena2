import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className="bodyContainer">
      <div className="serviceSection">
        <div className='serviceItemWebsite'>
          <a href="no">
            <Link to="./website">
              <h2>Website</h2>
              <span className='label-website'>Web Design</span>
              <span className='label-website'>E-commerce Solutions</span>
              <span className='label-website'>Mobile Responsiveness</span>
              <span className='label-website'>Revamping Website</span>
            </Link>
          </a>
        </div>
      </div>
      <div className="serviceSection">
        <div className='serviceItemGraphics'>
          <a href="no">
            <Link to="./Graphics">
            <h2>Graphics</h2>
              <span className='label-graphics'>Logo Designer</span>
              <span className='label-graphics'>Video Editer</span>
              <span className='label-graphics'>Content Manager</span>
              <span className='label-graphics'>Thumbnail Designer</span>
            </Link>
          </a>
        </div>
      </div>
      <div className="serviceSection">
        <div className='serviceItemBranding'>
          <a href="no">
            <Link to="./Branding">
            <h2>Branding</h2>
            <span className='label-branding'>SEO</span>
              <span className='label-branding'>Blog Writer</span>
              <span className='label-branding'>Finance & Plans</span>
              <span className='label-branding'>Roadmap</span>
            </Link>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Body;
