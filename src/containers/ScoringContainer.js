import React, { useState } from 'react';
import Scoring from '../components/Scoring';

const ScoringContainer = (props) => {
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
        <Scoring players={players}/>
    )
}

export default ScoringContainer;