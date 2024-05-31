import React from "react";

function Button({ type, btnText, width = 'w-32', height = 'h-10', icon }) {
    return (
        <div className={`${width} ${height} ${type} flex justify-center items-center rounded border-solid border-2 border-highlight-color`}>
            {btnText}
            {icon && <span className="ml-2">{icon}</span>}
        </div>
    );
}

export default Button;
