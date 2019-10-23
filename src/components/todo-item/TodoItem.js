import React from "react";
import './TodoItem.css';

class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <input type='checkbox' checked={this.props.checked}/>
                <span className='completed-task'>{this.props.title}</span>
            </div>
        )
    }
}

export default TodoItem;