import {ACTIVATE_MODAL_WINDOW, LOADING} from '../index';
import {
    HOST_SAMOHA,
    //HOST_SASHKA,
    GET_USER_INFO_SAMOHA,
    //GET_USER_INFO_SASHKA,
    GET_CATEGORY_INFO_SAMOHA,
    SET_PHOTO_URL,
    CHANGE_NAME_SAMOHA,
    CHANGE_PASS_SAMOHA
} from '../../requestsData/requestData';

export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_CATEGORY_INFO = 'GET_CATEGORY_INFO';
export const SET_PHOTO = 'SET_PHOTO';
export const CONFIRM_EMAIL = 'CONFIRM_EMAIL';
export const CHANGE_NAME = 'CHANGE_NAME';

const badResponse = (dispatch, result) => {
    dispatch({
        type: ACTIVATE_MODAL_WINDOW,
        title: result.message,
        reason: result.error
    })
}

export const confirmEmailAC = () => {
    return {
        type: CONFIRM_EMAIL
    }
}

export const changePassAC = data => dispatch => {
    const url = HOST_SAMOHA + CHANGE_PASS_SAMOHA;
    const token = localStorage.getItem('accessToken');

    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(data)
    }

    fetch(url, requestOptions)
        .then(response => response.ok ?
            dispatch({
                type: ACTIVATE_MODAL_WINDOW,
                title: 'Password changed successfully.',
                reason: 'Pass changed'
            })
            :
            response.json())
        .then(result => result.status >= 400 ?
            badResponse(dispatch, result)
            :
            console.log(result))
        .catch(error => console.log('Error', error));
}

export const changeNameAC = name => dispatch => {
    const url = HOST_SAMOHA + CHANGE_NAME_SAMOHA;
    const token = localStorage.getItem('accessToken');

    const requestOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify({name})
    }

    fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => result.status >= 400 ?
            badResponse(dispatch, result)
            :
            dispatch({
                type: CHANGE_NAME,
                userName: result.username
            }))
        .catch(error => console.log('Error', error));
}

export const setPhotoAC = file => dispatch => {
    const setPhotoUrl = HOST_SAMOHA + SET_PHOTO_URL;
    const token = localStorage.getItem('accessToken');
    const formData = new FormData();

    formData.append("image", file, file.name);

    const requestOptions = {
        method: 'PUT',
        headers: {
            'Authorization': token
        },
        body: formData
    }

    fetch(setPhotoUrl, requestOptions)
        .then(response => response.json())
        .then(result => result.status >= 400 ?
            badResponse(dispatch, result)
            :
            dispatch({
                type: SET_PHOTO,
                photo: result.photo
            }))
        .catch(error => console.log('Error', error));
}

export const getCategoryInfo = () => dispatch => {
    const getCategorySamoha = HOST_SAMOHA + GET_CATEGORY_INFO_SAMOHA;
    const activeUrl = getCategorySamoha;

    const token = localStorage.getItem('accessToken');

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': activeUrl === getCategorySamoha ? token : `Bearer ${token}`
        }
    }

    fetch(activeUrl, requestOptions)
        .then(response => response.json())
        .then(result => result.status >= 400 ?
            console.error(result.error)
            :
            dispatch({
                type: GET_CATEGORY_INFO,
                result
            }))
        .catch(error => console.log('Error', error));
}

export const getUserRequestAC = () => dispatch => {
    dispatch({ type: LOADING });

    //const getUserSashka = HOST_SASHKA+GET_USER_INFO_SASHKA;
    const getUserSamoha = HOST_SAMOHA + GET_USER_INFO_SAMOHA;
    const activeUrl = getUserSamoha;

    const token = localStorage.getItem('accessToken');

    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': activeUrl === getUserSamoha ? token : `Bearer ${token}`
        }
    }

    fetch(activeUrl, requestOptions)
        .then(response => response.json())
        .then(result => result.status >= 400 ?
            badResponse(dispatch, result)
            :
            dispatch({
                type: GET_USER_INFO,
                result
            }))
        .catch(error => console.log('Error', error));
}