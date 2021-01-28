import React from 'react';

const MatchScoring = (props) => {
    const hole = props.data.hole;
    const points = props.data.points;
    const players = props.data.players;
    const playersArr = Object.keys(players);

    return (
        <div>
            <div className='score-title'>Hole {hole} - {points[hole]} points</div>
            {playersArr.map((player) => 
                <div className='player-row'key={players[player].id}>
                    {player}
                    <br/>
                    Score: {players[player].score}
                    <button onClick={props.newScore} className='won-hole' id={player}>Won Hole</button>
                </div>
                 )}
                 <div id="buttons">
                 <button id="previous" onClick={props.previousHole}>Back</button>
                 <button id="push" onClick={props.pushHole}>Push</button>
                 </div>
        </div>
    )
} 

export default MatchScoring;