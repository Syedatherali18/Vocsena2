import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import Footer from '../Footer';
import validator from 'validator'; // Import a validation library

import './style.css';

const Contact = () => {
  const formRef = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    contact_number: '',
    service_code: '',
    subject: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Basic validation
    const errors = {};
    if (!formData.user_name) errors.user_name = 'Name is required';
    if (!validator.isEmail(formData.user_email)) errors.user_email = 'Invalid email address';
    if (!formData.contact_number) errors.contact_number = 'Contact is required';
    if (!formData.service_code) errors.service_code = 'Service Code is required';
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';

    if (Object.keys(errors).length === 0) {
      emailjs
        .sendForm('service_y9otnlc', 'template_e7vrn29', formRef.current, 'MJmVPsfzXmPDNLXTi')
        .then((result) => {
          console.log(result.text);
          setIsEmailSent(true);
        })
        .catch((error) => {
          console.error(error.text);
        });
    }

    setFormErrors(errors);
  };

  return (
    <div>
      <section>
        <div className='container-contact'>
          <h2 className='text-center'>Message Anytime!</h2>
          {isEmailSent && (
            <div className='success-message'>
              Your message has been sent successfully! We'll get back to you in just 10 minutes. Stay tuned and check your emails!
            </div>
          )}
          <form ref={formRef} onSubmit={sendEmail} className='form-control-card'>
            <div className='form-group'>
              <label htmlFor='user_name'>Full Name</label>
              <input
                type='text'
                id='user_name'
                name='user_name'
                value={formData.user_name}
                onChange={handleInputChange}
                required
              />
              {formErrors.user_name && <span className='error'>{formErrors.user_name}</span>}
            </div>

            <div className='form-group'>
              <label htmlFor='user_email'>Email</label>
              <input
                type='email'
                id='user_email'
                name='user_email'
                value={formData.user_email}
                onChange={handleInputChange}
                required
              />
              {formErrors.user_email && <span className='error'>{formErrors.user_email}</span>}
            </div>

            <div className='form-group'>
              <label htmlFor='contact_number'>Contact</label>
              <input
                type='text'
                id='contact_number'
                name='contact_number'
                value={formData.contact_number}
                onChange={handleInputChange}
                required
              />
              {formErrors.contact_number && <span className='error'>{formErrors.contact_number}</span>}
            </div>
            <div className='form-group'>
              <label htmlFor='service_code'>Service Code</label>
              <input
                type='text'
                id='service_code'
                name='service_code'
                value={formData.service_code}
                onChange={handleInputChange}
                required
              />
              {formErrors.service_code && <span className='error'>{formErrors.service_code}</span>}
            </div>
            <div className='form-group'>
              <label htmlFor='subject'>Subject</label>
              <input
                type='text'
                id='subject'
                name='subject'
                value={formData.subject}
                onChange={handleInputChange}
                required
              />
              {formErrors.subject && <span className='error'>{formErrors.subject}</span>}
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleInputChange}
                cols='30'
                rows='10'
                required
              />
              {formErrors.message && <span className='error'>{formErrors.message}</span>}
            </div>
            <button type='submit' className='btn-primary'>
              Send
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
