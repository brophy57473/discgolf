import React from 'react';
import { Link } from 'react-router-dom';

const Players = (props) => {
    return (
        <div id='players-main'>
        This will eventually be a dynamic page to input player names
        <form /*onSubmit={props.handleSubmit}*/>
            <input type="text" name="name" placeholder="Name" required /*onChange={props.handleChange}*/ />
            <input id="addPlayer" type="submit" value="Add Player" />
        </form>
        Click this button to proceed to sample scoring page
        <br/>

        
        <Link to='/scoring'><button id="startRound">Start Round</button></Link>            
        </div>
    )
}

export default Players;