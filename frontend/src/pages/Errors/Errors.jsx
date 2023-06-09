import { Link, Navigate, useParams } from "react-router-dom";
import { Main } from '@/components/Layout';
import errors from '@/data/errors.json';

/**
 * Errors component function.
 * It displays the error page UI based on the error params in the URL.
 *
 * @returns { JSX.Element } Errors component UI.
 */
function Errors() {
  const { errorParams } = useParams();
  if (errorParams === 'unauthorized') return (<Navigate to="/login" />);

  const error = errors.find(error => error.params === errorParams);
  if (!error) return (<Navigate to="/error/notfound" />);

  return (
    <Main className="main bg-dark Errors">
      <p className="ErrorCode">{ error.code }</p>
      <p className="ErrorDescription">{ error.description }</p>
      <p className="ErrorMessage">{ error.message }</p>
      <Link className="ErrorLink" to="/">return to homepage</Link>
    </Main>
  );
}

export default Errors;
