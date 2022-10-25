import React from "react";
import "./style.css";
import header from "../../assets/1280px-Green_Bay_Packers_logo.svg.png";

const Header = () => {
    return (
        <header id="header-container">
            <img className="header-logo" src={header} />
        </header>
    )
};

export default Header;