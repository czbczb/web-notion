import axios from "axios";
import { message } from "ant-design-vue";

// create an axios instance
const http = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 1000 * 60 * 10, // request timeout
});

// request interceptor
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
http.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    console.log("err" + error); // for debug
    message.error(error.message);
    return Promise.reject(error);
  }
);

export default http;
