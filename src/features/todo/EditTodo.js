import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateTodo } from './todoSlice';

const EditTodo = () => {
    const location = useLocation();
    const [sub, setSub] = useState(location.state.sub);
    const [desc, setDesc] = useState(location.state.desc);
    const id = location.state.id;

    const dispatch = useDispatch();
    const navigate = useNavigate();


    //Update Todo
    const handleAddForm = e => {
        e.preventDefault();
        const updatedTodo = { id, sub, desc };

        dispatch(updateTodo(updatedTodo));
        navigate('/viewtodo');
    };

    return (
        <div className='home'>
            <h2 className='text-center text-3xl text-white font-bold py-10'>Edit Todo </h2>

            <div className="card w-5/6 lg:w-2/5 mx-auto shadow-2xl bg-base-100">
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
                            <button type='submit' className="btn btn-primary">Update Todo</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditTodo;