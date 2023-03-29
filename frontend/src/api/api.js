import axios from './axios';

class Api {
  get = async ({ endpoint, config }) => {
    return await axios.get(endpoint, config);
  }

  post = async ({ endpoint, data, config }) => {
    return await axios.post(endpoint, data, config);
  }

  put = async ({ endpoint, data, config }) => {
    return await axios.put(endpoint, data, config);
  }
}

export default Api;
