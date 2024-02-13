import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import css from "./CSS/detail.css"

let details = [
    {
	heading: "Check Your Aptitude",
	description:
	"Practice with our online aptitude tests and pass your employee aptitude test or school entrance exam with ease.Try our practice tests for free or sign up for one of our comprehensive test preparation packages.Choose a test category above or try a mixed aptitude test for free.",
	img: "https://www.shutterstock.com/image-vector/aptitude-vector-line-icon-600nw-597432236.jpg",
	link: "www.google.co.in",
    },
    {
	heading: "Get your personalized consultant",
	description:
	"Customized consulting is a service tailored to an individual client’s needs. It’s about taking the time to understand each client’s situation and creating a personalized plan. This type of consulting is meant to provide solutions uniquely suited to your needs and help you achieve your goals faster and more efficiently.",
	img: "https://img.freepik.com/free-vector/consulting-concept-illustration_114360-2579.jpg",
	link: "www.google.co.in",
    },
    {
	heading: "Choose optimal career path",
	description:
	"List your strengths, weaknesses, opportunities and threats in four quadrants and keep revisiting them. Be positive on your strengths, strengthen your weak areas, research and identify opportunities that may help you grow in your career, at the same time beware of threats that may cause any harm.",
	img: "https://media.istockphoto.com/id/1327649188/vector/vector-of-a-boy-standing-at-crossroads-making-a-decision-which-way-to-go-in-life.jpg?s=612x612&w=0&k=20&c=ff0FMq2VJaEnsBKby6IW7KylAERREa7vTJBa3i-AcmI=",
	link: "www.google.co.in",
    },
    {
	heading: "Analyze your personality",
	description:
	"Take this free Personality Test and find out more about who you are and your strengths. This is valuable information for choosing a career. This personality quiz measures the Big Five personality traits that were developed over three or four decades by several independent scientific researchers.",
	img: "https://img.freepik.com/free-vector/flat-design-about-me-concept-with-hobbies-interests_23-2148885021.jpg",
	link: "www.google.co.in",
    },
];
function Details() {
    useEffect(() => {
	Aos.init();
    }, [])
    return (
	<div>
	    {details.map((detail, index) => (
		<div key={index} className="details" data-aos="fade-right">
		    <div><h1>{detail.heading}</h1>
		    <p>{detail.description}</p></div>
		    <img src={detail.img} alt="" />
		</div>
		// <a href="www.google.co.in" target="_blank">
		       // </a>
		       ))}

		   </div>
    )
}

export default Details;
