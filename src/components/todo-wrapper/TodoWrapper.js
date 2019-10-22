import React from "react";
import TodoItem from "../todo-item/TodoItem";

class TodoWrapper extends React.Component {
    render() {
        return (
            <div>
                <h1>TODO LIST</h1>
                <div>
                    <TodoItem/>
                    <TodoItem/>
                </div>
            </div>
        )
    }
}

export default TodoWrapper;