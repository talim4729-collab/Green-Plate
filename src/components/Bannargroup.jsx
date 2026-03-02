import React from 'react';
import Textbannar from './Textbannar';

const Bannargroup = () => {
    return (
        <>
            <section className='bannar-groups'>
                <div className='bg-1'>
                    <img src='src/assets/sidebannar-2.avif' ></img>
                    <Textbannar h4hedding="Special Business Lunch Offer" 
                    h1hedding="Where Every <br/> Flavor Tells a Story"
                    phedding="Experience hand-picked <br/> ingredients crafted with passion in every bite." />
                </div>
                <div className='bg-1' style={{margin: '50px 0' , overflow : 'hidden'}}>
                    <Textbannar h4hedding="Special Business Lunch Offer" 
                    h1hedding="Where Every <br/> Flavor Tells a Story"
                    phedding="Experience hand-picked <br/> ingredients crafted with passion in every bite."
                    bg="black" cl="white" />
                    <img src='src/assets/sidebannar-2.avif' ></img>
                </div>
                
            </section>
        </>
    );
};

export default Bannargroup;