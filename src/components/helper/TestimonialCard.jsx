import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = ({ src, alt, para, title, designation }) => {
    return (
        <div className="relative p-4 border rounded-lg shadow-lg">
            <FaQuoteLeft className="absolute bottom-0 left-3 translate-y-1/2 text-4xl text-gray-300" />
            <img src={src} alt={alt} className="w-[140px] h-[170px]" />
            <p className="mt-4 text-gray-700">{para}</p>
            <h3 className="mt-2 text-lg font-bold">{title}</h3>
            <span className="text-sm text-gray-500">{designation}</span>
        </div>
    );
};

export default TestimonialCard;