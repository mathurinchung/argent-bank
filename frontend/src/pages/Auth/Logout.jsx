import { useEffect } from 'react';
import { useLogoutUser } from '@/hooks';

/**
 * Logout component function.
 *
 * @returns { JSX.Element } Logout component UI.
 */
function Logout() {
  const { logoutUser } = useLogoutUser();

  /**
   * Logout effect hook.
   * It runs once on component mount and calls the logoutUser function to log out the user.
   */
  useEffect(() => {
    logoutUser();
  }, []);

  return (
    <></>
  );
}

export default Logout;
