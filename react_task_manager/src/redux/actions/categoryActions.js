import {
    HOST_SAMOHA,
    GET_CATEGORY_INFO_SAMOHA
} from '../requestsData/requestData';

export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const EDIT_CATEGORY = 'EDIT_CATEGORY';

const addCategoryUrlSamoha = HOST_SAMOHA + GET_CATEGORY_INFO_SAMOHA;
const activeUrl = addCategoryUrlSamoha;

export const addCategory = title => dispatch => {
    const token = localStorage.getItem('accessToken');

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': activeUrl === addCategoryUrlSamoha ? token : `Bearer ${token}`
        },
        body: JSON.stringify(title)
    }

    fetch(activeUrl, requestOptions)
        .then(response => response.ok ? response.json() : alert('Error add category.'))
        .then(result => dispatch({
            type: ADD_CATEGORY,
            result
        }))
        .catch(error => console.log('Error', error));
}

export const deleteCategory = id => dispatch => {
    const token = localStorage.getItem('accessToken');

    const requestOptions = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }

    fetch(`${activeUrl}?id=${id}`, requestOptions)
        .then(response => response.ok ? response.json() : alert('Error delete category'))
        .then(result => dispatch({
            type: DELETE_CATEGORY,
            result
        }))
        .catch(error => console.log('Error', error));
}

export const editCategory = (id, title) => dispatch => {
    const token = localStorage.getItem('accessToken');

    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({id, title})
    }

    fetch(activeUrl, requestOptions)
        .then(response => response.ok ? response.json() : alert('Error edit category'))
        .then(result => dispatch({
            type: EDIT_CATEGORY,
            result
        }))
        .catch(error => console.log('Error', error));
}