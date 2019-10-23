import React from "react";
import TodoItem from "../todo-item/TodoItem";
import TodoInput from "../todo-input/TodoInput";
import {connect} from "react-redux";

class TodoWrapper extends React.Component {
    render() {
        return (
            <div>
                <h1>TODO LIST</h1>
                <TodoInput/>
                <div>
                    {this.props.todoList.map(todo => (
                        <TodoItem
                            id={todo.id}
                            title={todo.title}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todoList: state.todoReducer.todoList
});

export default connect(mapStateToProps)(TodoWrapper);