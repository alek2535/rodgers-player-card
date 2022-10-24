import React from "react";
import "./style.css";
import header from "../../assets/Header-Packers-Game-scaled.jpeg";

const Header = () => {
    return (
        <header className="header-container">
            <img className="header-logo" src={header} />
        </header>
    )
};

export default Header;