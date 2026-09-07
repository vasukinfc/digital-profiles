import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Let&apos;s Connect</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Vasuki NFC</h4>
            <p>Jaipur, Rajasthan, India</p>
            <p>Smart NFC business cards, digital visiting cards, review products and custom business branding.</p>
            <a href="https://vasukinfc.in/" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">Visit Website <MdArrowOutward /></a>
          </div>
          <div className="contact-box">
            <h4>Social & Support</h4>
            <a href="https://www.instagram.com/_vasuki_99/" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">Instagram <MdArrowOutward /></a>
            <a href="https://vasukinfc.in/" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">Shop Online <MdArrowOutward /></a>
            <a href="https://vasukinfc.in/#contact" target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">Contact / Order <MdArrowOutward /></a>
          </div>
          <div className="contact-box">
            <h2>Smart identity for <br /> modern business. <span>Tap. Connect. Grow.</span></h2>
            <h5><MdCopyright /> 2026 Vasuki NFC</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
