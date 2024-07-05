import React, { useEffect, useState, ChangeEvent } from 'react';
import { CompanyCard } from './CompanyCard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './css/maincompany.css';
import { Company, api } from '../../models/model';

export const MainCompany: React.FC = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [filteredCompanies, setFilteredCompanies] = useState<Company[]>([]);
  const [location, setLocation] = useState<string>('');
  const [industry, setIndustry] = useState<string>('');
  const [jobTitle, setJobTitle] = useState<string>('');
  const [rating, setRating] = useState<string>('');
  const [companySize, setCompanySize] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`${api}company`)
      .then(response => response.json())
      .then((data: Company[]) => {
        setCompanies(data);
        setFilteredCompanies(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching company data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let filtered = companies;

    if (location) {
      filtered = filtered.filter(company => company.location.toLowerCase().includes(location.toLowerCase()));
    }
    if (industry) {
      filtered = filtered.filter(company => company.industry.toLowerCase().includes(industry.toLowerCase()));
    }
    if (jobTitle) {
      filtered = filtered.filter(company => 
        company.jobs.some(job => job.jobTitle.toLowerCase().includes(jobTitle.toLowerCase()))
      );
    }
    if (rating) {
      filtered = filtered.filter(company => company.rating >= parseFloat(rating));
    }
    if (companySize) {
      const sizeRange = companySize.split('-').map(Number);
      filtered = filtered.filter(company => company.companySize >= sizeRange[0] && company.companySize <= sizeRange[1]);
    }
    if (companyName) {
      filtered = filtered.filter(company => company.companyName.toLowerCase().includes(companyName.toLowerCase()));
    }

    setFilteredCompanies(filtered.length > 0 ? filtered : companies);
  }, [location, industry, jobTitle, rating, companySize, companyName, companies]);

  const clearFilters = () => {
    setLocation('');
    setIndustry('');
    setJobTitle('');
    setRating('');
    setCompanySize('');
    setCompanyName('');
  };

  const handleSearch = () => {
    setFilteredCompanies(companies.filter(company =>
      company.companyName.toLowerCase().includes(companyName.toLowerCase()) &&
      company.location.toLowerCase().includes(location.toLowerCase())
    ));
  };

  return (
    <>
      <div className='companyfirstdiv'>
        <div className='empdiv'>
          <p>Have an employer in mind?</p>
          <input 
            className='inputcompany' 
            type="text" 
            placeholder='Search for a Company' 
            onChange={(e: ChangeEvent<HTMLInputElement>) => setCompanyName(e.target.value)} 
            value={companyName}
          />
          <button className='searchbtn' onClick={handleSearch}>Search</button>
        </div>
      </div>
      <h1 className='expcom'>Explore Companies</h1>
      <div className='filtercomp'>
        <div className='innerdiv'>
          <div className='filterdiv'>
            <div className='head1'>
              <p className='filtercompy'>Filter Companies</p>
              <p className='showingfi'>Showing Companies sorted by relevancy</p>
            </div>

            <div className='locdiv'>
              <p className='context'>Location</p>
              <input 
                className='coninp' 
                type="text" 
                placeholder='Select a Location' 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
                value={location}
              />
            </div>
            <div className='locdiv'>
              <p className='context'>Industries</p>
              <input 
                className='coninp' 
                type="text" 
                placeholder='E.g.Health Care,Internet,Education' 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setIndustry(e.target.value)}
                value={industry}
              />
            </div>

            <div className='locdiv'>
              <p className='context'>Job title</p>
              <input 
                className='coninp' 
                type="text" 
                placeholder='Select a job Title' 
                onChange={(e: ChangeEvent<HTMLInputElement>) => setJobTitle(e.target.value)}
                value={jobTitle}
              />
            </div>
            <div className='locdiv'>
              <p className='contextbold'>Company ratings by category <span className='new'>NEW</span></p>
              <select 
                className='coninp rati' 
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setRating(e.target.value)} 
                value={rating}
              >
                <option value="">Select rating</option>
                <option value="4.0">4.0 ★ ★ ★ ★ and up</option>
                <option value="3.0">3.0 ★ ★ ★ and up</option>
                <option value="2.0">2.0 ★ ★ and up</option>
                <option value="1.0">1.0 ★ and up</option>
              </select>
            </div>

            <div className='locdiv'>
              <p className='contextbold on'>Global Company Size</p>
              <div>
                <input 
                  type="radio" 
                  name="companySize" 
                  value="1-50" 
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setCompanySize(e.target.value)}
                  checked={companySize === '1-50'}
                />
                <span>1-50</span>
              </div>
              <div>
                <input 
                  type="radio" 
                  name="companySize" 
                  value="50-100" 
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setCompanySize(e.target.value)}
                  checked={companySize === '50-100'}
                />
                <span>50-100</span>
              </div>
              <div>
                <input 
                  type="radio" 
                  name="companySize" 
                  value="100-200" 
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setCompanySize(e.target.value)}
                  checked={companySize === '100-200'}
                />
                <span>100-200</span>
              </div>
              <div>
                <input 
                  type="radio" 
                  name="companySize" 
                  value="200-500" 
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setCompanySize(e.target.value)}
                  checked={companySize === '200-500'}
                />
                <span>200-500</span>
              </div>
            </div>
            <div className='lastdi'>
              <button className='buton' onClick={clearFilters}>Clear Filter</button>
            </div>
          </div>
          <div className='companydiv'>
            {loading ? (
              Array.from({ length: 5 }).map((_, index) => (
                <Skeleton key={index} height={100} style={{ marginBottom: '10px' }} />
              ))
            ) : filteredCompanies.length > 0 ? (
              filteredCompanies.map(company => (
                <CompanyCard key={company.companyId} companys={company} />
              ))
            ) : (
              <p>No company found</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
