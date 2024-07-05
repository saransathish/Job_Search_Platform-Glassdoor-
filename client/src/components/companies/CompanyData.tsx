import React, { useState, FormEvent } from 'react';
import './css/companydata.css';
import image1 from './images/locked-community.png';
import { api } from '../../models/model';

export const CompanyData: React.FC = () => {
  const [companyName, setCompanyName] = useState<string>('');
  const [websiteUrl, setWebsiteUrl] = useState<string>('');
  const [linkedUrl, setLinkedUrl] = useState<string>('');
  const [rating, setRating] = useState<number | string>('');
  const [companyIcon, setCompanyIcon] = useState<File | null>(null);
  const [location, setLocation] = useState<string>('');
  const [companySize, setCompanySize] = useState<number | string>('');
  const [industry, setIndustry] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setCompanyIcon(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('companyName', companyName);
    formData.append('companyWebsiteUrl', websiteUrl);
    formData.append('companyLinkedinUrl', linkedUrl);
    formData.append('rating', rating.toString());
    if (companyIcon) {
      formData.append('icon', companyIcon);
    }
    formData.append('location', location);
    formData.append('companySize', companySize.toString());
    formData.append('industry', industry);
    formData.append('description', description);

    try {
      const response = await fetch(`${api}company/createnewcompany`, {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('Company added successfully!');
        setCompanyName('');
        setWebsiteUrl('');
        setLinkedUrl('');
        setRating('');
        setCompanyIcon(null);
        setLocation('');
        setCompanySize('');
        setIndustry('');
        setDescription('');
      } else {
        alert('Failed to add company. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <center><h2 className='headercom'>Add Company data to DataBase</h2></center>
      <center><img className='headimage' src={image1} alt="" /></center>
      <div className='dataaddingdiv'>
        <form onSubmit={handleSubmit}>
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
              onChange={(e) => setRating(parseFloat(e.target.value))}
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
              onChange={(e) => setCompanySize(parseInt(e.target.value))}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <center><button className='dataaddbtn' type="submit">Add company</button></center>
        </form>
      </div>
    </>
  );
};
