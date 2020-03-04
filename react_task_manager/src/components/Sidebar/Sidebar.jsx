import React from 'react';
import Sidebar_style from './Sidebar.module.css';

import Account from './Account/Account';
import Category from './Category/Category';
import Button from '../Button/Button';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openedCategoryForm: false
        };

        this.addCategoryForm = React.createRef();

        // -- styles css --
        this._wrapper = Sidebar_style.wrapper;
        // -- end --

        // -- bind this for methods --
        this.catchSaveIcon = this.catchSaveIcon.bind(this);
        this.catchState = this.catchState.bind(this);
        // -- end --
    }

    catchSaveIcon() {
        if (this.state.openedCategoryForm === true) {
            this.props.onClickSave(this.state.openedCategoryForm, this.addCategoryForm);

            this.setState({ openedCategoryForm: false });
        }
    }

    catchState() {
        if (this.state.openedCategoryForm === false) {
            this.props.onCategoryAddButton(this.state.openedCategoryForm, this.addCategoryForm);

            this.setState({ openedCategoryForm: true });
        } else {
            this.props.onCategoryAddButton(this.state.openedCategoryForm, this.addCategoryForm);

            this.setState({ openedCategoryForm: false });
        }
    }

    render() {
        return (
            <div className={this._wrapper}>
                <Account user={this.props.user} />
                <Category
                    categories={this.props.categories}
                    addCategoryFormRef={this.addCategoryForm}
                    onCategoryDelete={this.props.onCategoryDelete}
                    onCategoryEdit={this.props.onCategoryEdit}
                    openedForm={this.state.openedCategoryForm}
                    onClickSave={this.catchSaveIcon}
                    onCategoryAdd={this.props.onCategoryAdd}
                />
                <Button name="Категория" onButtonClick={this.catchState} />
            </div>
        );
    }
}

export default Sidebar;