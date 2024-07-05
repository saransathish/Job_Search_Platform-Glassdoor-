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

  const handleCardClick = (card: Job) => {
    setSelectedCardContent(card);
  };

  return (
    <div className='maincnt' style={{ display: 'flex', height: '100vh' }}>
      <div className='smallcards' style={{ width: '40%', overflowY: 'auto', padding: '0px', borderRight: '0.5px solid #ccc' }}>
        {jobs.map((card: Job) => (
          <div className='smallcard'
            key={card.jobId}
            style={{
              margin: '10px 0',
              width: "90%",
              cursor: 'pointer',
              borderRadius: '0px',
            }}
            onClick={() => handleCardClick(card)}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            
            <SmallCards content={card} />
          </div>
        ))}
      </div>
      <div className='largeconatainer' style={{ width: '80%', height: '100%', overflowY: 'auto', display: 'flex', justifyContent: 'center', paddingBottom: '30px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px', border: '2px', padding: '20px 0px 10px 10px', transition: 'box-shadow 0.2s' }}>
        <div className='largecard' style={{
          width: '90%',
          height: '100vh',
          borderRadius: '5px',
          border: '2px',
          padding: '0px 0px 10px 10px',
          paddingBottom: '30px',
          transition: 'box-shadow 0.2s',
        }}>
          {selectedCardContent && <LargeCard some={selectedCardContent} />}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
