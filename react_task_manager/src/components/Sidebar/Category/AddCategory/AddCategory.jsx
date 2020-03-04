import React from 'react';
import AddCategoryStyle from './AddCategory.module.css'
import NoteIcon from '../../../Main_content/Notes/Note/NoteIcon/NoteIcon';

class AddCategory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        // -- styles css --
        this._wrapper = AddCategoryStyle.wrapper;
        this._input = AddCategoryStyle.input;
        this._save = AddCategoryStyle.save;
        // -- end --

        // -- bind this for methods --
        this.catchSubmit = this.catchSubmit.bind(this);
        this.activateInput = this.activateInput.bind(this);
        this.catchSubmit = this.catchSubmit.bind(this);
        // -- end --
    }

    activateInput(event) {
        let newTitle = event.target.value;

        this.setState({ title: newTitle });
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

    componentDidUpdate() {
        if (this.props.openedForm) {
            this.refs.inputText.focus();
        }
    }

    render() {
        return (
            <form className={this._wrapper} ref={this.props.addCategoryFormRef} onSubmit={this.catchSubmit}>
                <input
                    className={this._input}
                    ref='inputText'
                    placeholder='Категория...'
                    value={this.state.title}
                    onChange={this.activateInput}
                />
                <NoteIcon className={this._save} icon='save' type='submit' />
            </form>
        );
    }
}

export default AddCategory;