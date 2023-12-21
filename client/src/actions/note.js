import axios from "axios";
import { setAlert } from "./alert";
import {
    GET_NOTES,
    NOTE_ERROR,
    ADD_NOTE,
    ADD_FAIL
} from './types';

export const getNotes = () => async dispatch => {
    try {
        const res = await axios.get('api/notes');
        dispatch({
            type: GET_NOTES,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: NOTE_ERROR,
            payload: error.status
        })
    }
}

export const addNote =
    ({ title, note }) =>
    async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const body = JSON.stringify({ title, note });

        try {
            const res = await axios.post('/api/notes', body, config);
            dispatch({
                type: ADD_NOTE,
            });
            dispatch(getNotes());
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach((error) =>
                    dispatch(setAlert(error.msg, 'danger'))
                );
            }
            dispatch({
                type: ADD_FAIL,
            });
        }
    };