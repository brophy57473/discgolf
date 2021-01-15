import React from 'react';

const Scoring = (props) => {
    return (
        <div>
            <div className='score-title'>Hole {props.data.hole} - {props.data.points} points</div>
            {props.data.map(({score,name,id}) => 
                <div className='player-row'key={id}>
                    {name}
                    <br/>
                    Score: {score}
                    <button onClick={props.wonHole} className='won-hole' id={name}>Won Hole</button>
                </div>
                 )}
                 <div id="buttons">
                 <button id="previous" onClick={props.prevHole}>Back</button>
                 <button id="push" onClick={props.pushHole}>Push</button>
                 </div>
        </div>
    )
} 

export default Scoring;