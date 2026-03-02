import { Link } from "react-router-dom";

const Blogcard = () => {
    return (
        <>
            <section className='blog-card'>
                <h1>Check Our Blog</h1>
                <div className='cards'>
                    <div style={{padding : "40px 0"}} className='card'>
                        <div className='card-body'>
                            <img src='src/assets/blogImg-1.jpeg' />
                            <div className='card-title'><h3>Post 6 Headline</h3></div>
                        </div>
                        <p style={{padding: '20px 0'}}>Sample small text. Lorem ipsum dolor sit amet.</p>
                        <div className='cardbtn'><Link className='nav-link' to="/"> <h2>Read More</h2> </Link> </div>
                    </div>
                    <div style={{padding : "40px 0"}} className='card'>
                        <div className='card-body'>
                            <img src='src/assets/blogImg-2.jpeg' />
                            <div className='card-title'><h3>Post 5 Headline</h3></div>
                        </div>
                        <p style={{padding: '20px 0'}}>Sample small text. Lorem ipsum dolor sit amet.</p>
                        <div className='cardbtn'><Link className='nav-link' to="/"> <h2>Read More</h2> </Link> </div>
                    </div>
                    <div style={{padding : "40px 0"}} className='card'>
                        <div className='card-body'>
                            <img src='src/assets/blogImg-3.jpeg' />
                            <div className='card-title'><h3>Post 4 Headline</h3></div>
                        </div>
                        <p style={{padding: '20px 0'}}>Sample small text. Lorem ipsum dolor sit amet.</p>
                        <div className='cardbtn'><Link className='nav-link' to="/"> <h2>Read More</h2> </Link> </div>
                    </div>
                    <div style={{padding : "40px 0"}} className='card'>
                        <div className='card-body'>
                            <img src='src/assets/blogImg-4.jpeg' />
                            <div className='card-title'><h3>Post 3 Headline</h3></div>
                        </div>
                        <p style={{padding: '20px 0'}}>Sample small text. Lorem ipsum dolor sit amet.</p>
                        <div className='cardbtn'><Link className='nav-link' to="/"> <h2>Read More</h2> </Link> </div>
                    </div>
                    
                </div>
            </section>
        </>
    );
};

export default Blogcard;