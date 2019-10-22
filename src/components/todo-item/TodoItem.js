import React from "react";

class TodoItem extends React.Component {
    render() {
        return (
            <div>
                <input type='checkbox' />
                <span>{this.props.title}</span>
            </div>
        )
    }
}

export default TodoItem;