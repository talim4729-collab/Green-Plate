import Aboutcard1, { Aboutcard2, AboutTextBannar } from "../components/Aboutcard1";
import Storybannar from './../components/storybannar';
import Contactcard from './../components/Contactcard';
import { EmailToaction } from "../components/CallToAction";

const About = () => {
    return (
        <>
         <Aboutcard1 />
         <AboutTextBannar />
         <Aboutcard2 />
         <Storybannar />
         <EmailToaction background="#99e54d" />
         <Contactcard />
        </>
    );
};

export default About;