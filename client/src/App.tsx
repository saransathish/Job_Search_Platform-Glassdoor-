
import { Route, Routes } from 'react-router-dom'
import './App.css'
import BeforeLog from './pages/BeforeLogin'
import { Community } from './pages/Community'
import { Recommended } from './pages/Recommended'
import { Company } from './pages/Company'
import { Checkinggoogle } from './components/Signin/Checkinggoogle'
import { NewGoogleuser } from './components/Signin/newGoogleuser'
import RegistrationForm from './components/Signin/signinregisteration'
import JobPage from './pages/Jobs'
import { Profile } from './pages/Profile'
import Magnifier from './components/profile/Imageedit'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BeforeLog />} />
        <Route path="/community" element={<Community />} />
        <Route path="/recomend" element={<Recommended />} />
        <Route path="/company" element={<Company />} />
         <Route path="/jobs" element={<JobPage />} />
         <Route path="/profilepage" element={<Profile />} />
         <Route path="/checkinggoogle" element={<Checkinggoogle />} />
        <Route path="/newuser" element={<NewGoogleuser />} />
        <Route path='/createnewaccount' element={<RegistrationForm />} />
        <Route path='/imageedit' element={<Magnifier src= '' width={600}
        height={400}
        zoom={3}
        />} />

      </Routes>
    </>
  )
}

export default App
