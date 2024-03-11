import axios from "axios";

/**
 * Create an Axios Client with defaults
 */
const http = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
  },
  withCredentials: true,
  withXSRFToken: true,
});

export default http;

const httpJsonApi = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "X-Requested-With": "XMLHttpRequest",
    "Content-Type": "application/vnd.api+json",
  },
  withCredentials: true,
  withXSRFToken: true,
});
