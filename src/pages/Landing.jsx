import Bannar from './../components/Bannar';
import Card from '../components/card';
import CallToAction, { EmailToaction } from '../components/CallToAction';
import Bannargroup from '../components/Bannargroup';
import Contactcard from '../components/Contactcard';

const Landing = () => {
    return (
        <>
            <Bannar bannarImg="src/assets/bannar-5.png" linkOfPage="/" />
            <Card />
            <CallToAction background="black" />
            <Bannargroup />
            <EmailToaction background="#99e54d" />
            <Contactcard />
        </>
    );
};

export default Landing;