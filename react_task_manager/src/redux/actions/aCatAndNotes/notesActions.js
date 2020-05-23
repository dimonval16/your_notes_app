import {ACTIVATE_MODAL_WINDOW} from '..';
import {
    HOST_SAMOHA,
    ADD_NOTES_SAMOHA,
    TOGGLE_NOTES_SAMOHA,
    DELETE_NOTE_SAMOHA, EDIT_NOTE_SAMOHA
} from '../../requestsData/requestData';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const TOGGLE_NOTE = 'TOGGLE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

const badResponse = (dispatch, result) => {
    dispatch({
        type: ACTIVATE_MODAL_WINDOW,
        title: result.message,
        reason: result.error
    })
}

export const addNote = (title, categoryId) => dispatch => {
    const url = HOST_SAMOHA + ADD_NOTES_SAMOHA;
    const token = localStorage.getItem('accessToken');

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({ categoryId, title })
    }

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => result.status >= 400 ?
            badResponse(dispatch, result)
            :
            dispatch({
                type: ADD_NOTE,
                categoryId: result.categoryId,
                id: result.id,
                title: result.title,
                completed: result.status
            }))
        .catch(error => console.log('Error', error));
}

export const toggleNote = (id, categoryId, status) => dispatch => {
    const url = HOST_SAMOHA + TOGGLE_NOTES_SAMOHA;
    const token = localStorage.getItem('accessToken');

    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({ categoryId, id, status: !status })
    }

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => result.status >= 400 ?
            badResponse(dispatch, result)
            :
            dispatch({
                type: TOGGLE_NOTE,
                id: result.id,
                categoryId: result.categoryId,
                completed: result.status
            }))
        .catch(error => console.log('Error', error));
}

export const deleteNote = (id, categoryId) => dispatch => {
    const url = HOST_SAMOHA + DELETE_NOTE_SAMOHA;
    const token = localStorage.getItem('accessToken');

    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }

    fetch(`${url}?noteId=${id}&categoryId=${categoryId}`, requestOptions)
        .then(response => response.json())
        .then(result => result.status >= 400 ?
            badResponse(dispatch, result)
            :
            dispatch({
                type: DELETE_NOTE,
                categoryId: result.categoryId,
                id: result.noteId
            }))
        .catch(error => console.log('Error', error));
}

export const editNote = (id, title, categoryId) => dispatch => {
    const url = HOST_SAMOHA + EDIT_NOTE_SAMOHA;
    const token = localStorage.getItem('accessToken');

    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({ id, title, categoryId })
    }

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => result.status >= 400 ?
            badResponse(dispatch, result)
            :
            dispatch({
                type: EDIT_NOTE,
                categoryId: result.categoryId,
                id: result.id,
                title: result.title
            }))
        .catch(error => console.log('Error', error));
}