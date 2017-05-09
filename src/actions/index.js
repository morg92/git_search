import axios from 'axios';
const API_URL = 'https://api.github.com/users/';

export const take = (value) => {
    return (dispatch) => {
        let url = API_URL + value;
        axios.get(url)
            .then((result) => {
                if (result.status === 200) {
                    dispatch(login(true));

                    const { name, avatar_url, public_repos } = result.data;
                    const user = {
                        'Name': name,
                        'Avatar': avatar_url,
                        'ReposNumb': public_repos
                    }; //user object

                    if (user.Repos != 0) {
                        let url2 = url + '/repos';
                        axios.get(url2)
                            .then((result) => {
                                let Repos = [];
                                for (let repo of result.data) {
                                    Repos.push({
                                        name: repo.name,
                                        stars: repo.stargazers_count
                                    });
                                } //for
                                user.Repos = Repos;
                                dispatch(list(user));
                            })
                            .catch((errore) => {
                                let Errore = errore;
                                user.Errore = Errore;
                                dispatch(list(user));
                                dispatch(fail(true));
                            }); //SECONDO then()
                    } //if user.Repos
                    else {
                        let noRepos = 'NON SONO PRESENTI REPOSITORY';
                        user.noRepos = noRepos;
                        dispatch(list(user));
                    } //else
                    dispatch(list(user));
                } //IF 200
            })  //.then(result)
            .catch(() => {
                let Errore = 'CALL FAIL!';
                dispatch(list(Errore));
                dispatch(fail(true));
            }); //.catch
    };  //return
};  //take


function login(isUserLoading) {
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