import css from "./pricing.css"
import { FaChevronRight } from "react-icons/fa";
import { IoCubeOutline } from "react-icons/io5";
import { GoRocket } from "react-icons/go";

export default function Pricing() {
    return (
        <div className="price-container">
            <div className="price">

                <h1>Pricing</h1>

                <p>Pricing structure for our services</p>
                <section className="mainPricingSection">
                    <div className="free">
                        <div className="icon">
                            <div className="innericon">
                                <div className="secondInnerIcon">
                                    <IoCubeOutline />
                                </div></div></div>
                        <h1>Free tier</h1>

                        <center><h2>₹0/month</h2></center>
                        <h3>Features</h3>
                        <ul>
                            <li> <FaChevronRight /> Access to aptitude tests and assessments.
                            </li>
                            <li><FaChevronRight /> Limited access to general resources.
                            </li>
                        </ul>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <h3>Description</h3>
                        <p>Our Free Tier offers access to basic aptitude tests and assessments, allowing subscribers to gain insights into their strengths and areas for improvement. While this tier provides valuable resources for self-assessment, it's designed for individuals who are looking for initial guidance without a financial commitment.
                            </p>
                                <br/>
                                <br/>
                                <br/>
                            <button>Buy now</button>
                            </div>

                            <div className="paid">
                                <div className="icon">
                                    <div className="innericon">
                                        <div className="secondInnerIcon">
                                            <GoRocket />
                                        </div></div></div>
                                <h1>paid tier</h1>

                                <center><h2>₹499/month</h2></center>

                                <h3>Features</h3>
                                <ul>
                                    <li><FaChevronRight /> Access to personalized psychiatric evaluations.
                                    </li>
                                    <li><FaChevronRight /> One-on-one career counseling sessions.
                                    </li>
                                    <li><FaChevronRight /> Guidance and strategies tailored to individual weaknesses.
                                    </li>
                                    <li><FaChevronRight /> Customized career paths based on psychology test scores and interests.
                                    </li>
                                </ul>
                                <h3>Description</h3>
                                <p>Unlock the full potential of your career with our Pro Tier subscription. Gain exclusive access to personalized psychiatric evaluations and one-on-one career counseling sessions with our expert advisors. Receive tailored guidance and strategies to address your weaknesses and maximize your strengths. Our Pro Tier also includes customized career paths based on comprehensive psychology test scores and interests, ensuring you're on the right track to success.</p>
                                <button>Buy now</button>

                            </div>
                </section>
            </div>
        </div>

    )
}
