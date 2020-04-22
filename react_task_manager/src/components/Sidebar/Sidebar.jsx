import React from 'react';
import SidebarStyle from './Sidebar.module.css';

import Account from './Account/Account';
import Category from './Category/Category';
import Button from '../Buttons/AddButton/Button';


export default function Sidebar(props) {
    const _wrapper = SidebarStyle.wrapper;

    return (
        <div className={_wrapper}>
            <Account user={props.user}/>
            <Category
                categories={props.categories}
                catFieldHidden={props.catFieldHidden}
                onClickSave={props.onToggleAddField}
                onCategoryDelete={props.onCategoryDelete}
                onCategoryEdit={props.onCategoryEdit}
                onCategoryAdd={props.onCategoryAdd}
            />
            <Button name="Категория" onButtonClick={props.onToggleAddField}/>
        </div>
    );
}