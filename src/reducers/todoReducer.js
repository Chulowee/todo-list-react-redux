import TodoItem from "../components/todo-item/TodoItem";
import React from "react";

const initialState = {
    todoList: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todoList: [...state.todoList, {title: action.title, id: action.id}]
            };
        default:
            return state;
    }
};

export default todoReducer;