import { connect } from 'react-redux';
import { take } from '../actions/index.js';
import App from './../components/App';

let mapDispatchToProps = (dispatch) => {
    return {
        invia: (value) => {
            dispatch(take(value));
        }
    };
};

export let conn= connect(
    null,
    mapDispatchToProps
)(App);