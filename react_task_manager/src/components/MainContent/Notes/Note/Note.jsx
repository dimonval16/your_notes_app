import React, { useState, useEffect, createRef } from 'react';
import NoteStyle from '../../MainContent.module.css';
import Icon from '../../../Buttons/Icon/Icon';

export default function Note(props) {
    const inputRef = createRef();
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [editing, inputRef])

    function handleEdit(e) {
        e.preventDefault();
        const title = inputRef.current.value;

        if (title === props.title) {
            setEditing(false)
        } else if (title !== '') {
            props.onEdit(props.id, title, props.categoryId);
            setEditing(false);
        }
    }

    function renderForm() {
        const _editWrapper = NoteStyle.editWrapper;
        const _input = NoteStyle.input;
        const _save = NoteStyle.save;

        return (
            <form
                className={_editWrapper}
                onSubmit={handleEdit}
            >
                <input
                    className={_input}
                    ref={inputRef}
                    defaultValue={props.title}
                    placeholder={'Edit note...'}
                />
                <Icon
                    className={_save}
                    icon='save'
                    type='submit'
                />
            </form>
        );
    }

    function renderNote() {
        const _completed = `${NoteStyle.itemBlock} ${NoteStyle.completed}`;
        const _notCompleted = NoteStyle.itemBlock;
        const _checkbox = NoteStyle.checkbox;
        const _itemText = NoteStyle.itemText;
        const _edit = NoteStyle.edit;
        const _delete = NoteStyle.delete;

        return (
            <div className={props.completed ? _completed : _notCompleted}>
                <Icon
                    className={_checkbox}
                    icon={props.completed ? 'check_box' : 'check_box_outline_blank'}
                    onClick={() => props.onChange(props.id, props.categoryId)}
                />
                <div className={_itemText}>{props.title}</div>
                <Icon
                    className={_edit}
                    icon='create'
                    onClick={() => setEditing(true)}
                />
                <Icon
                    className={_delete}
                    icon='delete'
                    onClick={() => props.onDelete(props.id, props.categoryId)}
                />
            </div>
        );
    }

    return editing ? renderForm() : renderNote();
}