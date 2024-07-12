import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addBookAsync } from '../redux/actions/bookActions';

const AddBookForm = () => {
    const [input, setInput] = useState({
        title: '',
        author: '',
        genre: '',
        year: '',
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.title && input.author && input.genre && input.year) {
            dispatch(addBookAsync(input));
            navigate('/');
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <Container>
            <h2 className="my-4">Add New Book</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={input.title} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Author</Form.Label>
                    <Form.Control type="text" name="author" value={input.author} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Genre</Form.Label>
                    <Form.Control type="text" name="genre" value={input.genre} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Publication Year</Form.Label>
                    <Form.Control type="text" name="year" value={input.year} onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">Submit</Button>
            </Form>
        </Container>
    );
};

export default AddBookForm;
