import http from "../common/http";
import "../mock/index.js";

const claude3 = (data) => http.post(`/api/chat/claude3`, data);
const saveComponent = (data) => http.post(`/api/chat/saveComponent`, data);

export default {
  claude3,
  saveComponent,
};
