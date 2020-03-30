import React from 'react';
import AddCategoryStyle from './AddCategory.module.css';
import Icon from '../../../Buttons/Icon/Icon';

export default class AddCategory extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };

        this.activateInput = this.activateInput.bind(this);
        this.handleAddSubmit = this.handleAddSubmit.bind(this);
    }

    componentDidUpdate() {
        if (!this.props.catFieldHidden) {
            this.refs.input.focus();
        }
    }

    activateInput(event) {
        const newTitle = event.target.value;
        this.setState({ title: newTitle });
    }

    handleAddSubmit(event) {
        event.preventDefault();
        const title = this.state.title;

        if (title) {
            this.props.onAdd(title);
            this.setState({ title: '' });
            this.props.onHideAddForm();
        }
    }

    render() {
        const _wrapperHidden = AddCategoryStyle.wrapperHidden;
        const _wrapperVisible = AddCategoryStyle.wrapperVisible;
        const _input = AddCategoryStyle.input;
        const _save = AddCategoryStyle.save;

        return (
            <form
                className={this.props.catFieldHidden ? _wrapperHidden : _wrapperVisible}
                onSubmit={this.handleAddSubmit}
            >
                <input
                    className={_input}
                    placeholder='Категория...'
                    value={this.state.title}
                    ref='input'
                    onChange={this.activateInput}
                />
                <Icon
                    className={_save}
                    icon='save'
                    type='submit'
                />
            </form>
        );
    }
}