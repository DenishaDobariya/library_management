import axios from 'axios';
import generateUniqueId from 'generate-unique-id';
import { GET_DATA, EDIT_BOOKS, DELETE_BOOK } from './actionType';

const API_URL = 'http://localhost:5000/books';

export const getData = (data) => {
    return {
        type: GET_DATA,
        payload: data,
    };
};

export const editBooks = (editData) => {
    return {
        type: EDIT_BOOKS,
        payload: editData,
    };
};

export const deleteBook = (deletedId) => {
    return {
        type: DELETE_BOOK,
        payload: deletedId,
    };
};

export const addBookAsync = (data) => {
    return (dispatch) => {
        data.id = generateUniqueId({
            length: 3,
            useLetters: false,
        });
        axios
            .post(API_URL, data)
            .then(() => {
                dispatch(getDataAsync());
            })
            .catch((err) => {
                console.log('error', err);
            });
    };
};

export const getDataAsync = () => {
    return (dispatch) => {
        axios
            .get(API_URL)
            .then((res) => {
                dispatch(getData(res.data));
            })
            .catch((err) => {
                console.log('error', err);
            });
    };
};

export const editDataAsync = (editId, editData) => {
    return (dispatch) => {
        axios
            .patch(`${API_URL}/${editId}`, editData)
            .then((res) => {
                dispatch(editBooks(res.data));
                dispatch(getDataAsync());
            })
            .catch((err) => {
                console.log('error', err);
            });
    };
};

export const deleteAsync = (id) => {
    return (dispatch) => {
        axios
            .delete(`${API_URL}/${id}`)
            .then(() => {
                dispatch(getDataAsync());
            })
            .catch((err) => {
                console.log('err', err);
            });
    };
};
