import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    width,
    Card,
    Button,
    FormControlLabel,
    Checkbox,
    NativeSelect,
    FormLabel,
    RadioGroup,
    Radio,
    FormGroup,
} from "@mui/material";
import css from "./about.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import React from "react";
import Aos from "aos";
import "aos/dist/aos.css"

let details = [
    {
	heading: "Welcome to Counselr",
	desc: "We are dedicated to helping individuals unlock their full potential and achieve their career goals. Founded with a passion for guiding students and professionals toward fulfilling career paths, we offer a range of comprehensive services tailored to individual needs."
    },

    {
	heading: "Personalised",
	desc: "We understand that every individual is unique, with distinct strengths, weaknesses, and aspirations. That's why we go beyond traditional career counseling to provide personalized solutions based on a deep understanding of each individual's psychology, interests, and aptitudes.",
	img: ""
    },
    {
	heading: "Empowerment",
	desc: "Our team of experienced psychologists, career counselors, and industry experts is committed to providing top-notch guidance and support at every step of your career journey. Whether you're a student exploring career options or a professional seeking advancement opportunities, we're here to empower you with the knowledge, tools, and resources you need to succeed.",
	img: ""
    },

    {
	heading: "Our Mission",
	desc: "Empower individuals to make informed career decisions and realize their full potential. We strive to: Provide personalized guidance and support tailored to individual strengths and interests. Equip our clients with the skills and strategies necessary to navigate the ever-evolving job market. Foster a supportive and inclusive environment where individuals feel empowered to pursue their career goals."
    }

];

function test() {
    useEffect(()=>{
	Aos.init();
    },[])
    return (
	<div>
	    {details.map((detail,index)=>(
		<div key={index} className="details" data-aos="fade-right">
		    <div><h1>{detail.heading}</h1>
		    <p>{detail.desc}</p></div>
		    <img src={detail.img}/>
		</div>
	    ))}
	    <div className="details2" data-aos="fade-right">
		<h1>Why Choose Us</h1><br/>
		<div>
		    <ul>
			<li><b>Personalized Approach</b>: We believe in the power of individuality and provide customized solutions to meet your unique needs.</li>
			<li><b>Expert Guidance</b>: Our team of experienced professionals brings a wealth of knowledge and expertise to help you navigate your career path.</li>
			<li><b>Comprehensive Services</b>: From aptitude tests to one-on-one counseling sessions, we offer a wide range of services to support you at every stage of your career journey.</li>
			<li><b>Results-Driven</b>: Our success is measured by your success. We're committed to helping you achieve your goals and realize your full potential.</li>
		    </ul>
		</div>
	    </div>
	</div>
    )
}

//export default Card;

export default function About() {
    return (
	<div>
	    {test()}
	</div>
    );
}
