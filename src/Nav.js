import React, {useState, useEffect} from 'react'
import './Nav.css'



function Nav() {
    const [scroll, handleScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            if(window.scrollY>150){
                handleScroll(true);
            }
            else{
                handleScroll(false);
            }
        })
    }, [])

    return (
        <nav className={`navbar ${scroll && 'navbarScroll'}`}>
            <img className="nav_logo" src="img/netflixLLogo.png" alt="logo1" />
            <img className="nav_avatar" src="img/logo192.png" alt="logo" />
        </nav>
    )
}

export default Nav
