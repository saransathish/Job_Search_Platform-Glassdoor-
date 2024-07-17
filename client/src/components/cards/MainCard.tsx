import React, { useState } from 'react';
import './css/cards.css';
import { SmallCards } from './SmallCards';
import { LargeCard } from './LargeCard';
import { Job } from '../../models/model';

interface MainCardProps {
  jobs: Job[];
  initialSelectedCardContent: Job | null;
  loading?: boolean;
}

const MainCard: React.FC<MainCardProps> = ({ jobs, initialSelectedCardContent }) => {
  const [selectedCardContent, setSelectedCardContent] = useState<Job | null>(initialSelectedCardContent);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  const handleCardClick = (card: Job) => {
    setSelectedCardContent(card);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className='maincnt' style={{ height: '100vh' }}>
      <div className='smallcards' style={{ overflowY: 'auto', padding: '0px', borderRight: '0.5px solid #ccc' }}>
        {jobs.map((card: Job) => (
          <div className='smallcard'
            key={card.jobId}
            style={{
              margin: '10px 0',
              width: "90%",
              cursor: 'pointer',
              borderRadius: '0px',
              paddingBottom:'10px'
            }}
            onClick={() => handleCardClick(card)}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <SmallCards content={card} />
          </div>
        ))}
      </div>
      <div className='largeconatainer' style={{ height: '100%', overflowY: 'auto', display: 'flex', justifyContent: 'center', paddingBottom: '30px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px', border: '2px', transition: 'box-shadow 0.2s' }}>
        <div className='largecard' style={{
          height: '100vh',
          borderRadius: '5px',
          border: '2px',
          paddingBottom: '30px',
          transition: 'box-shadow 0.2s',
        }}>
          {selectedCardContent && <LargeCard some={selectedCardContent} />}
        </div>
      </div>
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button onClick={closePopup} className="close-button">&times;</button>
            {selectedCardContent && <LargeCard some={selectedCardContent} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default MainCard;
