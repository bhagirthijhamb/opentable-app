import { GET_CITY, FETCH_RESTAURANTS } from './actionTypes';

export const getCity = (city) => (dispatch) => {
    dispatch({
        type: GET_CITY,
        payload: city
    })
};