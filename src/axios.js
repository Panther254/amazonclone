import axios from 'axios';

const axiosConfig = {
	baseURL: 'http://localhost:5001/clone-64c67/us-central1/api',
};

const instance = axios.create(axiosConfig);


export default instance;