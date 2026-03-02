import React from 'react';

const ContactForm = () => {
    return (
        <>
            <section>
                <form className='user-form' >
                    <h1>Contact Us</h1>
                    <p>Article evident arrived express highest men did boy. Mistress <br/> sensible entirely am so. Quick can manor smart money hopes <br/> worth too. Comfort produce husband boy her had hearing.<br/> Law others theirs passed but wishes. </p>
                    <input type='email' placeholder='Email' /><br/>
                    <input type='text' placeholder='Name' /> <br/>
                    <textarea placeholder='Massage'></textarea> <br/>
                    <button type='sybmit'>Send Massage</button>
                </form>
            </section>
        </>
    );
};

export default ContactForm;