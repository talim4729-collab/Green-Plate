import React from 'react';
import Aboutcard from './Aboutcard';
 import { Link } from 'react-router-dom';


const Aboutcard1 = () => {
    return (
        <>
            <Aboutcard 
            hd4="Our mission"
            hd1="About Us"
            pgh=" Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like. "
            sidebannar="src/assets/aboutsidebannar-1.jpg"
            />
        </>
    );
};

export default Aboutcard1;


export const AboutTextBannar = () => {
    return (
        <>
            <div style={{background : '#f1ae0e', padding: " 5% 10%", textAlign : 'center'}}>
                <div style={{background : "white", padding : "30px"}}>
                    <h1>We make a small, intimate,<br/> and inviting space for an <br/> unforgettable meal</h1>
                    <p>Comfort produce husband boy her had hearing. Law others theirs passed <br></br> but wishes. You day real less till dear read. Considered use dispatched melancholy<br></br> sympathize discretion led. Oh feel if up to till like.</p>
                      <div className='cardbtn'><Link className='nav-link' to="/"> <h2>See More</h2> </Link> </div>
                </div>
            </div>
        </>
    );
};

export const Aboutcard2 = () => {
    return (
        <>
            <Aboutcard 
            hd4="Our mission"
            hd1="We’re not just a restaurant. We’re a cultural experience"
            pgh="Article evident arrived express highest men did boy. Mistress sensible entirely am so. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes."
            sidebannar="src/assets/aboutsidebannar-2.jpg"
            />
        </>
    );
};

