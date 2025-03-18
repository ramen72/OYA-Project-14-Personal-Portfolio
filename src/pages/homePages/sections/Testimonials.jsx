import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import TestimonialCard from '../../../components/helper/TestimonialCard';
import testimonialImage from '../../../assets/svg/testimonialImage.svg'

const Testimonials = () => {
    const testimonialPara = 'So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuali.'
    const testimonialPara2 = 'I have hinted that I would often jerk poor Queequeg from between the whale and the ship—where he would occasionally fall, from the incessant rolling and swaying of bo.'
    const testimonialPara3 = 'So strongly and metaphysically did I conceive of my situation then, that while earnestly watching his motions, I seemed distinctly to perceive that my own individuali.'
    return (
        <>
        <div className='max-w-containerWith mx-auto'>
            <div className="flex mb-24">
                <div className="w-1/3 bottom-1">
                    <h5 className='font-raleway font-bold text-lg text-lightBlack leading-6'>Testimonials</h5>
                    <h2 className='max-w-[257px] font-raleway font-bold text-4xl text-lightBlack mb-6'>What they say about me</h2>
                    <p className="max-w-[274px] font-raleway font-normal text-base text-gray mb-8">
                        Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second on.)
                    </p>
                    <IoIosArrowBack className='inline-block w-[58px] h-[70px] p-4 transition-all duration-200 hover:bg-secondary hover:text-white hover:cursor-pointer'/>
                    <IoIosArrowForward className='inline-block w-[58px] h-[70px] p-4 transition-all duration-200 hover:bg-secondary hover:text-white hover:cursor-pointer'/>
                </div>
                <div className="w-2/3 flex justify-between gap-x-10">
                    <TestimonialCard src={testimonialImage} para={testimonialPara} title={"Cardarion Hart"} designation={'CEO of MANTUL'}/>
                    <TestimonialCard src={testimonialImage} para={testimonialPara2} title={"Kobus van de Vegte"} designation={'CEO of SUKSESPOLL'}/>
                    <TestimonialCard src={testimonialImage} para={testimonialPara3} title={"Sara Reyes"} designation={'CEO of MAJUMUNDUR'}/>
                </div>
            </div>
        </div>
        </>
    );
};

export default Testimonials;