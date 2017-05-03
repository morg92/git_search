import React from 'react';
import { connect } from 'react-redux';
import { take } from '../actions/index.js';

let takeUser = ({ dispatchTakeUser }) => {
    let input;
    return (
        <div>
            <form
                onSubmit = {
                    e => {
                        e.preventDefault();
                        if (!input.value.trim()) {
                            return;
                        }
                        dispatchTakeUser(input.value);
                        input.value = '';
                    }}>
                <input
                    ref = {user => {
                        input = user;
                    }} />
                <input type = "button">
                    Search
                </input>
            </form>
        </div>
    );
};

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
)(takeUser);