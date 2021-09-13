import React, { Component } from 'react';
import * as ACTION_TYPES from '../store/actions/action_types';
import * as ACTIONS from '../store/actions/actions';
import { connect } from 'react-redux';


class ReduxContanier extends Component {
    constructor(props) {
        super(props)
        this.state = {
          
        }
       

    }
    render() {
        const user_text = "text 1";
        return (
            <div>
                <button onClick={() => console.log(this.props.stateprop1)}> Get State </button>
                <button onClick={() => this.props.action1()}> Dispatch Action 1 </button>
                <button onClick={() => this.props.action2()}> Dispatch Action 2 </button>
                <button onClick={() => this.props.action_creator1()}> Action Creator 1 </button>
                <button onClick={() => this.props.action_creator2()}> Action Creator 2 </button>
                <button onClick={() => this.props.action_creator3(user_text)}>  dispatch Action Creator 3 </button>
                {this.props.stateprop1
                    ? <h1>{this.props.user_text}</h1>
                    : null

                }
                

            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        user_text: state.user_reducer.user_text,
        stateprop1: state.reducer1.stateprop1
    }

}

function mapDispatchToProps(dispatch){
    return{
        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE),
        action_creator1: () => dispatch(ACTIONS.success()),
        action_creator2: () => dispatch(ACTIONS.failure()),
        action_creator3: (text) => dispatch(ACTIONS.user_input(text)),
    }

}
export default connect( mapStateToProps, mapDispatchToProps)(ReduxContanier);