import React from 'react';


function ListItem(props) {
    return (
        <li className="ListItem">
            <h2>{props.title}</h2>
            <h3>{props.subTitle}</h3>
            <h4>Marks(number)</h4>
            <button>Edit</button>
            <button>Delete</button>
        </li>
    );
}

export default ListItem;