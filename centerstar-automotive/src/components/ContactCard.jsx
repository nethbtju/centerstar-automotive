import React, { useState, useEffect } from 'react';
import Button from './Button';
import logo from '../img/contact-card-image.png';
import SimpleAlert from './SimpleAlert'; // Import SimpleAlert component

const svgIcon = (
  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.75002 8L1.13281 1.34375C7.39348 2.76875 13.2973 5.01984 18.5898 8C13.2976 10.9801 7.39411 13.2312 1.13377 14.6562L3.75002 8ZM3.75002 8H10.9375" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const validateEmail = (email) => {
  // Regular expression for validating email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhoneNumber = (phoneNumber) => {
  // Regular expression for validating phone number format
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
};

const ContactCard = ({ children, handleEmailSuccess }) => { // Add handleEmailSuccess prop
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleModel: '',
    message: '',
  });

  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [scale, setScale] = useState(0.95);
  const [display, setDisplay] = useState('display')

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async () => {
    // Get form data
    const { name, email, phone, vehicleModel, message } = formData;

    // Validate email and phone
    setEmailError(validateEmail(email) ? '' : 'Enter a valid email address');
    setPhoneError(validatePhoneNumber(phone) ? '' : 'Enter a valid phone number');

    if (validateEmail(email) && validatePhoneNumber(phone)) {
      // Hardcoded values for testing
      const senderEmail = 'centerstar-inquiries@resend.dev';
      const recipientEmail = 'rohitvalanki@gmail.com';
      const subject = name + " - " + vehicleModel;
      const themessage = `<!DOCTYPE html>
        <html>
        <head>
          <title>Contact Form</title>
        </head>
        <body style = "font-color: black;">
          <h1>Contact Information</h1>
          <div>
            <p><strong>Name:</strong> ${name} </p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone} </p>
            <p><strong>Vehicle Number:</strong> ${vehicleModel} </p>
            <p><strong>Message:</strong> ${message} </p>
          </div>
        </body>
        </html>
      `;

      try {
        const response = await fetch('http://localhost:3001/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: senderEmail,
            to: recipientEmail,
            subject,
            html: themessage,
          }),
        });

        const data = await response.json();
        if (response.ok) {
          console.log('Email sent successfully:', data);

          if (data.error == null) {
            handleEmailSuccess(true);

            setTimeout(() => {
              setFormData({
                name: '',
                email: '',
                phone: '',
                vehicleModel: '',
                message: '',
              });
            }, 3000);

          }
          else {
            handleEmailSuccess(false);
          }

          // Call the parent component function with success status
        } else {
          console.error('Error sending email:', data);
          handleEmailSuccess(false); // Call the parent component function with failure status
        }
      } catch (error) {
        console.error('Error:', error);
        handleEmailSuccess(false); // Call the parent component function with failure status
      }
    }
  };

  useEffect(() => {
    const updateScale = () => {
      const newScale = window.innerWidth > 1900 ? 0.95 : (window.innerWidth < 1400 ? 1.4 : 1.35); // Adjust scale based on window width
      setScale(newScale);
    };

    updateScale(); // Call once on component mount

    // Debounce the resize event to improve performance and avoid conflicts
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateScale, 150); // Adjust debounce timeout as needed
    };

    window.addEventListener('resize', handleResize); // Update scale on window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on component unmount
    };
  }, []);

  useEffect(() => {
    const updateDisplay = () => {
      const newDisplay = window.innerWidth <= 1050 ? 'none' : ''; // Adjust scale based on window width
      setDisplay(newDisplay);
    };

    updateDisplay(); // Call once on component mount

    // Debounce the resize event to improve performance and avoid conflicts
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDisplay, 150); // Adjust debounce timeout as needed
    };

    window.addEventListener('resize', handleResize); // Update scale on window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Cleanup on component unmount
    };
  }, []);

  return (
    <div
      id="contact-card"
      className="bg-black rounded-lg px-6 py-4 text-white mt-16"
      style={{ border: '1px solid #616161', borderRadius: '16px', position: 'relative' }}
    >
      <h1 className="font-inria font-bold text-3xl mb-4 px-0 md:px-20 py-12 pb-0 text-center md:text-left">Contact Us</h1>
      <label htmlFor="issue" className="font-inria block mb-2 px-10" style={{ fontWeight: 400 }}>Tell us the issue:</label>

      {/* Two-Column Layout */}
      <div className="flex">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="font-inter bg-black text-white border border-white rounded-lg px-2 py-2 mt-1 ml-9 sm: mr-9 lg:mr-0"
              style={{ borderRadius: '10px', border: '1px solid white' }}
            />

            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="font-inter bg-black text-white border border-white rounded-lg px-2 py-2 mt-5 ml-9 sm: mr-9 lg:mr-0"
              style={{ borderRadius: '10px', border: '1px solid white' }}
            />
            <p className="text-sm font-sans text-red-500 px-10 py-1">{emailError}</p>

            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="font-inter bg-black text-white border border-white rounded-lg px-2 py-2 mt-3 ml-9 sm: mr-9 lg:mr-0"
              style={{ borderRadius: '10px', border: '1px solid white' }}
            />
            <p className="text-sm font-sans text-red-500 px-10 py-1">{phoneError}</p>

            <input
              type="text"
              name="vehicleModel"
              placeholder="Vehicle Model"
              value={formData.vehicleModel}
              onChange={handleChange}
              className="font-inter bg-black text-white border border-white rounded-lg px-2 py-2 mt-3 ml-9 sm: mr-9 lg:mr-0"
              style={{ borderRadius: '10px', border: '1px solid white' }}
            />
            <input
              type="text"
              name="message"
              placeholder="Enter message"
              value={formData.message}
              onChange={handleChange}
              className="font-inter bg-black text-white border border-white rounded-lg px-2 py-16 mt-5 ml-9 sm: mr-9 lg:mr-0"
              style={{ borderRadius: '10px', border: '1px solid white' }}
            />

            <div className="flex ml-9 mt-5 pb-10 sm: mr-9 lg:mr-0">
              <Button
                btnText="Send"
                type="hover:bg-nav-color hover:text-highlight-color hover:cursor-pointer bg-highlight-color text-black"
                height="h-8"
                width="w-full"
                icon={svgIcon}
                onClick={sendEmail}
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="hidden md:flex w-full md:w-1/2 items-end justify-end " style={{ position: 'absolute', bottom: 0, right: 0, display: window.innerWidth <= 1150 ? 'none' : '' }}>
          <div className="w-2/3 h-auto" style={{ transformOrigin: 'bottom right', transform: `scale(${window.innerWidth > 1900 ? 0.95 : (window.innerWidth < 1400 ? 1.4 : 1.35)})`, overflow: 'hidden' }}>
            <img src={logo} alt="Image" className="w-full h-auto object-cover" />
          </div>
        </div>

      </div>



      {children}
    </div>
  );
};

export default ContactCard;

