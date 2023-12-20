import { GET_NOTES, LOGOUT, NOTE_ERROR } from '../actions/types';

const initialState = {
    notes: [],
    note: null,
    loading: true,
    error: {},
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_NOTES:
            return {
                ...state,
                notes: payload,
                loading: false,
            };
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
        default: return state
    }
}
