import React from "react";
import Button from "./Button";
import logo from "../img/logo.png";

function NavigationBar() {
    return (
        <div className="bg-nav-color w-full h-20 flex items-center p-8">
            <img src={logo} alt="logo" className="w-52"/>
            <section className="ml-auto flex flex-row gap-4">
                <Button btnText="About Us" type="hover:bg-highlight-color hover:text-nav-color hover:cursor-pointer text-highlight-color"/>
                <Button btnText="Contact Us" type="hover:bg-nav-color hover:text-highlight-color hover:cursor-pointer bg-highlight-color"/>
            </section>
        </div>
    );
}

export default NavigationBar;
