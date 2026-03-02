import { Link } from 'react-router-dom';
const Aboutcard = ({hd4,hd1,pgh,sidebannar}) => {
    return (
        <>
            <section >
                <div className='about-card'>
                    <div style={{padding : ' 40px 30px'}}>
                        <h4>{hd4}</h4>
                        <h1>{hd1}</h1>
                        <p style={{paddingBottom :'20px'}}>{pgh}</p>
                      <div className='cardbtn'><Link className='nav-link' to="/"> <h2>See More</h2> </Link> </div>
                    </div>
                    <div style={{overflow : 'hidden'}} >
                        <img height="500px" src={sidebannar} style={{borderRadius : '20px'}}/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Aboutcard;