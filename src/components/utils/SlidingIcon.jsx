import React from 'react';
import {MdKeyboardArrowRight} from "react-icons/md";

const SlidingIcon = ({width = 6, height = 6, icon, hoverState, className, ...others}) => {
    return (
        <div
            className={`relative ${"w-"+ width + " h-" + height} ${className}`}
            {...others}
        >
            {icon && React.cloneElement(icon, { className: `${icon.props.className || ''} absolute text-green-950 ${"w-"+ width + " h-" + height} ${hoverState ? "translate-x-3 opacity-0" : "translate-x-0 opacity-100"} transition-all duration-300` })}
            {icon && React.cloneElement(icon, { className: `${icon.props.className || ''} absolute text-green-950 ${"w-"+ width + " h-" + height} ${hoverState ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"} transition-all duration-300` })}
        </div>
    );
};

export default SlidingIcon;