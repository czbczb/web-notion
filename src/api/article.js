import http from "../common/http";
import "../mock/index.js";
const getList = () => http.get(`/api/getList`);
const runCode = () => http.post(`/api/runCode`);
const translateHtml = (data) => http.post(`/api/docx/translateHtml`, data);
const saveHtmlToDocx = (data) => http.post(`/api/docx/saveHtmlToDocx`, data);
const claude3 = (data) => http.post(`/api/chat/claude3`, data);

export default {
  getList,
  runCode,
  translateHtml,
  saveHtmlToDocx,
  claude3,
};
