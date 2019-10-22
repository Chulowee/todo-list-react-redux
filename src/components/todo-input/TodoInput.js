import React from 'react';

class TodoInput extends React.Component {
    render() {
        return (
            <div>
                <input type='text'/>
                <button>Add Todo</button>
            </div>
        )
    }
}

export default TodoInput;