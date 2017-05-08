import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Search from '../containers/container.js';
import takeApp from '../reducers/reducers.js';

const store = createStore(takeApp, applyMiddleware(thunk));

render(
    <Provider store={store}>
        <Search />
    </Provider>,
    document.getElementById('root')
);

// -------------------------------------------------------------------
/*
function user(text, userList) {
    return function (dispatch, getState) {
         return (
             text => dispatch((getState().ui.text)),
             userList => dispatch(userList)
         );
    };
}
store.dispatch(user());
// -------------------------------------------------------------------
/*
const thunk = store => {
    const dispatch = store.dispatch();
    const getState = store.getState();

    return next => action => {
        if (typeof action == 'function'){
            return action(dispatch, getState);
        }
    };
    console.log(action);
    return next(action);
};
*/
