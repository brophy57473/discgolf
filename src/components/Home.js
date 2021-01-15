import React from 'react';
import { Link } from 'react-router-dom';

function Home (props) {

    return (
        <div className="main">
        Select your format then hit 'Add Players'
        <div id="options"> 
        <select name="format" id="options-list">
            <option value='match' name='format'>Match Play</option>
            <option value='skins' name='format'>Skins</option>
            <option value='wolf' name='format'>Wolf</option>
        </select>

        </div>
        <Link to='/players'><button id="startRound">Add Players</button></Link>         
        </div>
    )
}

export default Home;