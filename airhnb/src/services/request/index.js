import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class DongRequest {
  constructor(BASE_URL, TIMEOUT) {
    this.instance = axios.create({ baseURL: BASE_URL, timeout: TIMEOUT });
  }
  request(config) {
    // console.log(1);
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  get(config) {
    return this.request({ ...config, method: "get" });
  }
  post(config) {
    return this.request({ ...config, method: "post" });
  }
}
const dongRequest = new DongRequest(BASE_URL, TIMEOUT);
export default dongRequest;
