import React from "react";
import "./style.css";

const CareerStats = ({ statsYear, seasonYears }) => {
    // REDUCERS TO GET TOTALS OF EACH STAT FOR CAREER
    let totalGames = Object.values(seasonYears).reduce((n, { games }) => n + games, 0);
    let totalGamesStarted = Object.values(seasonYears).reduce((n, { gamesStarted }) => n + gamesStarted, 0);
    let totalComps = Object.values(seasonYears).reduce((n, { completions }) => n + completions, 0);
    let totalAttempts = Object.values(seasonYears).reduce((n, { attempts }) => n + attempts, 0);
    let totalpYards = Object.values(seasonYears).reduce((n, { pYards }) => n + pYards, 0);
    let totalAvg = (totalpYards / totalComps).toFixed(1);
    let totalpTds = Object.values(seasonYears).reduce((n, { pTds }) => n + pTds, 0);
    let totalInts = Object.values(seasonYears).reduce((n, { ints }) => n + ints, 0);
    let totalSacks = Object.values(seasonYears).reduce((n, { sacks }) => n + sacks, 0);
    let totalSckYards = Object.values(seasonYears).reduce((n, { sckYards }) => n + sckYards, 0);
    let totalQbr = Object.values(seasonYears).reduce((n, { qbr }) => n + parseInt(qbr), 0);
    let totalActQBR = (totalQbr / Object.values(seasonYears).length).toFixed(1);
    let totalrAttempts = Object.values(seasonYears).reduce((n, { rAttempts }) => n + rAttempts, 0);
    let totalrYards = Object.values(seasonYears).reduce((n, { rYards }) => n + rYards, 0);
    let totalrTds = Object.values(seasonYears).reduce((n, { rTds }) => n + rTds, 0);
    let totalFumbles = Object.values(seasonYears).reduce((n, { fumbles }) => n + fumbles, 0);
    let totalFumblesRecovered = Object.values(seasonYears).reduce((n, { fumblesRecovered }) => n + fumblesRecovered, 0);

    // JSX RETURN
    return (
        <div id="career-container">
            <h2 className="header">Career Stats</h2>
            <table>
                <thead key="career-table-head">
                    <tr key="career-head-row">
                        <th key="date">Season</th>
                        <th key="team-name">Team</th>
                        <th key="games">Games</th>
                        <th key="gamesStarted">Games Started</th>
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
                <tbody key="career-table-body">
                    {Object.values(seasonYears).map(year => {
                        return (
                            <tr key={`career-table-row-${year.season}`} className="table-data" id={(year.season === statsYear) ? "highlight-year" : ""}>
                                <th key={`season-${year.season}`}>{year.season}</th>
                                <td key={`team-name-${year.season}`}>{year.team}</td>
                                <td key={`games-${year.season}`}>{year.games}</td>
                                <td key={`gamesStarted-${year.season}`}>{year.gamesStarted}</td>
                                <td key={`comps-${year.season}`}>{year.completions}</td>
                                <td key={`attempts-${year.season}`}>{year.attempts}</td>
                                <td key={`pYards-${year.season}`}>{year.pYards}</td>
                                <td key={`avgPass-${year.season}`}>{year.avg}</td>
                                <td key={`pTDs-${year.season}`}>{year.pTds}</td>
                                <td key={`ints-${year.season}`}>{year.ints}</td>
                                <td key={`scks-${year.season}`}>{year.sacks}</td>
                                <td key={`sckYs-${year.season}`}>{year.sckYards}</td>
                                <td key={`qbr-${year.season}`}>{year.qbr}</td>
                                <td key={`rAttempts-${year.season}`}>{year.rAttempts}</td>
                                <td key={`rYards-${year.season}`}>{year.rYards}</td>
                                <td key={`rTDs-${year.season}`}>{year.rTds}</td>
                                <td key={`rFumbles-${year.season}`}>{year.fumbles}</td>
                                <td key={`fumbles-recovered-${year.season}`}>{year.fumblesRecovered}</td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr key={`career-table-row-total`} id="total-row">
                        <th key={`total`}>Total</th>
                        <td key={`team-total`}></td>
                        <td key={`games-total`}>{totalGames}</td>
                        <td key={`gamesStarted-total`}>{totalGamesStarted}</td>
                        <td key={`comps-total`}>{totalComps}</td>
                        <td key={`attempts-total`}>{totalAttempts}</td>
                        <td key={`pYards-total`}>{totalpYards}</td>
                        <td key={`avgPass-total`}>{totalAvg}</td>
                        <td key={`pTDs-total`}>{totalpTds}</td>
                        <td key={`ints-total`}>{totalInts}</td>
                        <td key={`scks-total`}>{totalSacks}</td>
                        <td key={`sckYs-total`}>{totalSckYards}</td>
                        <td key={`qbr-total`}>{totalActQBR}</td>
                        <td key={`rAttempts-total`}>{totalrAttempts}</td>
                        <td key={`rYards-total`}>{totalrYards}</td>
                        <td key={`rTDs-total`}>{totalrTds}</td>
                        <td key={`rFumbles-total`}>{totalFumbles}</td>
                        <td key={`fumbles-recovered-total`}>{totalFumblesRecovered}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
};

export default CareerStats;