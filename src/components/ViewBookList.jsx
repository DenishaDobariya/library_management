import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Table, Button } from 'react-bootstrap';
import { getDataAsync, deleteAsync } from '../redux/actions/bookActions';
import { useNavigate } from 'react-router-dom';

const ViewBookList = () => {
    const dispatch = useDispatch();
    const { books } = useSelector(state => state.bookReducer);
    const navigate = useNavigate();

    const handleEdit = (id) => {
        navigate(`/edit/${id}`);
    };

    const handleDelete = (id) => {
        dispatch(deleteAsync(id));
    };

    useEffect(() => {
        dispatch(getDataAsync());
    }, [dispatch]);

    return (
        <Container>
            <h2 className="my-4">Library Books</h2>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Genre</th>
                        <th>Publication Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.genre}</td>
                            <td>{book.year}</td>
                            <td>
                                <Button variant="outline-primary" onClick={() => handleEdit(book.id)}>Edit</Button>{' '}
                                <Button variant="outline-danger" onClick={() => handleDelete(book.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ViewBookList;
