const InitialState = {
    ui: {
        text: ''
    },
    data: {
        userList: null,
        isUserLoading: false
    }
};

export default function takeApp(state = InitialState, action) {
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
}