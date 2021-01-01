import React, {useState,useEffect} from 'react';

function Body (props) {

    const [names, setNames] = useState([]);
        /*{
            name:"Ryan",
            id: 0
         },{
            name:"Dad",
            id: 1
         },{
            name:"Mom",
            id: 2
         },{
            name:"Emily",
            id: 3
         }])*/

    const [player, setPlayer] = useState([]); 
    const handleChange = (event) => {
        setPlayer((prev) => ([event.target.value]));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setNames((prev) => ([{name: player, id: Date.now()},...prev]));
        event.target.reset();
    }

    const handleClick = (idToDelete) => {
        setNames((prev) => prev.filter((name) => name.id !== idToDelete));
    }

    return (
        <div className="main">
        Practicing with components - this prop should display "Brophy": {props.name}

        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="name" required onChange={handleChange} />
            <input type="submit" value="Submit" />
        </form>

 
            <ul>
            {names.map(({name,id}) => 
            <li key={id} onClick={() => handleClick(id)}>
                {name}
            </li>
            )}
        </ul>
                       
        </div>
    )
}

export default Body;