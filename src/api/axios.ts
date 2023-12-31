import axios, { AxiosRequestConfig } from "axios";

export const VITE_LOL_URL = "https://ddragon.leagueoflegends.com";

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
