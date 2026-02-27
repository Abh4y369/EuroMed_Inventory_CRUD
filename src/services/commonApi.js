import axios from "axios";

export const commonApi = async (method, url, data) => {
  const config = {
    method,
    url,
    data
  };

  return await axios(config);
};