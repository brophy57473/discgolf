import React from 'react';
import { Link } from 'react-router-dom';

const Players = (props) => {
    let handleSubmit = props.handleSubmit;
    let names = props.names;
    let handleChange = props.handleChange;
    let handleClick = props.handleClick;
    let game = props.format;

    let listNames = names.map((item) => 
            <li onClick={handleClick} className='player-list-item' id={item.id} key={item.id}>
                {item.name}
            </li>
    )

    return (

        <div id='players-main'>
            Input each player's name that is on the card
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required onChange={handleChange} />
            <input id="addPlayer" type="submit" value="Add Player" />
        </form>
        <ul id="player-list">{listNames}</ul>
        Click this button to proceed to sample scoring page
        <br/>

        
        <Link to={{ pathname:`/${game}scoring`, state: { names: names } }}><button id="startRound">Start Round</button></Link>            
        </div>
    )
}

export default Players;