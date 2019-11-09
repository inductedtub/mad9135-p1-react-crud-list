import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import AppHeader from './AppHeader'
import ListView from './ListView';
import AddView from './AddView';

function App() {
    return (
        <div className="App">
            <Router basename="/">

                <Switch>
                    <Route exact path="/">
                        <AppHeader/>
                        <ListView/>
                    </Route>
                    <Route path="/AddView">
                        <AddView/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
