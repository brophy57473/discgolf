import React, { useState } from 'react';
import WolfScoring from '../components/WolfScoring';

const WolfScoringContainer = (props) => {
    const { names } = props.location.state;
    const scorecard = [];
    scorecard[0] = names;
    scorecard[0].hole = 1;
    scorecard[0].points = 6;

    const [ teams, setTeams ] = useState([]);
    const [ scores, setScores ] = useState(scorecard);
    let holeInfo = scores[scores.length - 1];

    const pickPartners = (e) => {
        //assign teams and setTeams
        if (!e.target.getAttribute('wolf')) {
            const partner = e.target.getAttribute('name');
            let index = names.findIndex((name) => {return name.name === partner});
            const teamOne = [names[0], names[index]];
            const teamTwo = names.filter((thrower) => teamOne.indexOf(thrower) === -1);
            setTeams([teamOne,teamTwo]);
        } 
        if (e.target.getAttribute('wolf')) {
            const teamOne = [names[0]];
            const teamTwo = names.filter((thrower) => teamOne.indexOf(thrower) === -1); 
            setTeams([teamOne,teamTwo]);
            let scoresCopy = scores;
            const newPoints =  scoresCopy[scoresCopy.length-1].points * 2;
            scoresCopy[scoresCopy.length-1].points = newPoints; 
            setScores(scoresCopy);
        }
    }

    const newScore = (e) => {
        //add object with hole info, teams, scores
        const team = e.target.parentNode.getAttribute('team');
        let losers = [];
        let winners = [];
        if (team === 'one'){
            winners = teams[0];
            losers = teams[1];
            winners.forEach((winner) => {
                winner.score = winner.score + (scores[scores.length-1].points/winners.length);
            })
            losers.forEach((loser) => {
                loser.score = loser.score - (scores[scores.length-1].points/losers.length);
            })
        }
        if (team === 'two'){
            winners = teams[1];
            losers = teams[0];
            winners.forEach((winner) => {
                winner.score = winner.score + (scores[scores.length-1].points/winners.length);
            })
            losers.forEach((loser) => {
                loser.score = loser.score - (scores[scores.length-1].points/losers.length);
            })   
        }
        let newScores = winners.concat(losers);
        newScores.hole = holeInfo.hole + 1;
        newScores.points = 6;
        setScores((prev) => [...prev, newScores]);
        setTeams(names.push(names.shift()));
    }

    const backToTeamSelection = () => {
        setTeams(names.push(names.shift()));
        let scoresCopy = scores;
            scoresCopy[scoresCopy.length-1].points = scoresCopy[scoresCopy.length-1].points / 2;
            setScores(scoresCopy);
    }

    const pushHole = () => {
        let newScores = scores[scores.length - 1].map((name) => {
            return {
                name: name.name, 
                id: name.id, 
                score: name.score,
               };
        })
        newScores.hole = holeInfo.hole + 1;
        newScores.points = holeInfo.points + 6;
        setScores((prev) => [...prev, newScores]);
        setTeams(names.push(names.shift()));
    }

    return (
        <WolfScoring
        //throwers = {throwers}
        names = {names}
        scores = {scores}
        pickPartner = {pickPartners}
        teams = {teams}
        pushHole = {pushHole}
        backToTeamSelection = {backToTeamSelection}
        newScore = {newScore}
        />
    )
}

export default WolfScoringContainer;