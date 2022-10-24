import React from "react";
import "./style.css";
import logo from "../../assets/1280px-Green_Bay_Packers_logo.svg.png";

const Footer = () => {
    return (
        <footer className="footer-container">
            <img className="logo" src={logo} />
            <p>Copyright &copy; Alek Valencia 2022 in Associate with Green Bay Packers, Inc.</p>
        </footer>
    )
};

export default Footer;