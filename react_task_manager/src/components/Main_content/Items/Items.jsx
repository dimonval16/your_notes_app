import React from 'react';
import Item from './Item';
import ItemsStyle from '../Main_content.module.css'

const Items = (props) => {
    return(
        <div className={ItemsStyle.items}>
            <Item text="Сходить в магаз" id="completed"/>
            <Item text="Похавать борщец" />
            <Item text="Сделать какую-то очень важную хрень" id="completed"/>
            <Item text="Сделать какую-то очень важную хрень" />
            <Item text="Сделать какую-то очень важную хрень" />
            <Item text="Сделать какую-то очень важную хрень" />
        </div>
    );
}

export default Items;