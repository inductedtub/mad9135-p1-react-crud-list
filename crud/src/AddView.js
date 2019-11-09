import React from 'react';
import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function AddView() {

  const newItem [item, setItem] = useState([])
    return (
        <div className="AddView">
            <h1>Add a rubric</h1>

            <form>
                <label>
                    Rubric:
                    <input type="text" name="name"/>
                </label>

                <label>
                    Total marks:
                    <input type="number" name="name"/>
                </label>

                <label>
                    Description:
                    <input type="text" name="name"/>
                </label>
            </form>

            <button>
                <Link to="/">Add</Link>
            </button>
        </div>
    );
}

export default AddView;