import logo from "./logo.svg";
import "./App.css";

// import MuiImageSlider from 'mui-image-slider';

import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup"
import Home from "./components/HomepageComponents/Home";
import { Form } from "./components/HomepageComponents/Form";
import LandingPage from "./components/HomepageComponents/LandingPage";
import Pricing from "./components/Pricing";
import About from "./components/HomepageComponents/About";
import Test from "./components/Test";
import Result from "./components/Result";
function App() {
    return (
            <div>
            <Nav />
            <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/Pricing" element={<Pricing/>}></Route>
            <Route path="/landing" element={<LandingPage/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/Form" element={<Form/>}></Route>
            <Route path="/Test" element={<Test/>}></Route>
            <Route path="/Result" element={<Result/>}></Route>
            </Routes>

        </div>
    );
}

export default App;
