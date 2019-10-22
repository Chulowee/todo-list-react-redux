import React from "react";
import TodoItem from "../todo-item/TodoItem";
import TodoInput from "../todo-input/TodoInput";

class TodoWrapper extends React.Component {
    render() {
        return (
            <div>
                <h1>TODO LIST</h1>
                <TodoInput/>
                <div>
                    <TodoItem title={'a'} checked={true}/>
                    <TodoItem title={'burp'} checked={false}/>
                </div>
            </div>
        )
    }
}

export default TodoWrapper;