import React  from 'react';
import './css/TabNavBar.css';

const TabNavBar: React.FC = () => {
    function Foryou(){
        window.location.href = "/jobs";
    }
    function Search(){
        window.location.href = "/search";
    }

    function Saved(){
        window.location.href = "/saved";
    }

    return (
        <div>
            <p className='res-text'><center>Upload your CV - let employers find you</center> </p>
            <div className="tab-navbar">
                <a onClick={Foryou}><div  className="tab-item">For You</div></a>
                <a onClick={Search}><div className="tab-item">Search</div></a>
                <a onClick={Saved}><div className="tab-item">Activity</div></a>
            </div>
            <hr className='jobsep'/>

        </div>
    );
}
export default TabNavBar;