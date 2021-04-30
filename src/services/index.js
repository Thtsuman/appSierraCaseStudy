import Axios from "axios";
import { BASE_URL } from "./serviceConfig";

const apiFunc = (obj) => {
  return Axios({
    method: obj.method,
    url: `${BASE_URL}${obj.path}`,
    data: obj.method === "POST" ? obj.sendData : {},
  });
};

export default apiFunc;
