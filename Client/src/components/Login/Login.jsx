import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    width,
    Card,
    Button,
} from "@mui/material";

import css from "./login.css";
import { useState } from "react";
import Footer from "../HomepageComponents/Footer";
import { Link, Navigate, Route } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LandingPage from "../HomepageComponents/LandingPage";

<Route path="/landing" element={<LandingPage/>}></Route>

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
	    navigate('/landing')
	}

    };

    let handlesubmit = (e) => {
	e.preventDefault();
	axios
	    .post("http://localhost:9000/login", { email, password })
	    .then((result) => {
		console.log(result);
		if (result.data === "Success") {
		    navigate("/home");
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

		<Button component={Link}
			className="custombtn"
			variant="contained"
			sx={{ width: 100, margin: "auto", mt: -1 }}
			disableRipple
			type="submit"
			onClick={cnfLogin}>
		    Login
		</Button>

		<Button className="custombtn"
			component={Link}
			to="/signup"
			variant="contained"
			sx={{ width: "auto", margin: "auto", mt: -1 }}
			disableRipple>
		    Sign Up
		</Button>
	    </Card>
	</form>
    );
}
