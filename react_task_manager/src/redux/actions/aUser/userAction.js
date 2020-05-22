import {
    HOST_SAMOHA,
    //HOST_SASHKA,
    GET_USER_INFO_SAMOHA,
    //GET_USER_INFO_SASHKA,
    GET_CATEGORY_INFO_SAMOHA,
    SET_PHOTO_URL
} from '../../requestsData/requestData';
import {ACTIVATE_MODAL_WINDOW, LOADING} from '../index';

export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_CATEGORY_INFO = 'GET_CATEGORY_INFO';
export const SET_PHOTO = 'SET_PHOTO';
export const CONFIRM_EMAIL = 'CONFIRM_EMAIL';

export const confirmEmailAC = () => {
    return {
        type: CONFIRM_EMAIL
    }
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
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                localStorage.removeItem('accessToken');
                const title = 'Error adding photo. Your session is over.';
                const reason = 'Error adding photo.';

                return dispatch({
                    type: ACTIVATE_MODAL_WINDOW,
                    title,
                    reason
                });
            }
        })
        .then(result => dispatch({
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
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                localStorage.removeItem('accessToken');
                return console.error(`Error to get cat-info`);
            }
        })
        .then(result => dispatch({
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
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                localStorage.removeItem('accessToken');
                const title = 'Your session is over.';
                const reason = 'Your session is over.';

                return dispatch({
                    type: ACTIVATE_MODAL_WINDOW,
                    title,
                    reason
                });
            }
        })
        .then(result => dispatch({
            type: GET_USER_INFO,
            result
        }))
        .catch(error => console.log('Error', error));
}