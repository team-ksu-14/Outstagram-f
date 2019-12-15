import axios from 'axios';
import { goToHome } from '../modules/pages'

export const postUser = async (user, dispatch) => {
    await axios.post('/api/login', user, {
        headers: {'Content-Type': 'application/json'}
    })
        .then((res) => {
            console.log(res.data);
            localStorage.setItem("token", res.data)
            dispatch(goToHome());
        }).catch(e => console.log(e));
};