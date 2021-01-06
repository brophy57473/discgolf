import React from 'react';

const Scoring = (props) => {

    return (
        <div>
            <div className='score-title'>Hole {props.holeInfo} - {props.points} points</div>
            {props.players.map(({score,name,id}) => 
                <div className='player-row'key={id}>
                    {name}
                    <br/>
                    Score: {score}
                    <button onClick={props.wonHole} className='won-hole' id={name}>Won Hole</button>
                </div>
                 )}
                 <div id="buttons">
                 <button id="previous" onClick={() => props.nextHole(-1)}>Prev Hole</button>
                 <button id="push" onClick={() => props.adjustPoints(1)}>Push</button>
                 <button id="next" onClick={() => props.nextHole(1)}>Next Hole</button>
                 </div>
        </div>
    )
} 

export default Scoring;