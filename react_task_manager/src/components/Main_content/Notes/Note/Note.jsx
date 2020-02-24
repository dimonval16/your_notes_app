import React from 'react';
import NoteStyle from '../../Main_content.module.css';

const Note = (props) => {
    return(
        <div className={props.completed === 'true' ? `${NoteStyle.itemBlock} ${NoteStyle.completed}` : `${NoteStyle.itemBlock}`}>
            <div className="material-icons">
                {props.completed === 'true' ? 'check_box' : 'check_box_outline_blank'}
            </div>
            <div className={NoteStyle.itemText}>
                {props.title}
            </div>
            <div className={`${'material-icons'} ${NoteStyle.edit}`}>
                create
            </div>
            <div className={`${'material-icons'} ${NoteStyle.delete}`}>
                delete
            </div>
        </div>
    );
}

export default Note;