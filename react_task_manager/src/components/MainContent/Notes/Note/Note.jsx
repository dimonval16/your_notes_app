import React from 'react';
import NoteStyle from '../../MainContent.module.css';
import Icon from '../../../Buttons/Icon/Icon';

export default class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }

        this.handleEditSubmit = this.handleEditSubmit.bind(this);
        this.renderNote = this.renderNote.bind(this);
        this.renderEditForm = this.renderEditForm.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.editing) {
            this.refs.input.focus();
            this.refs.input.select();
        };
    }

    handleEditSubmit(event) {
        event.preventDefault();

        const title = this.refs.input.value;
        this.props.onEdit(this.props.id, title, this.props.categoryId);
        this.setState({ editing: false });
    }

    renderNote() {
        const _completed = `${NoteStyle.itemBlock} ${NoteStyle.completed}`;
        const _notCompleted = NoteStyle.itemBlock;
        const _checkbox = NoteStyle.checkbox;
        const _itemText = NoteStyle.itemText;
        const _edit = NoteStyle.edit;
        const _delete = NoteStyle.delete;

        return (
            <div className={this.props.completed ? _completed : _notCompleted}>
                <Icon
                    className={_checkbox}
                    icon={this.props.completed ? 'check_box' : 'check_box_outline_blank'}
                    onClick={() => this.props.onChange(this.props.id, this.props.categoryId)}
                />
                <div className={_itemText}>{this.props.title}</div>
                <Icon
                    className={_edit}
                    icon='create'
                    onClick={() => this.setState({ editing: true })}
                />
                <Icon
                    className={_delete}
                    icon='delete'
                    onClick={() => this.props.onDelete(this.props.id, this.props.categoryId)}
                />
            </div>
        );
    }

    renderEditForm() {
        const _editWrapper = NoteStyle.editWrapper;
        const _input = NoteStyle.input;
        const _save = NoteStyle.save;

        return (
            <form
                className={_editWrapper}
                onSubmit={this.handleEditSubmit}
            >
                <input
                    className={_input}
                    ref='input'
                    defaultValue={this.props.title}
                />
                <Icon
                    className={_save}
                    icon='save'
                    type='submit'
                />
            </form>
        );
    }

    render() {
        return (this.state.editing ? this.renderEditForm() : this.renderNote());
    }
}