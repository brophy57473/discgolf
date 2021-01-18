import React, { useState } from 'react';
import MatchScoring from '../components/MatchScoring';

const MatchScoringContainer = (props) => {
    const { names } = props.location.state;
   const scorecard = [];
   scorecard[0] = names;
   scorecard[0].hole = 1;
   scorecard[0].points = 1;
    
    const [ scores, setScores ] = useState(scorecard);
    const wonHole = (e) => {
         let newScore = scores[scores.length - 1].map((name) => {
             return {
                 name: name.name, 
                 id: name.id, 
                 score: name.score,
                };
         })
         newScore.hole = scores[scores.length - 1].hole + 1;
         newScore.points = 1;
         const nameIndex = newScore.findIndex((name) => {return name.name === e.target.id});
         newScore[nameIndex].score = newScore[nameIndex].score + scores[scores.length - 1].points;
         setScores((prev) => [...prev, newScore]);
         console.log(scores);
        }

    const pushHole = () => {
        let newScore = scores[scores.length - 1].map((name) => {
            return {name: name.name, id: name.id, score: name.score};
        })
        newScore.hole = scores[scores.length - 1].hole + 1;
        newScore.points = scores[scores.length - 1].points + 1;
        setScores((prev) => [...prev, newScore]);
    }

    const prevHole = () => {
        let tempScores = scores.map((name) => {
            return name;
        })
        tempScores.pop();
        setScores(tempScores);
    }

    return (
        <MatchScoring 
        pushHole={pushHole} 
        prevHole={prevHole}
        data={scores[scores.length - 1]} 
        wonHole={wonHole}/>
    )
}

export default MatchScoringContainer;