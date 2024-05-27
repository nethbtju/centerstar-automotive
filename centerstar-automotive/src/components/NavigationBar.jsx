import React from "react";
import Button from "./Button";
import logo from "../img/logo.png";

function NavigationBar() {
    return (
        <div className="bg-nav-color w-full flex flex-col sm:flex-row items-center justify-between p-3 sm:p-4"> {/* Adjust padding */}
            <img src={logo} alt="logo" className="w-48 mb-1 sm:mb-0"/> {/* Adjust margin */}
            <section className="flex flex-row gap-3 sm:w-auto sm:pl-4"> {/* Add padding */}
                <Button btnText="About Us" type="hover:bg-highlight-color hover:text-nav-color hover:cursor-pointer text-highlight-color"/>
                <Button btnText="Contact Us" type="hover:bg-nav-color hover:text-highlight-color hover:cursor-pointer bg-highlight-color"/>
            </section>
        </div>
    );
}

export default NavigationBar;
