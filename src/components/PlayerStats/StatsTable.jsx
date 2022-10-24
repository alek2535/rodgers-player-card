import React from "react";
import "./style.css";

const StatsTable = ({data, seasonType}) => {

    return (
        <>
            <h2 className="header">{seasonType} Season Stats</h2>
            <table>
                <thead key={`${seasonType}-table-head`}>
                    <tr key={`${seasonType}-table-head-row`}>
                        <th key="date">Date</th>
                        <th key="opp">Opponent</th>
                        <th key="result">Result</th>
                        <th key="comps">Completions</th>
                        <th key="attempts">Attempts</th>
                        <th key="yards">Yards</th>
                        <th key="avg">Avg</th>
                        <th key="tds">TDs</th>
                        <th key="ints">Interceptions</th>
                        <th key="scks">Sacks</th>
                        <th key="sck-yards">Sack Yards</th>
                        <th key="qbr">QB Rating</th>
                        <th key="rush-attempts">Rush Attempts</th>
                        <th key="rush-yards">Rush Yards</th>
                        <th key="rush-tds">Rush TD</th>
                        <th key="fumbles">Fumble</th>
                        <th key="fumbles-recovered">Recovered</th>
                    </tr>
                </thead>
                <tbody key={`${seasonType}-table-body`}>
                    {data.map(g => {
                        return (
                            <tr key={`${seasonType}-table-row-${g.GameKey}`} className="table-data">
                                <th key={`date-${g.GameKey}`}>{g.GameDate.slice(0, -4)}</th>
                                <td key={`opp-${g.GameKey}`}>{(g.AwayAbbr === "GB") ? g.HomeAbbr : g.AwayAbbr}</td>
                                <td key={`result-${g.GameKey}`}>{(g.QBStartLosses === "1") ? "L" : (g.QBStartWins === "1") ? "W" : (g.QBStartTies === "1") ? "T" : (g.QBStartLosses === null && g.QBStartWins === null && g.QBStartLosses === null) ? "DNS" : ""}</td>
                                <td key={`comps-${g.GameKey}`}>{g.QBCompletions}</td>
                                <td key={`attempts-${g.GameKey}`}>{g.QBAttempts}</td>
                                <td key={`pYards-${g.GameKey}`}>{g.QBYards}</td>
                                <td key={`avgPass-${g.GameKey}`}>{(!g.QBYards && !g.QBAttempts) ? "": ((parseInt(g.QBYards)) / (parseInt(g.QBCompletions))).toFixed(1)}</td>
                                <td key={`pTDs-${g.GameKey}`}>{g.QBTouchdowns}</td>
                                <td key={`ints-${g.GameKey}`}>{g.QBInterceptions}</td>
                                <td key={`scks-${g.GameKey}`}>{g.QBSacks}</td>
                                <td key={`sckYs-${g.GameKey}`}>{g.QBSackYardage}</td>
                                <td key={`qbr-${g.GameKey}`}>{g.QBRating}</td>
                                <td key={`rAttempts-${g.GameKey}`}>{g.RusAttempts}</td>
                                <td key={`rYards-${g.GameKey}`}>{g.RusYards}</td>
                                <td key={`rTDs-${g.GameKey}`}>{g.RusTouchdowns}</td>
                                <td key={`rFumbles-${g.GameKey}`}>{(g.RusFumbles && g.QBFumbles) ? parseInt(g.RusFumbles) + parseInt(g.QBFumbles) : g.RusFumbles || g.QBFumbles}</td>
                                <td key={`fumbles-recovered-${g.GameKey}`}>{(g.FRYards) ?  1 : g.DefMiscFumbleRecoveries}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
};

export default StatsTable;