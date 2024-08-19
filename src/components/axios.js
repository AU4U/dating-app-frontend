import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://dating-mern-backend2-645603eeaf73.herokuapp.com'
});
export default instance;