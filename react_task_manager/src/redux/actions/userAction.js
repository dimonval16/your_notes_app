import {
    HOST_SAMOHA,
    //HOST_SASHKA,
    GET_USER_INFO_SAMOHA,
    //GET_USER_INFO_SASHKA,
    GET_CATEGORY_INFO_SAMOHA
} from '../requestsData/requestData';

export const GET_USER_INFO = 'GET_USER_INFO';
export const GET_CATEGORY_INFO = 'GET_CATEGORY_INFO';

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
        .then(response => response.ok ? response.json() : alert(`Error: Access denied.`))
        .then(result => dispatch({
            type: GET_CATEGORY_INFO,
            result
        }))
        .catch(error => console.log('Error', error));
}

export const getUserRequestAC = () => dispatch => {
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
        .then(response => response.ok ? response.json() : alert(`Error: Access denied.`))
        .then(result => dispatch({
            type: GET_USER_INFO,
            result
        }))
        .catch(error => console.log('Error', error));
}