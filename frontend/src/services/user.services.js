import { Api } from '@/api';
import { getAuthHeader } from '@/utils/auth-header';

/**
 * UserServices class for handling user-related API calls.
 * @class
 */
class UserServices {
  constructor() {
    this.key = 'user'
    this.api = new Api();
  }

  /**
   * Creates a new user.
   *
   * @param { Object } data - User data.
   * @param { String } data.email - User's email.
   * @param { String } data.password - User's password.
   * @returns { Promise<object> } A promise that resolves to the API response.
   */
  createUser = async data => {
    return await this.api.post({ endpoint: `/${ this.key }/signup`, data });
  }

  /**
   * Logs in a user.
   *
   * @param { Object } data - User data.
   * @param { String } data.email - User's email.
   * @param { String } data.password - User's password.
   * @returns { Promise<object> } A promise that resolves to the API response.
   */
  loginUser = async data => {
    return await this.api.post({ endpoint: `/${ this.key }/login`, data });
  }

  /**
   * Retrieves the user profile.
   *
   * @returns { Promise<object> } A promise that resolves to the API response.
   */
  getUserProfile = async () => {
    return await this.api.post({ endpoint: `/${ this.key }/profile`, data: {}, config: { headers: getAuthHeader() } });
  }

  /**
   * Updates the user profile.
   *
   * @param { Object } data - User data.
   * @param { String } data.email - User's firstname.
   * @param { String } data.password - User's lastname.
   * @returns { Promise<object> } A promise that resolves to the API response.
   */
  updateUserProfile = async data => {
    return await this.api.put({ endpoint: `/${ this.key }/profile`, data, config: { headers: getAuthHeader() } });
  }
}

export default UserServices;
