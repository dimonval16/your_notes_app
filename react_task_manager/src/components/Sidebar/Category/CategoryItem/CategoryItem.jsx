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

        // -- styles css --
        this._editList = CategoryStyle.formList;
        this._input = CategoryStyle.input
        this._editWrapper = CategoryStyle.editWrapper
        this._saveIcon = CategoryStyle.save;
        this._wrapper = CategoryStyle.wrapper;
        this._list = CategoryStyle.list;
        this._text = CategoryStyle.text;
        this._create = CategoryStyle.create;
        this._delete = CategoryStyle.delete;
        // -- end --

        // -- bind this for methods --
        this.saveCategoryEdit = this.saveCategoryEdit.bind(this);
        this.renderCategory = this.renderCategory.bind(this);
        this.renderEditingForm = this.renderEditingForm.bind(this);
        this.catchDeleteIcon = this.catchDeleteIcon.bind(this);
        // -- end --
    }

    componentDidUpdate() {
        if (this.state.editing) {
            this.refs.categoryTitle.focus();
            this.refs.categoryTitle.select();
        }
    }

    saveCategoryEdit(event) {
        event.preventDefault();

        let title = this.refs.categoryTitle.value;

        this.props.onEdit(title, this.props.link);

        this.setState({ editing: false });
    }

    catchDeleteIcon() {
        this.props.onDelete(this.props.link);
    }

    renderEditingForm() {
        return (
            <form className={this._editWrapper} onSubmit={this.saveCategoryEdit}>
                <input
                    className={this._input}
                    ref='categoryTitle'
                    defaultValue={this.props.title} />
                <NoteIcon
                    className={this._saveIcon}
                    icon='save'
                    type='submit'
                />
            </form>
        );
    }

    renderCategory() {
        return (
            <div className={this._wrapper}>
                <NoteIcon
                    className={this._list}
                    icon='format_list_bulleted'
                />
                <NavLink to={'/' + this.props.link} className={this._text}>
                    {this.props.title}
                </NavLink>
                <NoteIcon
                    className={this._create}
                    icon='create'
                    onClick={() => this.setState({ editing: true })}
                />
                <NoteIcon
                    className={this._delete}
                    icon='delete'
                    onClick={this.catchDeleteIcon}
                />
            </div>
        );
    }

    render() {
        return (this.state.editing ? this.renderEditingForm() : this.renderCategory());
    }
}

export default CategoryItem;