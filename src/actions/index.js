import axios from 'axios';

export const take = (text) => (
    (dispatch) => {
        let url = 'https://api.github.com/users/' + text;
        axios.get(url)
        .then(
            (result) => {
                let username = result.name;
                let avatar = result.avatar_url;
                let repository = result.public_repos;

                if (repository != 0) {
                    let url2 = url + '/' + '/repos';
                    axios.get(url2)
                    .then(
                        (result) => {
                            let nameRepos = result.name;
                            let starRepos = result.stargazers_count;
                        }
                    );
                }
                else {
                    alert("No repos!");
                }
            })
        .catch((errore) => {
            dispatch({
                type: '',
                payload: errore,
                error: true
            });
        });
    }
);