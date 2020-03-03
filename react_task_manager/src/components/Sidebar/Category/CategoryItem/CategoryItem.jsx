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
        this._wrapper = CategoryStyle.wrapper;
        this._list = CategoryStyle.list;
        this._text = CategoryStyle.text;
        this._create = CategoryStyle.create;
        this._delete = CategoryStyle.delete;
        // -- end --

        // -- bind this for methods --
        this.catchDeleteIcon = this.catchDeleteIcon.bind(this);
        // -- end --
    }

    catchDeleteIcon() {
        this.props.onDelete(this.props.link);
    }

    render() {
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
                    onClick={() => this.setState({ editing: true }) }
                />
                <NoteIcon 
                    className={this._delete}
                    icon='delete'
                    onClick={this.catchDeleteIcon}
                />
            </div>
        );
    }
}

export default CategoryItem;