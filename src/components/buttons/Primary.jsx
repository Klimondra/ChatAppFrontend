"use client"
import React, {useState} from 'react';
import {MdKeyboardArrowRight} from "react-icons/md";
import SlidingIcon from "@/components/utils/SlidingIcon";

const PrimaryButton = ({label, icon, onClick, className, ...others}) => {
    const [hover, setHover] = useState(false);

    return (
        <button
            onClick={onClick}
            className={`flex flex-row items-center justify-center gap-2 
                        bg-green-500 px-4 py-2.5 rounded-full shadow-sm
                        hover:bg-green-400 active:scale-97 transition-all duration-250
                        ${className}`}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            {...others}
        >
            {icon && React.cloneElement(icon, { className: `${icon.props.className || ''} text-green-950 w-5 h-5` })}
            <p className={`font-main text-xl text-green-950`}>{label}</p>
            <SlidingIcon hoverState={hover} icon={<MdKeyboardArrowRight/>} width={6} height={6} />
        </button>
    );
};

export default PrimaryButton;