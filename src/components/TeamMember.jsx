import { Link } from "react-router-dom";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const TeamMember = () => {
    return (
        <>
            <section>
                <div className='team'>
                    <div className='team-member'>
                        <img src='src/assets/workerr1.jpg'></img>
                        <h2>Jeffrey Brown</h2>
                        <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                        <div className='social-midea'>
                            <Link to="/"><TiSocialFacebook /> </Link>
                            <Link to="/"><TiSocialTwitter /> </Link>
                            <Link to="/"><SlSocialInstagram /> </Link>
                        </div>
                    </div>
                    <div className='team-member'>
                        <img src='src/assets/workerr2.jpg'></img>
                        <h2>Alex Richmond</h2>
                        <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                         <div className='social-midea'>
                            <Link to="/"><TiSocialFacebook /> </Link>
                            <Link to="/"><TiSocialTwitter /> </Link>
                            <Link to="/"><SlSocialInstagram /> </Link>
                        </div>
                    </div>
                    <div className='team-member'>
                        <img src='src/assets/workerr3.jpg'></img>
                        <h2>Alex Greenfield</h2>
                        <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                         <div className='social-midea'>
                            <Link to="/"><TiSocialFacebook /> </Link>
                            <Link to="/"><TiSocialTwitter /> </Link>
                            <Link to="/"><SlSocialInstagram /> </Link>
                        </div>
                    </div>
                    <div className='team-member'>
                        <img src='src/assets/workerr4.jpg'></img>
                        <h2>Stive Larson</h2>
                        <p>Glavi amet ritnisl libero molestie ante ut fringilla purus eros quis glavrid from dolor amet iquam lorem bibendum</p>
                         <div className='social-midea'>
                            <Link to="/"><TiSocialFacebook /> </Link>
                            <Link to="/"><TiSocialTwitter /> </Link>
                            <Link to="/"><SlSocialInstagram /> </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamMember;