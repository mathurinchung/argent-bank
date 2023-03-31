import UserServices from '../services/user.services';

function useLoginUser() {

  const loginUser = async (credentials) => {
    try {
      const serviceData = new UserServices();
      const { data } = await serviceData.loginUser(credentials);
  
      localStorage.setItem('accessToken', JSON.stringify(data.body.token));
    } catch (error) {
      console.error(error);
    }
  };

  return { loginUser };
}

export default useLoginUser;
