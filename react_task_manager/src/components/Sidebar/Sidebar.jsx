import React from 'react';
import Sidebar_style from './Sidebar.module.css';

import Account from './Account/Account';
import Category from './Category/Category';
import Button from '../Button/Button';


function Sidebar (props) {
        const _wrapper = Sidebar_style.wrapper;

        return (
            <div className={_wrapper}>
                <Account user={props.state.user} />
                <Category
                    state={props.state}
                    onClickSave={props.onClickSave}
                    onCategoryDelete={props.onCategoryDelete}
                    onCategoryEdit={props.onCategoryEdit}
                    onCategoryAdd={props.onCategoryAdd}
                />
                <Button name="Категория" onButtonClick={props.onButtonClick} />
            </div>
        );
    }

export default Sidebar;