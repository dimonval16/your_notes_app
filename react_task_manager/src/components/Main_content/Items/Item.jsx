import React from 'react';

import ItemStyle from '../Main_content.module.css'

const Item = (props) => {
    return(
        <div className={ItemStyle.itemBlock}>
            <div className="material-icons">
                check_box_outline_blank
            </div>
            <div className={ItemStyle.itemText}>
                {props.text}
            </div>
        </div>
    );
}

export default Item;