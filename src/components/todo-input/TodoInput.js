import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addTodo} from "../../actions";

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

    onClickAddButton = () => {
        this.props.actions.addTodo(this.state.inputValue);
    };

    render() {
        return (
            <div>
                <input type='text' onChange={this.onChangeInput}/>
                <button onClick={this.onClickAddButton}>Add Todo</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    title: state.inputValue
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators({addTodo}, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);