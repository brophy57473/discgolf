import React from 'react';

const WolfScoring = (props) => {
    console.log(props.holeData);
    return (
        <div>
            <div className='score-title'>Hole {props.data.hole} - {props.data.points} points</div>
            {props.data.map(({score,name,id}) => 
                <div className='player-row'key={id}>
                    {name}
                    <br/>
                    Score: {score}
                    <button onClick={props.handleScore} className='score-hole' id={name}>-{props.data.points / 2}</button>
                    <button onClick={props.handleScore} className='score-hole' id={name}>-{props.data.points / 3}</button>
                    <button onClick={props.handleScore} className='score-hole' id={name}>+{props.data.points / 3}</button>
                    <button onClick={props.handleScore} className='score-hole' id={name}>+{props.data.points / 2}</button>
                </div>
                 )}
                 <div id="buttons">
                 <button id="previous" onClick={props.prevHole}>Back</button>
                 <button id="push" onClick={props.pushHole}>Push</button>
                 <button id='next' onClick={props.nextHole}>Next</button>
                 </div>
        </div>
    )
} 

export default WolfScoring;