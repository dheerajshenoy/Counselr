import css from "./CSS/LandingPage.css"
import Footer from "./Footer";
import Card from "./Card";
import test from "../ICONS/test.gif"

export default function LandingPage() {
    return (
	<>
	    <div className="exam">
		<div>
		    <h1>Your Career path begins Here</h1>
		    <a href="https://www.aptitude-test.com/free-aptitude-test/mixed-aptitude-test/" target="_blank">Take a Test  <img src={test} alt="" /> </a>
		</div>
		<img src="https://assets-global.website-files.com/6025ce0bf3c768d30cef351b/62679fbbab87af46110da07c_testingteam.png" alt="" />
	    </div>
	    <hr style={{marginTop:"40px",width:"70%"}}/>
	    <h1>Check out our other serevices</h1>
	    <Card/>
	    <Footer/>
	</>
    );
}
