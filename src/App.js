import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddToDo from './features/todo/AddToDo';
import EditTodo from './features/todo/EditTodo';
import ViewTodo from './features/todo/ViewTodo';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/addtodo' element={<AddToDo></AddToDo>}></Route>
        <Route path='/viewtodo' element={<ViewTodo></ViewTodo>}></Route>
        <Route path='/edittodo' element={<EditTodo></EditTodo>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
