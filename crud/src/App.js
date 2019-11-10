import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import AppHeader from './AppHeader'
import ListView from './ListView';
import AddView from './AddView';
import EditItemView from './EditItemView';

function App() {
    //sets data in local storage if first render comes back empty
    if (localStorage.getItem('list') === null || localStorage.getItem('list') === '[]') {
        localStorage.clear()
        localStorage.setItem('list', JSON.stringify([
            {
                id: 0,
                title: 'Firebase',
                subTitle: 'Marking rubric for Firebase'
            }, {
                id: 1,
                title: 'Babel',
                subTitle: 'marking rubric for Babel'
            }
        ]));
    }

    const listyList = JSON.parse(localStorage.getItem("list"))

    const [rubrics,
        setRubrics] = useState(listyList)

    const addRubric = rubric => {
        console.log("adding")
        //console.log(rubric)

        console.log(rubric.id)
        rubric.id = Math.random() + 1
        setRubrics([
            ...rubrics,
            rubric
        ])

        localStorage.clear()
        console.log("state rubrics " + rubrics)
        localStorage.setItem('list', JSON.stringify(rubrics))
    }

    const deleteRubric = id => {
        console.log(id)
        setRubrics(rubrics.filter(rubric => rubric.id !== id))

        localStorage.clear()
        localStorage.setItem('list', JSON.stringify(rubrics))
    }

    const [editItem,
        setEditItem] = useState({
            id: 0,
            title: 'Firebase',
            subTitle: 'Marking rubric for Firebase'
        })

    const editRubric = item => {
        console.log("item")
        setEditItem(item)
        console.log(editItem)

        setRubrics(rubrics.filter(rubric => rubric.id !== item.id))
        setRubrics(rubrics.filter(rubric => rubric.id !== item.id))
    }

    return (
        <div className="App">
            {console.log("Rerender")}
            <Router basename="/">
                <Switch>
                    <Route exact path="/">
                        <AppHeader/>
                        <ListView list={listyList} editRubric={editRubric} deleteRubric={deleteRubric}/>
                    </Route>
                    <Route path="/AddView">
                        <AddView addRubric={addRubric}/>
                    </Route>
                    <Route path="/EditView">
                        <EditItemView target={editItem} addRubric={addRubric}/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
