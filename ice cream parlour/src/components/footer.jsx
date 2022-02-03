import react from "react";
import "./component.css";
import logo from "../images/logo.png";
import { FaFacebookF, FaYoutubeSquare, FaTwitter, FaPinterestP } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = _ => {
    return (
        <div className="footer">
            <img src={logo} />
            <div className="sub-div">
                <ul>
                    <li>about</li>
                    <li>products</li>
                    <li>blog</li>
                    <li>contact</li>
                </ul>
                <ul>
                    <li>new room</li>
                    <li>careers</li>
                    <li>sweet rewards</li>
                    <li>faqs</li>
                </ul>
                <div className="sub-div2">
                    <div className="icons">
                        <FaFacebookF /> <FaYoutubeSquare /> <FaTwitter /> <MdEmail /> <TiSocialInstagram /> <FaPinterestP />
                    </div>
                    <button>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default Footer;              