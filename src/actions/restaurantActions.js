import { GET_CITY, FETCH_RESTAURANTS } from './actionTypes';

export const getCity = (city) => (dispatch) => {
    dispatch({
        type: GET_CITY,
        payload: city
    })
};

export const fetchRestaurants = (city) => (dispatch) => {
    fetch(`http://opentable.herokuapp.com/api/restaurants?city=${city}`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: FETCH_RESTAURANTS,
          payload: data.restaurants
        })
      );
}