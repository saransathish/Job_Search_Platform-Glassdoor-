import React, { useState } from 'react';
import './css/NavBar.css';
import Logo from './images/glassdoor.png';
import siginicon from './images/icons8-login-48.png';
import image1 from './images/locked-community.png';
import image2 from './images/locked-jobs.png';
import image3 from './images/locked-companies.png';
import image4 from './images/locked-salaries.png';
import image5 from './images/for-employers.png';

const NavBar: React.FC = () => {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const data = [{ key: 'Community', header: 'Your work people are here', content: 'Connect anonymously with professionals about work, pay, life and more.', image: image1 },
    { key: 'Jobs', header: 'Find the right job', content: 'Millions of jobs. Search by what matters to you and find the one that right for you.', image: image2 },
    { key: 'Companies', header: 'Read millions of reviews', content: 'Read anonymous reviews on over 600,000 companies worldwide from the people that work there.', image: image3 },
    { key: 'Salaries', header: 'Compare salaries', content: 'Are you paid fairly? Get a free, personalised salary estimate and compare with millions of salaries.', image: image4 },
    { key: 'For Employers', header: 'Sign in to Employer Centre', content: 'Manage your company profile, view analytics, and respond to reviews.', image: image5 }
    ];
    const handleMouseEnter = (item: string) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };
    return (
        <>
            <nav className="navbar">
                <div className="navbar-left">
                    <img src={Logo} alt="Left Icon" className="navbar-left-icon" />
                </div>
                <div className="navbar-center">
                    <ul className="nav-links">
                        {data.map(item => (
                            <li
                                key={item.key}
                                onMouseEnter={() => handleMouseEnter(item.key)}
                                onMouseLeave={handleMouseLeave}
                            >
                                {item.key}
                                {hoveredItem === item.key && (
                                    <div className="hover-content">
                                        <div className='textcontent'>
                                            <p className='heads'>{item.header}</p>
                                            <p className='texts'>{item.content}</p>
                                            <button className='btn'>Start Using GlassDoor</button>
                                        </div>
                                        <div className='image'>
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-right">
                    <button className="signin-button">
                        <img src={siginicon} alt="Sign In" className="signin-icon" />
                        Sign In
                    </button>
                </div>
            </nav>
        </>
    );
}
export default NavBar;
