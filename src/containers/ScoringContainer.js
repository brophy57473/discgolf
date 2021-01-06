import React, { useState } from 'react';
import Scoring from '../components/Scoring';

const ScoringContainer = (props) => {
    const { names } = props.location.state;

   /*const [ scores, setScores ] = useState(names);
    const wonHole = (e) => {
         console.log(e.target.id);
         setScores();
    }*/

    const [ hole, setHole ] = useState(1)
    const nextHole = (num) => {
        if ((hole < 18 && num === 1) || (hole > 1 && num === -1)) {
            setHole(hole + num);
        }
    };
    

    const [points, setPoints] = useState(1);
    const adjustPoints = (num) => {
        setPoints(points + 1);
        setHole(hole + num);
    };

    const players = [{
        name: 'Player 1',
        score: 25,
        id: 1
    },{
        name: 'Player 2',
        score: 10,
        id: 2
    },{
        name: 'Player 3',
        score: 1,
        id: 3
    }]

    return (
        <Scoring nextHole={nextHole} adjustPoints={adjustPoints} holeInfo={hole} points={points} players={names}/>
    )
}

export default ScoringContainer;