import React, { useState } from 'react';
import Players from '../components/Players';

const PlayerContainer = () => {
   
    /*const [player, setPlayer] = useState([]); 
    const handleChange = (event) => {
        setPlayer(() => ([event.target.value]));
        console.log(player);
    }

    const [names, setNames] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        setNames((prev) => ([{name: player, id: Date.now()},...prev]));
        event.target.reset();
        console.log(names);
    }

    const handleClick = (idToDelete) => {
        setNames((prev) => prev.filter((name) => name.id !== idToDelete));
    }*/

    return (
        //commenting out where future props will get passed
        //<Players handleChange={handleChange} handleSubmit={handleSubmit} handleClick={handleClick} names={names}/>
        <Players />
    )
}

export default PlayerContainer;