import React from "react";
import Button from "./Button";

function NavigationBar() {
    return (
        <div className="bg-nav-color w-full h-20 flex items-center p-8">
            <section className="ml-auto flex flex-row gap-4">
                <Button btnText="About Us" type="hover:bg-highlight-color hover:text-nav-color hover:cursor-pointer text-highlight-color border-solid border-2 border-highlight-color"/>
                <Button btnText="Contact Us" type="hover:bg-nav-color hover:text-highlight-color hover:cursor-pointer border-solid border-2 border-highlight-color bg-highlight-color"/>
            </section>
        </div>
    );
}

export default NavigationBar;
