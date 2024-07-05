import React from 'react';
import './NewFeatureComponent.css';

const NewFeatureComponent: React.FC = () => {
  return (
    <div className="feature-contain">
      <p className="feature-text">
        Find out what's new at Glassdoor
      </p>
      <div className="video-container">
      <iframe src="https://player.vimeo.com/video/842965854?title=0&amp;portrait=0&amp;speed=0&amp;autoplay=1&amp;pip=0&amp;quality=undefined&amp;app_id=122963&amp;texttrack=undefined" width="608" height="342"  allow="autoplay; fullscreen; picture-in-picture; clipboard-write" title="Glassdoor - Now You're Talking" data-ready="true"></iframe>
        {/* <video controls>
          <source src="your-video-url.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
      </div>
      <p className="feature-text1">
        Your career journey is serious, but should never be lonely or dull. With <br/>the new Glassdoor, work communities are right at your fingertips.
      </p>
    </div>
  );
}

export default NewFeatureComponent;
