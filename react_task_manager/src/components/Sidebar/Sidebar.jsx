import React from 'react';
import Sidebar_style from './Sidebar.module.css';

import Account from './Account/Account';
import Category from './Category/Category';
import Button from '../Button/Button';

const Sidebar = (props) => {
    return(
        <div className={Sidebar_style.wrapper}>
            <Account user={props.user}/>
            <Category 
                categories={props.categories}
                onCategoryDelete={props.onCategoryDelete}
            />
            <Button name="Категория"/>
        </div>
    );
}

export default Sidebar;