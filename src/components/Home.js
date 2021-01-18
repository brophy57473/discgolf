import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Home (props) {

    const [ game, setGame ] = useState();

    const handleChange = (e) => {
        setGame(e.target.value);
    }


    return (
        <div className="main">
        Select your format then hit 'Add Players'
        <div id="options"> 
        <select required onChange={handleChange} name="format" id="options-list">
            <option value='' name='format'>Choose Format</option>
            <option value='match' name='format'>Match Play</option>
            <option value='skins' name='format'>Skins</option>
            <option value='wolf' name='format'>Wolf</option>
        </select>

        </div>
        <Link to={{ pathname:'/players', state: { game: game }} }  ><button id="startRound">Add Players</button></Link>         
        </div>
    )
}

export default Home;