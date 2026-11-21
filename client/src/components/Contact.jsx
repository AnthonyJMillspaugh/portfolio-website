import './css-files/Contact.css'
import {FiMail, FiLinkedin} from "react-icons/fi";

const copyEmail = () => {
  navigator.clipboard.writeText("ajmillspaugh3@gmail.com")
};

function Contact() {
  return (
    <div className="contacts">
      <h3>Contact</h3>
      <a className='email link-about' href='#' onClick={(e) => {
        e.preventDefault();
        copyEmail();
      }}>amillspaugh@plu.edu<FiMail /></a>
      <a className='linkedin link-about' href='https://linkedin.com/in/anthony-millspaugh-240043341'>LinkedIn<FiLinkedin /></a>
    </div>
  );
}

export default Contact;