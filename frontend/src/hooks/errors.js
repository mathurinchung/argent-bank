import { useNavigate } from 'react-router-dom';

function useErrorsHandling() {
  const navigate = useNavigate();

  const errorsHandling = error => {
    if (error.code === 'ERR_NETWORK') navigate('/error/server-error');
  };

  return { errorsHandling };
}

export default  useErrorsHandling;
