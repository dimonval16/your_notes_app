import React from 'react';
import Main_content_style from './Main_content.module.css';
import Button from '../Button';
import Items from './Items/Items';


const MainContent = (props) => {
    return(
        <div className={Main_content_style.wrapper}>
            <div className={Main_content_style.mainBlock}>
                <Button id="content" name="Добавить задачу" />
                <Items />
            </div>
        </div>
    );
}

export default MainContent;