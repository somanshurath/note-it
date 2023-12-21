import {
    GET_NOTES,
    LOGOUT,
    NOTE_ERROR,
    ADD_NOTE,
    ADD_FAIL,
} from '../actions/types';

const initialState = {
    noteAdded: false,
    notes: [],
    note: null,
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case ADD_NOTE:
            return {
                ...state,
                noteAdded: true,
                loading: false,
            };
        case GET_NOTES:
            return {
                ...state,
                notes: payload,
                loading: false,
            };
        case ADD_FAIL:
        case NOTE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false,
            };
        case LOGOUT:
            return {
                ...state,
                notes: [],
                loading: false,
            };
        default:
            return state;
    }
}
