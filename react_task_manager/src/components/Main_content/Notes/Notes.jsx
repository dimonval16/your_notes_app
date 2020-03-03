import React from 'react';

import Note from './Note/Note';
import AddNote from '../AddNote/AddNote';
import Button from '../../Button/Button';

class Notes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openedAddNote: false
        }

        this.catchSaveIcon = this.catchSaveIcon.bind(this);
        this.catchState = this.catchState.bind(this);
        this.getNotes = this.getNotes.bind(this);
    }

    catchSaveIcon() {
        if (this.state.openedAddNote === true) {
            this.props.onSaveNote(this.state.openedAddNote);

            this.setState({ openedAddNote: false });
        }
    }

    catchState() {
        if (this.state.openedAddNote === false) {
            this.props.onButtonClick(this.state.openedAddNote);

            this.setState({ openedAddNote: true });
        } else {
            this.props.onButtonClick(this.state.openedAddNote);

            this.setState({ openedAddNote: false });
        }
    }

    getNotes() {
        const notes = this.props.notes.map(note =>
            <Note
                title={note.title}
                completed={note.completed}
                key={note.id}
                id={note.id}
                categoryId={this.props.categoryId}
                onChange={this.props.onStatusChange}
                onDelete={this.props.onDelete}
                onEdit={this.props.onEdit}
            />
        );

        return notes;
    }


    render() {
        let myNotes = this.getNotes();

        return (
            <div >
                <Button
                    id="content"
                    name="Добавить задачу"
                    onButtonClick={this.catchState}
                />
                <AddNote
                    addNoteFormRef={this.props.addNoteFormRef}
                    onAdd={this.props.onAdd}
                    hideAddForm={this.catchSaveIcon}
                    openedForm={this.state.openedAddNote}
                    categoryId={this.props.categoryId}
                />
                {myNotes}
            </div>
        );
    }
}

export default Notes;