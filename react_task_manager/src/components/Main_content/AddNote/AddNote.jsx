import React from 'react';
import AddNoteStyle from './AddNote.module.css';
import NoteIcon from '../Notes/Note/NoteIcon/NoteIcon';

export default  class AddNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.activateField = this.activateField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate() {
        if (!this.props.notesFieldHidden) {
            this.refs.input.focus();
        }
    }

    activateField(event) {
        let newTitle = event.target.value;
        this.setState({ title: newTitle })
    }

    handleSubmit(event) {
        event.preventDefault();
        const title = this.state.title;

        if (title) {
            this.props.onAdd(title, this.props.categoryId);
            this.setState({ title: '' });
            this.props.hideAddForm();
        }
    }

    render() {
        const _wrapperHidden = AddNoteStyle.wrapperHidden;
        const _wrapperVisible = AddNoteStyle.wrapperVisible;
        const _input = AddNoteStyle.input;
        const _save = AddNoteStyle.save;

        return (
            <form 
                className={this.props.notesFieldHidden ? _wrapperHidden : _wrapperVisible} 
                onSubmit={this.handleSubmit}
            >
                <input
                    className={_input}
                    type='text'
                    value={this.state.title}
                    placeholder='Добавить новую задачу...'
                    onChange={this.activateField}
                    ref='input'
                />
                <NoteIcon 
                    className={_save} 
                    icon='save'
                    type='submit' 
                />
            </form>
        );
    }
}