import './worktext.css';
import google from './images/google.png'
import facebook from './images/facebook.png'
const AuthComponent = () => {
  return (
    <div className="auth-container">
      <p className="initial-text">
        Create an account or sign in. By continuing, you agree to <br />our <a href="/terms">Terms of Use</a> and acknowledge our <a href="/privacy">Privacy Policy</a>.
      </p>
      <button className="auth-button google-button">
        <img className='google' src={google} alt="" />
        <i className="fab fa-google"></i> Continue with Google
      </button>
      <button className="auth-button facebook-button">
        <img className='facebook' src={facebook} alt="" />
        <i className="fab fa-facebook-f"></i> Continue with Facebook
      </button>
      <center>or</center>
      {/* <p className='textemail'>Enter Email</p> */}
      
      <input type="text" placeholder="Email" className="auth-input" />
      <button className="auth-button email-button">
        <i className="fas fa-envelope"></i> Continue with Email
      </button>
    </div>
  );
}

export default AuthComponent;
