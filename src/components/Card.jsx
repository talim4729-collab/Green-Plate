import { Link } from 'react-router-dom';
import Bannar from './Bannar';

const Card = () => {
    return (
        <>
            <section className='menu-card'>
              <h1>View Our Menu</h1>
                <div className='cards'>
                    <div className='card'>
                    <div className='card-body'>
                        <Bannar bannarImg="src/assets/foodimg1.jpg" />
                        <div className='card-title'><h3>hot pizza</h3></div>
                    </div>
                    <div className='cardbtn'><Link className='nav-link' to="/"> <h2>See More</h2> </Link> </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <Bannar bannarImg="src/assets/foodimg2.jpg" />
                        <div className='card-title'><h3>salads</h3></div>
                    </div>
                    <div className='cardbtn'><Link className='nav-link' to="/"> <h2>See More</h2> </Link> </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <Bannar bannarImg="src/assets/foodimg3.jpeg" />
                        <div className='card-title'><h3>dessert</h3></div>
                    </div>
                    <div className='cardbtn'><Link className='nav-link' to="/"> <h2>See More</h2> </Link> </div>
                </div>
                <div className='card'>
                    <div className='card-body'>
                        <Bannar bannarImg="src/assets/foodimg4.jpeg" />
                        <div className='card-title'><h3>drinks</h3></div>
                    </div>
                    <div className='cardbtn'><Link className='nav-link' to="/"> <h2>See More</h2> </Link> </div>
                </div>
                </div>
                <p>Explore our seasonal, organic dishes that celebrate natural flavors <span className='cardbtn'><Link className='nav-link' to="/"> <b>See More</b> </Link> </span></p>

            </section>
        </>
    );
};

export default Card;