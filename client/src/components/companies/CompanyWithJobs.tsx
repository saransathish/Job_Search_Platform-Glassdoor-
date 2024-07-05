import { useState, FormEvent } from 'react';
import './css/companydata.css';
import image2 from './images/locked-companies.png';
import { api } from '../../models/model';

export const CompanyWithJobs = () => {
  const [showJobs, setShowJobs] = useState(false);

  const [companyName, setCompanyName] = useState<string>('');
  const [websiteUrl, setWebsiteUrl] = useState<string>('');
  const [linkedUrl, setLinkedUrl] = useState<string>('');
  const [rating, setRating] = useState<number | string>('');
  const [companyIcon, setCompanyIcon] = useState<File | null>(null);
  const [location, setLocation] = useState<string>('');
  const [companySize, setCompanySize] = useState<number | string>('');
  const [industry, setIndustry] = useState<string>('');
  const [companyDescription, setCompanyDescription] = useState<string>('');

  const [jobTitle, setJobTitle] = useState<string>('');
  const [jobLocation, setJobLocation] = useState<string>('');
  const [jobType, setJobType] = useState<string>('');
  const [remoteAvailability, setRemoteAvailability] = useState<boolean>(false);
  const [easyApply, setEasyApply] = useState<boolean>(false);
  const [applicationUrl, setApplicationUrl] = useState<string>('');
  const [language, setLanguage] = useState<string>('');
  const [clearanceRequired, setClearanceRequired] = useState<boolean>(false);
  const [salaryCurrency, setSalaryCurrency] = useState<string>('');
  const [jobVacancies, setJobVacancies] = useState<number | string>('');
  const [jobDescription, setJobDescription] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCompanyIcon(e.target.files[0]);
    }
  };

  const handleNextClick = () => {
    setShowJobs(true);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('companyName', companyName);
    formData.append('companyWebsiteUrl', websiteUrl);
    formData.append('companyLinkedinUrl', linkedUrl);
    formData.append('rating', typeof rating === 'string' ? parseFloat(rating).toString() : rating.toString());
    if (companyIcon) {
      formData.append('icon', companyIcon);
    }
    formData.append('location', location);
    formData.append('companySize', typeof companySize === 'string' ? parseInt(companySize).toString() : companySize.toString());
    formData.append('industry', industry);
    formData.append('description', companyDescription);

    formData.append('jobTitle', jobTitle);
    formData.append('jobLocation', jobLocation);
    formData.append('jobType', jobType);
    formData.append('remoteAvailability', remoteAvailability ? 'true' : 'false');
    formData.append('easyApply', easyApply ? 'true' : 'false');
    formData.append('applicationUrl', applicationUrl);
    formData.append('language', language);
    formData.append('clearanceRequired', clearanceRequired ? 'true' : 'false');
    formData.append('salaryCurrency', salaryCurrency);
    formData.append('jobVacancies', typeof jobVacancies === 'string' ? parseInt(jobVacancies).toString() : jobVacancies.toString());
    formData.append('jobDescription', jobDescription);

    try {
      const response = await fetch(`${api}company/companywithjobs`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Data added successfully!');
        setShowJobs(false);
        setCompanyName('');
        setWebsiteUrl('');
        setLinkedUrl('');
        setRating('');
        setCompanyIcon(null);
        setLocation('');
        setCompanySize('');
        setIndustry('');
        setCompanyDescription('');
        setJobTitle('');
        setJobLocation('');
        setJobType('');
        setRemoteAvailability(false);
        setEasyApply(false);
        setApplicationUrl('');
        setLanguage('');
        setClearanceRequired(false);
        setSalaryCurrency('');
        setJobVacancies('');
        setJobDescription('');
      } else {
        alert('Failed to add data. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <center><h2 className='headercom'>Add jobs post to DataBase</h2></center>
      <center><img className='headimage' src={image2} alt="" /></center>
      <div className='dataaddingdiv'>
        <form onSubmit={handleSubmit}>
          {!showJobs && (
            <div className='companydivison'>
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
                <p className='labelinput'>Website Url</p>
                <input
                  className='textinputs'
                  type="text"
                  placeholder='Eg: abrightlab.com'
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                />
              </div>
              <div className='datainputadd'>
                <p className='labelinput'>Linked Url</p>
                <input
                  className='textinputs'
                  type="text"
                  placeholder='Eg: linkedin.com/company/abrightlab'
                  value={linkedUrl}
                  onChange={(e) => setLinkedUrl(e.target.value)}
                />
              </div>
              <div className='datainputadd'>
                <p className='labelinput'>Rating</p>
                <input
                  className='textinputs'
                  type="number"
                  placeholder='Eg: 3.5'
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>
              <div className='datainputadd'>
                <p className='labelinput'>Company Icon</p>
                <input
                  className='textinputs'
                  type="file"
                  onChange={handleFileChange}
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
                <p className='labelinput'>Company size</p>
                <input
                  className='textinputs'
                  type="number"
                  placeholder='Eg: 1000'
                  value={companySize}
                  onChange={(e) => setCompanySize(e.target.value)}
                />
              </div>
              <div className='datainputadd'>
                <p className='labelinput'>Industry</p>
                <input
                  className='textinputs'
                  type="text"
                  placeholder='Eg: Entertainment,Media'
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  required
                />
              </div>
              <div className='datainputadd'>
                <p className='labelinput'>Description</p>
                <textarea
                  className='textareainp'
                  placeholder='Argenbright Innovation Labs objectives...'
                  value={companyDescription}
                  onChange={(e) => setCompanyDescription(e.target.value)}
                />
              </div>
              <center>
                <button type='button' className='dataaddbtn' onClick={handleNextClick}>Add jobs Data</button>
              </center>
            </div>
          )}

          {showJobs && (
            <div className='jobsdivisions'>
              <div className='datainputadd'>
                <p className='labelinput'>Job Title</p>
                <input
                  className='textinputs'
                  type="text"
                  placeholder='eg.software development'
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  required
                />
              </div>
              <div className='datainputadd'>
                <p className='labelinput'>Location</p>
                <input
                  className='textinputs'
                  type="text"
                  placeholder='Eg: Coimbatore'
                  value={jobLocation}
                  onChange={(e) => setJobLocation(e.target.value)}
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
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </div>
              <center>
                <button type='submit' className='dataaddbtn'>Add Data</button>
              </center>
            </div>
          )}
        </form>
      </div>
    </>
  );
};
