import React from 'react';
import {Route} from 'react-router';
import MainContentStyle from './MainContent.module.css';
import Notes from './Notes/Notes';

export default function MainContent(props) {
    const _wrapper = MainContentStyle.wrapper;
    const _mainBlock = MainContentStyle.mainBlock;

    return (
        <div className={_wrapper}>
            <div className={_mainBlock}>
                {props.categories.map(obj => {
                    return <Route
                        path={'/' + obj.id}
                        render={() => {
                            return <Notes
                                notes={obj.notes}
                                categoryId={obj.id}
                                notesFieldHidden={props.notesFieldHidden}
                                onToggleAddField={props.onToggleAddField}
                                onStatusChange={props.onToggleNote}
                                onDelete={props.onDelete}
                                onEdit={props.onEdit}
                                onAdd={props.onAdd}
                            />
                        }}
                        key={obj.id}
                    />
                })}
            </div>
        </div>
    );
}