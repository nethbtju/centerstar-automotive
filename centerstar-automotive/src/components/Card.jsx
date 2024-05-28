import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-card-grey-color rounded-md p-4 w-1/4 h-48 shadow_md"> 
      {children}
    </div>
  );
};

export default Card;
