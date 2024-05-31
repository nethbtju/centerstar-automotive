import React, { useState } from 'react';
import Button from './Button';
import logo from '../img/contact-card-image.png';

const svgIcon = (
  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.75002 8L1.13281 1.34375C7.39348 2.76875 13.2973 5.01984 18.5898 8C13.2976 10.9801 7.39411 13.2312 1.13377 14.6562L3.75002 8ZM3.75002 8H10.9375" stroke="#2F2F2F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ContactCard = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleModel: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async () => {
    // Hardcoded values for testing
    const senderEmail = 'centerstar-inquiries@resend.dev';
    const recipientEmail = 'centerstarautomotive@gmail.com';
    const subject = 'Test Email';
    const message = '<p>This is a test email from Nethmini :p</p>';

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
          html: message,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Email sent successfully:', data);
      } else {
        console.error('Error sending email:', data);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-black rounded-lg px-6 py-4 text-white mt-16 mx-auto" style={{ width: '85%', border: '1px solid #616161', borderRadius: '16px', position: 'relative' }}>
      <h1 className="font-inria font-bold text-3xl mb-4 px-20 py-12 pb-0">Contact Us</h1>
      <label htmlFor="issue" className="font-inria block mb-2 px-10" style={{ fontWeight: 400 }}>Tell us the issue:</label>

      {/* Two-Column Layout */}
      <div className="flex">
        {/* Left Column */}
        <div className="w-1/2">
          <div className="flex flex-col">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="font-inter bg-black text-white border border-white rounded-lg px-2 py-2 mt-1 ml-9"
              style={{ borderRadius: '10px', border: '1px solid white' }}
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="font-inter bg-black text-white border border-white rounded-lg px-2 py-2 mt-5 ml-9"
              style={{ borderRadius: '10px', border: '1px solid white' }}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
              className="font-inter bg-black text-white border border-white rounded-lg px-2 py-2 mt-5 ml-9"
              style={{ borderRadius: '10px', border: '1px solid white' }}
            />
            <input
              type="text"
              name="vehicleModel"
              placeholder="Vehicle Model"
              value={formData.vehicleModel}
              onChange={handleChange}
              className="font-inter bg-black text-white border border-white rounded-lg px-2 py-2 mt-5 ml-9"
              style={{ borderRadius: '10px', border: '1px solid white' }}
            />
            <input
              type="text"
              name="message"
              placeholder="Enter message"
              value={formData.message}
              onChange={handleChange}
              className="font-inter bg-black text-white border border-white rounded-lg px-2 py-16 mt-5 ml-9"
              style={{ borderRadius: '10px', border: '1px solid white' }}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-1/2 flex items-end justify-end" style={{ position: 'absolute', bottom: 0, right: 0 }}>
          <div className="w-2/3 h-auto" style={{ transformOrigin: 'bottom right', transform: 'scale(1.35)', overflow: 'hidden' }}>
            <img src={logo} alt="Image" className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>

      <div className="flex ml-9 mt-5 pb-10">
        <Button
          btnText="Send"
          type="hover:bg-nav-color hover:text-highlight-color hover:cursor-pointer bg-highlight-color text-black"
          height="h-8"
          width="w-100"
          icon={svgIcon}
          onClick={sendEmail}
        />
      </div>

      {children}
    </div>
  );
};

export default ContactCard;
