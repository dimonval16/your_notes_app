import React from 'react';
import AddNoteStyle from './AddNote.module.css';
import NoteIcon from '../Notes/Note/NoteIcon/NoteIcon';

class AddNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };

        // -- styles css --
        this._wrapper = AddNoteStyle.wrapper;
        this._input = AddNoteStyle.input;
        this._saveIcon = AddNoteStyle.save;
        // -- end --

        // -- bind this for methods --
        this.activateField = this.activateField.bind(this);
        this.catchSubmit = this.catchSubmit.bind(this);
        // -- end --
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.openedForm) {
            this.refs.title.focus();
        }
    }

    activateField(event) {
        let newTitle = event.target.value;

        this.setState({ title: newTitle })
    }

    catchSubmit(event) {
        event.preventDefault();

        let title = this.state.title;

        if (title) {
            this.props.onAdd(title, this.props.categoryId);

            this.setState({ title: '' });
            
            this.props.hideAddForm();
        }
    }

    render() {
        return (
            <form className={this._wrapper} ref={this.props.addNoteFormRef} onSubmit={this.catchSubmit}>
                <input
                    className={this._input}
                    type='text'
                    value={this.state.title}
                    placeholder='Добавить новую задачу...'
                    onChange={this.activateField}
                    ref='title'
                >
                </input>
                <NoteIcon className={this._saveIcon} icon='save' type='submit' />
            </form>
        );
    }
}

export default AddNote;