import react from "react";
import logo from "../images/logo.png";
import "./component.css";

const Header = _ => {
    return (
        <section className="header">
            <img src={logo} className="logo" />
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>PRODUCT</li>
                <li>BLOG</li>
                <li>CONTACT</li>
            </ul>
        </section>
    )
}

export default Header;