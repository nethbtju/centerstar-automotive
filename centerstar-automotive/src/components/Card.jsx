import React from 'react';
import { useNavigate } from 'react-router-dom';
import '@fontsource/inter';

const Card = ({ children, imageUrl, title, keyName, content}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/about-us/${keyName}`);
    };

    return (
        <div onClick={handleClick} className="hover:cursor-pointer bg-card-grey-color rounded-md w-1/4 shadow-md relative overflow-hidden transform transition-transform hover:scale-105">
            <div className="h-11/20 w-full">
                <img src={imageUrl} alt="Card Image" className="w-full h-36 overflow-hidden object-cover" />
            </div>
            <div className="h-9/20 w-full p-4">
                <h2 className="font-inter text-white text-lg mb-2" style={{ fontWeight: 450 }}>{title}</h2>
                <p className="font-inter text-white text-[12px] w-3/4" style={{ fontWeight: 100, marginTop: '-0.25rem' }}>{content}</p>
                {children}
            </div>
        </div>
    );
};

export default Card;
