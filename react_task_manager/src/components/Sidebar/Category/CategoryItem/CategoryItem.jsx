import React from'react';
import CategoryStyle from '../Category.module.css'

const CategoryItem = (props) => {
    return(
        <div className={CategoryStyle.wrapper}>
            <span className={`material-icons`}>
                format_list_bulleted
            </span>
            <span>
                {props.name}
            </span>
        </div>
    );
}

export default CategoryItem;