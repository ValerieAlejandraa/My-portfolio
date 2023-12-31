import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsSlack} from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jphijdp', 'template_jbq1voh', form.current, '41xTBnhEJkt08Cfuk')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>valerie.perez.alejandra@gmail.com</h5>
            <a href="mailto:valerie.perez.alejandra@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsSlack className='contact__option-icon'/>
            <h4>Slack</h4>
            <h5>Valerie Perez (She/Her)</h5>
            <a href="https://thinkful.slack.com/team/U034723H0JJ" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Valerie Perez</h5>
            <a href="https://www.linkedin.com/in/valerie-perez-portfolio" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact