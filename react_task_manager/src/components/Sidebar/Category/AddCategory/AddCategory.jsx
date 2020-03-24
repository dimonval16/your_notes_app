import React from 'react';

import AddCategoryStyle from './AddCategory.module.css'
import NoteIcon from '../../../Main_content/Notes/Note/NoteIcon/NoteIcon';

class AddCategory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.catFieldHidden = this.props.catFieldHidden;

        // -- styles css --
        this._wrapperHidden = AddCategoryStyle.wrapperHidden;
        this._wrapperVisible = AddCategoryStyle.wrapperVisible;
        this._input = AddCategoryStyle.input;
        this._save = AddCategoryStyle.save;
        // -- end --

        // -- bind this for methods --
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

    render() {
        return (
            <form 
                className={this.catFieldHidden ? this._wrapperHidden : this._wrapperVisible} 
                onSubmit={this.catchSubmit}
            >
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