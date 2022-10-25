import React, { useState, useEffect } from "react";
import PlayerInfo from "../components/PlayerInfo";
import PlayerStats from "../components/PlayerStats";
import CareerStats from "../components/CareerStats";
import Footer from "../components/Footer";
import Header from "../components/Header";
import playerStats from "../data/yearstats.json";
import playerInfo from "../data/players.json";
import "./style.css"

const PlayerPage = () => {
    // HOOK TO CHANGE SEASON
    const [statsYear, setStatsYear] = useState(2021);

    //HANDLER FOR CHANGING SEASON
    const handleYearChange = (e) => {
        setStatsYear(parseInt(e.target.value))
    };

    //OBJECT TO STORE DATA FOR EVERY SEASON
    const seasonYears = {};

    //CREATES OBJECT FOR EACH SEASON
    playerStats.forEach(game => {
        if (seasonYears[game.Season] !== game.Season) {
            seasonYears[game.Season] = {
                season: game.Season,
                team: playerInfo[0].TeamName,
                games: 0,
                gamesStarted: 0,
                completions: 0,
                attempts: 0,
                pYards: 0,
                avg: 0,
                pTds: 0,
                ints: 0,
                sacks: 0,
                sckYards: 0,
                qbr: 0,
                rAttempts: 0,
                rYards: 0,
                rTds: 0,
                fumbles: 0,
                fumblesRecovered: 0,
                preSeasStats: [],
                regSeasStats: [],
                postSeasStats: []
            };
        };
    });

    //FILTERS PRE SEASON, REGULAR SEASON, & POST SEASON GAMES
    const preSeasonCareerStats = playerStats.filter(game => game.SeasonType === "Pre");
    const regularSeasonCareerStats = playerStats.filter(game => game.SeasonType === "Reg");
    const postSeasonCareerStats = playerStats.filter(game => game.SeasonType === "Post");

    // LOOPS THROUGH EACH SEASON TO SET DATA FOR CAREER STATS
    Object.values(seasonYears).forEach(year => {
        //SETS PRE SEASON, REGULAR SEASON, & POST SEASON FOR EACH SEASON
        let preSeasStatsForYear = preSeasonCareerStats.filter(game => game.Season === year.season);
        let statsForYear = regularSeasonCareerStats.filter(game => game.Season === year.season);
        let postSeasStatsForYear = postSeasonCareerStats.filter(game => game.Season === year.season);

        // FILTERS TO GET GAMES PLAYED IN AND GAMES STARTED
        let gamesPlayedForYear = regularSeasonCareerStats.filter(game => game.Season === year.season).filter(game => parseInt(game.QBAttempts) > 0 || parseInt(game.RusAttempts));
        let gamesStartedForYear = regularSeasonCareerStats.filter(game => game.Season === year.season).filter(game => game.QBStartWins === "1" || game.QBStartLosses === "1" || game.QBStartTies === "1");

        // REDUCERS TO GET TOTALS FOR EACH STAT FOR EACH SEASON
        let compsForYear = statsForYear.reduce((n, { QBCompletions }) =>
            n + (parseInt(QBCompletions) || 0), 0);
        let attpsForYear = statsForYear.reduce((n, { QBAttempts }) =>
            n + (parseInt(QBAttempts) || 0), 0);
        let pYardsForYear = statsForYear.reduce((n, { QBYards }) =>
            n + (parseInt(QBYards) || 0), 0);
        let avgForYear = (pYardsForYear / compsForYear).toFixed(1);
        let pTdsForYear = statsForYear.reduce((n, { QBTouchdowns }) =>
            n + (parseInt(QBTouchdowns) || 0), 0);
        let intsForYear = statsForYear.reduce((n, { QBInterceptions }) =>
            n + (parseInt(QBInterceptions) || 0), 0);
        let scksForYear = statsForYear.reduce((n, { QBSacks }) =>
            n + (parseInt(QBSacks) || 0), 0);
        let sckYardsForYear = statsForYear.reduce((n, { QBSackYardage }) =>
            n + (parseInt(QBSackYardage) || 0), 0);
        let qbrForYear = statsForYear.reduce((n, { QBRating }) =>
            n + (parseInt(QBRating) || 0), 0);
        let actualQBR = (qbrForYear / gamesPlayedForYear.length).toFixed(1);
        let rAttpsForYear = statsForYear.reduce((n, { RusAttempts }) =>
            n + (parseInt(RusAttempts) || 0), 0);
        let rYardsForYear = statsForYear.reduce((n, { RusYards }) =>
            n + (parseInt(RusYards) || 0), 0);
        let rTdsForYear = statsForYear.reduce((n, { RusTouchdowns }) =>
            n + (parseInt(RusTouchdowns) || 0), 0);
        let fumblesForYear = statsForYear.reduce((n, { QBFumbles }) =>
            n + (parseInt(QBFumbles) || 0), 0) + statsForYear.reduce((n, { RusFumbles }) =>
                n + (parseInt(RusFumbles) || 0), 0);
        let fumblesRecoveredForYear = statsForYear.reduce((n, { DefMiscFumbleRecoveries }) =>
            n + (parseInt(DefMiscFumbleRecoveries) || 0), 0) + statsForYear.reduce((n, { FRNumber }) =>
                n + (parseInt(FRNumber) || 0), 0);

        // SETS EACH STAT FOR EACH SEASON
        seasonYears[year.season].preSeasStats = preSeasStatsForYear;
        seasonYears[year.season].regSeasStats = statsForYear;
        seasonYears[year.season].postSeasStats = postSeasStatsForYear;
        seasonYears[year.season].games = gamesPlayedForYear.length;
        seasonYears[year.season].gamesStarted = gamesStartedForYear.length;
        seasonYears[year.season].completions = compsForYear;
        seasonYears[year.season].attempts = attpsForYear;
        seasonYears[year.season].pYards = pYardsForYear;
        seasonYears[year.season].avg = avgForYear;
        seasonYears[year.season].pTds = pTdsForYear;
        seasonYears[year.season].ints = intsForYear;
        seasonYears[year.season].sacks = scksForYear;
        seasonYears[year.season].sckYards = sckYardsForYear;
        seasonYears[year.season].qbr = actualQBR;
        seasonYears[year.season].rAttempts = rAttpsForYear;
        seasonYears[year.season].rYards = rYardsForYear;
        seasonYears[year.season].rTds = rTdsForYear;
        seasonYears[year.season].fumbles = fumblesForYear;
        seasonYears[year.season].fumblesRecovered = fumblesRecoveredForYear;
    });

    // useEffect TO WATCH FOR EVERYTIME YEAR CHANGES TO DISPLAY THAT SEASONS STATS
    useEffect(() => {

    }, [statsYear]);

    // JSX RETURN
    return (
        <div id="page-container">
            <Header />
            <PlayerInfo />
            <PlayerStats
                statsYear={statsYear}
                handleYearChange={handleYearChange}
                seasonYears={seasonYears}
            />
            <CareerStats
                statsYear={statsYear}
                seasonYears={seasonYears}
            />
            <Footer />
        </div>
    )
}

export default PlayerPage;