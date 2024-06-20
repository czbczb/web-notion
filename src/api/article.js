import http from "../common/http";
import "../mock/index.js";
const getList = () => http.get(`/api/getList`);
const runCode = () => http.post(`/api/runCode`);
const htmlToDocx = (data) => http.post(`/api/docx/htmlToDocx`, data);
const htmlToDocxV2 = (data) => http.get(`/api/docx/htmlToDocxV2`, data);

export default {
  getList,
  runCode,
  htmlToDocx,
  htmlToDocxV2,
};
