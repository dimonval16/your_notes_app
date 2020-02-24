import React from 'react';
import MainContentStyle from './Main_content.module.css';

import Button from '../Button/Button';
import Notes from './Notes/Notes';


const MainContent = (props) => {
    return(
        <div className={MainContentStyle.wrapper}>
            <div className={MainContentStyle.mainBlock}>
                <Button id="content" name="Добавить задачу" />
                <Notes notes={props.notes}/>
            </div>
        </div>
    );
}

export default MainContent;