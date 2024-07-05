import  { useEffect } from "react";
import { auth } from "./firbase";
// import { doc, getDoc } from "firebase/firestore";

function Profile() {
//   const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
      await auth.signOut();
      window.location.href = "/";
      console.log("User logged out successfully!");
  }
  return (
    <div>
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            
          </div>
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </>
    </div>
  );
}
export default Profile;
