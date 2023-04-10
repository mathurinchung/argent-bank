import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginUser, useGetUserProfile, useExpiresIn, useErrorsHandling } from '@/hooks';
import { LoginForm } from '@/components/Forms';
import { Main } from '@/components/Layout';

/**
 * Login component function.
 *
 * @returns { JSX.Element } Login component UI.
 */
function Login() {
  const navigate = useNavigate();
  const { loginUser } = useLoginUser();
  const { getUser } = useGetUserProfile();
  const { rememberMe } = useExpiresIn()
  const { errorsHandling } = useErrorsHandling();

  const [ credentials, setCredentials ] = useState({ email: '', password: '' });
  const [ checked, setChecked ] = useState(false);

  /**
   * Event handler for input changes.
   *
   * @param { Object } event - The input event object.
   */
  const handleChange = ({ currentTarget }) => {
    const { id, value } = currentTarget;
    const name = (id === 'username') ? 'email' : id;
  
    (name === 'remember-me') ? setChecked(currentTarget.checked) : setCredentials({ ...credentials, [ name ]: value });
  };

  /**
   * Event handler for login form submission.
   *
   * @param {Object} event - The submit event object.
   */
  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await loginUser(credentials);
      rememberMe(checked);

      getUser();
  
      navigate('/profile');
    } catch(error) {
      console.error(error);
      errorsHandling(error);
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
