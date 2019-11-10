import React  from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

function ListItem(props) {
    return (
        <li>
            <h2>{props.item.title}</h2>
            <h3>{props.item.subTitle}</h3>
            <button onClick={() => props.editRubric(props.item)}><Link to="/EditView">Edit</Link></button>
            <button onClick={() => 
                props.deleteRubric(props.item)}>Delete</button>
        </li>
    );
}

export default ListItem;