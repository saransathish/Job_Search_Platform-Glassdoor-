import React from 'react';
import './Featurecomp.css';
import image1 from './images/joincomunity.png'
import image2 from './images/applyjob.png'
import image3 from './images/searchcompany.png'
import image4 from './images/comparesalary.png'

const GlassdoorFeatureComponent: React.FC = () => {
  return (
    <div className="feature-container">
      <h1 className="feature-heading">Get ahead with Glassdoor</h1>
      <p className="feature-content">
        We're serving up trusted insights and anonymous conversation, so  <br />you'll have the goods you need to succeed.
      </p>
      <div className="cards-container">
        <div className="card">
          <img src={image1} alt="Feature 1" className="card-image" />
          <p className="card-name">Join your work community</p>
        </div>
        <div className="card">
          <img src={image2} alt="Feature 2" className="card-image" />
          <p className="card-name">Find and apply to jobs</p>
        </div>
        <div className="card">
          <img src={image3} alt="Feature 3" className="card-image" />
          <p className="card-name">Search company reviews</p>
        </div>
        <div className="card">
          <img src={image4} alt="Feature 4" className="card-image fourthcard" />
          <p className="card-name">Compare salaries</p>
        </div>
      </div>
    </div>
  );
}

export default GlassdoorFeatureComponent;
