import React from "react";
import {Link} from 'react-router-dom'
import { HashLink } from "react-router-hash-link";
import '../styles/header.scss'


function Header(){
    return (

        <nav>
            <h1>The trip.</h1>
            <main>
            <HashLink to={"/#Home"}>Home</HashLink>
            <HashLink to={"/#Story"}>Stories</HashLink>
            <HashLink to={"/#About"}>About US</HashLink>
            <HashLink to={"/#Destination"}>Destination</HashLink>
            <Link to={"/Services"}>Services</Link>
            <Link to={"/Contact"}>Contact US</Link>
            
            </main>
        </nav>

    );
}
export default Header;



// import React from 'react'
// import {Link} from 'react-router-dom'

// function Header() {
//   return (
//     <nav>
//     <h1>techstar</h1>
//     <main>

//         <Link to={"/"}>Home</Link>
//         <Link to={"/Contact"}>Contact</Link>
//         <Link to={"/#about"}>About</Link>
//         <Link to={"/#brands"}>Brands</Link>
//         <Link to={"/services"}>Sevices </Link>
//     </main>


//     </nav>
//   )
// }

// export default Header