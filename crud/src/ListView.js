import React, {useState} from 'react';
import ListItem from './ListItem';

function ListView(props) {
    let id = 0
    return (
        <ul>
            {props.list.map(item => {
                id++ 
                return <ListItem title={item.title} subTitle={item.subTitle} key={id}/>
            })}
        </ul>
    );
}

export default ListView;