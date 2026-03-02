import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menu ,setmenu] =useState(false)
    const menutoggle =() => {
        setmenu(! menu)
    }
    return (
        <>
            <header style={{display : 'flex' , justifyContent : 'space-between' , alignItems :'center' , padding : '20px 100px',marginTop: "40px", position : 'relative'}}>
                <div className='brand-name'><h2>Green plete</h2></div>
                <nav>
                    <ul className={menu ? 'mobilemenu' : 'wbmenu'} >
                        <li>
                            <Link className='nav-link' to="/"> HOME </Link>
                        </li>
                         <li>
                            <Link className='nav-link' to="/landing"> LANDING </Link>
                        </li>
                         <li>
                            <Link className='nav-link' to="/about"> ABOUT </Link>
                        </li>
                         <li>
                            <Link className='nav-link' to="/menu"> MENU </Link>
                        </li>
                         <li>
                            <Link className='nav-link' to="/team"> TEAM </Link>
                        </li>
                         <li>
                            <Link className='nav-link' to="/contact"> CONTACT </Link>
                        </li>
                    </ul>
                    <button className='menubtn' onClick={menutoggle} >menu</button>
                </nav>
            </header>
        </>
    );
};

export default Header;