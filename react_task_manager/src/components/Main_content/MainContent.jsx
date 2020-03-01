import React from 'react';
import MainContentStyle from './Main_content.module.css';

import Button from '../Button/Button';
import Notes from './Notes/Notes';
import AddNote from './AddNote/AddNote';

const MainContent = (props) => {
    let _wrapper = MainContentStyle.wrapper;
    let _mainBlock = MainContentStyle.mainBlock;

    return (
        <div className={_wrapper}>
            <div className={_mainBlock}>
                <Button id="content" name="Добавить задачу" onButtonClick={props.onNotesButtonClick}/>
                <AddNote addNoteFormRef={props.addNoteFormRef} onAdd={props.onAdd} hideAddForm={props.onSaveNote}/>
                <Notes
                    notes={props.notes}
                    onStatusChange={props.onStatusChange}
                    onDelete={props.onDelete}
                    onEdit={props.onNoteEdit}
                />
            </div>
        </div>
    );
}

export default MainContent;