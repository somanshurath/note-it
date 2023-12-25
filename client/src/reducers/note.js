import {
    GET_NOTES,
    LOGOUT,
    NOTE_ERROR,
    ADD_NOTE,
    EDIT_NOTE,
    DELETE_NOTE,
    GET_EDIT_NOTES,
} from '../actions/types';

const initialState = {
    notes: [],
    editnote: null,
    loading: true,
    deleted: false,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter((note) => note._id !== payload),
                deleted: true,
            };  
        case EDIT_NOTE:
        case ADD_NOTE:
            return {
                ...state,
                loading: true,
            };
        case GET_NOTES:
            return {
                ...state,
                noteEditted: false,
                notes: payload,
                loading: false,
                deleted: false,
            };
        case NOTE_ERROR:
            return {
                ...state,
                error: payload,
                loading: true,
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
