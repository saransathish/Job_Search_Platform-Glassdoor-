import React, { useState } from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';
import './css/NavigationBar.css';
import Logo from './images/glassdoor.png';

const NavigationBar: React.FC = () => {
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
    function handlejobClick() {
        window.location.href = "/jobs";
    }
    function ComunityNav() {
        window.location.href = "/community";
    }

    function JobsNav() {
        window.location.href = "/jobs";
    }

    function ComapanyNav() {
        window.location.href = "/company";
    }

    function SalarisNav() {
        window.location.href = "/recomend";
    }

    return (
        <nav className="navbar1">
            <div className="navbar-logo">
                <img src={Logo} alt="GlassDoor" />
            </div>
            <div className="navbar-center">
                <a onClick={ComunityNav}>Community</a>
                <a onClick={JobsNav}>Jobs</a>
                <a onClick={ComapanyNav}>Companies</a>
                <a onClick={SalarisNav}>Salaries</a>
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
                        <button onClick={handlejobClick}>Job Activity</button>
                        <button onClick={handleLogoutClick}>Logout</button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default NavigationBar;
