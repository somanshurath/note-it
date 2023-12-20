import axios from "axios";
import { setAlert } from "./alert";
import {
    GET_NOTES,
    NOTE_ERROR
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