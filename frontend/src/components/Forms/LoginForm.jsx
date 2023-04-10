// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { InputWrapper, InputRemember } from '../Input';
import inputs from '@/data/inputs.json';

/**
 * A component that renders a login form with a submit button.
 *
 * @param { Function } submit - The function to be called when the form is submitted.
 * @param { Function } change - The function to be called when a form input value changes.
 * @returns { JSX.Element } - A React component that renders a login form.
 */
function LoginForm({ submit, change }) {
  return (
    <form onSubmit={ submit }>
      {
        inputs.map(input => {
          return (input.id !== 'remember-me') 
                   ? <InputWrapper key={ input.id } input={ input } change={ change } />
                   : <InputRemember key={ input.id } input={ input } change={ change } />
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

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired, // The callback function to handle form submission.
  change: PropTypes.func.isRequired  // The callback function to handle changes to form inputs.
}

export default LoginForm
