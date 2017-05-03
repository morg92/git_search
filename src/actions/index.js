//let Id = 0;
/*export const take = (text) => ({
 type: 'TAKE',
 id: Id++,
 text
});*/
import axios from 'axios';

export const take = (text) => (
    (dispatch/*, getState*/) => {
        let url = 'https://api.github.com/users/' + text;
        axios.get(url).then(
            (result) => {
                dispatch({
                    type: 'NAME',
                    payload: text
                });
                dispatch({
                    type: 'REPOS_EXISTS',
                    payload: result
                });
            }).catch((errore) => {
                dispatch({
                    type: '',
                    payload: errore,
                    error: true
                });
            });
    }
);