import React from 'react';
import Players from '../components/Players';

export default class PlayerContainer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            game: props.location.state.data.game,
            inputValue: '',
            players: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        const value = event.target.value;
        this.setState((prev) => ({...prev, inputValue: value}));
    }

    handleSubmit(event) {
        event.preventDefault();
        const name = this.state.inputValue;
        let newPlayers = this.state.players;
        newPlayers.[name] = {id: Date.now()};
        this.setState((prev) => ({...prev, players: newPlayers, inputValue: ''}));
        event.target.reset();
    }

    handleClick(e) {
        const name = e.target.innerHTML;
        let newPlayers = this.state.players;
        delete newPlayers[name];
        this.setState((prev) => ({...prev, players: newPlayers, inputValue: ''}));
        }

    render () {
        return (
            <Players 
            data = {this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit} 
            handleClick={this.handleClick} 
            />
        
        )
    }
}

