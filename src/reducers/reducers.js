import { take } from '../actions';

const InitialState = {
    take: take.TAKE,
    showList: []
};

function takeApp(state = InitialState, action) {
    if (action.type === 'TAKE') {
        return [
            ...state,
            {
                text: action.tetx
            }
        ];
    }
    else if
      (action.type === 'undefined') {
        return state;
    }
    return state;
}

export default takeApp;

