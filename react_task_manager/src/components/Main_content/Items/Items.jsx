import React from 'react';
import Item from './Item';


const Items = (props) => {
    return(
        <div>
            <Item text="Сходить в магаз"/>
            <Item text="Похавать борщец"/>
            <Item text="Сделать какую-то очень важную хрень"/>
        </div>
    );
}

export default Items;