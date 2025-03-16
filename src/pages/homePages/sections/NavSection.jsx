import React from 'react';
import logoImage from '../../../assets/svg/logo.svg'
import { navData } from '../../../dummyData/NavData';

const NavSection = () => {
    return (
        <>
            <nav className='py-50'>
                <div className="max-w-containerWith mx-auto">
                    <div className='flex justify-between items-center'>
                    <img src={logoImage} alt="Logo" />
                    <ul className='flex justify-end items-center gap-x-[45px]'>
                        {
                            navData.map((item,index)=>(
                                <li key={index}>
                                    <a href={item.url} className='font-montserrat text-navlink text-base font-semibold leading-none capitalize hover:text-secondary transition-all duration-300'>{item.lavel}</a>
                                </li>
                            ))
                        }
                    </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavSection;