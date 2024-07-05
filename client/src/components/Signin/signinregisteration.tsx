import React, { useState, ChangeEvent, FormEvent } from 'react';
import './signinresgis.css';
import { api } from '../../models/model';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface User {
  email: string;
  password: string;
  username: string;
  age: number;
  location?: string;
  preferredJob?: string;
  yearsOfExperience?: number;
}

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState<User>({
    email: '',
    password: '',
    username: '',
    age: 0,
  });

  const [step, setStep] = useState<number>(1);

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
      console.log(formData);
      const response = await fetch(`${api}users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('User created successfully!');
        setFormData({
          email: '',
          password: '',
          username: '',
          age: 0,
          location: '',
          preferredJob: '',
          yearsOfExperience: 0,
        });
      } else {
        toast.error(data.message || 'An error occurred during user creation');
      }
    } catch (error) {
      toast.error('An error occurred during user creation');
    }
  };

  return (
    <div className='maindiv'>    
      <div className='form-container' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <form onSubmit={step === 1 ? handleFirstStepSubmit : handleFinalSubmit} style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '10px', width: '300px' }}>
          <h2>{step === 1 ? 'Enter Basic Information' : 'Enter Additional Information'}</h2>
          
          {step === 1 && (
            <>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="auth-input" />
              <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required className="auth-input" />
              <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required className="auth-input" />
              <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required className="auth-input" />
              <button type="submit" className="auth-button">Next</button>
            </>
          )}
          
          {step === 2 && (
            <>
              <input type="text" name="location" placeholder="Location" value={formData.location || ''} onChange={handleChange} required className="auth-input" />
              <input type="text" name="preferredJob" placeholder="Preferred Job" value={formData.preferredJob || ''} onChange={handleChange} required className="auth-input" />
              <input type="number" name="yearsOfExperience" placeholder="Years of Experience" value={formData.yearsOfExperience || 0} onChange={handleChange} required className="auth-input" />
              <button type="submit" className="auth-button">Create User</button>
            </>
          )}
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;
