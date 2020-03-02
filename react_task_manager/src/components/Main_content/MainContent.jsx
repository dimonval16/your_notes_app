import React from 'react';
import MainContentStyle from './Main_content.module.css';

import Button from '../Button/Button';
import Notes from './Notes/Notes';
import AddNote from './AddNote/AddNote';
import { Route } from 'react-router';

class MainContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this._wrapper = MainContentStyle.wrapper;
        this._mainBlock = MainContentStyle.mainBlock;

        this.renderRouting = this.renderRouting.bind(this);
    }

    renderRouting() {
        let notes = this.props.categories.map(obj => {
            let notes =
                <Notes
                    notes={obj.notes}
                    categoryId = {obj.id}
                    onStatusChange={this.props.onStatusChange}
                    onDelete={this.props.onDelete}
                    onEdit={this.props.onNoteEdit}
                />;

            let route =
                <Route
                    path={'/' + obj.id}
                    render={() => notes}
                    key={obj.id}
                />;

            return route;
        })

        return notes;
    }

    render() {
        let myNotes = this.renderRouting();

        return (
            <div className={this._wrapper}>
                <div className={this._mainBlock}>
                    <Button
                        id="content"
                        name="Добавить задачу"
                        onButtonClick={this.props.onNotesButtonClick}
                    />
                    <AddNote
                        addNoteFormRef={this.props.addNoteFormRef}
                        onAdd={this.props.onAdd}
                        hideAddForm={this.props.onSaveNote}
                        openedForm={this.props.openedForm}
                    />
                    {myNotes}
                </div>
            </div>
        );
    }
}

export default MainContent;