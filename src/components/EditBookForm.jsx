import React, { useEffect, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { editDataAsync } from '../redux/actions/bookActions';

const EditBookForm = () => {
    const { id } = useParams();
    const { books } = useSelector(state => state.bookReducer);
    const [edit, setEdit] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const book = books.find(book => book.id === id);
        if (book) {
            setEdit(book);
        } else {
            navigate('/');
        }
    }, [id, books, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEdit({ ...edit, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editDataAsync(id, edit));
        navigate('/');
    };

    return (
        <Container>
            <h2 className="my-4">Edit Book Details</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={edit.title || ''} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" name="author" value={edit.author || ''} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" name="genre" value={edit.genre || ''} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Publication Year</Form.Label>
                    <Form.Control type="text" name="year" value={edit.year || ''} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    );
};

export default EditBookForm;
