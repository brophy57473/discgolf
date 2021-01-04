import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home (props) {

    return (
        <div className="main">
        Select your format then hit 'Add Players'
        <div id="options"> 
        <ul id="options-list">
            <li><input type='radio' value='match' name='format' />Match Play</li>
            <li><input type='radio' value='skins' name='format' />Skins</li>
            <li><input type='radio' value='wolf' name='format' />Wolf</li>
        </ul>

        </div>
        <Link to='/players'><button id="startRound">Add Players</button></Link>         
        </div>
    )
}

export default Home;