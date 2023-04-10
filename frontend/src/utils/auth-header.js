/**
 * Function to get the Authorization header for API requests.
 *
 * @returns { Object } - An object containing the Authorization header with a Bearer token, if available.
 *                     If no access token is available, an empty object is returned.
 */
export const getAuthHeader = () => {
  const jwt = JSON.parse(localStorage.getItem('accessToken'));

  return jwt ? { "Authorization": `Bearer ${ jwt }` } : {}
};
