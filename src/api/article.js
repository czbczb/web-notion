import http from "../common/http";
import "../mock/index.js";
const getList = () => http.get(`/api/getList`);

export default {
  getList,
};
