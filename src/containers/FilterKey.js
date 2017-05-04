import React from 'react';
import { connect } from 'react-redux';
import { take } from '../actions/index.js';
import Lista from '../components/List.js';

let mapStateToProps = ({ data, ui }) => ({
    ui,
    data
});

let mapDispatchToProps = (dispatch) => {
    return ({
        dispatchList: () => {
            dispatch(take());
        }
    });
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Lista);