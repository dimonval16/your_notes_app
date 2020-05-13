import React from 'react';
import { Route, Switch } from 'react-router';
import MainContentStyle from './MainContent.module.css';
import Notes from './Notes/Notes';

export default function MainContent(props) {
    const _wrapper = MainContentStyle.wrapper;
    const _mainBlock = MainContentStyle.mainBlock;

    return (
        <div className={_wrapper}>
            <div className={_mainBlock}>
                <Switch>
                    {props.categories.map(obj => (
                        <Route path={`/main/${obj.id}`} key={obj.id}>
                            <Notes
                                notes={obj.notes}
                                categoryId={obj.id}
                                notesFieldHidden={props.notesFieldHidden}
                                onToggleAddField={props.onToggleAddField}
                                onStatusChange={props.onToggleNote}
                                onDelete={props.onDelete}
                                onEdit={props.onEdit}
                                onAdd={props.onAdd}
                            />
                        </Route>
                    ))}
                </Switch>
            </div>
        </div>
    );
}