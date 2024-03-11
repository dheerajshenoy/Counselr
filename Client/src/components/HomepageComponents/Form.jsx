import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import css from "./CSS/Form.css"
import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import { FormLabel } from "react-bootstrap";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

export function Form() {
    return (
        <div className="form">
            <form action="">
                <div className="inputbox">

                    <input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className="inputbox">

                    <input
                        type="number"
                        id="age"
                        placeholder="Enter your mobile number"
                    />
                </div>
                <div>
                    <div className="inputbox">

                        <input type="email" id="email" placeholder="Enter your email" />
                    </div>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label" className="gender">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />

                        </RadioGroup>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 950 ,border:1}} size="big" >
                        <InputLabel id="demo-select-small-label">Select your prefferd doctor</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            // value={age}
                            label="Age"
                            // onChange={handleChange}
                        >
                        <MenuItem >Doctor1</MenuItem>
                        <MenuItem >Doctor2</MenuItem>
                        <MenuItem >Doctor3</MenuItem>
                        <MenuItem >Doctor4</MenuItem>
                        <MenuItem >Doctor5</MenuItem>
                        <MenuItem >Doctor6</MenuItem>
                        <MenuItem >Doctor7</MenuItem>
                        </Select>
                    </FormControl>

                </div>
                <div className="appointmentDate">
                    <div className="inputbox">
                        <label htmlFor="apdate">Preffered appointment Date:</label>
                        <input type="date" id="email" />
                    </div>
                    <div className="inputbox">
                        <label htmlFor="altdate">Alternate appointment date:</label>
                        <input type="date" id="altdate"/>
                    </div>
                </div>
                <div className="sButton">
                    <button className="submit">Submit</button>
                    <Link to="/"><button className="submit" >Go Back</button></Link>
                </div>
            </form>
        </div>
    );
}
