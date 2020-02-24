import React from 'react';
import NotesStyle from '../Main_content.module.css';

import Note from './Note/Note';

const Notes = (props) => {
    return(
        <div className={NotesStyle.items}>
            {props.notes.map(el => 
                <Note title={el.title} completed={el.completed} key={el.id}/>)
            }
        </div>
    );
}

export default Notes;