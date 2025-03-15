import React from 'react';
import logoImage from '../../../assets/svg/logo.svg'

const NavSection = () => {
    return (
        <>
            <nav className='py-50'>
                <div className="max-w-containerWith mx-auto">
                    <img src={logoImage} alt="Logo" />
                    <h1>Watch Video: 47:30</h1>
                </div>
            </nav>
        </>
    );
};

export default NavSection;