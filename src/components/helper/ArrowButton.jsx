import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const ArrowButton = ({contentText, color, huberColor}) => {
    return (
        <a href="#" className={`${color ? 'text-white' : 'text-secondary' } inline-flex justify-start items-center gap-x-6 transition-all duration-200 hover:${huberColor ? 'text-secondary' : 'text-radish'}`}>{contentText} <IoIosArrowForward className='text-xl text-inherit'/></a>
    );
};

export default ArrowButton;