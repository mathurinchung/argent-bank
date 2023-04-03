import { Api } from '@/api';
import { getAuthHeader } from '@/utils/auth-header';

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

  getUserProfile = async () => {
    return await this.api.post({ endpoint: `/${ this.key }/profile`, data: {}, config: { headers: getAuthHeader() } });
  }

  updateUserProfile = async data => {
    return await this.api.put({ endpoint: `/${ this.key }/profile`, data, config: { headers: getAuthHeader() } });
  }
}

export default UserServices;
