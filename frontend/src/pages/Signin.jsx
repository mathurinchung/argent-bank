import { Link } from 'react-router-dom';
import { Main } from '../components/Layout';
import { InputWrapper, InputRemember } from '../components/Input'
import inputs from '../__mocks__/inputs.json'

function Signin() {
  return (
    <Main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          { inputs.map(input => (input.id !== 'remember-me') ? <InputWrapper key={ input.id } input={ input } /> : <InputRemember key={ input.id } input={ input } />) }
          {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
          <Link to="/user" className="sign-in-button">Sign In</Link>
          {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
          {/* <!-- <button class="sign-in-button">Sign In</button> --> */}
          {/* <!--  --> */}
        </form>
      </section>
    </Main>
  );
}

export default Signin;