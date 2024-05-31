import React from "react";

function Button({ type, btnText, width = 'w-32', height = 'h-10', icon , onClick}) {
    return (
        <button onClick={onClick} className={`${width} ${height} ${type} flex justify-center items-center rounded border-solid border-2 border-highlight-color`}>
            {btnText}
            {icon && <span className="ml-2">{icon}</span>}
        </button>
    );
}

export default Button;
