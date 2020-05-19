import React, { createRef, useState, useEffect } from 'react';
import AddNoteStyle from './AddNote.module.css';
import Icon from '../../Buttons/Icon/Icon';

export default function AddNote(props) {
    const _wrapperHidden = AddNoteStyle.wrapperHidden;
    const _wrapperVisible = AddNoteStyle.wrapperVisible;
    const _input = AddNoteStyle.input;
    const _save = AddNoteStyle.save;
    const inputRef = createRef();

    const [title, setTitle] = useState('');

    useEffect(() => {
        if (!props.notesFieldHidden) {
            inputRef.current.focus();
        }
    }, [props.notesFieldHidden, inputRef]);

    function handleAddSubmit(e) {
        e.preventDefault();
        const newTitle = title;

        if (newTitle) {
            props.onAdd(newTitle, props.categoryId);
            setTitle('');
            props.hideAddForm();
        }
    }

    function changeInput(e) {
        const newTitle = e.target.value;
        setTitle(newTitle);
    }

    return (
        <form
            className={props.notesFieldHidden ? _wrapperHidden : _wrapperVisible}
            onSubmit={handleAddSubmit}
        >
            <input
                className={_input}
                type='text'
                value={title}
                placeholder='Add new note...'
                onChange={changeInput}
                ref={inputRef}
            />
            <Icon
                className={_save}
                icon='save'
                type='submit'
            />
        </form>
    );
}