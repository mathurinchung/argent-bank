// import { Link } from 'react-router-dom';
import { InputWrapper, InputRemember } from '../Input';
import inputs from '../../data/inputs.json'

function LoginForm({ submit, change }) {
  return (
    <form onSubmit={ submit }>
      {
        inputs.map(input => {
          return (input.id !== 'remember-me') 
                ? <InputWrapper key={ input.id } input={ input } change={ change } />
                : <InputRemember key={ input.id } input={ input } />
        })
      }
      {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
      {/* <Link to="/user" className="sign-in-button">Sign In</Link> */}
      {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
      <button className="sign-in-button">Sign In</button>
      {/* <!--  --> */}
    </form>
  );
}

export default LoginForm
