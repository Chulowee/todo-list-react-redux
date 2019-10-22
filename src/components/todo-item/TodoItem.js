import React from 'react';
import './Todo.css';

class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <input type='checkbox'/>
                <span>Hello</span>
            </div>
        )
    }
}

export default TodoItem;