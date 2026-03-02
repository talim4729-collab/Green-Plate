import React from 'react';
import { Link } from 'react-router-dom';

const Textbannar = ({h4hedding ,h1hedding,phedding ,bg,cl }) => {
    return (
        <>
            <div className='text-bannar' style={{background : bg , color: cl}}>
                <h4>{h4hedding}</h4> 
                <h1>{h1hedding}</h1>
                <p style={{paddingBottom : "6px"}}>{phedding}</p>
                <button className='btn' ><Link to="/menu" >Order Now</Link></button>
            </div>
        </>
    );
};

export default Textbannar;