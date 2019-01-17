import uuid from 'uuid';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/types';

const initialState = {
    items: [
        {id: uuid(), name: 'ali'},
        {id: uuid(), name: 'amgad'},
        {id: uuid(), name: 'nour'},
    ]
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}