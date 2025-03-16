import React from 'react';
import bannerImage from '../../../assets/svg/bannerImage.svg'
import { IoIosArrowForward } from "react-icons/io";

const Banner = () => {
    return (
        <>
            <div className="max-w-containerWith mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <h5 className='text-lightBlack text-lg uppercase font-bold space-x-0.5 leading-6'>Hello I'm <span className='text-radish'>visual designer</span></h5>
                        <h1 className='font-raleway leading-[88px] text-lightBlack text-7xl font-bold '>William Andersons</h1>
                        <p className='text-base text-gray max-w-[460px] mb-[50px]'>
                            My ultimate motto is to fulfill the demand of the buyers by making them satisfied with proper file delivery in time and without delay.
                        </p>
                        <a href="#" className='bg-secondary text-white uppercase text-base rounded-[30px] px-10 py-5 font-raleway font-bold'>hire me</a>
                        <a href="#" className='text-secondary ms-9 inline-flex justify-start items-center gap-x-6 transition-all duration-200 hover:text-gray'>DOWNLOAD RESUME <IoIosArrowForward className='text-xl text-inherit'/></a>
                    </div>
                    <img src={bannerImage} alt="BannerImage" />
                </div>
            </div>
        </>
    );
};

export default Banner;