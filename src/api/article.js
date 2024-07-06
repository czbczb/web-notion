import http from "../common/http";
import "../mock/index.js";
const getList = () => http.get(`/api/getList`);
const runCode = () => http.post(`/api/runCode`);
const translateHtml = (data) => http.post(`/api/docx/translateHtml`, data);
const saveHtmlToDocx = (data) => http.post(`/api/docx/saveHtmlToDocx`, data);

export default {
  getList,
  runCode,
  translateHtml,
  saveHtmlToDocx
};
