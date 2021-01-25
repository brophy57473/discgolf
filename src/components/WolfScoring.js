import React from 'react';

const WolfScoring = (props) => {
    const scores = props.scores;
    const currentScores = scores[scores.length - 1];
    if (props.teams.length === 5 || !props.teams.length){
        return (
            <div> 
                <div className='score-title'>Hole {currentScores.hole} - {currentScores.points} points</div>
                <div className='wolf-title'>{props.names[0].name}: {props.names[0].score}</div>
                <button className='go-alone-button' wolf='true' onClick={props.pickPartner}>GOIN' WOLF</button>
                <div id='team-pick-container'>
                    Who is partners with the wolf?
                    <br/>
                    {props.names.slice(1).map( ({name,score,id}) => 
                        <button className='thrower' name={name} key={id} onClick={props.pickPartner}>{name}: {score}</button>
                    )}
                </div>
            </div>
        )
    }
    if (props.teams) {
        return (
            <div>
                <div className='score-title'>Hole {currentScores.hole} - {currentScores.points} points</div>
                <div className='team team-one' team='one'>
                    <div className='team-container'>
                        {props.teams[0].map( ({name,score,id}) => 
                        <div className='wolf-player' key={id}>{name}: {score}</div>
                            )}
                    </div>
                    <button className='won-wolf-button' onClick={props.newScore}>Won Hole</button>
                </div>

                <div className='team team-two' team='two'>
                    <div className='team-container'>
                        {props.teams[1].map( ({name,score,id}) => 
                        <div className='wolf-player' key={id}>{name}: {score}</div>
                            )}
                    </div>
                    <button className='won-wolf-button' onClick={props.newScore}>Won Hole</button>
                </div>

                <div id="buttons">
                    <button id='previous'onClick={props.backToTeamSelection}>Back</button>
                    <button id='push' onClick={props.pushHole}>Push</button>
                </div>
            </div>
        )
    }

    /*return (

        <div>
            <div className='score-title'>Hole {props.data.hole} - {props.data.points} points</div>
            {props.data.map(({score,name,id}) => 
                <div className='player-row'key={id}>
                    {name}
                    <br/>
                    Score: {score}
                    <button onClick={props.handleScore} className='won-hole' id={name}>Won Hole</button>
                </div>
                 )}
                 <div id="buttons">
                 <button id="previous" onClick={props.prevHole}>Back</button>
                 <button id="push" onClick={props.pushHole}>Push</button>
                 <button id='next' onClick={props.nextHole}>Next</button>
                 </div>
        </div>
    )*/
} 

export default WolfScoring;