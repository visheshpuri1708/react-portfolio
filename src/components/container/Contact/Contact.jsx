import React, { useRef } from "react";
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y38wyye",
        "template_2rpspzr",
        form.current,
        "SQRQG7pnXK4LZ5ASG"
      )
      .then(
        (result) => {
          console.log(result)
          if (result.status === 200) {
            alert('Message sent successfully');
          } else {
            throw new Error('Error sending message');
          }
          document.getElementById("myForm").reset();
        })
      .catch((error) => {
        alert('Oops, Error sending message. Try again please');
      }
      );
  };








  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title"
      >
        <span style={{ color: "yellow" }}>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'>I am always open to discussing new projects, creative ideas or opportunities to be a part of your visions.</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
              return (
                <div key={index} >
                  <a href={socialIcon.link} style={{ color: 'white' }}>{socialIcon.icon}</a>
                </div>
              )
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"

        >
          <h3>Get In Touch</h3>
          <form id="myForm" className="contactform" ref={form} onSubmit={sendEmail}>
            <div className="row">

              <input type="text" name="first name" placeholder="FIRST NAME" required />
              <input type="text" name="last name" placeholder="LAST NAME" required />
            </div>

            {/* End .col */}

            <div className="row">
              <input
                type="email"
                name="user_email"
                placeholder="EMAIL"
                required
              />
            </div>

            {/* End .col */}

            <div className="row">
              <input
                type="text"
                name="subject"
                placeholder="SUBJECT"
                required
              />
            </div>

            {/* End .col */}

            <div className="row">
              <textarea
                name="message"
                placeholder="MESSAGE"
                required
              ></textarea>
            </div>

            {/* End .col */}

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}

            >
              <button type="submit" className="btn">
                <h5>SEND</h5>
              </button>
            </motion.div>
            {/* End .col */}
          </form>

        </motion.div>
      </div>
    </div >
  )
}

export default Contact