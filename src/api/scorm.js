import http from "../common/http";

const uploadMp4 = (data, options) =>
  http.post(`/api/scorm/upload`, data, options);

const downloadScorm = (params) => http.get(`/api/scorm/download`, { params });

export default {
  uploadMp4,
  downloadScorm,
};
