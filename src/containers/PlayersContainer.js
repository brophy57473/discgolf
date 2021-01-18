import React, { useState } from 'react';
import Players from '../components/Players';

const PlayerContainer = (props) => {
    const { game } = props.location.state;
   
    const [player, setPlayer] = useState([]); 
    const handleChange = (event) => {
        let name = event.target.value;
        setPlayer(() => (name));
    }

    const [names, setNames] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        setNames((prev) => ([{name: player, id: Date.now(), score: 0},...prev]));
        event.target.reset();
    }

    const handleClick = (idToDelete) => {
        setNames((prev) => prev.filter((name) => name.name !== idToDelete.target.innerHTML));
    }

    return (
        <Players format={game} handleChange={handleChange} handleSubmit={handleSubmit} handleClick={handleClick} names={names}/>
       
    )
}

export default PlayerContainer;