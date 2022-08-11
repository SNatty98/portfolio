import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { RiMessengerFill } from "react-icons/ri"
import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3g7vnjs",
        "template_u3658yk",
        form.current,
        "7IX2ZXHVSA7_UMhHK"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="contact__container">
        <div className="contact__options">
          <article className="option">
            <HiOutlineMail className="option-icon" />
            <h4>Email</h4>
            <h5>sean.natty98@gmail.com</h5>
            <a href="mailto:sean.natty98@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="option">
            <AiOutlineWhatsApp className="option-icon" />
            <h4>WhatsApp</h4>
            <h5>+07507299104</h5>
            <a
              href="https://api.whatsapp.com/send?phone=07507299104"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="option">
            <RiMessengerFill className="option-icon" />
            <h4>Messenger</h4>
            <h5>Sean Natty</h5>
            <a
              href="https://m.me/sean.natty"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required={true}
            minLength={4}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required={true}
            minLength={6}
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required={true}
          ></textarea>
          <button type="submit" value="Send" className="btn-submit btn-primary ">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
