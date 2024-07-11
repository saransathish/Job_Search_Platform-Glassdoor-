
export const ProfileNav = () => {
    const handleProfileClick = () => {
        window.location.href = "/profilepage";
      };
    
      const handleLogoutClick = () => {
        window.location.href = "/";
      };
    
      const handleJobClick = () => {
        window.location.href = "/jobs";
      };
  return (
    <>
    
    <button onClick={handleProfileClick} className='probtn'>Profile</button>
          <br />
          <button onClick={handleJobClick} className='probtn'>Job Activity</button>
          <hr />
          <div onClick={handleLogoutClick} className='signou'>
            <p>Sign out</p>
            <div className='signoutim'>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="m12.02 6.981 4.687 4.664a.5.5 0 0 1 0 .708l-4.686 4.687-1.06-1.06 3.228-3.23H2v-1.5h12.184l-3.222-3.206 1.059-1.063Z" fill="#000"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M8.75 4.5c-.69 0-1.25.56-1.25 1.25v3.393H6V5.75A2.75 2.75 0 0 1 8.75 3h9.5A2.75 2.75 0 0 1 21 5.75v11.995a2.75 2.75 0 0 1-2.757 2.75l-9.5-.026A2.75 2.75 0 0 1 6 17.72v-2.535h1.5v2.535a1.25 1.25 0 0 0 1.247 1.25l9.5.026a1.25 1.25 0 0 0 1.253-1.25V5.75c0-.69-.56-1.25-1.25-1.25h-9.5Z" fill="#000"></path>
              </svg>
            </div>
          </div>
          <a href="https://help.glassdoor.com/s/?language=en_US"><button className='helpbtn'><center>Help center</center></button></a>

    </>
  )
}
