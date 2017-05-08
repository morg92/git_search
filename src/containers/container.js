import React, { Component } from 'react';
import { connect } from 'react-redux';
import Components from './../components/component.js';
import { take } from './../actions/index.js';

let mapStateToProps = ({ data, ui }) => ({
    ui,
    data
});

let mapDispatchToProps = (dispatch) => {
    return ({
        dispatchList: () => {
            dispatch(take());
        },
        dispatchTakeUser: (value) => {
            dispatch(take(value));
        }
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Components);