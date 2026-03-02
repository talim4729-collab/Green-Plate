import React from 'react';
import Foodcard1, { Foodcard2, Foodcard3, Foodcard4 } from './../components/Foodcard1';
import Bannar from './../components/Bannar';
import Contactcard from './../components/Contactcard';
import CallToAction from './../components/CallToAction';
const Menu = () => {
    return (
        <>
            <CallToAction />
            <Foodcard1 />
            <Foodcard2 />
            <Bannar bannarImg="src/assets/bannar-4.png" linkOfPage="/" />
            <Foodcard3 />
            <Foodcard4 />
            <Contactcard />
        </>
    );
};

export default Menu;