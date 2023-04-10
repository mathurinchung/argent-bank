import { useNavigate } from 'react-router-dom';

/**
 * A custom hook that handles errors and redirects to an error page if necessary.
 *
 * @returns {{ errorsHandling: void }} An object with a function errorsHandling that takes an error object as an argument.
 */
function useErrorsHandling() {
  const navigate = useNavigate();

  /**
   * Handles an error object and redirects to an error page if the error code is 'ERR_NETWORK'.
   *
   * @param {{ code: string }} error - The error object to handle.
   */
  const errorsHandling = error => {
    if (error.code === 'ERR_NETWORK') navigate('/error/server-error');
  };

  return { errorsHandling };
}

export default  useErrorsHandling;
