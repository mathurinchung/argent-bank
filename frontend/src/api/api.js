import axios from './axios';

/**
 * A class representing an API.
 * @class
 */
class Api {
  /**
   * Retrieves data from an API endpoint using a GET request.
   *
   * @param { String } endpoint - The URL of the API endpoint.
   * @param { Object } [ config ] - The configuration for the request, such as headers or query parameters.
   * @returns { Promise<Object> } A promise that resolves with the response data from the API endpoint.
   */
  get = async ({ endpoint, config }) => {
    return await axios.get(endpoint, config);
  }

  /**
   * Posts data to an API endpoint using a POST request.
   *
   * @param { String} endpoint - The URL of the API endpoint.
   * @param { Object} data - The data to send in the request body.
   * @param { Object} [ config ] - The configuration for the request, such as headers or query parameters.
   * @returns { Promise<Object> } A promise that resolves with the response data from the API endpoint.
   */
  post = async ({ endpoint, data, config }) => {
    return await axios.post(endpoint, data, config);
  }

  /**
   * Updates data on an API endpoint using a PUT request.
   *
   * @param { String } endpoint - The URL of the API endpoint.
   * @param { Object } data - The data to send in the request body.
   * @param { Object } [ config ] - The configuration for the request, such as headers or query parameters.
   * @returns { Promise<Object> } A promise that resolves with the response data from the API endpoint.
   */
  put = async ({ endpoint, data, config }) => {
    return await axios.put(endpoint, data, config);
  }
}

export default Api;
