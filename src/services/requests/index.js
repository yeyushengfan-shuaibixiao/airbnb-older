import axios from "axios";
import { BASE_URL, TIME_OUT } from "./config";
class yeyuRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      timeout,
      baseURL,
    });
    // 拦截可以添加loading
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (err) => {
        return err;
      }
    );
  }
  // 请求方式
  request(config) {
    return this.instance.request(config);
  }
  get(config) {
    return this.instance.request({ ...config, method: "get" });
  }
  post(config) {
    return this.instance.request({ ...config, method: "post" });
  }
}

export default new yeyuRequest(BASE_URL, TIME_OUT);
