import React from 'react';
import ViewTodo from '../features/todo/ViewTodo';

const Home = () => {
    return (
        <div className='home '>
            <h2 className='text-center text-4xl text-white font-bold pt-5'>Welcome To My Todo App</h2>
            <ViewTodo />
        </div>
    );
};

export default Home;