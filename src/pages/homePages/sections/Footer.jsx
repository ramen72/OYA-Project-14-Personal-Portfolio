import React from 'react';
import ArrowButton from '../../../components/helper/ArrowButton';

const Footer = () => {
    return (
        <>
            <div className='bg-radish relative overflow-hidden'>
                <div className='w-[640px] h-[640px] bg-gradient-to-r from-[#F46C88] to-[rgba(251,165,189,0.2)] rounded-full absolute -top-[244px] -left-[70px]'></div>
                <div className='w-80 h-80 bg-gradient-to-r from-[#F46C88] to-[rgba(251,165,189,0.2)] rounded-full absolute -bottom-9 -right-24'></div>
                <div className='relative z-10'>
                    <div className=" pt-24 pb-10 border-b-[1px] border-[#ffffff33]">
                        <div className="max-w-containerWith mx-auto">
                            <h4 className='font-raleway font-bold text-lg text-white text-center uppercase pb-5'>contact us</h4>
                            <h2 className='max-w-[421px] mx-auto font-raleway font-bold text-4xl text-center text-white mb-6'>Let's talk, and make something great</h2>
                            <div className='text-center my-14'>
                                <a href="#" className='px-12 py-5 rounded-[30px] bg-secondary font-raleway font-bold text-base text-white'>Contact us</a>
                            </div>
                        </div>
                    </div>                        
                    <div className='py-10'>
                        <div className="max-w-containerWith mx-auto">
                            <div className="flex justify-between items-center">
                                <h4 className='font-raleway font-bold text-lg text-center text-white'>willima.std</h4>
                                <p className='font-raleway text-lg text-center text-white font-normal'>Copyright © 2020 william.std | all right reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;