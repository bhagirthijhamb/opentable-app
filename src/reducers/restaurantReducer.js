import { GET_CITY, FETCH_RESTAURANTS } from './../actions/actionTypes';

export const initialState = {
    city: '',
    items: []
}

export function rootReducer(state = initialState, action) {
         switch (action.type) {
           case GET_CITY:
             return {
               ...state,
               city: action.payload,
             };
           default:
             return state;
         }
       }