import axios from 'axios';


export const take = (dispatch, getState) => {
    let url = 'https://api.github.com/users/' + getState.ui.text;
    axios.get(url)
        .then((result) => {

            const { name, avatar_url, public_repos } = result;
            const user = {
                'Nome: ': name,
                'Avatar: ': avatar_url,
                'Repos: ': public_repos
            };

            if (public_repos != 0) {
                let url2 = url + '/' + '/repos';
                axios.get(url2).then((result) => {
                    let nameRepos = result.name;
                    let starRepos = result.stargazers_count;


                    user.nameRepos = nameRepos;
                    user.startRepos = starRepos;
                    return {
                        type: 'GITHUB_TAKE_USER_REQUEST',
                        payload: {
                            userList: user
                        }
                    };
                });
            }
            else {
                let noRepos = 'NON SONO PRESENTI REPOSITORY';
                user.push(noRepos);
                return {
                    type: 'GITHUB_TAKE_USER_REQUEST',
                    payload: {
                        userList: user
                    }
                };
            }
        })
        .catch((errore) => {
            dispatch({
                type: 'GITHUB_CALL_FAIL',
                payload: errore,
                error: true
            });
        });
};


export const login = (dispatch, getState) => {
    if (getState.data.userList !=0) {
        return {
            type: 'IS_USER_LOADING',
            payload: {
                isUserLoading: true
            }
        };
    }
};