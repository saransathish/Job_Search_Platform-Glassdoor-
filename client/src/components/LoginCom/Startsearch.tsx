import React from 'react';
import './startsearch.css';

const SearchInspirationComponent: React.FC = () => {
  return (
    <>    
    <div className="inspiration-container">
      <h1 className="inspiration-heading">Start your search</h1>
      <p className="inspiration-text">
        Need some inspiration? See what millions of people are looking for on Glassdoor today.
      </p>
    </div>
<hr className='line' />
    <div className='footer'>
        <p className='foottext'>Browse by: Companies, Jobs, Locations, Communities</p>
        <p className='foottext'>Copyright © 2008-2024, Glassdoor LLC. "Glassdoor" and logo are registered trademarks of Glassdoor LLC.</p>

    </div>
    </>

  );
}

export default SearchInspirationComponent;
