import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { deleteTodo } from './todoSlice';

const ViewTodo = () => {
    const todos = useSelector((state) => state.todos.todos);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Delete Btn
    const handleDeleteBtn = id => {
        dispatch(deleteTodo(id))
    };

    //Edit Btn
    const handleEditBtn = id => {
        navigate('/edittodo')
    };



    return (
        <div>
            <h2 className='text-center text-3xl text-accent font-bold mt-10'>All Todo List</h2>

            <div className="overflow-x-auto mt-10">
                <table className="table w-4/6 mx-auto">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Subject</th>
                            <th>Description</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos?.map((todo, index) => {
                                const { id, sub, desc } = todo;
                                return (
                                    <tr key={id}>
                                        <th>{index + 1}</th>
                                        <td>{sub}</td>
                                        <td>{desc}</td>
                                        <td>
                                            <Link to={'/edittodo'} state={{ id, sub, desc }}>
                                                <button
                                                    className='btn btn-success mr-2'>
                                                    Edit
                                                </button>
                                            </Link>

                                            <button className='btn btn-error' onClick={() => handleDeleteBtn(id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ViewTodo;