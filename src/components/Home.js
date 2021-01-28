import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({game: e.target.value});
        console.log(this.state);
    }

    render() {
        return (
            <div className="main">
            Select your format then hit 'Add Players'
            <div id="options"> 
            <select required onChange={this.handleChange} name="format" id="options-list">
                <option value='' name='format'>Choose Format</option>
                <option value='match' name='format'>Match Play</option>
                <option value='skins' name='format'>Skins</option>
                <option value='wolf' name='format'>Wolf</option>
            </select>

            </div>
            <Link to={{ pathname:'/players', state: {data: this.state} }}  ><button id="startRound">Add Players</button></Link>         
            </div>
        );
    }
}

export default Home;