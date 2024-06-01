import React from "react";
import {useNavigate, useLocation, useParams} from 'react-router-dom';
import Button from "./Button";
import logo from "../img/logo.png";

function NavigationBar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleAboutClick = () => {
        navigate(`/about-us/main`);
    };

    const handleContactClick = () => {
        if (location.pathname.includes("/about-us/")) {
            navigate('/', { state: { scrollToContact: true } });
        } else {
            const contactCard = document.getElementById("contact-card");
            if (contactCard) {
                contactCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    };

    return (
        <div className="bg-nav-color w-full flex flex-col sm:flex-row items-center justify-between sm:ps-10 sm:pe-10 sm:p-4 py-2 sm:py-4">
            <img src={logo} alt="logo" className="w-64 mb-1 sm:mb-0"/>
            <section className="flex flex-row gap-3 sm:w-auto sm:pl-4 py-2 sm:py-0">
                {location.pathname === '/' ? (
                    <Button onClick={handleAboutClick} key="main" btnText="About Us" type="hover:bg-highlight-color hover:text-nav-color hover:cursor-pointer text-highlight-color"/>
                ) : (
                    <Button onClick={() => navigate('/')} btnText="Home" type="hover:bg-highlight-color hover:text-nav-color hover:cursor-pointer text-highlight-color"/>
                )}
                <Button onClick={handleContactClick} btnText="Contact Us" type="hover:bg-nav-color hover:text-highlight-color hover:cursor-pointer bg-highlight-color"/>
            </section>
        </div>
    );
}

export default NavigationBar;
