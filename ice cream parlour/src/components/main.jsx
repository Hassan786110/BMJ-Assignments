import react from "react";
import "./component.css";
import ice_cream from "../images/ice-cream.png";

const Main = _ => {
    return(
        <div className="main-div">
            <div className="container1">
                <h2>New Product</h2>
                <h1>The Vanilla Bean</h1>
            </div>
            <img src={ice_cream} className="ice-cream" />
        </div>
    )
}

export default Main;