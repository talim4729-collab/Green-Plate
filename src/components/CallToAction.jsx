import { MdAddCall } from "react-icons/md";

const CallToAction = ({background, children}) => {
    return (
        <>
            <div className='call-action'style={{background :background}}>{children}
               <div style={{display : 'block' ,background : 'white', padding : '20px 0', borderRadius : '40px'}}> 
                 <h1>Keep up to date with us</h1>
                 <p style={{padding : "20px 0"}}>Get in touch for reservations and queries—let’s make your next meal special!</p>
                 <a href='tel:+ +1 (234) 567-8910' > <h2> <MdAddCall />  +1 (234) 567-8910</h2> </a>
               </div>
            </div>
        </>
    );
};

export default CallToAction;


export const EmailToaction = ({background}) => {
    return (
        <>
            <div className='email-action'style={{background : background}}>
               <div style={{display : 'block' ,background : 'white', padding : '20px 0', borderRadius : '40px'}}> 
                 <h1>Keep up to date with us</h1>
                 <p style={{padding : "20px 0"}}>Get in touch for reservations and queries—let’s make your next meal special!</p>
                 <form style={{margin :"20px"}} >
                    <input type="email" placeholder="Enter Your Email" style={{padding : "10px", background : "#faf2f2"}} ></input> <button type="submit">submit</button>
                 </form>
               </div>
            </div>
        </>
    );
};

