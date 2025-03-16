import React from 'react';
import bannerImage from '../../../assets/svg/bannerImage.svg'

const Banner = () => {
    return (
        <>
            <div className="max-w-containerWith mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <h5>Hello I'm visual designer</h5>
                    </div>
                    <img src={bannerImage} alt="BannerImage" />
                </div>
            </div>
        </>
    );
};

export default Banner;