import UserServices from '../services/user';

function useLoginUser() {
  const loginUser = async credentials => {
    try {
      const serviceData = new UserServices();
      const { data } = await serviceData.loginUser(credentials);
  
      localStorage.setItem('token', JSON.stringify(data.body.token));
    } catch (error) {
      console.error(error);
    }
  };

  return { loginUser };
}

export default useLoginUser;
