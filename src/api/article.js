import http from "../common/http";
import "../mock/index.js";
const getList = () => http.get(`/api/getList`);
const runCode = () => http.post(`/api/runCode`);

export default {
  getList,
  runCode,
};
