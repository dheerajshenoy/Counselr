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

import css from "./signup.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signup() {
    const [role, setRole] = useState("male");
    let [name, setname] = useState("");
    let [email, setemail] = useState("");
    let [mobile, setmobile] = useState("");
    let [password, setpassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");
    let [passsworderror, setpassworderror] = useState(false);
    let [nameerr, setnameerr] = useState(false);
    let [emailerr, setemailerr] = useState(false);
    let [moberr, setmoberr] = useState(false);
    let [emptypassword, setemptypassword] = useState(false);
    let [users, setusers] = useState("");
    let [skills, setskills] = useState([]);
    let [datamsg, setdatamsg] = useState(false);

    let data = [];
    let handlesubmit = (e) => {
	e.preventDefault();
    };
    let getValue = (e) => {
	data = skills;
	data.push(e.target.value);
	setskills(data);
	console.warn(skills);
    };
    let cnfPassword = () => {
	if (name === "") {
	    setnameerr(true);
	} else {
	    setnameerr(false);
	}
	if (email === "") {
	    setemailerr(true);
	} else {
	    setemailerr(false);
	}
	if (mobile === "") {
	    setmoberr(true);
	} else {
	    setmoberr(false);
	}
	if (password === "") {
	    setemptypassword(true);
	} else {
	    setemptypassword(false);
	}
	if (password !== confirmPassword) {
	    setpassworderror(true);
	} else {
	    setpassworderror(false);
	}
	if (name && email && password && mobile && data && role) {
	    axios
		.post("http://localhost:3000/landing", {
		    name,
		    email,
		    mobile,
		    skills,
		    role,
		    password,
		})
		.then((result) => console.log(result))
		.catch((err) => console.log(err));
	} else {
	    console.log("CANT POST");
	}
	console.log(skills);
    };

    return (
	<form onSubmit={handlesubmit}>
	    <h1>Signup</h1>
	    <TextField
		name="Outlined"
		placeholder="Enter your Full Name"
		sx={{ display: "block" }}
		fullWidth
		required
		onChange={(e) => setname(e.target.value)}
	    />
	    <small>{nameerr && <p class="errtext">Name is Mandatory</p>}</small>
	    <TextField
		name="Outlined"
		placeholder="Enter your Email"
		variant="outlined"
		sx={{ display: "block", mt: 1, margin: "auto ,1" }}
		required
		fullWidth
		type="email"
		onChange={(e) => setemail(e.target.value)}
	    />
	    <small>{emailerr && <p class="errtext">Email is Mandatory</p>}</small>

	    <TextField
		name="Outlined"
		placeholder="Enter your mobile number"
		variant="outlined"
		sx={{ display: "block", mt: 1, margin: "auto, 1" }}
		fullWidth
		required
		onChange={(e) => setmobile(e.target.value)}
	    />
	    <small>{moberr && <p class="errtext">Mobile Number is Mandatory</p>}</small>

	    <TextField
		name="Outlined"
		placeholder="Enter your password"
		variant="outlined"
		type="password"
		sx={{ display: "block", mt: 1, margin: "auto,1" }}
		fullWidth
		required
		onChange={(e) => setpassword(e.target.value)}
	    />
	    <small>{emptypassword && <p class="errtext">Password is Mandatory</p>}</small>
	    <TextField
		name="Outlined"
		placeholder="Confirm password"
		variant="outlined"
		type="password"
		sx={{ mt: 1 }}
		fullWidth
		required
		onChange={(e) => setConfirmPassword(e.target.value)}
	    />
	    <small>{passsworderror && <p class="errtext">Password Doesnot match</p>}</small>
	    <Card>
		<FormControl required>
		    <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
		    <RadioGroup
			sx={{ display: "inline" }}
			aria-labelledby="demo-radio-buttons-group-label"
			defaultValue="male"
			name="radio-buttons-group">
			<FormControlLabel
			    value="Teacher"
			    control={<Radio />}
			    label="Teacher"
			    onChange={(e) => setRole(e.target.value)}
			/>
			<FormControlLabel
			    value="Student"
			    control={<Radio />}
			    label="Student"
			    onChange={(e) => setRole(e.target.value)}
			/>
		    </RadioGroup>
		</FormControl>
	    </Card>
	    <Button
		variant="contained"
		sx={{
		    mt: -1,
		    width: "100px",
		    margin: "1rem",
		    backgroundColor: "orange"
		}}
		disableRipple
		type="submit"
		onClick={cnfPassword}>
		Sign Up
	    </Button>

	    <Button component={Link}
		    to="/login"
		    variant="contained"
		    sx={{
			mt: -1,
			width: "100px",
			margin: "1rem",
			backgroundColor: "orange"
		    }}
		    disableRipple>
		Login
	    </Button>
	</form>
    );
}
