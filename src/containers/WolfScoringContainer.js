import React, { useState } from 'react';
import WolfScoring from '../components/WolfScoring';

const WolfScoringContainer = (props) => {
    const { names } = props.location.state;
   const scorecard = [];
   scorecard[0] = names;
   scorecard[0].hole = 1;
   scorecard[0].points = 6;
    
    const [ scores, setScores ] = useState(scorecard);
    const handleScore = (e) => {
        const points = parseInt(e.target.innerHTML);
         let newScore = scores[scores.length - 1].map((name) => {
             return {
                 name: name.name, 
                 id: name.id, 
                 score: name.score,
                };
         })
         const nameIndex = newScore.findIndex((name) => {return name.name === e.target.id});
         if (e.target.classList.contains('selected')) {
             e.target.classList.remove('selected');
             newScore[nameIndex].score = newScore[nameIndex].score - points;

         } else {
             console.log('that was not selected');
             e.target.classList.add('selected');
             newScore[nameIndex].score = newScore[nameIndex].score + points;
         }
         console.log(newScore);
         newScore.hole = scores[scores.length - 1].hole;
         newScore.points = scores[scores.length - 1].points;
         setScores((prev) => [...prev, newScore]);
        }

    
    const pushHole = () => {
        let newScore = scores[scores.length - 1].map((name) => {
            return {name: name.name, id: name.id, score: name.score};
        })
        newScore.hole = scores[scores.length - 1].hole + 1;
        newScore.points = scores[scores.length - 1].points + 6;
        setScores((prev) => [...prev, newScore]);

    }

    const prevHole = () => {
        let tempScores = scores.map((name) => {
            return name;
        })
        tempScores.pop();
        setScores(tempScores);
        let button = document.querySelector('.selected');
        if (button) {
            button.classList.remove('selected');
        }
    }

    const nextHole = () => {
        let newScore = scores[scores.length - 1].map((name) => {
            return {name: name.name, id: name.id, score: name.score};
        })
        newScore.hole = scores[scores.length - 1].hole + 1;
        newScore.points = 6;
        setScores((prev) => [...prev, newScore]);
        let buttons = document.querySelectorAll('.selected');
        buttons.forEach((element) => {
            element.classList.remove('selected');
        })
        
    }

    return (
        <WolfScoring 
        pushHole={pushHole} 
        prevHole={prevHole}
        data={scores[scores.length - 1]} 
        handleScore={handleScore}
        nextHole={nextHole}/>
    )
}

export default WolfScoringContainer;