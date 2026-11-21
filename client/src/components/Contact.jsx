import './css-files/Contact.css'

const copyEmail = () => {
  navigator.clipboard.writeText("ajmillspaugh3@gmail.com")
};

function Contact() {
  return (
    <div className="contacts">
      <h3>Contact</h3>
      <a className='email' href='#' onClick={(e) => {
        e.preventDefault();
        copyEmail();
      }}>amillspaugh@plu.edu</a>
      <a className='linkedin' href='https://linkedin.com/in/anthony-millspaugh-240043341'>LinkedIn</a>
    </div>
  );
}

export default Contact;