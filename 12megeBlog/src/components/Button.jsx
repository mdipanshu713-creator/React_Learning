import React from "react";

function Button({
    children,
    type = "button",
    bgColor = "bg-gray-900",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button
            type={type}
            className={`
                inline-flex
                items-center
                justify-center
                gap-2
                rounded-xl
                px-5
                py-2.5
                text-sm
                font-semibold
                shadow-sm
                transition-all
                duration-200
                ease-out
                hover:-translate-y-0.5
                hover:shadow-md
                active:translate-y-0
                active:shadow-sm
                focus:outline-none
                focus:ring-2
                focus:ring-gray-400
                focus:ring-offset-2
                disabled:cursor-not-allowed
                disabled:opacity-50
                disabled:hover:translate-y-0
                ${bgColor}
                ${textColor}
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;