import React from 'react';
import NoteStyle from '../../Main_content.module.css';

import Checkbox from './Checkbox/Checkbox';
import NoteIcon from './NoteIcon/NoteIcon';

class Note extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this._itemText = NoteStyle.itemText;
        this._edit = NoteStyle.edit;
        this._delete = NoteStyle.delete;
        this._checkbox = NoteStyle.checkbox;

        this._needWrapper = this._needWrapper.bind(this);
        this.catch_checkbox_id = this.catch_checkbox_id.bind(this);
        this.catch_deleteIcon_id = this.catch_deleteIcon_id.bind(this);
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
        return (
            <div className={this._needWrapper()}>
                <Checkbox
                    className={this._checkbox}
                    completed={this.props.completed}
                    onChange={this.catch_checkbox_id}
                />
                <div className={this._itemText}>{this.props.title}</div>
                <NoteIcon className={this._edit} icon='create' />
                <NoteIcon className={this._delete} icon='delete' onClick={this.catch_deleteIcon_id} />
            </div>
        );
    }
}

export default Note;