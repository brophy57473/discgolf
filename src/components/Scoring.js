import React from 'react';

const Scoring = (props) => {
    console.log(props.players);
    return (
        <div>
            <div className='score-title'>Hole 1 - 4 points</div>
            {props.players.map(({score,name,id}) => 
                <div className='player-row'key={id}>
                    {name}
                    <br/>
                    Score: {score}
                    <button id="won-hole">Won Hole</button>
                </div>
                 )}
                 <div id="buttons">
                 <button id="previous">Prev Hole</button>
                 <button id="push">Push</button>
                 <button id="next">Next Hole</button>
                 </div>
        </div>
    )
} 

export default Scoring;