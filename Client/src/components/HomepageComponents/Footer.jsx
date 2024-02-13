import React, { useEffect } from 'react'
import css from "./CSS/footer.css"
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import { FaRegCopyright } from "react-icons/fa";
import Aos from 'aos';
import mobile from "../ICONS/incoming-call.gif"
import email from "../ICONS/email.gif"
import copyright from "../ICONS/copyright.gif"

function Footer() {
    useEffect(()=>{
	Aos.init();
    },[])
    return (
	<div className='footer data-aos="flip-down"'>
	    <div className='contact'>
		<p> <img src={email} alt="" /> counselr@gmail.com</p>
		{/* <p><CiMail className='logo'/> counselr@gmail.com</p> */}
            <p><img src={mobile} alt="" /> +91 XXXXXXXXXX</p>
	</div>
	<div className='copyright'><img src={copyright} alt="" />  Counselr</div>
	</div>
    )
}

export default Footer
