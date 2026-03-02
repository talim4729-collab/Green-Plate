import React from 'react';
import { Link } from 'react-router-dom';

const Bannar = ({bannarImg, linkOfPage}) => {
    return (
        <>
            <section className='bannar'>
                <Link to={linkOfPage}>
                 <img src={bannarImg} />
                </Link>
            </section>
        </>
    );
};

export default Bannar;