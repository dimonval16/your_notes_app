import React from 'react';
import { Route } from 'react-router';

import MainContentStyle from './Main_content.module.css';
import Notes from './Notes/Notes';

function renderRouting(state, props) {
    const routes = state.categories.map(obj => {
        const notes =
            <Notes
                notes={obj.notes}
                categoryId={obj.id}
                onSaveNote={props.onSaveNote}
                onButtonClick={props.onButtonClick}
                onStatusChange={props.onStatusChange}
                onDelete={props.onDelete}
                onEdit={props.onEdit}
                onAdd={props.onAdd}
            />;

        const route =
            <Route
                path={'/' + obj.id}
                render={() => notes}
                key={obj.id}
            />;

        return route;
    });

    return routes;
}

function MainContent(props) {
    const _wrapper = MainContentStyle.wrapper;
    const _mainBlock = MainContentStyle.mainBlock;

    const myRoutes = renderRouting(props.state, props);

    return (
        <div className={_wrapper}>
            <div className={_mainBlock}>
                {myRoutes}
            </div>
        </div>
    );
}

export default MainContent;