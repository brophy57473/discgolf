import React from 'react';

const WolfScoring = (props) => {
    const hole = props.data.hole;
    const teamOne = props.data.teamOne;
    const teamTwo = props.data.teamTwo;
    const points = props.data.points;
    const players = props.data.players;
    const playersArr = Object.keys(players);

    //set rotation based on scoring
    if (hole < 5) {
        for (let i=0; i < hole; i++){
            playersArr.push(playersArr.shift());
        }
    } else {
        let num = hole % 5;
        for (let i=0; i < num; i++){
            playersArr.push(playersArr.shift());
        }
    }
    
  
    return (
        <div>
            <div className='score-title'>Hole {hole} - {points[hole]} points</div>
            <div className='team team-one' team='one'>
                <div className='team-container'>
                    {teamOne[hole].map( (name) => 
                    <div className='team-one-player' key={players[name].id}>{name}: {players[name].score}</div>
                        )}
                </div>
                <button className='won-wolf-button' onClick={props.newScore}>Won Hole</button>
            </div>

            <div className='team team-two' team='two'>
                <div className='team-container'>
                    {teamTwo[hole].map( (name) => 
                    <div className='team-two-player' key={players[name].id}>{name}: {players[name].score}</div>
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


export default WolfScoring;