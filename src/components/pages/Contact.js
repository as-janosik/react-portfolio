import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }

    if (inputType === 'email' && inputValue !== '') {
      if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');

        return;

      } else {
        setErrorMessage('');
      }
    }

  };
  const handleBlur = (e) => {

    const { target } = e;

    const inputValue = target.value;


    if (inputValue === '') {
      setErrorMessage('Name, email, and message required');
      return;
    }
  };

  const handleFormSubmit = (e) => {

    e.preventDefault();


    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');

      return;

    }

    alert(`Hello ${userName}`);


    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <center>
      <div className="fixed-center">
        <h1>Contact Page</h1>
        <div>
          <form>
            <div className="form-group">
              <input
                value={userName}
                name="userName"
                onChange={handleInputChange}
                onBlur={handleBlur}
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                onBlur={handleBlur}
                type="email"
                placeholder="email"
              />
            </div>
            <div className="form-group">
              <input
                value={message}
                name="message"
                onChange={handleInputChange}
                onBlur={handleBlur}
                type="text"
                placeholder="message"
              />
            </div>
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text text-danger">{errorMessage}</p>
            </div>
          )}
        </div>
        <p>

          <a href="mailto: andrew.janosik@gmail.com">Send Email</a>
          <br />
          Phone:
          <a href="tel:+920XXXXXXX">1 (920) XXX-XXXX</a>
          <br />
          <a href="https://github.com/as-janosik">Github</a>
        </p>
      </div>
    </center>
  );
}
