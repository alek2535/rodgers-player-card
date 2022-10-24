import React from "react";
import playerInfo from "../../data/players.json";
import aaronRogers from "../../assets/aaron-rogers.png";
import "./style.css";

const PlayerInfo = () => {

    return (
            <div className="container">
                <div>
                    <img className="main-image" src={aaronRogers} alt="aaron-rogers" />
                </div>
                <div>
                <h1>{playerInfo[0].FirstName} {playerInfo[0].LastName}</h1>
                    <h2>{playerInfo[0].PositionId}</h2>
                    <h2>#{playerInfo[0].Jersey}</h2>
                    <h2>DOB: {playerInfo[0].DOB.slice(0, 9)}</h2>
                    <h2>College: {playerInfo[0].SchoolName.slice(0, 1)}{playerInfo[0].SchoolName.substring(1, playerInfo[0].SchoolName.length).toLowerCase()}</h2>
                    <h2>Year Drafted: {playerInfo[0].DraftYear}</h2>
                    <h2>Height: {playerInfo[0].Hgt.toString().charAt(0)}'{playerInfo[0].Hgt.toString().charAt(2)}"</h2>
                    <h2>Weight: {playerInfo[0].Wgt} lbs</h2>
                </div>
            </div>
    )

}

export default PlayerInfo;