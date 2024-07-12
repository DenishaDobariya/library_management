import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import AddBookForm from './components/AddBookForm';
import ViewBookList from './components/ViewBookList';
import EditBookForm from './components/EditBookForm';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ViewBookList />} />
        <Route path="/add" element={<AddBookForm />} />
        <Route path="/edit/:id" element={<EditBookForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
