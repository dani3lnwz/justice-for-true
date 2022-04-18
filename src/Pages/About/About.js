import React from 'react';
import dan from '../../images/dan.jpg'
import './About.css'
const About = () => {
    return (
        <div className='container d-flex'>
            <img  className='w-50' src={dan} alt="" />
            <div className='p-5'>
            <h2 className='p-2 text-danger'>My name is Daniel</h2>
            <h4 className='p-2'>Hello Everyone.First of all take my Salam.I Am a student of BBA depertment & graduated from Independent University Of Bangladesh.But now there is a one goal in my life as a web developers.I want to be a sucessfull web developer.For this i try hard to reach my goal.Al though still i am not good enough.but Still i am working hard.Next few months i had to work hard, and also need a lots of practice.Please Allah all my wishes come true.Keep me in your prayers.And also lots of thanks to Programming Hero </h4>
            </div>
        </div>
    );
};

export default About;