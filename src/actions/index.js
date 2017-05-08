import axios from 'axios';
const API_URL = 'https://api.github.com/users/';

export const take = (value) => {
    return (dispatch, getState) => {
        let url = API_URL + getState().ui.text;
        axios.get(url)
            .then((result) => {
                const { name, avatar_url, public_repos } = result;
                const user = {
                    'Name': name,
                    'Avatar': avatar_url,
                    'Repos': public_repos
                };
                dispatch(list(user));
                dispatch(login(true));

                if (public_repos != 0) {
                    let url2 = url + '/' + '/repos';
                    axios.get(url2).then((result) => {
                        let nameRepos = result.name;
                        let starRepos = result.stargazers_count;

                        user.nameRepos = nameRepos;
                        user.startRepos = starRepos;
                        dispatch(list(user));
                   });
                }
                else {
                    let noRepos = 'NON SONO PRESENTI REPOSITORY';
                    user.noRepos = noRepos;
                    dispatch(list(user));
                }
            })
            .catch((errore) => {
                dispatch(fail(true));
            });
    };
};


function login(isUserLoading){
    return {
        type: 'GITHUB_IS_USER_LOADING',
        payload: {
            isUserLoading: isUserLoading
        }
    };
}


function list(userList) {
    return {
        type: 'GITHUB_TAKE_USER_REQUEST',
        payload: {
            userList: userList
        }
    };
}


function fail(error) {
    return {
        type: 'GITHUB_CALL_FAIL',
        payload: {
            error: error
        }
    };
}