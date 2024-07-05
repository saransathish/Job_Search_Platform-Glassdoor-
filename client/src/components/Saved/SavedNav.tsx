import React, { useState } from 'react';
// import RecentSearch from './RecentSearch';
// import SavedJobs from './SavedJobs';
// import Companies from './Companies';
import './css/savednav.css';
import { RecentSearch } from './RecentSearch';
import { SavedJobs } from './SavedJobs';
import { SavedCompany } from './SavedCompany';

const SavedNav: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState('recentSearch');

    const renderComponent = () => {
        switch (activeComponent) {
            case 'recentSearch':
                return <RecentSearch />;
            case 'savedJobs':
                return <SavedJobs />;
            case 'companies':
                return <SavedCompany/>;
                default:
                return null;
        }
    };

    return (
        <div>
            <nav className="navbars">
                <ul>
                    <li 
                        className={activeComponent === 'recentSearch' ? 'active' : ''} 
                        onClick={() => setActiveComponent('recentSearch')}
                    >
                        Recent Search
                    </li>
                    <li 
                        className={activeComponent === 'savedJobs' ? 'active' : ''} 
                        onClick={() => setActiveComponent('savedJobs')}
                    >
                        Saved Jobs
                    </li>
                    {/* <li 
                        className={activeComponent === 'companies' ? 'active' : ''} 
                        onClick={() => setActiveComponent('companies')}
                    >
                        Companies
                    </li> */}
                </ul>
            </nav>
            <div className="content">
                {renderComponent()}
            </div>
        </div>
    );
};

export default SavedNav;
