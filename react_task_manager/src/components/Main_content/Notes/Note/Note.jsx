import React from 'react';
import NoteStyle from '../../Main_content.module.css';
import NoteIcon from './NoteIcon/NoteIcon';

export default class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }

        this.handleEdit = this.handleEdit.bind(this);
        this.renderNote = this.renderNote.bind(this);
        this.renderEditForm = this.renderEditForm.bind(this);
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.editing) {
            this.refs.input.focus();
            this.refs.input.select();
        };
    }

    handleEdit(event) {
        event.preventDefault();

        const title = this.refs.input.value;
        this.props.onEdit(this.props.id, title, this.props.categoryId);
        this.setState({ editing: false });
    }

    renderNote() {
        const _completed = `${NoteStyle.itemBlock} ${NoteStyle.completed}`;
        const _notCompleted = `${NoteStyle.itemBlock}`;
        const _checkbox = NoteStyle.checkbox;
        const _itemText = NoteStyle.itemText;
        const _edit = NoteStyle.edit;
        const _delete = NoteStyle.delete;
        console.log(this.props.completed)

        return (
            <div className={this.props.completed ? _completed : _notCompleted}>
                <NoteIcon
                    className={_checkbox}
                    icon={this.props.completed ? 'check_box' : 'check_box_outline_blank'}
                    onClick={() => this.props.onChange(this.props.id, this.props.categoryId)}
                />
                <div className={_itemText}>{this.props.title}</div>
                <NoteIcon 
                    className={_edit} 
                    icon='create' 
                    onClick={() => this.setState({ editing: true }) }
                />
                <NoteIcon 
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
                onSubmit={this.handleEdit}
            >
                <input 
                    className={_input}
                    ref='input' 
                    defaultValue={this.props.title}
                />
                <NoteIcon 
                    className={_save} 
                    icon='save' 
                    type='submit' 
                />
            </form>
        );
    }

    render() {
        return ( this.state.editing ? this.renderEditForm() : this.renderNote() );
    }
}