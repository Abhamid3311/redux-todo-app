import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTodo } from './todoSlice';

const AddToDo = () => {
    const [sub, setSub] = useState('');
    const [desc, setDesc] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //Add New Todo
    const handleAddForm = e => {
        e.preventDefault();
        const newTodo = { sub, desc };
        dispatch(addTodo(newTodo));
        navigate('/viewtodo');
    };

    return (
        <div>
            <h2 className='text-center text-3xl text-accent font-bold my-10'>Add To Do</h2>

            <div className="card w-2/5 mx-auto shadow-2xl bg-base-100">
                <div className="card-body">
                    <form onSubmit={handleAddForm}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Subject</span>
                            </label>
                            <input
                                value={sub}
                                onChange={(e) => setSub(e.target.value)}
                                type="text"
                                placeholder="subject"
                                className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                type="text"
                                placeholder="desc"
                                className="textarea textarea-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Add Todo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToDo;