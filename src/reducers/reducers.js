const InitialState = {
    ui: {
        text: ''
    },
    data: {
        userList: null,
        isUserLoading: false,
        error: false
    }
};

export default function takeApp(state = InitialState, action) {
    switch (action.type) {
        case 'GITHUB_TAKE_USER_REQUEST':
            return {
                ...state,
                data: {
                    ...state.data,
                    userList: action.payload.userList
                }
            };
        case 'GITHUB_IS_USER_LOADING':
            return {
                ...state,
                data: {
                    ...state.data,
                    isUserLoading: action.payload.isUserLoading
                }
            };
        case 'GITHUB_CALL_FAIL':
            return {
                ...state,
                data: {
                    ...state.data,
                    error: action.payload.error
                }
            };
        default:
            return state;
    }
}

/*export default function takeApp(state = InitialState, action) {
    if (action.type === 'GITHUB_TAKE_USER_REQUEST') {
        return {
            ...state,
            data: {
                ...state.data,
                userList: action.payload.userList
            }
        };
    }
    return state;
}*/