import axios from "axios";
import { handleError, handleResponse } from "./reqHandlerUtil";

const HEADERS = { "Content-Type": "application/json" };

export default (function fetchData() {
  const getAuthenticationHeader = () => {
    return ``;
  };
  //intercept response for handling success and failure cases
  axios.interceptors.response.use(handleResponse, handleError);

  /**
   * make get request to  any url
   * @param {string} url
   * @param {Boolean} shouldAuthorize:
   * @param {Object} params any extra params in object
   * @returns { AxiosPromise }
   */
  function get(url, params = {}, shouldAuthorize = false) {
    const requestOptions = {
      url,
      method: "get",
      params,
      headers: {},
    };
    // if true add authorization header to the req
    if (shouldAuthorize) {
      requestOptions.headers.Authorization = getAuthenticationHeader();
    }
    return axios(requestOptions);
  }
  /**
   * make post request to  any url
   * @param {string} url
   * @param {Object} body request body of the ppost method
   * @param {Boolean} shouldAuthorize:
   * @param {Object} params any extra params in object
   * @returns { AxiosPromise }
   */
  function post(url, body, shouldAuthorize = true) {
    const requestOptions = {
      method: "post",
      headers: { ...HEADERS },
      url,
      data: body,
    };
    // if true add authorization header to the req
    // if (shouldAuthorize) {
    //   requestOptions.headers.Authorization = getAuthenticationHeader();
    // }

    return axios(requestOptions);
  }

  return {
    get,
    post,
  };
})();
