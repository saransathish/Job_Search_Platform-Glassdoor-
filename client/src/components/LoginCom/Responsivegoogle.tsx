import './responsivecopm.css';
import combine from './images/combinedImage.png';
import image1 from './images/comp1Image.png';
import image2 from './images/comp2Image.png';
import './worktext.css';
import './responsivegoogle.css';
import { useState } from 'react';
import { auth } from '../Signin/firbase';
import { api } from '../../models/model';

const Responsivegoogle = () => {
    const [age, setAge] = useState<number | undefined>(undefined);
    const [yearsOfExperience, setYearsOfExperience] = useState<number | undefined>(undefined);
    const [location, setLocation] = useState<string>('');
    const [preferedProfession, setProfession] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [data, setData] = useState<any>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!age || !yearsOfExperience || !location || !preferedProfession) {
            console.error('All fields are required');
            return;
        }

        const email = auth.currentUser?.email || '';
        const username = email;
        const password = email;

        console.log(age, yearsOfExperience, location, preferedProfession, auth.currentUser?.email);

        setLoading(true);
        setError(null);

        try {
            const response = await fetch(`${api}users`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    username,
                    password,
                    age,
                    yearsOfExperience,
                    location,
                    preferedProfession,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            setData(result);
            console.log('User created:', result);
        } catch (err) {
            // setError(err);
            console.error('Error creating user:', err);
        } finally {
            setLoading(false);
        }
        window.location.href = "/community";
    };

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }
    if (data) {
        console.log(data);
    }

    return (
        <>
            <div className='text'><center>Your work people are here</center></div>
            <div className="container">
                <img className='comb' src={combine} alt="" />
                <div className='text1'><center>Your work people are here</center></div>

                <div className="box box1">
                    <img src={image1} alt="" />
                </div>
                <div className="box box2">
                    <div className="auth-container">
                        <form onSubmit={handleSubmit}>
                            <input
                                className='auth-input'
                                type="number"
                                placeholder='Age..'
                                value={age || ''}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAge(parseInt(e.target.value))}
                            />
                            <input
                                className='auth-input'
                                type="text"
                                placeholder='Location'
                                value={location}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocation(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="Years of experience"
                                className="auth-input"
                                value={yearsOfExperience || ''}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setYearsOfExperience(parseInt(e.target.value))}
                            />
                            <input
                                type="text"
                                placeholder="Profession"
                                className="auth-input"
                                value={preferedProfession}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProfession(e.target.value)}
                            />
                            <button type="submit" className='submitbtn'>Create Account</button>
                        </form>
                    </div>
                </div>
                <div className="box box3">
                    <img src={image2} alt="" />
                </div>
            </div>
        </>
    );
}

export default Responsivegoogle;
