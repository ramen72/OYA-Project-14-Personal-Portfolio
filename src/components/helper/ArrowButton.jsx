import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const ArrowButton = ({contentText, color, paddingSize, huberColor, groupHover}) => {
    return (
        <a href="#" className={`inline-block ${paddingSize ? "px-10 py-5 rounded-[30px]" : "px-0"} ${color ? 'text-white' : 'text-secondary' } inline-flex justify-start items-center gap-x-6 transition-all duration-200 ${huberColor && 'hover:bg-secondary hover:text-white'} ${groupHover && 'group-hover:text-white'}`}>{contentText} <IoIosArrowForward className='text-xl text-inherit'/></a>
    );
};

export default ArrowButton;