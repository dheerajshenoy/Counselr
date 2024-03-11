import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Fade, Zoom, Slide } from "react-slideshow-image";
import third from "../Image/iStock-1072470136.jpg"
import first from "../Image/360_F_411196492_ALeI8x6briszcGigHOP3rWfkNqDh7D18.jpg"
import second from "../Image/Primary_and_secondary_education_206b_383a1eb6f2.jpg"

import css from "./CSS/Carouselcmp.css"

let text1 = "Empowering you to make informed career decisions"
let text2 = "Unlocking your potential and aligning it with your career goals"
let text3 = "Crafting your career roadmap for success"

let images = [
    { url: third, text: text1 },
    { url: second, text: text2 },
    { url: first, text: text3 },
];

let divStyle = {
    marginTop:"10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: "550px",
    backgroundSize: "cover",
    zIndex: 1,
};

function Carouselcmp() {
    return (
	<div className="SlideContainer">
	    <Fade>
		{images.map((image, index) => (
		    <div key={index}>
			<div style={{...divStyle, backgroundImage:`url(${image.url})`}}></div>
			<div class="slide-show-text">{image.text}</div>
		    </div>
		))}
	    </Fade>
	</div>
    );
}

export default Carouselcmp;
