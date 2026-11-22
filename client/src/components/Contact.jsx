import './css-files/Contact.css'
import {FiMail, FiLinkedin} from "react-icons/fi";

const copyEmail = () => {
  navigator.clipboard.writeText("amillspaugh@plu.edu")
};

function Contact() {
  return (
    <div className="contacts">
      <h3>Contact</h3>
      <div className="email-container">
        <a className='email link-about' href='mailto:amillspaugh@plu.edu'><FiMail />amillspaugh@plu.edu</a>
        <p className='email-copy'>or copy to clipboard<a className='link-about' href='#' onClick={(e) => {
          e.preventDefault()
          copyEmail();
        }}>here</a></p>
      </div>
      <a className='linkedin link-about' href='https://linkedin.com/in/anthony-millspaugh-240043341'><FiLinkedin />LinkedIn</a>
    </div>
  );
}

export default Contact;