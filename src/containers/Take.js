import React, { Component } from 'react';
import { connect } from 'react-redux';
import { take } from '../actions/index.js';

class TakeUser extends Component {

    handleOnChange(e, v) {
        //setText(v);
    }

    render() {
        const { data, ui, dispatchTakeUser} = this.props;


        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        if (!ui.text.value.trim()) {
                            return;
                        }
                        dispatchTakeUser();
                    }}>
                    <input onChange={this.handleOnChange.bind(this)} />
                    <input type="button" value={ui.text}> 
                        Search
                </input>
                </form>
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        dispatchTakeUser: (value) => {
            dispatch(take(value));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
)(TakeUser);