import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    width,
    Card,
    Button,
    Switch
} from "@mui/material";

import { useState } from "react";
import Footer from "../HomepageComponents/Footer";
import { Link, Navigate, Route } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LandingPage from "../HomepageComponents/LandingPage";
import Signup from "../Signup/Signup";
import css from "./login.css";

let custombtn = {
    width: 100,
    margin: "auto",
    mt: -1,
    backgroundColor: "green"
};

<Route path="/landing" component={<LandingPage/>}/>



export default function Login() {

    let [email, setemail] = useState("");
    let [password, setpassword] = useState("");
    let [emailerr, setemailerr] = useState(false);
    let [passworderr, setpassworderr] = useState(false);

    let navigate = useNavigate();
    let cnfLogin = () => {
	if(email == "")
	{
	    setemailerr(true);
	} else {
	    setemailerr(false);
	}
	if (password == "")
	{
	    setpassworderr(true);
	} else {
	    setpassworderr(false);
	}

	if(email && password) {
	    navigate("/landing");
	}

    };

    let handlesubmit = (e) => {
	e.preventDefault();
	axios.post("/login", { email, password })
	    .then((result) => {
		console.log(result);
		if (result.data === "Success") {
		    navigate("/landing");
		}
		return email;
	    })
	    .catch((err) => console.log(err));
    };

    return (
	<form onSubmit={handlesubmit}>
	    <h1>Login</h1>
	    <Card sx={{ p: 5, mt: 2, margin: "auto" }}>
		<TextField
		    name="Outlined"
		    placeholder="Enter your Email"
		    variant="outlined"
		    required
		    sx={{ display: "block" }}
		    fullWidth
		    onChange={(e) => setemail(e.target.value)}
		/>
		<small>{emailerr && <p>email is Mandatory</p>}</small>

		<TextField
		    name="Outlined"
		    placeholder="Enter your Password"
		    variant="outlined"
		    fullWidth
		    type="password"
		    required
		    onChange={(e) => setpassword(e.target.value)}
		    sx={{ display: "block", mt: 1, margin: "auto ,1" }}
		/>
		<small>{passworderr && <p>Name is Mandatory</p>}</small>

		<Button variant="contained"
			sx={{
			    width: "100px",
			    margin: "1rem",
			    backgroundColor: "orange"
			}}
			disableRipple
			type="submit"
			onClick={cnfLogin}>
		    Login
		</Button>

		<Button component={Link}
			to="/signup"
			variant="contained"
			sx={{

			    width: "100px",
			    margin: "1rem",
			    backgroundColor: "orange"
			}}
			disableRipple>
		    Sign Up
		</Button>

	    </Card>
	</form>
    );
}
