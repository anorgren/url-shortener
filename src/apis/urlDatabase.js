import Axios from 'axios';
// baseURL: 'https://mern-url-app.herokuapp.com'

export default Axios.create({
    baseURL: 'http://localhost:3001'
})