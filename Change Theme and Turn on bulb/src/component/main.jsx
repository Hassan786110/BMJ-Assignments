import React, { useState } from "react";
import bulb_on from "../images/bulb-on.png"
import bulb_off from "../images/bulb-off.png"
import "./component.css";

const Main = _ => {
    let [colour , update_bg_color] = useState("white");
    let [colour2 , update_txt_color] = useState("black");
    let [bulb , change_bulb_img] = useState(bulb_off);
    let [on , turn_on] = useState("ON");
    const change_theme = _ => {
        colour == "white" ? update_bg_color("black") : update_bg_color("white");
        colour2 == "black" ? update_txt_color("white") : update_txt_color("black");
    }
    const change_bulb = _ => {
        bulb == bulb_off ? change_bulb_img(bulb_on) : change_bulb_img(bulb_off);      
        on == "ON" ? turn_on("OFF") : turn_on("ON");  
    }
    return(
        <div className="main" style={{backgroundColor: colour}}>
            <h1 style={{color: colour2}}>{colour} Theme</h1>
            <button onClick={change_theme} style={{backgroundColor: colour2, color: colour}}>Change Theme</button>
            <img src={bulb} />
            <button onClick={change_bulb} style={{backgroundColor: colour2, color: colour}}>Turn {on}</button>
        </div>
    )
}

export default Main;