import React from 'react';
import { Link } from 'react-router-dom';
import CategoryStyle from '../Category.module.css';
import Icon from '../../../Buttons/Icon/Icon';

export default class CategoryItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        }

        this.renderCategory = this.renderCategory.bind(this);
        this.renderEditForm = this.renderEditForm.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    componentDidUpdate() {
        if (this.state.editing) {
            this.refs.input.focus();
            this.refs.input.select();
        }
    }

    handleEditSubmit(event) {
        event.preventDefault();
        const title = this.refs.input.value;
        const id = this.props.link;

        if (title) {
            this.props.onEdit(id, title);
            this.setState({editing: false});
        }
    }

    renderEditForm() {
        const _editWrapper = CategoryStyle.editWrapper;
        const _input = CategoryStyle.input;
        const _save = CategoryStyle.save;

        return (
            <form className={_editWrapper} onSubmit={this.handleEditSubmit}>
                <input
                    className={_input}
                    ref='input'
                    defaultValue={this.props.title}/>
                <Icon
                    className={_save}
                    icon='save'
                    type='submit'
                />
            </form>
        );
    }

    renderCategory() {
        const _wrapper = CategoryStyle.wrapper;
        const _list = CategoryStyle.list;
        const _text = CategoryStyle.text;
        const _create = CategoryStyle.create;
        const _delete = CategoryStyle.delete;

        return (
            <div className={_wrapper}>
                <Icon
                    className={_list}
                    icon='format_list_bulleted'
                />
                <Link to={`/main/${this.props.link}`} className={_text}>
                    {this.props.title}
                </Link>
                <Icon
                    className={_create}
                    icon='create'
                    onClick={() => this.setState({editing: true})}
                />
                <Icon
                    className={_delete}
                    icon='delete'
                    onClick={() => this.props.onDelete(this.props.link)}
                />
            </div>
        );
    }

    render() {
        return (this.state.editing ? this.renderEditForm() : this.renderCategory());
    }
}