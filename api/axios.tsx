import axios from 'axios';

const config = {
  BASE_URL: 'http://192.168.0.107:8000',
};

const instance = axios.create({
  baseURL: config.BASE_URL,
});

instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';

export default instance;
