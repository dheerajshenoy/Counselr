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
import { useState } from "react";
import Footer from "../HomepageComponents/Footer";
import { Link, Navigate, Route } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//  import css from "./CSS/style.css";
import LandingPage from "../HomepageComponents/LandingPage";
import css from "./Login.css";
let a;
<Route path="/landing" element={<LandingPage/>}></Route>
export default function Login() {
  let [email, setemail] = useState("");
  let [password, setpassword] = useState("");
  let navigate = useNavigate();
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
  a = email;
  return (
    <>
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
        <TextField
          name="Outlined"
          placeholder="Enter your Password"
          variant="outlined"
          fullWidth
          onChange={(e) => setpassword(e.target.value)}
          sx={{ display: "block", mt: 1, margin: "auto ,1" }}
        />
       <Link to="/landing" className="link">
          Login
        </Link>

        <Link to="/landing" className="link">
          signup
        </Link>
      </Card>
    </form>
    </>
  );
}
console.log(a);
