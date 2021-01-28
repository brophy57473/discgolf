import React from 'react';
import { Link } from 'react-router-dom';

const Players = (props) => {
    let players = props.data.players; 
    let handleChange = props.handleChange; 
    let handleSubmit = props.handleSubmit;
    let handleClick = props.handleClick;
    let game = props.data.game;

    let listNames = Object.keys(players).map((key) => {
       return <li onClick={handleClick} className='player-list-item' key={players[key].id}>
            {key}
        </li>
    })
    

    return (
        <div>
        <div>{props.game}</div>
        <div id='players-main'>
            Input each player's name that is on the card
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required onChange={handleChange}/>
            <input id="addPlayer" type="submit" value="Add Player" />
        </form>
        <ul id="player-list">{listNames}</ul>
        Click this button to proceed to sample scoring page
        <br/>

        
        <Link to={{ pathname:`/${game}scoring`, state: { data: players } }}><button id="startRound">Start Round</button></Link>            
        </div>
        </div>
    )
}

export default Players;