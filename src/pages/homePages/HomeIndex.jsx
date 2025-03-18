import React from 'react';
import NavSection from './sections/NavSection';
import Banner from './sections/Banner';
import AboutUs from './sections/AboutUs';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Testimonials from './sections/Testimonials';
import Client from './sections/Client';
import Footer from './sections/Footer';

const HomeIndex = () => {
    return (
        <>
            <NavSection/>
            <Banner/>
            <AboutUs/>
            <Skills/>
            <Portfolio/>
            <Testimonials/>
            <Client/>
            <Footer/>
        </>
    );
};

export default HomeIndex;