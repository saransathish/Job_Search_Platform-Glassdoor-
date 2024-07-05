import email from '../LoginCom/images/mail.png'

function SignInwithMail2() {
  function mailLogin() {
  console.log("i am in")

    window.location.href = "/community";
  }
  return (
   

    <button onClick={mailLogin} className="auth-button email-button">
    <img src={email} alt="" />
    <i className="fas fa-envelope"></i> Continue with Email
  </button>
   
  );
}
export default SignInwithMail2;