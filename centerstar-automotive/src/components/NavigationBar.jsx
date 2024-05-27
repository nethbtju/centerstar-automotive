import React from "react";
import Button from "./Button";
import logo from "../img/logo.png";

function NavigationBar() {
    return (
        <div className="bg-nav-color w-full flex flex-col sm:flex-row items-center justify-between p-8">
            <img src={logo} alt="logo" className="w-52 mb-4 sm:mb-0"/>
            <section className="flex flex-row gap-4 sm:w-auto">
                <Button btnText="About Us" type="hover:bg-highlight-color hover:text-nav-color hover:cursor-pointer text-highlight-color border-solid border-2 border-highlight-color"/>
                <Button btnText="Contact Us" type="hover:bg-nav-color hover:text-highlight-color hover:cursor-pointer border-solid border-2 border-highlight-color bg-highlight-color"/>
            </section>
        </div>
    );
}

export default NavigationBar;




