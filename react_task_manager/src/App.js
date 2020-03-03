import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Slogan from './components/Slogan/Slogan';
import MainContent from './components/Main_content/MainContent';

import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: this.props.initialData.categories,
      user: this.props.initialData.user,
    };

    // -- create refs for components
    this.sloganRef = React.createRef();
    this.appRef = React.createRef();
    this.addNoteFormRef = React.createRef();
    // -- end --

    // bind this for methods
    this.editNote = this.editNote.bind(this);
    this.sortingNotes = this.sortingNotes.bind(this);
    this.nextId = this.nextId.bind(this);
    this.addNote = this.addNote.bind(this);
    this.hideAddForm = this.hideAddForm.bind(this);
    this.showAddForm = this.showAddForm.bind(this);
    this.noteDelete = this.noteDelete.bind(this);
    this.noteStatusChange = this.noteStatusChange.bind(this);
    this.slideSloganUp = this.slideSloganUp.bind(this);
    this.slideSloganDown = this.slideSloganDown.bind(this);
    // -- end --
  }

  editNote(id, title, categoryId) {
    let categories = this.state.categories;

    categories.map(obj => {
      if (obj.id === categoryId) {
        obj.notes.map(note => {

          if (note.id === id) {
            note.title = title;
          }

          return note;
        });
      }

      return obj;
    });

    this.setState({ categories: categories });
  }

  sortingNotes(notes) {
    let newId = 1;
    let sortNotes = notes.map(note => {
      note.id = newId;
      newId++;

      return note;
    });

    return sortNotes;
  }

  nextId(notes) {
    let _nextId = 1;

    notes.map(note => {
      if (_nextId === note.id) {
        _nextId++;
      }

      return note.id;
    });

    return _nextId;
  }

  addNote(title) {

    let notes = this.state.notes;

    let note = {
      id: this.nextId(notes),
      title: title,
      completed: false
    }

    notes.unshift(note);

    let sortNotes = this.sortingNotes(notes);

    this.setState({ notes: sortNotes });
  }

  hideAddForm(opened) {
    let addForm = this.addNoteFormRef.current;

    if (opened === true) {
      addForm.style.position = 'absolute';
      addForm.style.width = '0';
      addForm.style.visibility = 'hidden';
    }
  }

  showAddForm(opened) {
    let addForm = this.addNoteFormRef.current;
    
    if (opened === false) {
      addForm.style.position = 'static';
      addForm.style.width = '100%';
      addForm.style.visibility = 'visible';
    } else {
      this.hideAddForm(opened);
    }
  }

  noteDelete(id, categoryId) {
    let categories = this.state.categories;

    categories.map(obj => {
      if (obj.id === categoryId) {

        let notes = obj.notes.filter(note => note.id !== id);

        obj.notes = notes;
      }

      return obj;
    });

    this.setState({ categories: categories });
  }

  noteStatusChange(id, categoryId) {
    let categories = this.state.categories;

    categories.map(obj => {
      if (obj.id === categoryId) {

        obj.notes.map(note => {
          if (note.id === id) {
            note.completed = !note.completed;
          }

          return note;
        });

      }

      return obj;
    });

    this.setState({ categories: categories });
  }

  // -- for Header's buttons to show/hide Slogan
  slideSloganUp() {
    const sloganBlock = this.sloganRef.current;
    sloganBlock.style.position = 'absolute';
    sloganBlock.style.visibility = 'hidden';

    const appBlock = this.appRef.current;
    appBlock.style.gridTemplateRows = '50px 1fr';
  }

  slideSloganDown() {
    const sloganBlock = this.sloganRef.current;
    sloganBlock.style.position = 'static';
    sloganBlock.style.visibility = 'visible';

    const appBlock = this.appRef.current;
    appBlock.style.gridTemplateRows = '50px 1fr 3fr';
  }
  // -- end --

  render() {
    return (
      <BrowserRouter>
        <div className="App" ref={this.appRef}>
          <Header
            slideUp={this.slideSloganUp}
            slideDown={this.slideSloganDown}
          />
          <Sidebar
            user={this.state.user}
            categories={this.state.categories}
          />
          <Slogan
            sloganName={this.state.user.name}
            sloganRef={this.sloganRef}
          />
          <MainContent
            categories={this.state.categories}
            addNoteFormRef={this.addNoteFormRef}
            onStatusChange={this.noteStatusChange}
            onDelete={this.noteDelete}
            onNotesButtonClick={this.showAddForm}
            onAdd={this.addNote}
            onSaveNote={this.hideAddForm}
            onNoteEdit={this.editNote}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
