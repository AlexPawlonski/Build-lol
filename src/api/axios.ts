import axios, { AxiosRequestConfig } from "axios";

const { VITE_LOL_URL } = import.meta.env;

export const apiLol = createAxios({ baseURL: VITE_LOL_URL });

function createAxios(baseConfig?: AxiosRequestConfig) {
  const instance = axios.create(baseConfig);

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    },
  );
  return instance;
}
