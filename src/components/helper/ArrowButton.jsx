import React from 'react';
import { IoIosArrowForward } from "react-icons/io";

const ArrowButton = ({contentText}) => {
    return (
        <a href="#" className='text-secondary ms-9 inline-flex justify-start items-center gap-x-6 transition-all duration-200 hover:text-gray'>{contentText} <IoIosArrowForward className='text-xl text-inherit'/></a>
    );
};

export default ArrowButton;