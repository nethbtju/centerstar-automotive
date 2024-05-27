import React from 'react';

const Card = ({ children }) => {
  return (
    <div className="bg-gray-900 rounded-md p-4 w-1/5 h-48"> 
      {children}
    </div>
  );
};

export default Card;
