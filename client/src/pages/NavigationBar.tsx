// import React, { useState } from 'react';
// import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
// import './css/NavigationBar.css';
// import Logo from './images/glassdoor.png';

// const NavigationBar: React.FC = () => {
//     const [showPopup, setShowPopup] = useState(false);

//     function handleButtonClick() {
//         setShowPopup(!showPopup);
//     }

//     function handleProfileClick() {
//         window.location.href = "/profilepage";
//     }

//     function handleLogoutClick() {
//         window.location.href = "/";
//     }
//     function handlejobClick() {
//         window.location.href = "/jobs";
//     }
//     function ComunityNav() {
//         window.location.href = "/community";
//     }

//     function JobsNav() {
//         window.location.href = "/jobs";
//     }

//     function ComapanyNav() {
//         window.location.href = "/company";
//     }

//     function SalarisNav() {
//         window.location.href = "/recomend";
//     }

//     return (
//         <nav className="navbar1">
//             <div className="navbar-logo">
//                 <img src={Logo} alt="GlassDoor" />
//             </div>
//             <div className="navbar-center">
//                 <a onClick={ComunityNav}>Community</a>
//                 <a onClick={JobsNav}>Jobs</a>
//                 <a onClick={ComapanyNav}>Companies</a>
//                 <a onClick={SalarisNav}>Salaries</a>
//             </div>
//             <div className="navbar-right">
//                 <FaSearch className="icon" />
//                 <FaBell className="icon" />
//                 <button className='nonebut' onClick={handleButtonClick}>
//                     <FaUserCircle className="icon" />
//                 </button>
//                 {showPopup && (
//                     <div className="popup-menu">
//                         <button onClick={handleProfileClick}>Profile</button>
//                         <button onClick={handlejobClick}>Job Activity</button>
//                         <button onClick={handleLogoutClick}>Logout</button>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// }

// export default NavigationBar;

import React, { useState } from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import './css/NavigationBar.css';
import Logo from './images/glassdoor.png';

interface NavigationBarProps {
    activeTab: string; 
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeTab }) => {
    const [showPopup, setShowPopup] = useState(false);

    function handleButtonClick() {
        setShowPopup(!showPopup);
    }

    function handleProfileClick() {
        window.location.href = "/profilepage";
    }

    function handleLogoutClick() {
        window.location.href = "/";
    }

    function handleJobClick() {
        window.location.href = "/jobs";
    }

    function handleCommunityClick() {
        window.location.href = "/community";
    }

    function handleCompaniesClick() {
        window.location.href = "/company";
    }

    function handleSalariesClick() {
        window.location.href = "/recomend";
    }

    return (
        <nav className="navbar1">
            <div className="navbar-logo">
                <img src={Logo} alt="GlassDoor" />
            </div>
            <div className="navbar-center">
                <div className={activeTab === "Community" ? "activenavtab" : "notactive"}><a onClick={handleCommunityClick}>Community</a></div>
                <div className={activeTab === "Jobs" ? "activenavtab" : "notactive"}><a  onClick={handleJobClick}>Jobs</a></div>
                <div className={activeTab === "Company" ? "activenavtab" : "notactive"}><a  onClick={handleCompaniesClick}>Companies</a></div>
                <div className={activeTab === "Salary" ? "activenavtab" : "notactive"}><a  onClick={handleSalariesClick}>Salaries</a></div>
            </div>
            <div className="navbar-right">
                <FaSearch className="icon" />
                <FaBell className="icon" />
                <button className='nonebut' onClick={handleButtonClick}>
                    <FaUserCircle className="icon" />
                </button>
                {showPopup && (
                    <div className="popup-menu">
                        <button onClick={handleProfileClick}>Profile</button>
                        <button onClick={handleJobClick}>Job Activity</button>
                        <button onClick={handleLogoutClick}>Logout</button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavigationBar;
