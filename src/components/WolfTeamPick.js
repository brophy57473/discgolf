import React from 'react';

const WolfTeamPick = (props) => {
    const hole = props.data.hole;
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
            <div className='wolf-title'>{playersArr[0]}: {players[playersArr[0]].score}</div>
            <button className='go-alone-button' name={playersArr[0]} wolf='true' onClick={props.pickPartner}>GOIN' WOLF</button>
            <div id='team-pick-container'>
                Who is partners with the wolf?
                <br/>
                {playersArr.slice(1).map( (name) => 
                    <button className='thrower' name={name} key={players[name].id} onClick={props.pickPartner}><span className="thrower-name">{name}</span>: {players[name].score}</button>
                )}
            </div>
            <button id='prevHole' onClick={props.previousHole}>Previous Hole</button>
        </div>
    )
}


export default WolfTeamPick;