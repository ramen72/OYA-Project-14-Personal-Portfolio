import React from 'react';
import ArrowButton from '../../../components/helper/ArrowButton';

const AboutUs = () => {
    return (
        <div className='bg-radish px-[185px] py-[150px]'>
            <div className="max-w-containerWith mx-auto">
                <div className="flex justify-between items-center text-white">
                    <div>
                        <h6>About Me</h6>
                        <h2 className='max-w-[560px] font-raleway font-bold text-3xl text-white mt-4 mb-7'>You can’t  use up creativity. The more you use, the more you have in your signifant mind.</h2>
                        <p className='max-w-[500px] font-raleway font-normal text-base text-white leading-6 mb-16'>
                            Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat (the second one from forward), it was my cheerful duty to attend upon him while taking that hard-scrabble scramble upon the dead whale's back. You have seen Italian organ-boys 
                        </p>
                        <ArrowButton contentText={"Download Resume"} color={true} huberColor={true}/>
                    </div>
                    <div>
                        <h2 className='max-w-[360px] font-raleway font-bold text-3xl text-white mt-4 mb-7'>Any type of question & Discussion.</h2>
                        <p className='max-w-[500px] font-raleway font-normal text-base text-white leading-6 mb-7'>
                        Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat
                        </p>
                        <span className='font-raleway font-bold text-lg text-white leading-6'>WilliamAndersons@william.std</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;