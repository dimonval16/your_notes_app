import React from 'react';
import NoteStyle from '../../Main_content.module.css';

import Checkbox from './Checkbox/Checkbox';
import NoteIcon from './NoteIcon/NoteIcon';

class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }

        // -- styles css --
        this._input = NoteStyle.input;
        this._saveIcon = NoteStyle.save;
        this._editWrapper = NoteStyle.editWrapper;
        this._itemText = NoteStyle.itemText;
        this._edit = NoteStyle.edit;
        this._delete = NoteStyle.delete;
        this._checkbox = NoteStyle.checkbox;
        // -- end --

        // -- bind this in methods --
        this.saveEdit = this.saveEdit.bind(this);
        this.renderNote = this.renderNote.bind(this);
        this.renderEditingForm = this.renderEditingForm.bind(this);
        this._needWrapper = this._needWrapper.bind(this);
        this.catch_checkbox_id = this.catch_checkbox_id.bind(this);
        this.catch_deleteIcon_id = this.catch_deleteIcon_id.bind(this);
        // -- end --
    }

    saveEdit(event) {
        event.preventDefault();

        let title = this.refs.title.value;

        this.props.onEdit(this.props.id, title);

        this.setState({ editing: false });

    }

    renderNote() {
        return (
            <div className={this._needWrapper()}>
                <Checkbox
                    className={this._checkbox}
                    completed={this.props.completed}
                    onChange={this.catch_checkbox_id}
                />
                <div className={this._itemText}>{this.props.title}</div>
                <NoteIcon className={this._edit} icon='create' onClick={() => this.setState({ editing: true }) }/>
                <NoteIcon className={this._delete} icon='delete' onClick={this.catch_deleteIcon_id} />
            </div>
        );
    }

    renderEditingForm() {
        return (
            <form className={this._editWrapper} onSubmit={this.saveEdit}>
                <input className={this._input} ref='title' defaultValue={this.props.title}/>
                <NoteIcon className={this._saveIcon} icon='save' type='submit' />
            </form>
        );
    }

    _needWrapper() {
        let _needWrapper;

        if (this.props.completed === true) {
            _needWrapper = `${NoteStyle.itemBlock} ${NoteStyle.completed}`;
        } else {
            _needWrapper = `${NoteStyle.itemBlock}`;
        }

        return _needWrapper;
    }

    catch_checkbox_id() {
        this.props.onChange(this.props.id);
    }

    catch_deleteIcon_id() {
        this.props.onDelete(this.props.id);
    }

    render() {
        return ( this.state.editing ? this.renderEditingForm() : this.renderNote() );
    }
}

export default Note;