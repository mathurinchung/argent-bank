import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginUser, useGetUserProfile } from '../../hooks';
import { LoginForm } from '../../components/Forms';
import { Main } from '../../components/Layout';

function Login() {
  const navigate = useNavigate();
  const { loginUser } = useLoginUser();
  const { getUser } = useGetUserProfile();
  const [ credentials, setCredentials ] = useState({ email: '', password: '' });

  const handleChange = ({ currentTarget }) => {
    const { id, value } = currentTarget;
    const name = (id === 'username') ? 'email' : id;
  
    setCredentials({ ...credentials, [ name ]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    await loginUser(credentials);

    getUser();

    navigate('/profile')
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