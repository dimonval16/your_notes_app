import React from 'react';
import { Route } from 'react-router';
import MainContentStyle from './Main_content.module.css';

import Notes from './Notes/Notes';

class MainContent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this._wrapper = MainContentStyle.wrapper;
        this._mainBlock = MainContentStyle.mainBlock;

        this.renderRouting = this.renderRouting.bind(this);
    }

    renderRouting() {
        let notes = this.props.categories.map(obj => {
            let notes =
                <Notes
                    notes={obj.notes}
                    categoryId={obj.id}
                    onStatusChange={this.props.onStatusChange}
                    onDelete={this.props.onDelete}
                    onEdit={this.props.onNoteEdit}
                    onAdd={this.props.onAdd}
                    onSaveNote={this.props.onSaveNote}
                    onButtonClick={this.props.onNotesButtonClick}
                />;

            let route =
                <Route
                    path={'/' + obj.id}
                    render={() => notes}
                    key={obj.id}
                />;

            return route;
        });

        return notes;
    }

    render() {
        let myRoutes = this.renderRouting();

        return (
            <div className={this._wrapper}>
                <div className={this._mainBlock}>
                    {myRoutes}
                </div>
            </div>
        );
    }
}

export default MainContent;