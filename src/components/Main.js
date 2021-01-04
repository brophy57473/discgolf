import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ScoringContainer from '../containers/ScoringContainer';
import PlayersContainer from '../containers/PlayersContainer';

const Main = () => {
    return (
        <main>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/players' component={PlayersContainer} />
                <Route path='/scoring' component={ScoringContainer} />
            </Switch>
        </main>
    )
}

export default Main;