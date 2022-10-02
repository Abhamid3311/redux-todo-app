import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialTodo = {
    todos: [
        { id: uuidv4(), sub: "Study Time", desc: "9am to 11am is my study time." },
        { id: uuidv4(), sub: "Work Time", desc: "12pm to 5pm is my work time." },
        { id: uuidv4(), sub: "Tiution", desc: "Everyday I will give 3h for tiution" },
    ],
};

export const todoSlice = createSlice({
    name: "todos",
    initialState: initialTodo,
    reducers: {
        showTodo: state => state,
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        updateTodo: (state, action) => {
            const { id, sub, desc } = action.payload;
            const isExist = state.todos.filter(todo => todo.id === id);
            if (isExist) {
                isExist[0].sub = sub;
                isExist[0].desc = desc;
            }
        },
        deleteTodo: (state, action) => {
            const id = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
    }
});


export const { showTodo, addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;