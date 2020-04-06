export default function nextId(state) {
    const newState = [...state];
    let _nextId = 1;

    const idArray = newState.map(note => {
        return note.id
    });

    const sortIdArray = idArray.sort((a, b) => {
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