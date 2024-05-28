import React from "react";

function Button({ type, btnText}) {
    return (
        <div className={`w-32 h-10 ${type} flex justify-center items-center rounded border-solid border-2 border-highlight-color`}>
            {btnText}
        </div>
    );
}

export default Button;
