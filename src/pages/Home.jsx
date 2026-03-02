import Bannar from '../components/Bannar';
import Blogcard from '../components/Blogcard';
import CallToAction, { EmailToaction } from '../components/CallToAction';
import Card from '../components/card';
import Contactcard from '../components/Contactcard';

const Home = () => {
    return (
        <>
            <Bannar bannarImg="src/assets/bannar-1.png" linkOfPage="/" />
            <Card />
            <CallToAction />
            <Bannar bannarImg="src/assets/bannar-2.png" linkOfPage="/" />
            <Blogcard />
            <Bannar bannarImg="src/assets/bannar-3.png" linkOfPage="/" />
            <EmailToaction />
            <Bannar bannarImg="src/assets/bannar-4.png" linkOfPage="/" />
            <Contactcard />
        </>
    );
};

export default Home;