import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer id='footer' className='text-center mt-5 bg-dark'>
            <p id='foot' className='text-light'>copyright ©  {year}</p>
        </footer>
    );
};

export default Footer;