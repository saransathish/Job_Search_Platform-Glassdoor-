import  { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './responsivecopm.css';
import combine from './images/combinedImage.png';
import image1 from './images/comp1Image.png';
import image2 from './images/comp2Image.png';
import './worktext.css';
import facebook from './images/facebook.png';
import '../Signin/signinresgis.css'
import SignInwithGoogle from '../Signin/SigninwithGoogle';
import SignInwithMail from '../Signin/SigninWithMail';
import newaccount from './images/newaccount.svg'
import { api } from '../../models/model';


interface User {
  email: string;
  password: string;
  username: string;
  age: number;
  location?: string;
  preferedProfession?: string;
  yearsOfExperience?: number;
}

const ResponsiveComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<User>({
    email: '',
    password: '',
    username: '',
    age: 0,
  });
  const [step, setStep] = useState<number>(1);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const navigate = useNavigate();

  const handleNewAccountClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'age' || name === 'yearsOfExperience' ? Number(value) : value,
    });
  };

  const handleFirstStepSubmit = (e: FormEvent): void => {
    e.preventDefault();
    setStep(2);
  };

  const handleFinalSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    try {
      console.log(formData)
      const response = await fetch(`${api}users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('User created successfully!');
        setError('');
        setTimeout(() => {
          navigate('/community');
        }, 1000);
      } else {
        setError(data.message || 'An error occurred during user creation');
        setSuccess('');
      }
    } catch (error) {
      setError('An error occurred during user creation');
      setSuccess('');
    }
  };

  return (
    <>
      <div className={`overlay ${showModal ? 'blur' : ''}`}>
        <div className='text'><center>Your work people are here</center></div>
        <div className="container">
          <img className='comb' src={combine} alt="" />
          <div className='text1'><center>Your work people are here</center></div>

          <div className="box box1">
            <img src={image1} alt="" />
          </div>
          <div className="box box2">
            <div className="auth-container">
              <p className="initial-text">
                Create an account or sign in. By continuing, you agree to <br />our <a href="/terms">Terms of Use</a> and acknowledge our <a href="/privacy">Privacy Policy</a>.
              </p>
              <SignInwithGoogle />

              <button className="auth-button facebook-button">
                <img className='facebook' src={facebook} alt="" />
                <i className="fab fa-facebook-f"></i> Continue with Facebook
              </button>
              <center>or</center>

              <SignInwithMail />
              <p onClick={handleNewAccountClick} className='createaccount'>New user? - create account</p>
            </div>
          </div>
          <div className="box box3">
            <img src={image2} alt="" />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button onClick={handleCloseModal} className="close-button">X</button>
            <form onSubmit={step === 1 ? handleFirstStepSubmit : handleFinalSubmit}>
             <center> <img src={newaccount} alt="" className=''/></center>
              <center><p className='titlecon'>{step === 1 ? 'What’s your identity?' : "Let's know more about you"}</p>
              </center>

              {step === 1 && (
                <>
                  <div className="form-group">
                  <legend>Email:</legend>
                    <input type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="auth-input1" />
                  </div>
                  <div className="form-group">
                  <legend>Create New Password:</legend>
                    <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="auth-input1" />
                  </div>
                  <div className="form-group">
                  <legend>Username:</legend>
                    <input type="text" id="username" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required className="auth-input1" />
                  </div>
                  <div className="form-group">
                      <legend>Age:</legend>
                      <input type="number" id="age" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required className="auth-input1" /> 

                  </div>
                  <button type="submit" className="auth-button1">Next</button>
                </>
              )}

              {step === 2 && (
                <>
                  <div className="form-group">
                  <legend>Your Location:</legend>
                    <input type="text" id="location" name="location" placeholder="Location" value={formData.location || ''} onChange={handleChange} required className="auth-input1" />
                  </div>
                  <div className="form-group">
                  <legend>Current Proffession:</legend>
                    <input type="text" id="preferredJob" name="preferedProfession" placeholder="Preferred Job" value={formData.preferedProfession || ''} onChange={handleChange} required className="auth-input1" />
                  </div>
                  <div className="form-group">
                    <legend>Years Of Experience:</legend>
                    <input type="number" id="yearsOfExperience" name="yearsOfExperience" placeholder="Years of Experience" value={formData.yearsOfExperience || 0} onChange={handleChange} required className="auth-input1" />
                  </div>
                  <button type="submit" className="auth-button1">Create Account</button>
                </>
              )}

              {error && <div className="error-message">{error}</div>}
              {success && <div className="success-message">{success}</div>}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveComponent;
