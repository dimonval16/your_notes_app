import React from 'react';
import NoteStyle from '../../Main_content.module.css';

import Checkbox from './Checkbox/Checkbox';
import NoteIcon from './NoteIcon/NoteIcon';

const Note = (props) => {
    return(
        <div className={props.completed === 'true' ? `${NoteStyle.itemBlock} ${NoteStyle.completed}` : `${NoteStyle.itemBlock}`}>
            <Checkbox completed={props.completed}/>
            <div className={NoteStyle.itemText}>
                {props.title}
            </div>
            <NoteIcon style={NoteStyle.edit} icon='create'/>
            <NoteIcon style={NoteStyle.delete} icon='delete'/>
        </div>
    );
}

export default Note;