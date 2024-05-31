import React from "react";

function Button({ btnText, onClick, width = 'w-32', height = 'h-10', icon }) {
    return (
        <div
            className={`bg-highlight-color text-black ${width} ${height} hover:bg-nav-color hover:text-highlight-color hover:cursor-pointer flex justify-center items-center rounded border-solid border-2 border-highlight-color`}
            onClick={onClick}
        >
            {btnText}
            {icon && <span className="ml-2">{icon}</span>}
        </div>
    );
}

export default Button;
