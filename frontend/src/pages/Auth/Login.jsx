import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginUser, useGetUserProfile, useExpiresIn } from '../../hooks';
import { LoginForm } from '../../components/Forms';
import { Main } from '../../components/Layout';

function Login() {
  const navigate = useNavigate();
  const { loginUser } = useLoginUser();
  const { getUser } = useGetUserProfile();
  const { rememberMe } = useExpiresIn()
  const [ credentials, setCredentials ] = useState({ email: '', password: '' });
  const [ checked, setChecked ] = useState(false);

  const handleChange = ({ currentTarget }) => {
    const { id, value } = currentTarget;
    const name = (id === 'username') ? 'email' : id;
  
    (name === 'remember-me') ? setChecked(currentTarget.checked) : setCredentials({ ...credentials, [ name ]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await loginUser(credentials);
      rememberMe(checked);

      getUser();
  
      navigate('/profile');
    } catch(error) {
      console.error(error);
    }
  };

  return (
    <Main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>

        <LoginForm submit={ handleSubmit } change={ handleChange } />
      </section>
    </Main>
  );
}

export default Login;
