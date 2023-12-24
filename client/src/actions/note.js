import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_NOTES,
    NOTE_ERROR,
    ADD_NOTE,
    DELETE_NOTE,
    EDIT_NOTE,
    ADD_NOTE_FAIL
} from './types';

export const getNotes = () => async (dispatch) => {
    try {
        const res = await axios.get('api/notes');
        dispatch({
            type: GET_NOTES,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: NOTE_ERROR,
            payload: error.status,
        });
    }
};

export const addNote =
    ({ title, note, category, color }) =>
    async (dispatch) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const body = JSON.stringify({ title, note, category, color });

        try {
            const res = await axios.post('/api/notes', body, config);
            dispatch({
                type: ADD_NOTE,
            }); 
        } catch (err) {
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach((error) =>
                    dispatch(setAlert(error.msg, 'danger'))
                );
            }
            dispatch({
                type: ADD_NOTE_FAIL,
            });
        }
    };

export const deleteNote = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/notes/${id}`);
        dispatch({
            type: DELETE_NOTE,
            payload: id,
        });
    } catch (err) {
        dispatch({
            type: NOTE_ERROR,
        });
    }
}

export const editNote = (id, title, note) => async (dispatch) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify({ title, note });

    try {
        await axios.delete(`/api/notes/${id}`);
        const res = await axios.post('/api/notes', body, config);
        dispatch({
            type: EDIT_NOTE,
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
            type: NOTE_ERROR,
        });
    }
}
