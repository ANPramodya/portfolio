import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { PiSmileyWinkFill } from "react-icons/pi";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h5>-Contact</h5>
      <div className="contact-container">
        <div className="contact-options">
          <h2>
            Got a project?
            <br /> Let's talk.
          </h2>
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>anpramodya@gmail.com</h5>
            <a href="mailto:anpramodya@gmail.com" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>Nipun Pramodya</h5>
            <a href="" target="_blank">
              Send a Message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>+94767065262</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+94767065262"
              target="_blank"
            >
              Send a Message
            </a>
          </article>
        </div>
        <div className="contact-form">
          <form action="" className="contact-formInputs">
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Your Email" />
            <input type="text" placeholder="Your Content" />
            <button>Send</button>
          </form>
        </div>
      </div>
      <div className="contact-ending">
        <PiSmileyWinkFill className="contact-ending-icon" />
        <b>Thanks for Scrolling. </b> &nbsp; Thats all folks
      </div>
    </section>
  );
};

export default Contact;
