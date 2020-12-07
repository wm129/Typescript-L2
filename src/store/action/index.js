import axios from 'axios';
import { error } from 'console';
import { errorMonitor } from 'events';

export const getDog = (url) => {
    return (dispatch) => {
        dispatch({type: "LOAD_START"});
        axios
        .get(url)
        .then((resp) => {
            dispatch({type: "LOAD_SUCC", payload: resp.data});
        })
        .catch((error) => {
            dispatch({type: "LOAD_ERR", payload: error});
        });
    };
};
export const getDogimg = () => {
    return (dispatch) => {
        dispatch({type: "FETCH_IND_START"});
        axios
        .get('https://dog.ceo/api/breed/Pembroke/images/random')
        .then((resp) => {
            console.log(resp.data);
            dispatch({type: "FETCH_IND_SUCC", payload: resp.data});
        })
        .catch((error) => {
            dispatch({type: "FETCH_IND_ERR", payload: error});
        });
    };
}; 