import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../components/Home';
import CreateTrip from '../components/CreateTrip';
import TripPage from './TripPage';

class App extends Component {
    render() {
        return (
            <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/createtrip" component={CreateTrip}/>
                    <Route path="/trip/:place" component={TripPage} />
                    <Route render={() => <h1>404 Error</h1>} />
                </Switch>
            </div>
        </Router>
        );
      }
}

export default App;

