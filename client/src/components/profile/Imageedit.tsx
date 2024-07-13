
import React, { useState, useRef } from 'react';
import './css/imageedit.css';

interface MagnifierProps {
  src: string;
  width: number;
  height: number;
  zoom: number;
}

const Magnifier: React.FC<MagnifierProps> = ({  src , zoom }) => {
 const width = 150
 const height = 150
  const [isMagnifierVisible, setIsMagnifierVisible] = useState(false);
  const [lensPosition, setLensPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (imgRef.current) {
      const { left, top } = imgRef.current.getBoundingClientRect();
      const x = e.pageX - left - window.pageXOffset;
      const y = e.pageY - top - window.pageYOffset;
      setLensPosition({ x, y });
    }
  };

  const getLensStyle = () => {
    const { x, y } = lensPosition;
    const backgroundX = (x / width) * 100;
    const backgroundY = (y / height) * 100;

    return {
      left: x - 35,
      top: y - 35,
      backgroundPosition: `${backgroundX}% ${backgroundY}%`,
    };
  };

  return (
    <div
      className={`image-container ${isMagnifierVisible ? 'blur-background' : ''}`}
      style={{ width, height ,borderRadius:100}}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsMagnifierVisible(true)}
      onMouseLeave={() => setIsMagnifierVisible(false)}
    >
      <img ref={imgRef} src={src} alt="Magnifiable" className="main-image" />
      {isMagnifierVisible && (
        <div
          className="magnifier-lens"
          style={{
            ...getLensStyle(),
            width: 70,
            height: 70,
            backgroundImage: `url(${src})`,
            backgroundSize: `${width * zoom}px ${height * zoom}px`,
          }}
        ></div>
      )}
      {isMagnifierVisible && (
        <div
          className="magnifier-result"
          style={{
            borderRadius:150,
            backgroundColor:'grey',
            backgroundImage: `url(${src})`,
            backgroundSize: `${width * zoom}px ${height * zoom}px`,
            backgroundPosition: `${(lensPosition.x / width) * 100}% ${(lensPosition.y / height) * 100}%`,
          }}
        ></div>
      )}
    </div>
  );
};

export default Magnifier;
