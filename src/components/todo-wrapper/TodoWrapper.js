import React from "react";
import TodoItem from "../todo-item/TodoItem";

class TodoWrapper extends React.Component {
    render() {
        return (
            <div>
                <h1>TODO LIST</h1>
                <div>
                    <TodoItem title={'eat food'} checked={true}/>
                    <TodoItem title={'burp'} checked={false}/>
                </div>
            </div>
        )
    }
}

export default TodoWrapper;