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
            <i className={`${'material-icons'} ${CategoryStyle.create}`}>create</i>
            <i className={`${'material-icons'} ${CategoryStyle.delete}`}>delete</i>
        </div>
    );
}

export default CategoryItem;