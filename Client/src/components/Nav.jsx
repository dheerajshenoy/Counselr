import logo from './nav/Logo.png'
import { Link } from 'react-router-dom'
import style from "./nav/nav.css"
import { AppBar } from "@material-ui/core";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

export default function Nav(){
    useEffect(()=>{
        Aos.init();
    },[])
    return(
	<nav data-aos="flip-down">
	    <Link to='/'>
		<img id="logo" src={logo} alt="" />
	    </Link>
	    <div>
		<ul>
		    <li><Link to='/' className='LinkBtn' >Home</Link></li>
		    <li><Link to='/login' className='LinkBtn' >Login</Link></li>
		    <li><Link to='/signup' className='LinkBtn' >Signup</Link></li>
		    <li><Link to='/pricing' className='LinkBtn' >Pricing</Link></li>
		</ul>
            </div>
        </nav>
    )
}
