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

    // -- create refs for components --
    this.sloganRef = React.createRef();
    this.appRef = React.createRef();
    // -- end --

    // -- bind this for Sidebar.Category methods --
    this.addCategory = this.addCategory.bind(this);
    this.editCategory = this.editCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
    // -- end --

    // -- bind this for MainContent methods --
    this.editNote = this.editNote.bind(this);
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

  // -- Sidebar.Category block methods --
  addCategory(title) {
    let categories = this.state.categories;

    let category = {
      id: this.nextId(categories),
      title: title,
      notes: [
        {
          id: 1,
          title: 'Новый чоткий раздел',
          completed: false
        }
      ]
    };

    categories.unshift(category);

    this.setState({ categories: categories });
  }

  editCategory(title, categoryId) {
    let oldCategories = this.state.categories;

    let newCategories = oldCategories.map(category => {
      if (category.id === categoryId) {
        category.title = title;
      }

      return category;
    });

    this.setState({ categories: newCategories });
  }

  deleteCategory(categoryId) {
    let oldCategories = this.state.categories;
    let newCategories = oldCategories.filter(category => category.id !== categoryId);

    this.setState({ categories: newCategories });
  }
  // -- end --

  // -- MainContent methods -- 
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

  nextId(notes) {
    let _nextId = 1;

    let idArray = notes.map(note => {
      return note.id
    });

    let sortIdArray = idArray.sort((a,b) => {
      return a - b;
    });

    sortIdArray.map(id => {
      if (_nextId === id) {
        _nextId++;
      }

      return id;
    });

    return _nextId;
  }

  addNote(title, categoryId) {
    let categories = this.state.categories;

    categories.map(obj => {
      if (obj.id === categoryId) {
        let notes = obj.notes;

        let note = {
          id: this.nextId(notes),
          title: title,
          completed: false
        }

        notes.unshift(note);
      }

      return obj;
    })

    this.setState({ categories: categories });
  }

  hideAddForm(opened, ref) {
    let addForm = ref.current;

    if (opened === true) {
      addForm.style.position = 'absolute';
      addForm.style.width = '0';
      addForm.style.visibility = 'hidden';
    }
  }

  showAddForm(opened, ref) {
    let addForm = ref.current;

    if (opened === false) {
      addForm.style.position = 'static';
      addForm.style.width = '100%';
      addForm.style.visibility = 'visible';
    } else {
      this.hideAddForm(opened, ref);
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
  // -- end --

  // -- for Header's buttons to show/hide Slogan --
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
            onCategoryDelete={this.deleteCategory}
            onCategoryEdit={this.editCategory}
            onCategoryAddButton={this.showAddForm}
            onClickSave={this.hideAddForm}
            onCategoryAdd={this.addCategory}
          />
          <Slogan
            sloganName={this.state.user.name}
            sloganRef={this.sloganRef}
          />
          <MainContent
            categories={this.state.categories}
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
