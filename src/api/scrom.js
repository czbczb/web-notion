import http from "../common/http";

const uploadMp4 = (data, options) =>
  http.post(`/api/scrom/upload`, data, options);

const downloadScrom = () => http.get(`/api/scrom/download`);

export default {
  uploadMp4,
  downloadScrom,
};
