import Button from 'react-bootstrap/Button';
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

      <div className='formcontainer'>
        <div className='form'>
          <form ref={form} onSubmit={sendEmail} className="formInput">
            <div>
            <label className='formName'>name</label>
            <input type="text" name="name" />
            </div>
            <div>
            <label className='formEmail'>email</label>
            <input type="email" name="email" l />
            </div>
            <div>
            <label className='formtelephone'>telephone</label>
            <input type="telephone" name="telephone" l />
            </div>
            <div>
            <label className='formComment'>comment</label>
            <textarea name="comment" />
            </div>
            <input type="submit" value="Send" className='formbtn' />
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;