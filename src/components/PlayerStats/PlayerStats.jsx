import React from "react";
import "./style.css";
import StatsTable from "./StatsTable";


const PlayerStats = ({ statsYear, handleYearChange, seasonYears }) => {
    // PRE, REG, & POST SEASON STATS FOR YEAR BEING DISPLAYED
    const preSeasonStats = seasonYears[statsYear].preSeasStats;
    const regSeasonStats = seasonYears[statsYear].regSeasStats;
    const postSeasonStats = seasonYears[statsYear].postSeasStats;

    return (
        <div id="stats-container">
            <div id="seasons-container">
                {(statsYear === 2021) ?
                    (<h1 className="header">Current Season</h1>)
                    :
                    (<h1 className="header">{statsYear} Season</h1>)
                }
                <div id="change-season-container">
                    <h2>Change Season:</h2>
                    <select id="year-select" name="seasons" onChange={handleYearChange}>
                        {Object.values(seasonYears).map(year => {
                            return (
                                <option key={year.season} value={year.season} selected={(year.season === statsYear) ? "selected" : ""}>{year.season}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
            <div>
                {(preSeasonStats.length > 0) ? 
                    <StatsTable 
                        data={preSeasonStats} 
                        seasonType="Pre"
                    /> 
                    : <h2>No Pre Season Games</h2>}
                <StatsTable 
                    data={regSeasonStats} 
                    seasonType="Regular"
                />
                {(postSeasonStats.length > 0) ? 
                <StatsTable
                    data={postSeasonStats}
                    seasonType="Post" 
                /> 
                : <h2>Did Not Make the Playoffs</h2>}
            </div>
        </div>
    )
};

export default PlayerStats;