import React from 'react';

const Footer = () => {
    return (
        <div className="bg-dark p-5">
            <p className="text-center p-0 m-0 text-white">Copyright &#169; Bldonor {new Date().getFullYear()}</p>
        </div>
    );
};

export default Footer;