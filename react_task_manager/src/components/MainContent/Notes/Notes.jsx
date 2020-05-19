import React from 'react';
import Note from './Note/Note';
import AddNote from '../AddNote/AddNote';
import Button from '../../Buttons/AddButton/Button';

export default function Notes(props) {
    return (
        <div>
            <Button
                id="content"
                name="Add note"
                onButtonClick={props.onToggleAddField}
            />
            <AddNote
                categoryId={props.categoryId}
                notesFieldHidden={props.notesFieldHidden}
                onAdd={props.onAdd}
                hideAddForm={props.onToggleAddField}
            />
            {props.notes.map(note => (
                <Note
                    title={note.title}
                    completed={note.completed}
                    key={note.id}
                    id={note.id}
                    categoryId={props.categoryId}
                    onChange={props.onStatusChange}
                    onDelete={props.onDelete}
                    onEdit={props.onEdit}
                />
            ))}
        </div>
    );
}