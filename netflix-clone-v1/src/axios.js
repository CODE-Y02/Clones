// https://axios-http.com/docs/instance -> for reference

import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

/**
 * instance.get('my-movie');
 * will send get req to https://api.themoviedb.org/3/my-movie/
 *
 */

export default instance;
