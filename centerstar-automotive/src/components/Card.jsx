import React from 'react';
import '@fontsource/inter'; // Make sure you have installed the font using npm/yarn

const Card = ({ children, imageUrl, title }) => {
  return (
    <div className="bg-card-grey-color rounded-md w-1/4 shadow-md relative overflow-hidden transform transition-transform hover:scale-105">
      <div className="h-11/20 w-full"> {/* Set height to 55% of the card */}
        <img src={imageUrl} alt="Card Image" className="w-full h-36 overflow-hidden object-cover" /> {/* Set image to fill its container */}
      </div>
      <div className="h-9/20 w-full p-4"> {/* Reduced vertical padding and increased horizontal padding */}
        <h2 className="font-inter text-white text-lg mb-2" style={{ fontWeight: 450 }}>{title}</h2> {/* Set font weight manually */}
        <p className="font-inter text-white text-[12px] w-3/4" style={{ fontWeight: 100, marginTop: '-0.25rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p> {/* Adjust margin to reduce spacing */}
        {children}
      </div>
    </div>
  );
};

export default Card;
