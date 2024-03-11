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
// import css from "./CSS/style.css";
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
        .post("http://localhost:9000/register", {
          name,
          email,
          mobile,
          skills,
          role,
          password,
        })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
    console.log(skills);
  };

  return (
    <form onSubmit={handlesubmit}>
      <h1>Signup</h1>
      <TextField
        name="Outlined"
        placeholder="Enter your Full Name"
        variant="outlined"
        sx={{ display: "block" }}
        fullWidth
        onChange={(e) => setname(e.target.value)}
      />
      <small>{nameerr && <p>Name is Mandetory</p>}</small>
      <TextField
        name="Outlined"
        placeholder="Enter your Email"
        variant="outlined"
        sx={{ display: "block", mt: 1, margin: "auto ,1" }}
        fullWidth
        type="email"
        onChange={(e) => setemail(e.target.value)}
      />
      <small>{emailerr && <p>email is Mandetory</p>}</small>

      <TextField
        name="Outlined"
        placeholder="Enter your mobile number"
        variant="outlined"
        sx={{ display: "block", mt: 1, margin: "auto, 1" }}
        fullWidth
        onChange={(e) => setmobile(e.target.value)}
      />
      <small>{moberr && <p>mobile is Mandetory</p>}</small>

      <TextField
        name="Outlined"
        placeholder="Enter your password"
        variant="outlined"
        sx={{ display: "block", mt: 1, margin: "auto,1" }}
        fullWidth
        onChange={(e) => setpassword(e.target.value)}
      />
      {emptypassword && <p>Password is mandatory</p>}
      <TextField
        name="Outlined"
        placeholder="Confirm password"
        variant="outlined"
        sx={{ mt: 1 }}
        fullWidth
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      {passsworderror && <p>Password Doesnot match</p>}
      <Card>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Role</FormLabel>
          <RadioGroup
            sx={{ display: "inline" }}
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="male"
            name="radio-buttons-group"
          >
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
        className="button"
        variant="contained"
        sx={{ width: 100, margin: "auto", mt: -1 }}
        disableRipple
        type="submit"
        onClick={cnfPassword}
      >
        Sign Up
      </Button>

      <Link to="/login" className="link">
        Login
      </Link>
    </form>
  );
}
