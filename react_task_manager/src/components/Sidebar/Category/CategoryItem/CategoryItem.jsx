import React from 'react';
import CategoryStyle from '../Category.module.css'
import { NavLink } from 'react-router-dom';

const CategoryItem = (props) => {
    let _wrapper = CategoryStyle.wrapper;
    let _list = CategoryStyle.list;
    let _text = CategoryStyle.text;
    let _create = CategoryStyle.create;
    let _delete = CategoryStyle.delete;

    return (
        <div className={_wrapper}>
                <i className={`${'material-icons'} ${_list}`}>format_list_bulleted</i>
                <NavLink to={'/' + props.link} className={_text}>{props.title}</NavLink>
                <i className={`${'material-icons'} ${_create}`}>create</i>
                <i className={`${'material-icons'} ${_delete}`}>delete</i>
        </div>
    );
}

export default CategoryItem;