import React from 'react';
import ContactForm from '../components/ContactForm';
import { EmailToaction } from '../components/CallToAction';
import Contactcard from '../components/Contactcard';

const Contact = () => {
    return (
        <>
            <ContactForm />
            <EmailToaction />
            <Contactcard />
        </>
    );
};

export default Contact;