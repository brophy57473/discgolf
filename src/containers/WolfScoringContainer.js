import React from 'react';
import WolfScoring from '../components/WolfScoring';
import WolfTeamPick from '../components/WolfTeamPick';

export default class WolfScoringContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            players: props.location.state.data,
            hole: 1,
            points: {1: 6},
            teamOne: {},
            teamTwo: {},
            pickTeams: true,
            wolf: false
        }
        this.pickPartners = this.pickPartners.bind(this);
        this.newScore = this.newScore.bind(this);
        this.backToTeamSelection = this.backToTeamSelection.bind(this);
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

    //assign teams and add object to teamOne and teamTwo
    //object key is same as hole number
    pickPartners(e) {
        let newWolf = this.state.wolf;
        let newTeamOne = this.state.teamOne;
        let newTeamTwo = this.state.teamTwo;
        if (!e.target.getAttribute('wolf')) {
            const partner = e.target.getAttribute('name');
            let wolf = document.querySelector('.wolf-title').innerHTML;
            wolf = wolf.split(':')[0];
            newTeamOne[this.state.hole] = [wolf, partner];
            
            let teamTwoNames = []; 
            let throwers = document.querySelectorAll('.thrower-name');
            for (let thrower of throwers) {
                const name = thrower.innerHTML;
                if (name !== partner){
                    teamTwoNames.push(name);
                }
            }
            newTeamTwo[this.state.hole] = teamTwoNames;
            newWolf = false;
        } 
        if (e.target.getAttribute('wolf')) {
            let wolf = document.querySelector('.wolf-title').innerHTML;
            wolf = wolf.split(':')[0];
            newTeamOne[this.state.hole] = [wolf];
            
            let teamTwoNames = []; 
            let throwers = document.querySelectorAll('.thrower-name');
            for (let thrower of throwers) {
                const name = thrower.innerHTML;  
                    teamTwoNames.push(name);
            }
            newTeamTwo[this.state.hole] = teamTwoNames;

            let points = this.state.points;
            let hole = this.state.hole;
            points[hole] = points[hole] * 2;
            newWolf = true;
        }
        this.setState({teamOne: newTeamOne, teamTwo: newTeamTwo, pickTeams: false, wolf: newWolf});
    }

    //add score with key value of hole number 
    newScore(e) {
        const team = e.target.parentNode.getAttribute('team');
        let players = this.state.players;
        let hole = this.state.hole;
        let points = this.state.points;
        let winners = [];
        let losers = [];
        if (team === 'one'){
            let winNodes = document.querySelectorAll('.team-one-player');
            for (let node of winNodes) {
                let name = node.innerHTML;
                winners.push(name.split(':')[0]);
            }
            let loseNodes = document.querySelectorAll('.team-two-player');
            for (let node of loseNodes) {
                let name = node.innerHTML;
                losers.push(name.split(':')[0]);
            }
            winners.forEach((winner) => players[winner][hole] = (points[hole]/winNodes.length));
            losers.forEach((loser) => players[loser][hole] = (-points[hole]/loseNodes.length));
            let nextHole = hole + 1;
            points[nextHole] = 6;
            this.calculateScores(players);
            this.setState({players: players, hole: nextHole, points: points, pickTeams: true});
        }
        if (team === 'two'){
            let winNodes = document.querySelectorAll('.team-two-player');
            for (let node of winNodes) {
                let name = node.innerHTML;
                winners.push(name.split(':')[0]);
            }
            let loseNodes = document.querySelectorAll('.team-one-player');
            for (let node of loseNodes) {
                let name = node.innerHTML;
                losers.push(name.split(':')[0]);
            }
            winners.forEach((winner) => players[winner][hole] = (points[hole]/winNodes.length));
            losers.forEach((loser) => players[loser][hole] = (-points[hole]/loseNodes.length));
            let nextHole = hole + 1;
            points[nextHole] = 6;
            this.calculateScores(players);
            this.setState({players: players, hole: nextHole, points: points, pickTeams: true});
        }
    }

    backToTeamSelection() {
        let points = this.state.points;
        let hole = this.state.hole;
        let players = this.state.players;
        if (this.state.wolf) {
            points[hole] = points[hole] / 2;
        }
        for (let player in players) {
            delete players[player][hole];
        }
        this.calculateScores(players);
        this.setState({pickTeams: true, points: points, players: players, wolf: false})
    }

    pushHole() {
        let players = this.state.players;
        let hole = this.state.hole;
        for (let player in players) {
            players[player][hole] = 0;
        }
        let newHole = hole + 1;
        let points = this.state.points;
        points[newHole] = points[hole] + 6;
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
        this.setState({hole: hole, players: players, pickTeams: false});
    }

    render () {
        let element;
        if (!this.state.teamOne[this.state.hole] || this.state.pickTeams === true) {
            element = <WolfTeamPick
                    data = {this.state}
                    pickPartner = {this.pickPartners}
                    newScore = {this.newScore}
                    previousHole = {this.previousHole}
                    />
        } else {
            element = <WolfScoring
                    data = {this.state}
                    pickPartner = {this.pickPartners}
                    pushHole = {this.pushHole}
                    backToTeamSelection = {this.backToTeamSelection}
                    newScore = {this.newScore}
                    />
        }

        return (
            element
        )
    }
}