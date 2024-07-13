import React, { useState } from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import './css/NavigationBar.css';
import Logo from './images/glassdoor.png';
import { IoReorderThreeOutline } from "react-icons/io5";

interface NavigationBarProps {
    activeTab: string; 
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeTab }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [showPopup1, setShowPopup1] = useState(false);


    function handleButtonClick() {
        setShowPopup(!showPopup);
    }
    function handleButtonClick1() {
        setShowPopup1(!showPopup1);
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
                <FaSearch className="icon seaicon" />
                <FaBell className="icon bell" />
                <button className='nonebut' onClick={handleButtonClick}>
                    <FaUserCircle className="icon" />
                </button>
                <button className='navigationbutton' onClick={handleButtonClick1}>
                <IoReorderThreeOutline className="iconnav"/>

                </button>
                {showPopup && (
                    <div className="popup-menu">
                        <button onClick={handleProfileClick}>Profile</button>
                        <button onClick={handleJobClick}>Job Activity</button>
                        <button onClick={handleLogoutClick}>Logout</button>
                    </div>
                )}

                {showPopup1 && (
                    <div className="popup-menu extraone">
                        <button onClick={handleCommunityClick}>Community</button>
                        <button onClick={handleJobClick}>Jobs</button>
                        <button onClick={handleCompaniesClick}>Companies</button>
                        <button onClick={handleSalariesClick}>Salaries</button>

                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavigationBar;
