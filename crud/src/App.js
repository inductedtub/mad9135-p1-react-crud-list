import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import AppHeader from './AppHeader'
import ListView from './ListView';
import AddView from './AddView';





function App() {

    if (localStorage.getItem('list') === null) {
        localStorage.setItem('list', JSON.stringify([
            {id: null, title: 'one', subTitle: 'lil one',},
             {id: null, title: 'two', subTitle: 'lil two',}
        ]));
    }

    const listyList = JSON.parse(localStorage.getItem("list"))

    const [rubrics, setRubrics] = useState(listyList)

    const addRubric = rubric => {
        console.log("adding")

        rubric.id = rubric.length + 1
        setRubrics([...rubrics, rubric])

        //JSON.stringify(localStorage.setItem('list', [...listyList, rubric]))
    }

    return (
        <div className="App">
            <Router basename="/">
                <Switch>
                    <Route exact path="/">
                        <AppHeader/>
                        <ListView list={listyList}/>
                    </Route>
                    <Route path="/AddView">
                        <AddView addRubric={addRubric}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
