import React from 'react';
import ArrowButton from './ArrowButton';

const SkillCard = ({titleText,bodyText,btnText}) => {
    return (
        <div className='relative group w-[370px] h-[334px] px-[50px] pt-[50px] pb-9 border border-stoke transition-all duration-300 hover:bg-radish overflow-hidden'>
            <div className='w-80 h-80 bg-gradient-to-r from-[#F46C88] to-[rgba(251,165,189,0.2)] rounded-full absolute -left-[73px] -top-[46px] opacity-0 transition-all duration-300 group-hover:opacity-100'></div>
            <div className='relative z-10'>
                <h2 className='font-raleway font-medium text-2xl text-lightBlack capitalize mb-6 transition-all duration-300 group-hover:text-white'>{titleText}</h2>
                <p className='font-raleway font-normal text-base text-lightBlack leading-6 mb-10 transition-all duration-300 group-hover:text-white'>{bodyText}</p>
                <ArrowButton contentText={"LEARN MORE"} groupHover={"true"}/>
            </div>
        </div>
    );
};

export default SkillCard;