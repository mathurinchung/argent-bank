import UserServices from '@/services/user.services';

/**
 * A custom hook that logs in a user and saves the access token to local storage.
 *
 * @returns {{ loginUser: Promise<void> }} An object with a single function: loginUser.
 */
function useLoginUser() {

  /**
   * Logs in a user with the provided credentials and saves the access token to local storage.
   *
   * @param { Object } credentials An object containing the user's email and password.
   * @param { String } credentials.email The user's email address.
   * @param { String } credentials.password The user's password.
   * @returns { Promise<void> } A Promise that resolves when the user is logged in and the access token has been saved to local storage.
   */
  const loginUser = async credentials => {
    const serviceData = new UserServices();
    const { data } = await serviceData.loginUser(credentials);

    localStorage.setItem('accessToken', JSON.stringify(data.body.token));
  };

  return { loginUser };
}

export default useLoginUser;
