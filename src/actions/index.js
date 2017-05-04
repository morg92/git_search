import axios from 'axios';

export const take = (dispatch, getState) => {
    let url = 'https://api.github.com/users/' + getState.ui.text;
    axios.get(url)
        .then((result) => {

            const { name, avatar_url, public_repos } = result;
            const user = {
                name,
                avatar_url,
                public_repos
            };

            if (public_repos != 0) {
                let url2 = url + '/' + '/repos';
                axios.get(url2).then((result) => {
                    let nameRepos = result.name;
                    let starRepos = result.stargazers_count;


                    user.nameRepos = nameRepos;
                    user.startRepos = starRepos;
                    return {
                        type: 'TAKE',
                        payload: {
                            userList: user
                        }
                    };
                });
            }
            else {
                alert("No repos!");
                return {
                    type: 'TAKE',
                    payload: {
                        userList: user
                    }
                };
            }
        })
        .catch((errore) => {
            dispatch({
                type: '',
                payload: errore,
                error: true
            });
        });
};