import React, { useEffect, useState, createRef } from 'react';
import { NavLink } from 'react-router-dom';
import CategoryStyle from '../Category.module.css';
import Icon from '../../../Buttons/Icon/Icon';

export default function CategoryItem(props) {
    const [editing, setEditing] = useState(false);
    const inputRef = createRef();

    useEffect(() => {
        if (editing) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [editing, inputRef])

    function handleEdit(e) {
        e.preventDefault();
        const title = inputRef.current.value;
        const id = props.link;

        if (title === props.title) {
            setEditing(false);
        } else if (title !== '') {
            props.onEdit(id, title);
            setEditing(false);
        }
    }

    function RenderEditForm() {
        const _editWrapper = CategoryStyle.editWrapper;
        const _input = CategoryStyle.input;
        const _save = CategoryStyle.save;

        return (
            <form className={_editWrapper} onSubmit={handleEdit}>
                <Icon
                    className={CategoryStyle.list}
                    icon={'format_list_bulleted'}
                />
                <input
                    className={_input}
                    ref={inputRef}
                    defaultValue={props.title}
                    placeholder={'Category...'}
                />
                <Icon
                    className={_save}
                    icon='save'
                    type='submit'
                />
            </form>
        );
    }

    function RenderCategory() {
        const _wrapper = CategoryStyle.wrapper;
        const _list = CategoryStyle.list;
        const _text = CategoryStyle.text;
        const _create = CategoryStyle.create;
        const _delete = CategoryStyle.delete;
        const _Active = CategoryStyle.Active;

        return (
            <NavLink
                to={`/main/${props.link}`}
                activeClassName={_Active}
                className={_wrapper}
            >
                <Icon
                    className={_list}
                    icon='format_list_bulleted'
                />
                <span className={_text}>
                        {props.title}
                </span>
                <div>
                    <Icon
                        className={_create}
                        icon='create'
                        onClick={() => setEditing(true)}
                    />
                    <Icon
                        className={_delete}
                        icon='delete'
                        onClick={() => props.onDelete(props.link)}
                    />
                </div>
            </NavLink>
        );
    }

    return editing ? RenderEditForm() : RenderCategory();
}