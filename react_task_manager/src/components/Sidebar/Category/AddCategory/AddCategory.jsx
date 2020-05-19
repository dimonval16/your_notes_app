import React, { useState, useEffect, createRef } from 'react';
import AddCategoryStyle from './AddCategory.module.css';
import Icon from '../../../Buttons/Icon/Icon';

export default function AddCategory(props) {
    const _wrapperHidden = AddCategoryStyle.wrapperHidden;
    const _wrapperVisible = AddCategoryStyle.wrapperVisible;
    const _input = AddCategoryStyle.input;
    const _save = AddCategoryStyle.save;
    const _list = AddCategoryStyle.list;
    const inputRef = createRef();

    const [title, setTitle] = useState('');

    useEffect(() => {
        if (!props.catFieldHidden) {
            inputRef.current.focus();
        }
    }, [props.catFieldHidden, inputRef]);

    function changeInput(e) {
        const newTitle = e.target.value;
        setTitle(newTitle);
    }

    function handleAddSubmit(e) {
        e.preventDefault();
        const newTitle = title;

        if (newTitle) {
            props.onAdd(newTitle);
            setTitle('');
        }
    }

    return (
        <form
            className={props.catFieldHidden ? _wrapperHidden : _wrapperVisible}
            onSubmit={handleAddSubmit}
        >
            <Icon
                className={_list}
                icon={'format_list_bulleted'}
            />
            <input
                className={_input}
                placeholder={'Category...'}
                value={title}
                ref={inputRef}
                onChange={changeInput}
            />
            <Icon
                className={_save}
                icon='save'
                type='submit'
            />
        </form>
    );
}