import { createSlice } from "@reduxjs/toolkit";

const initialTodo = {
    todos: [
        { id: 1, sub: "Study Time", desc: "9am to 11am is my study time." },
        { id: 2, sub: "Work Time", desc: "12pm to 5pm is my work time." },
        { id: 3, sub: "Tiution", desc: "Everyday I will give 3h for tiution" },
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
    }
});


export const { showTodo, addTodo } = todoSlice.actions;
export default todoSlice.reducer;