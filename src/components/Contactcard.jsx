import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdAddCall } from "react-icons/md";

const Contactcard = () => {
    return (
        <>
            <section >
                <div className='contact-card'>
                    <div style={{margin : " 50px 30px"}}>
                        <h1 style={{marginBottom : "30px"}}>Connect with us</h1>
                        <h4 style={{marginBottom : "30px"}}>Our friendly team is here to help. Reach out with any questions or feedback!</h4>
                        <h2 style={{marginBottom : "30px"}}>Contact Us</h2>
                        <div className="btn"><Link to="/contact" >contact now </Link></div>
                    </div>
                    <div >
                        <div style={{ display: 'flex', gap: '20px', margin :"30px" }} >
                            <span style={{ fontSize: "50px", background: "white", padding: '0 15px', paddingTop: "10px", borderRadius: '50%' }}><MdOutlineEmail /> </span>
                            <div >
                                <h3>chat with us </h3>
                                <h4>Our friendly team is here to help.</h4>
                                <p style={{ color: "#f1ae0e" }}>hi@ourcompany.com </p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '20px', margin :"30px" }} >
                            <span style={{ fontSize: "50px", background: "white", padding: '0 15px', paddingTop: "10px", borderRadius: '50%' }}><FaLocationDot  /> </span>
                            <div >
                                <h3>Office </h3>
                                <h4> Come say hello at our office HQ.<br/>121 Rock Sreet, 21 Avenue, <br/>New York, NY 92103-9000 </h4>
                            </div>
                        </div>
                        <div style={{ display: 'flex', gap: '20px', margin :"30px" }} >
                            <span style={{ fontSize: "50px", background: "white", padding: '0 15px', paddingTop: "10px", borderRadius: '50%' }}><MdAddCall  /> </span>
                            <div >
                                <h3>Phone </h3>
                                <h4>Mon-Fri from 8am to 5am</h4>
                                <p style={{ color: "#f1ae0e" }}>+1(555) 000-000 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contactcard;