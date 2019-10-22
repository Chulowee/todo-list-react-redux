import React from 'react';
import {connect} from "react-redux";

class TodoInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    onChangeInput = event => {
        this.setState({inputValue: event.target.value})
    };

    render() {
        return (
            <div>
                <input type='text' onChange={this.onChangeInput}/>
                <button>Add Todo</button>
            </div>
        )
    }
}

// export default TodoInput;

const mapStateToProps = state => ({
    title: state.inputValue
});

export default connect(mapStateToProps)(TodoInput);