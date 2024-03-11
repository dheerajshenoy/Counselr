import css from "./CSS/about.css"
import mission from "../Image/Mission.jpg"
import why from "../Image/why.png"
import { CiCircleChevRight } from "react-icons/ci";
import Footer from "./Footer";
export default function About() {
    return (
        <div className="about">
            <div className="aboutdiv">
                < div className="aboutus">
                    <h1>
                        About us
                    </h1>
                    <p>Welcome to Counselr, where we are dedicated to helping individuals unlock their full potential and achieve their career goals. Founded with a passion for guiding students and professionals toward fulfilling career paths, we offer a range of comprehensive services tailored to individual needs.

                        At Counselr, we understand that every individual is unique, with distinct strengths, weaknesses, and aspirations. That's why we go beyond traditional career counseling to provide personalized solutions based on a deep understanding of each individual's psychology, interests, and aptitudes.

                        Our team of experienced psychologists, career counselors, and industry experts is committed to providing top-notch guidance and support at every step of your career journey. Whether you're a student exploring career options or a professional seeking advancement opportunities, we're here to empower you with the knowledge, tools, and resources you need to succeed.
                    </p>
                </div>
            </div>
            <div className="mission">
                <h1>Our Mission</h1>

                <div className="missionText">
                    <ul>
                        <li> Our mission at Counselr is to empower individuals to make informed career decisions and realize their full potential. We strive to:</li>
                        <li> <CiCircleChevRight/> Provide personalized guidance and support tailored to individual strengths and interests.</li>
                        <li> <CiCircleChevRight/> Equip our clients with the skills and strategies necessary to navigate the ever-evolving job market.</li>
                        <li> <CiCircleChevRight/> Foster a supportive and inclusive environment where individuals feel empowered to pursue their career goals.</li>
                    </ul>
                    <img src={mission} alt="" className="img"/>
                </div>

            </div>
            <div className="why">
                <h1>Why Choose Us
                </h1>
                <div className="whytext">
                    <img src={why} alt="" className="img" />

                    <ul>
                        <li><b>Personalized Approach:</b>We believe in the power of individuality and provide customized solutions to meet your unique needs.
                        </li>
                        <li><b> Expert Guidance:</b> Our team of experienced professionals brings a wealth of knowledge and expertise to help you navigate your career path.
                        </li>
                        <li><b> Comprehensive Services:</b> From aptitude tests to one-on-one counseling sessions, we offer a wide range of services to support you at every stage of your career journey.
                        </li>
                        <li><b>  Results-Driven: </b>  Our success is measured by your success. We're committed to helping you achieve your goals and realize your full potential.

                        </li>
                    </ul>
                </div>
                <Footer/>

            </div>
        </div>
    )
}
