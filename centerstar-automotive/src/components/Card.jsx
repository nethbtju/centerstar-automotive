import React from 'react';
import '@fontsource/inter'; // Make sure you have installed the font using npm/yarn

const Card = ({ children, imageUrl, title }) => {
  return (
    <div className="bg-card-grey-color rounded-md w-1/4 h-48 shadow-md relative overflow-hidden"> 
      <div className="h-11/20 w-full"> {/* Set height to 55% of the card */}
        <img src={imageUrl} alt="Card Image" className="w-full h-full object-cover" /> {/* Set image to fill its container */}
      </div>
      <div className="h-9/20 w-full py-1 px-3"> {/* Reduced vertical padding and increased horizontal padding */}
        <h2 className="font-inter text-white text-lg mb-1" style={{ fontWeight: 450 }}>{title}</h2> {/* Set font weight manually */}
        <p className="font-inter text-white text-[9px]" style={{ fontWeight: 100, marginTop: '-0.25rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p> {/* Adjust margin to reduce spacing */}
        {children}
      </div>
    </div>
  );
};

export default Card;
