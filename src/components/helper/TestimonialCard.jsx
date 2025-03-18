import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ src, alt, para, title, designation }) => {
    return (
        <div className="rounded-lg">
            <div className="relative mb-10">
                <FaQuoteLeft className="absolute bottom-0 left-3 translate-y-1/2 text-4xl text-gray-300 text-radish" />
                <img src={src} alt={alt} className="w-[140px] h-[170px]" />
            </div>
            <p className="text-gray-700 mt-4 font-raleway font-normal text-base text-gray leading-6">{para}</p>
            <h3 className="font-raleway mt-2 text-lg font-bold text-lightBlack ">{title}</h3>
            <span className="font-montserrat text-sm text-gray mt-3">{designation}</span>
        </div>
    );
};

export default TestimonialCard;