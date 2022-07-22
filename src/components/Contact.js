import Button from 'react-bootstrap/Button';
import form from 'react-bootstrap/form';
// import emailjs from "@emailjs/browser";
import emailjs from 'emailjs-com'
import React, { useRef } from 'react';

function ContactUs() {

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_7nta2ns', 'template_09c6b4d', e.target, '5Yu9yk8mxoA0OVXf1')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    console.log(sendEmail)
    console.log(emailjs)
    e.target.reset()



  }


  return (
    <div>

      <div className='container'>

        <form ref={form} onSubmit={sendEmail}>
          <label>name</label>
          <input type="text" name="name" />
          <label>email</label>
          <input type="email" name="email"l />
          <label>comment</label>
          <textarea name="comment" />
          <input type="submit" value="Send" />
        </form>

      </div>
    </div>
  );
}

export default ContactUs;