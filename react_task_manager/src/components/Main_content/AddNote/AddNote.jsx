import React from 'react';
import AddNoteStyle from './AddNote.module.css';
import NoteIcon from '../Notes/Note/NoteIcon/NoteIcon';

class AddNote extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
        };

        this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.activateField = this.activateField.bind(this);
        this.catchSubmit = this.catchSubmit.bind(this);
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
           this.props.onAdd(title); 
           this.setState({ title: '' });
           this.props.hideAddForm();
        }
    }

    render() {
        let _wrapper = AddNoteStyle.wrapper;
        let _input = AddNoteStyle.input;
        let _saveIcon = AddNoteStyle.save;

        return(
            <form className={_wrapper} ref={this.props.addNoteFormRef} onSubmit={this.catchSubmit}>
                <input 
                    className={_input} 
                    type='text' 
                    value={this.state.title} 
                    placeholder='Добавить новую задачу...'
                    onChange={this.activateField}
                    ref = 'title'
                >    
                </input>
                <NoteIcon className={_saveIcon} icon='save' type='submit'/>
            </form>
        );
    }
}

export default AddNote;