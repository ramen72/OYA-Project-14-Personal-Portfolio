import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import TestimonialCard from '../../../components/helper/TestimonialCard';
import testimonialImage from '../../../assets/svg/testimonialImage.svg'

const Testimonials = () => {
    return (
        <>
        <div className='max-w-containerWith mx-auto'>
            <div className="flex">
                <div className="w-1/3">
                    <h5 className='font-raleway font-bold text-lg text-lightBlack leading-6'>Testimonials</h5>
                    <h2 className='max-w-[257px] font-raleway font-bold text-4xl text-lightBlack mb-6'>What they say about me</h2>
                    <p className="max-w-[274px] font-raleway font-normal text-base text-gray">
                        Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second on.
                    </p>
                    <IoIosArrowBack className='inline-block w-[58px] h-[70px] p-4 transition-all duration-200 hover:bg-secondary hover:text-white hover:cursor-pointer'/>
                </div>
                <div className="w-2/3">
                    <TestimonialCard src={testimonialImage}/>
                </div>
            </div>
        </div>
        </>
    );
};

export default Testimonials;