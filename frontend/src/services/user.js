import { Api } from '../api';

class UserServices {
  constructor() {
    this.key = 'user'
    this.api = new Api();
  }

  createUser = async data => {
    return await this.api.post({ endpoint: `/${ this.key }/signup`, data });
  }

  loginUser = async data => {
    return await this.api.post({ endpoint: `/${ this.key }/login`, data });
  }

  getUserProfile = async (token) => {
    return await this.api.post({ endpoint: `/${ this.key }/profile`, data: {}, config: { headers: { "Authorization": `Bearer ${ token }` } } });
  }

  updateUserProfile = async (data, token) => {
    return await this.api.put({ endpoint: `/${ this.key }/profile`, data, config: { headers: { "Authorization": `Bearer ${ token }` } } });
  }
}

export default UserServices;
