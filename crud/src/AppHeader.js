import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function AppHeader() {
    return (
        <div className="AppHeader">
            <h1>Rubric List</h1>
            <button>
                <Link to="/AddView">Add new rubric</Link>
            </button>
        </div>
    );
}

export default AppHeader;