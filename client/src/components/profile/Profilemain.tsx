import { useEffect, useState, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './css/profile.css';
import { GrUpload, GrEdit } from "react-icons/gr";
import { SlLock } from "react-icons/sl";
import profile from './images/profileimage.jpg';
import { Users, api } from '../../models/model';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BowlProfile } from './BowlProfile';
import { ProfileMidHead } from './ProfileMidHead';
import { ProfileNav } from './ProfileNav';
import Magnifier from './Imageedit';

export const Profilemain = () => {
  const [userProfile, setUserProfile] = useState<Users | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editValues, setEditValues] = useState<Users | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const profileImageInputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    fetch(`${api}users/aboutUsers`)
      .then(response => response.json())
      .then(data => {
        setUserProfile(data);
        setEditValues(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        setLoading(false);
      });
  }, []);
  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
    setEditValues(userProfile);
  };
  const handleSaveClick = () => {
    if (editValues) {
      fetch(`${api}users/updateuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editValues),
      })
        .then(response => response.json())
        .then(data => {
          setUserProfile(data);
          setIsEditing(false);
          toast.success('Profile updated successfully!');
        })
        .catch(error => console.error('Error updating user data:', error));
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditValues(prevState => prevState ? { ...prevState, [name]: value } : null);
  };
  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleProfileImageClick = () => {
    if (profileImageInputRef.current) {
      profileImageInputRef.current.click();
    }
  };
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      fetch(`${api}users/updateresume`, {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          setUserProfile(prevState => prevState ? { ...prevState, resume: data.resume } : prevState);
          toast.success('updated successfully!');
        })
        .catch(error => {
          console.error('Error uploading file:', error);
          toast.error('Error uploading resume.');
        });
    }
  };
  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      fetch(`${api}users/updateimage`, {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          setUserProfile(prevState => prevState ? { ...prevState, image: data.image } : prevState);
          toast.success('Profile updated successfully!');
        })
        .catch(error => {
          console.error('Error uploading profile image:', error);
          toast.error('Error uploading profile image.');
        });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="profile-main">
        <div className="profile-main-left">
          <center>
            <div className="profile-image-container" >
              {loading ? (
                <Skeleton circle={true} height={100} width={100} />
              ) : (
                <div className='profileimgs'>
                  <Magnifier src= {userProfile?.image || profile} width={100}
                height={100}
                zoom={3} />
                </div>
              )}
              <div className="edit-icon" onClick={handleProfileImageClick}>
                <GrEdit />
              </div>
            </div>
          </center>
          <h2 className='pronam'>{loading ? <Skeleton width={150} /> : userProfile?.username}</h2>
          <p className='proloc'>{loading ? <Skeleton width={100} /> : userProfile?.location}</p>
          <ProfileNav />

        </div>
        <div className="profile-main-middle">
          <ProfileMidHead />
          <h3>
            <span className='spantxts'>My information</span>
            <button className='editbtn' onClick={handleEditClick}><GrEdit /></button>
          </h3>
          <p>Updating your information will offer you the most relevant content and conversations.</p>
          {!loading && !isEditing ? (
            <div className='displaymode'>
              <p className='ques'>Employment status*</p>
              <p className='answ'>{userProfile?.preferredJobPosition}</p>
              <p className='ques'>Full name*</p>
              <p className='answ'>{userProfile?.username}</p>
              <p className='ques'>Location*</p>
              <p className='answ'>{userProfile?.location}</p>
              <p className='ques'>University</p>
              <p className='answ'>None</p>
              <p className='ques'>Degree type</p>
              <p className='answ'>{userProfile?.degree}</p>
            </div>
          ) : loading ? (
            <div className='loadingmode'>
              <p className='ques'><Skeleton width={200} /></p>
              <p className='answ'><Skeleton width={150} /></p>
              <p className='ques'><Skeleton width={200} /></p>
              <p className='answ'><Skeleton width={150} /></p>
              <p className='ques'><Skeleton width={200} /></p>
              <p className='answ'><Skeleton width={150} /></p>
              <p className='ques'><Skeleton width={200} /></p>
              <p className='answ'><Skeleton width={150} /></p>
              <p className='ques'><Skeleton width={200} /></p>
              <p className='answ'><Skeleton width={150} /></p>
            </div>
          ) : (
            <div className='editmode'>
              <p className='ques'>Employment status*</p>
              <div className='lockdata'>
                <SlLock className='lockimags' />
                <div>
                  <p className='locktxt'>Please contact Glassdoor to update this part of your profile.</p>
                  <p className='locktxt'>Fill out a <a href="https://help.glassdoor.com/s/ContactUs?language=en_US"><span className='gresp'>request form in our Help Centre</span></a></p>
                </div>
              </div>
              <p className='ques'>Full name*</p>
              <input type="text" className='inputpro' name="username" value={editValues?.username || ''} onChange={handleInputChange} />
              <p className='ques'>Location*</p>
              <input type="text" className='inputpro' name="location" value={editValues?.location || ''} onChange={handleInputChange} />
              <p className='ques'>Degree type</p>
              <input type="text" className='inputpro' name="degree" value={editValues?.degree || ''} onChange={handleInputChange} />
              <div className='buttonssav'>
                <button className='cnbtn' onClick={handleCancelClick}>Cancel</button>
                <button className='savbtn' onClick={handleSaveClick}>Save</button>
              </div>
            </div>
          )}
          <hr className='separa' />
          <div className='widthlow'>
            <h2>CV</h2>
            <p>After you upload a CV, it will be used to pre-fill job applications that you submit via Easy Apply. You can also make your CV visible or not visible to employers that are currently hiring. See our <a href="https://hrtechprivacy.com/brands/glassdoor#privacypolicy"><span className='prigre'>Privacy Policy</span></a> for more info.</p>
            {userProfile?.resume && (
              <a href={userProfile.resume} target="_blank" rel="noopener noreferrer">
              <div className='myresume'>
                View my Resume
              </div></a>
            )}
            <div className='uploadcv' onClick={handleUploadClick}>
              <GrUpload className='uplo' />
              <div className='uplaofil'>
                <h3>Upload CV</h3>
                <p className='cvtxt'>Use a pdf, docx, doc, rtf or txt</p>
              </div>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
            <input
              type="file"
              ref={profileImageInputRef}
              style={{ display: 'none' }}
              onChange={handleProfileImageChange}
            />
          </div>
        </div>
        <BowlProfile />
      </div>
    </>
  );
};
