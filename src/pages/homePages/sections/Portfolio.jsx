import React from 'react';
import PortfolioCard from '../../../components/helper/PortfolioCard';

const Portfolio = () => {
    return (
        <>
            <div className="max-w-containerWith mx-auto py-[150px]">
                <h5 className='font-raleway font-bold text-lg text-center text-lightBlack mb-4'>Portfolio</h5>
                <h2 className='font-raleway font-bold text-4xl text-center text-lightBlack'>My Work Recently</h2>
                <ul className="flex justify-center items-center gap-x-11 mt-10">
                    <li className='font-montserrat font-semibold text-base text-gray transition-all duration-200 hover:text-secondary hover:cursor-pointer'>All</li>
                    <li className='font-montserrat font-semibold text-base text-gray transition-all duration-200 hover:text-secondary hover:cursor-pointer'>Illustration</li>
                    <li className='font-montserrat font-semibold text-base text-gray transition-all duration-200 hover:text-secondary hover:cursor-pointer'>UI/UX</li>
                    <li className='font-montserrat font-semibold text-base text-gray transition-all duration-200 hover:text-secondary hover:cursor-pointer'>Logo</li>
                </ul>
                <div className='flex justify-center items-center flex-wrap gap-7 mt-16'>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                    <PortfolioCard/>
                </div>
            </div>
        </>
    );
};

export default Portfolio;