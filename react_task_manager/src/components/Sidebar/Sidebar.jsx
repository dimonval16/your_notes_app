import React from 'react';
import SidebarStyle from './Sidebar.module.css';
import Account from './Account/Account';
import Category from './Category/Category';
import Button from '../Buttons/AddButton/Button';

export default function Sidebar(props) {
    const _wrapper = SidebarStyle.wrapper;

    return (
        <div className={_wrapper}>
            <Account
                user={props.user}
                modalWidow={props.modalWindow}
                fetching={props.fetching}
                onSetPhoto={props.onSetPhoto}
                onModalWindow={props.onModalWindow}
            />
            <Category
                categories={props.categories}
                catFieldHidden={props.catFieldHidden}
                onCategoryDelete={props.onCategoryDelete}
                onCategoryEdit={props.onCategoryEdit}
                onCategoryAdd={props.onCategoryAdd}
            />
            <Button name="Category" onButtonClick={props.onToggleAddField}/>
        </div>
    );
}