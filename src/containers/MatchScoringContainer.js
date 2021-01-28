import React from 'react';
import MatchScoring from '../components/MatchScoring';

export default class  MatchScoringContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: props.location.state.data,
            hole: 1,
            points: {1: 1},
        }
        this.newScore = this.newScore.bind(this);
        this.pushHole = this.pushHole.bind(this);
        this.previousHole = this.previousHole.bind(this);
    }
        
        componentDidMount() {
            let players = this.state.players;
            if (this.state.hole === 1) {
                for ( let player in players ) {
                    players[player].score = 0;
                }
                this.setState({players: players});
            } 
        }

        calculateScores(object) {
            for ( let player in object ) {
                let total = Object.values(object[player]);
                total = total.reduce((a, b) => parseInt(a) + parseInt(b), 0);
                total = total - object[player].id;
                total = total - object[player].score;
                object[player].score = total;
            }
            return object;
        }
    
        newScore(e) {
            let players = this.state.players;
            let hole = this.state.hole;
            let points = this.state.points;
            let winner = e.target.id;    
            players[winner][hole] = points[hole];
            let playersArr = Object.keys(players);
            let losers = playersArr.filter((name) => { return name !== winner });
            losers.forEach( loser => players[loser][hole] = 0)
            let nextHole = hole + 1;
            points[nextHole] = 1;
            this.calculateScores(players);
            this.setState({players: players, hole: nextHole, points: points});
        }

        pushHole() {
            let players = this.state.players;
            let hole = this.state.hole;
            for (let player in players) {
                players[player][hole] = 0;
            }
            let newHole = hole + 1;
            let points = this.state.points;
            points[newHole] = points[hole] + 1;
            this.setState({points: points, hole: newHole, players: players})
        }

        previousHole () {
            let hole = this.state.hole;
            let players = this.state.players;
            if (hole > 1) {
                hole = hole - 1;
            }
            for (let player in players) {
                delete players[player][hole];
            }
            this.calculateScores(players);
            this.setState({hole: hole, players: players})
        }

        render() {
        return (
            <MatchScoring 
            pushHole={this.pushHole} 
            previousHole={this.previousHole}
            data = {this.state}
            newScore={this.newScore}/>
        )
    }
}