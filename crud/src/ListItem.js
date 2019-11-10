import React from 'react';

function ListItem(props) {
    return (
        <li>
            <h2>{props.title}</h2>
            <h3>{props.subTitle}</h3>
            <button>Edit</button>
            <button>Delete</button>
        </li>
    );
}

export default ListItem;