import React, { useState, FormEvent } from 'react';
import './css/companydata.css';
import image3 from './images/locked-jobs.png';
import { api } from '../../models/model';

export const JobsData: React.FC = () => {
  const [jobTitle, setJobTitle] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [jobType, setJobType] = useState<string>('');
  const [remoteAvailability, setRemoteAvailability] = useState<boolean>(true);
  const [easyApply, setEasyApply] = useState<boolean>(true);
  const [applicationUrl, setApplicationUrl] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [clearanceRequired, setClearanceRequired] = useState<boolean>(false);
  const [salaryCurrency, setSalaryCurrency] = useState<string>('');
  const [jobVacancies, setJobVacancies] = useState<number | string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const jobData = {
      jobTitle,
      companyName,
      location,
      jobType,
      hasRemote: remoteAvailability,
      easyApply,
      published: new Date(),
      applicationUrl,
      language,
      clearanceRequired,
      salaryCurrency,
      jobVacancies: typeof jobVacancies === 'string' ? parseInt(jobVacancies) : jobVacancies,
      description,
    };
    console.log(jobData)

    try {
      const response = await fetch(`${api}company/createNewjobpost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(jobData),
      });

      if (response.ok) {
        alert('Job post added successfully!');
        setJobTitle('');
        setCompanyName('');
        setLocation('');
        setJobType('');
        setRemoteAvailability(true);
        setEasyApply(true);
        setApplicationUrl('');
        setLanguage('');
        setClearanceRequired(false);
        setSalaryCurrency('');
        setJobVacancies('');
        setDescription('');
      } else {
        alert('Failed to add job post. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <center><h2 className='headercom'>Add jobs post to DataBase</h2></center>
      <center><img className='headimage' src={image3} alt="" /></center>
      <div className='dataaddingdiv'>
        <form onSubmit={handleSubmit}>
          <div className='datainputadd'>
            <p className='labelinput'>Job Title</p>
            <input
              className='textinputs'
              type="text"
              placeholder='eg.software devlopment'
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              required
            />
          </div>
          <div className='datainputadd'>
            <p className='labelinput'>Company Name</p>
            <input
              className='textinputs'
              type="text"
              placeholder='Enter Company Name'
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              required
            />
          </div>

          <div className='datainputadd'>
            <p className='labelinput'>Location</p>
            <input
              className='textinputs'
              type="text"
              placeholder='Eg: Coimbatore'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>
          <div className='datainputadd'>
            <p className='labelinput'>Job Type</p>
            <input
              className='textinputs'
              type="text"
              placeholder='Eg: full time,intern'
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
              required
            />
          </div>
          <div className='datainputadd'>
            <p className='labelinput'>Remote availability</p>
            <select
              className='textinputs'
              value={remoteAvailability ? 'true' : 'false'}
              onChange={(e) => setRemoteAvailability(e.target.value === 'true')}
              required
            >
              <option value='true'>True</option>
              <option value='false'>False</option>
            </select>
          </div>
          <div className='datainputadd'>
            <p className='labelinput'>Easy Apply</p>
            <select
              className='textinputs'
              value={easyApply ? 'true' : 'false'}
              onChange={(e) => setEasyApply(e.target.value === 'true')}
              required
            >
              <option value='true'>True</option>
              <option value='false'>False</option>
            </select>
          </div>
          <div className='datainputadd'>
            <p className='labelinput'>Application Url</p>
            <input
              className='textinputs'
              type="text"
              placeholder='Eg: abrightlab.com/icon/sghiueugf.jpg'
              value={applicationUrl}
              onChange={(e) => setApplicationUrl(e.target.value)}
            />
          </div>
          <div className='datainputadd'>
            <p className='labelinput'>Language</p>
            <input
              className='textinputs'
              type="text"
              placeholder='Eg: english'
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            />
          </div>
          <div className='datainputadd'>
            <p className='labelinput'>Clearance Required</p>
            <select
              className='textinputs'
              value={clearanceRequired ? 'true' : 'false'}
              onChange={(e) => setClearanceRequired(e.target.value === 'true')}
            >
              <option value='true'>True</option>
              <option value='false'>False</option>
            </select>
          </div>
          <div className='datainputadd'>
            <p className='labelinput'>Salary currency</p>
            <input
              className='textinputs'
              type="text"
              placeholder='Eg: 10LPA'
              value={salaryCurrency}
              onChange={(e) => setSalaryCurrency(e.target.value)}
            />
          </div>
          <div className='datainputadd'>
            <p className='labelinput'>Job Vacancies</p>
            <input
              className='textinputs'
              type="number"
              placeholder='Eg: 15'
              value={jobVacancies}
              onChange={(e) => setJobVacancies(e.target.value)}
            />
          </div>
          <div className='datainputadd'>
            <p className='labelinput'>Description</p>
            <textarea
              className='textareainp'
              placeholder='<h1>Job Description</h1> <p> Argenbright Innovation Labs objectives...</p>'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <center><button className='dataaddbtn' type="submit">Add Jobs Post</button></center>
        </form>
      </div>
    </>
  );
};
