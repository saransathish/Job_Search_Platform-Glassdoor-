import React, { useState } from 'react';
import { Job } from '../../models/model';
import { SmallCards1 } from './SmallCard1';
import { Logos } from '../cards/logos';

interface MainCardProps {
  jobs: Job[];
  initialSelectedCardContent: Job | null;
}

const MainCard1: React.FC<MainCardProps> = ({ jobs, initialSelectedCardContent }) => {
  
  const [selectedCardContent, setSelectedCardContent] = useState<Job | null>(initialSelectedCardContent);

  const handleCardClick = (card: Job) => {
    setSelectedCardContent(card);
  };

  const logos = selectedCardContent ? {
    logo_url: selectedCardContent.company.iconUrl,
    company_name: selectedCardContent.companyName,
    website: selectedCardContent.applicationUrl,
    rating: selectedCardContent.company.rating
  } : null;

  return (
    <div className='maincnt' style={{ display: 'flex', height: '100vh' }}>
      <div className='smallcards1' style={{ width: '40%', overflowY: 'auto', padding: 'px', borderRight: '0.5px solid #ccc' }}>
        {jobs.map((card: Job) => (
          <div className='smallcard1'
            key={card.jobId}
            style={{
              margin: '5px 0',
              width: "100%",
              cursor: 'pointer',
              borderRadius: '0',
            }}
            onClick={() => handleCardClick(card)}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <SmallCards1 content={card} />
          </div>
        ))}
      </div>
      <div className='largeconatainer' style={{ width: '80%', height: '100%', overflowY: 'auto', display: 'flex', justifyContent: 'center', paddingBottom: '30px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px', border: '2px', padding: '20px 0px 10px 10px', transition: 'box-shadow 0.2s' }}>
        <div className='largecard' style={{
          width: '95%',
          height: '100vh',
          borderRadius: '0',
          border: '2px',
          padding: '10px 0px 0px 0px',
          paddingBottom: '30px',
          transition: 'box-shadow 0.2s',
        }}>
          {selectedCardContent && 
          <>
          <div className="largecontain largecontain1">
            <div className="topconatiner">
              <div className="companyname">
                {logos && <Logos logos={logos} />}
                <p className="job_name">{selectedCardContent.jobTitle}</p>
                <p className="location">{selectedCardContent.location}</p>
              </div>
              <div className="apply">
                <div className="easyapply">
                  <a href={selectedCardContent.applicationUrl}>
                    <button className="easbtn edit">Apply Now</button>
                  </a>
                </div>
                <div className="easyapply">
                  <button className="easbtn remo">Remove</button>
                </div>
              </div>
            </div>
            <p className="des">Description</p>
            <div className="descrip" dangerouslySetInnerHTML={{ __html: selectedCardContent.description }} />
            <hr />
            <div className="basepay">
              <h2>Base pay range</h2>
              <div className="sal">
                <p><span>₹10T - ₹30T</span>/mo (Employer est.)</p>
                <p>₹20T/mo Median</p>
                <p>{selectedCardContent.location}</p>
              </div>
              <div className="inf">
                <div className="inficon"><span>ⓘ</span></div>
                <div className="infcnt">
                  <p>If an employer includes a salary or salary range on their job, we display it as an "Employer Estimate". If a job has no salary data, Glassdoor displays a "Glassdoor Estimate" if available. To learn more about "Glassdoor Estimates," see our FAQ page.</p>
                </div>
              </div>
            </div>
            <hr />
          </div>
          </>}
        </div>
      </div>
    </div>
  );
};

export default MainCard1;

