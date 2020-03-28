import React from 'react';
import CategoryStyle from '../Category.module.css'
import { NavLink } from 'react-router-dom';
import NoteIcon from '../../../Main_content/Notes/Note/NoteIcon/NoteIcon';

class CategoryItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }

        this.renderCategory = this.renderCategory.bind(this);
        this.renderEditForm = this.renderEditForm.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    componentDidUpdate() {
        if (this.state.editing) {
            this.refs.input.focus();
            this.refs.input.select();
        }
    }

    handleEditSubmit(event) {
        event.preventDefault();
        const title = this.refs.input.value;
        const id = this.props.link;

        if (title) {
            this.props.onEdit(id, title);
            this.setState({ editing: false });
        }
    }

    handleDelete() {
        this.props.onDelete(this.props.link);
    }

    renderEditForm() {
        const _editWrapper = CategoryStyle.editWrapper;
        const _input = CategoryStyle.input;
        const _save = CategoryStyle.save;

        return (
            <form className={_editWrapper} onSubmit={this.handleEditSubmit}>
                <input
                    className={_input}
                    ref='input'
                    defaultValue={this.props.title} />
                <NoteIcon
                    className={_save}
                    icon='save'
                    type='submit'
                />
            </form>
        );
    }

    renderCategory() {
        const _wrapper = CategoryStyle.wrapper;
        const _list = CategoryStyle.list;
        const _text = CategoryStyle.text;
        const _create = CategoryStyle.create;
        const _delete = CategoryStyle.delete;

        return (
            <div className={_wrapper}>
                <NoteIcon
                    className={_list}
                    icon='format_list_bulleted'
                />
                <NavLink to={'/' + this.props.link} className={_text}>
                    {this.props.title}
                </NavLink>
                <NoteIcon
                    className={_create}
                    icon='create'
                    onClick={() => this.setState({ editing: true })}
                />
                <NoteIcon
                    className={_delete}
                    icon='delete'
                    onClick={this.handleDelete}
                />
            </div>
        );
    }

    render() {
        return (this.state.editing ? this.renderEditForm() : this.renderCategory());
    }
}

export default CategoryItem;