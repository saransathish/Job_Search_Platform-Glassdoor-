import React, { useState } from 'react';
import './css/reportbtn.css'; 
const RoundButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsClicked(false);
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="button-container">
      <div 
        className="round-button" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave} 
        onClick={handleClick}
      >
        <span className="dots">...</span>
        {(isHovered || isClicked) && <button className="report-button">Report</button>}
      </div>
    </div>
  );
};

export default RoundButton;
