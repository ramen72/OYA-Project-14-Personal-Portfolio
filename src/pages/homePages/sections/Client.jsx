import React from 'react';
import clientLogo from '../../../assets/svg/logo-1.svg'
import clientLogo2 from '../../../assets/svg/logo-2.svg'
import clientLogo3 from '../../../assets/svg/logo-3.svg'
import clientLogo4 from '../../../assets/svg/logo-4.svg'
import clientLogo5 from '../../../assets/svg/logo-5.svg'

const Client = () => {
    return (
        <>
            <div className="max-w-containerWith mx-auto">
                <div className="flex justify-center items-center gap-x-9 mb-24">
                    <img src={clientLogo} alt="Logo" />
                    <img src={clientLogo2} alt="Logo" />
                    <img src={clientLogo3} alt="Logo" />
                    <img src={clientLogo4} alt="Logo" />
                    <img src={clientLogo5} alt="Logo" />
                </div>
            </div>
        </>
    );
};

export default Client;