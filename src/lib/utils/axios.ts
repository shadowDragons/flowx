import axios from 'axios';

let baseURL;
if (process.env.NODE_ENV === 'production') {
  baseURL = 'http://localhost:3100/api2';
} else {
  baseURL = 'http://localhost:3100/api';
}

// 拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axios.interceptors.request.use(
  (config) => {
    // eslint-disable-next-line no-param-reassign
    config.headers.Accept = 'application/vnd.dpexpo.v1+json';
    // eslint-disable-next-line no-param-reassign
    config.baseURL = baseURL;
    // eslint-disable-next-line no-param-reassign
    config.timeout = 10000;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axios的get请求
export function getAxios({
  url,
  params = {},
}: {
  url: string;
  params?: unknown;
}) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// axios的post请求
export function postAxios({ url, data }: { url: string; data: unknown }) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      data,
    })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default axios;
