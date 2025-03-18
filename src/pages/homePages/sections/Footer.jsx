import React from 'react';
import ArrowButton from '../../../components/helper/ArrowButton';

const Footer = () => {
    return (
        <>
            <div className="bg-radish pt-24 pb-10 border-b-[1px] border-white">
                <div className="max-w-containerWith mx-auto">
                    <h4 className='font-raleway font-bold text-lg text-white text-center uppercase pb-5'>contact us</h4>
                    <h2 className='max-w-[421px] mx-auto font-raleway font-bold text-4xl text-center text-white mb-6'>Let's talk, and make something great</h2>
                    <div className='text-center my-14'>
                        <a href="#" className='px-12 py-5 rounded-[30px] bg-secondary font-raleway font-bold text-base text-white'>Contact us</a>
                    </div>
                </div>
            </div>
                    
            <div className='bg-radish py-10'>
                <div className="max-w-containerWith mx-auto">
                    <div className="flex justify-between items-center">
                        <h4 className='font-raleway font-bold text-lg text-center text-white'>willima.std</h4>
                        <p className='font-raleway text-lg text-center text-white font-normal'>Copyright © 2020 william.std | all right reserved</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;