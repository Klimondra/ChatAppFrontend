import React from 'react';

const SecondaryButton = ({label, icon, onClick, className, ...others}) => {
    return (
        <button
            onClick={onClick}
            className={`flex flex-row items-center justify-center gap-2 px-4 py-2.5
                        bg-white/10 backdrop-blur-lg rounded-full border-2 border-green-500
                        hover:bg-green-200 active:scale-97 transition-all duration-250
                        ${className}`}
            {...others}
        >
            {icon && React.cloneElement(icon, { className: `${icon.props.className || ''} text-green-950 w-5 h-5` })}
            <p className={`font-main text-xl text-green-950`}>{label}</p>
        </button>
    );
};

export default SecondaryButton;