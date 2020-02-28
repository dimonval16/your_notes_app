import React from 'react';
import NotesStyle from '../Main_content.module.css';

import Note from './Note/Note';

const Notes = (props) => {
    const notes = props.notes.map(el =>
        <Note
            title={el.title}
            completed={el.completed}
            key={el.id}
            id={el.id}
            onChange={props.onChange}
            onDelete={props.onDelete}
        />
    );

    return (
        <div className={NotesStyle.items}>
            {notes}
        </div>
    );
}

export default Notes;