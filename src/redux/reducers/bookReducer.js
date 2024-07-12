import { GET_DATA, EDIT_BOOKS, DELETE_BOOK } from '../actions/actionType';

const initialState = {
    books: [],
    book: null,
};

function BooksReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                books: action.payload,
            };

        case EDIT_BOOKS:
            const updatedBooks = state.books.map((book) =>
                book.id === action.payload.id ? action.payload : book
            );
            return {
                ...state,
                books: updatedBooks,
                book: action.payload,
            };

        case DELETE_BOOK:
            return {
                ...state,
                books: state.books.filter((book) => book.id !== action.payload),
            };

        default:
            return state;
    }
}

export default BooksReducer;
