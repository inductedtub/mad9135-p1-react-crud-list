import React from 'react';
import ListItem from './ListItem';


 

if (localStorage.getItem("list") === null) {
    localStorage.setItem('list', JSON.stringify([
        {
            title: 'one',
            subTitle: 'lil one'
        }, {
            title: 'two',
            subTitle: 'lil two'
        }
    ]));
}

const listyList = JSON.parse(localStorage.getItem("list"))

function ListView() {
    return (
        <ul>
            {listyList.map(item => {
                return <ListItem title={item.title} subTitle={item.subTitle} id={Date.now()}/>
            })}
        </ul>
    );
}

export default ListView;