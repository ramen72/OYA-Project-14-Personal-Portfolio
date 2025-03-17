import React from 'react';
import SkillCard from '../../../components/helper/SkillCard';

const Skills = () => {
    const bodyTextOne = `Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat, Being the savage's bowsman, that is, the person who pulled`
    const bodyTextTwo = `Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat, Being the savage's bowsman, that is, the person who pulled`
    const bodyTextThree = `Being the savage's bowsman, that is, the person who pulled the bow-oar in his boat, Being the savage's bowsman, that is, the person who pulled`
    return (
        <>
            <div className="max-w-containerWith mx-auto pt-[150px]">
                <h5 className='font-raleway font-bold text-lg text-center text-lightBlack mb-4'>Skills</h5>
                <h2 className='font-raleway font-bold text-4xl text-center text-lightBlack'>What Can I Do</h2>
                <div className="flex justify-between items-center mt-16">
                    <SkillCard titleText={"Illustrator"} bodyText={bodyTextOne}/>
                    <SkillCard titleText={"UI/UX Designer"} bodyText={bodyTextTwo}/>
                    <SkillCard titleText={"Logo Design"} bodyText={bodyTextThree}/>
                </div>
            </div>
        </>
    );
};

export default Skills;