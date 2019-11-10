import React from 'react';
import ListItem from './ListItem';

function ListView(props) {
    return (
        <ul>
            {props.list.map(item => {
                return <ListItem item={item}  key={Math.random()+1} deleteRubric={props.deleteRubric} editRubric={props.editRubric}/>
            })}
        </ul>
    );
}

export default ListView;