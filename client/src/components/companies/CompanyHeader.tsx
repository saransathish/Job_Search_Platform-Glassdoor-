import React, { useState } from 'react';
import './css/companyheader.css';
import { CompanyData } from './CompanyData';
import { CompanyWithJobs } from './CompanyWithJobs';
import { JobsData } from './JobsData';
import image1 from './images/locked-community.png';
import image2 from './images/locked-companies.png';
import image3 from './images/locked-jobs.png';
type ModalContent = 'CompanyData' | 'CompanyWithJobs' | 'JobsData' | null;

export const CompanyHeader: React.FC = () => {
  const [firstModalContent, setFirstModalContent] = useState<ModalContent>(null);
  const [secondModalContent, setSecondModalContent] = useState<ModalContent>(null);

  const closeFirstModal = () => setFirstModalContent(null);
  const closeSecondModal = () => setSecondModalContent(null);

  return (
    <>
      <div className='companyheader'>
        <div className='companyimg'>
          <center>
            <img src="https://www.glassdoor.co.in/explore/static/images/hero-reviews.png" alt="" />
          </center>
        </div>
        <div className='companytext'>
          <center>
            <div className='texdiv'>
              <h2 className='parati'>Find a workplace that works for you <span className='new'>NEW</span></h2>
              <p className='paratext'>Discover what an employer is really like before you make your next move. Search reviews and ratings, and filter companies based on the qualities that matter most to your job search.</p>
            </div>
          </center>
          <center>
            <div className='btndiv'>
              <button className='compbtn btn1'>Work/Life Balance</button>
              <button className='compbtn btn2'>Diversity and inclusion</button>
              <button className='compbtn btn3' onClick={() => setFirstModalContent('CompanyData')}>Adding company/jobs datas</button>
            </div>
          </center>
        </div>
      </div>

      {firstModalContent && (
        <>
          <div className='backdrop' onClick={closeFirstModal}></div>
          <div className='modal'>
            <center><h2 className='dataaddhead'>Adding Company / Jobs posts datas</h2></center>
            <button className='close-btn' onClick={closeFirstModal}>X</button>
            <div className='databtns'>
              <div className='databtn'>
                <img className='dataim' src={image1} alt="" />
              <button className='databt' onClick={() => setSecondModalContent('CompanyData')}>Add Company Data</button>
              </div>
              
              <div className='databtn'>
              <button className='databt' onClick={() => setSecondModalContent('JobsData')}>Add Jobs Data</button>
              <img className='dataim' src={image3} alt="" />
              
              </div>
              <div className='databtn'>
              <img className='dataim' src={image2} alt="" />

              <button className='databt' onClick={() => setSecondModalContent('CompanyWithJobs')}>Add Company With Jobs</button>
              </div>
            </div>
          </div>
        </>
      )}

      {secondModalContent && (
        <>
          <div className='backdrop2' onClick={closeSecondModal}></div>
          <div className='modal2'>
            <button className='close-btn' onClick={closeSecondModal}>X</button>
            {secondModalContent === 'CompanyData' && <CompanyData />}
            {secondModalContent === 'CompanyWithJobs' && <CompanyWithJobs />}
            {secondModalContent === 'JobsData' && <JobsData />}
          </div>
        </>
      )}
    </>
  );
}
