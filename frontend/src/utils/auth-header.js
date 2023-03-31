export const getAuthHeader = () => {
  const jwt = JSON.parse(localStorage.getItem('accessToken'));

  return (jwt) ? { "Authorization": `Bearer ${ jwt }` } : {}
};
