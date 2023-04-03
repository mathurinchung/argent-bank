import { useEffect } from 'react';
import { useLogoutUser } from '@/hooks';

function Logout() {
  const { logoutUser } = useLogoutUser();

  useEffect(() => {
    logoutUser();
  }, []);

  return (
    <></>
  );
}

export default Logout;
