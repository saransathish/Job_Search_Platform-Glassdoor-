
import React, { useEffect, useState } from 'react';
import { Job, api } from '../../models/model';
import { SmallCards1 } from './SmallCard1';
import { Logos } from '../cards/logos';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from 'react-loading-skeleton';

export const SavedJobs: React.FC = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCardContent, setSelectedCardContent] = useState<Job | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch(`${api}users/userjobsbookmark`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data: Job[] = await response.json();
      setJobs(data);
      setSelectedCardContent(data.length > 0 ? data[0] : null);
    } catch (error) {
      setError('Error fetching jobs');
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (card: Job) => {
    setSelectedCardContent(card);
    setIsPopupOpen(true);

  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleRemoveBookmark = async (jobId: string) => {
    try {
      const response = await fetch(`${api}users/removebookmark`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobId }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Refetch the jobs after successful removal
      fetchJobs();
      toast.success('Removed successfully!');
    } catch (error) {
      setError('Error removing bookmark');
      toast.error('Failed to remove bookmark');
    }
  };

  const logos = selectedCardContent ? {
    logo_url: selectedCardContent.company.iconUrl,
    company_name: selectedCardContent.companyName,
    website: selectedCardContent.applicationUrl,
    rating: selectedCardContent.company.rating,
  } : null;

  if (loading) {
    return (
      <div className='maincnt' style={{  height: '100vh' }}>
        <div className='smallcards1' style={{ width: '40%', overflowY: 'auto', padding: 'px', borderRight: '0.5px solid #ccc' }}>
          <Skeleton height={100} count={5} style={{ margin: '10px' }} />
        </div>
        <div className='largeconatainer' style={{ width: '60%', height: '100%', overflowY: 'auto', display: 'flex', justifyContent: 'center', paddingBottom: '30px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px', border: '2px', padding: '20px 0px 10px 10px', transition: 'box-shadow 0.2s' }}>
          <div className='largecard' style={{
            width: '95%',
            height: '100vh',
            borderRadius: '0',
            border: '2px',
            padding: '10px 0px 0px 0px',
            paddingBottom: '30px',
            transition: 'box-shadow 0.2s',
          }}>
            <Skeleton height={500} />
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className='maincnt' style={{  height: '100vh' }}>
      <div className='smallcards1' style={{  overflowY: 'auto', padding: 'px', borderRight: '0.5px solid #ccc' }}>
        {jobs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '20px' }}>
            <p>No bookmarks yet</p>
          </div>
        ) : (
          jobs.map((card: Job) => (
            <div className='smallcard1'
              key={card.jobId}
              style={{
                margin: '5px 0',
                width: "98%",
                cursor: 'pointer',
                borderRadius: '0',
              }}
              onClick={() => handleCardClick(card)}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <SmallCards1 content={card} />
            </div>
          ))
        )}
      </div>
      <div className='largeconatainer1 insavedlarge' style={{  overflowY: 'auto', display: 'flex', justifyContent: 'center', paddingBottom: '30px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '10px', border: '2px', padding: '20px 0px 10px 10px', transition: 'box-shadow 0.2s' }}>
        <div className='largecard' style={{
          // width: '95%',
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
                  <button className="easbtn remo" onClick={() => handleRemoveBookmark(selectedCardContent.jobId)}>Remove</button>
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
      {isPopupOpen && (
        <div className="popup-overlay" >
          <div className="popup-content">
            <button onClick={closePopup} className="close-button">&times;</button>
            {selectedCardContent && <> <div className="largecontain largecontain1">
            <div className="topconatiner">
              <div className="companyname">
                {logos && <Logos logos={logos} />}
                <p className="job_name">{selectedCardContent.jobTitle}</p>
                <p className="location">{selectedCardContent.location}</p>
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
                  <p>If an employer includes a salary or salary range on their job</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="apply1s">
              <center></center>
                <div className="easyapply">
                  <a href={selectedCardContent.applicationUrl}>
                    <button className="easbtn edit">Apply Now</button>
                  </a>
                </div>
                <div className="easyapply">
                  <button className="easbtn remo" onClick={() => handleRemoveBookmark(selectedCardContent.jobId)}>Remove</button>
                </div>
              </div>
          </div>
          </>}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};
