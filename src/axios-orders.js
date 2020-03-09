import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://create-burger-5b470.firebaseio.com/'
})

export default instance;