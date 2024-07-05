import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./firbase"; 
import google from '../LoginCom/images/google.png';
import { useState, useEffect } from "react";
import { api } from "../../models/model";

function SignInwithGoogle() {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (userEmail) {
      setLoading(true);
      setError(null);
      fetchUserExists(userEmail);
    }
  }, [userEmail]);

  const fetchUserExists = async (email: string) => {
    try {
      const response = await fetch(`${api}users/exists`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      console.log(response)
      const data = await response.json();
      console.log("data",data)
      if (data) {
        window.location.href = '/community';
      } else if (! data) {
        window.location.href = '/newuser';
      }

    } catch (error) {
      setError(null);
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        setUserEmail(result.user.email);
      })
      .catch((error) => {
        console.error("Error during Google sign-in:", error);
      });
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <button onClick={googleLogin} className="auth-button google-button">
        <img className='google' src={google} alt="Google logo" />
        <i className="fab fa-google"></i> Continue with Google
      </button>
    </>
  );
}

export default SignInwithGoogle;
