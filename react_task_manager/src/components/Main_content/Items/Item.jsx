import React from 'react';

import ItemStyle from '../Main_content.module.css'

const ClassicItem = (props) => {
    return (
        <div className={ItemStyle.itemBlock}>
            <div className="material-icons">
                check_box_outline_blank
            </div>
            <div className={ItemStyle.itemText}>
                {props.text}
            </div>
            <div className={`${'material-icons'} ${ItemStyle.edit}`}>
                create
            </div>
            <div className={`${'material-icons'} ${ItemStyle.delete}`}>
                delete
            </div>
        </div>
    );
}

const CompletedItem = (props) => {
    return (
        <div className={`${ItemStyle.itemBlock} ${ItemStyle.completed}`}>
            <div className="material-icons">
                check_box
            </div>
            <div className={ItemStyle.itemText}>
                {props.text}
            </div>
            <div className={`${'material-icons'} ${ItemStyle.edit}`}>
                create
            </div>
            <div className={`${'material-icons'} ${ItemStyle.delete}`}>
                delete
            </div>
        </div>
    );
}

const Item = (props) => {
    return( props.id ?
        <CompletedItem text={props.text}/>
        :
        <ClassicItem text={props.text}/>
    );
}

export default Item;