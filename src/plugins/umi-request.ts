import { extend } from 'umi-request';
import { notification } from 'antd';
import { ERROR_CODE } from '@/domain/error/constant';
import { getUserToken } from '@/shared/auth';
import { USER } from '@/domain/user/constant';

const { signal, abort } = new AbortController();

const request = extend({
  prefix: '/api',
  headers: {
    'REQUEST-SOURCE': 'WEB',
  },
  errorHandler(error) {
    if (
      error.data.code === ERROR_CODE.Unauthorized ||
      error.data.code === ERROR_CODE.Forbidden
    ) {
      notification.error({
        message: '身份验证失败',
        description: error.data.msg,
        duration: 1.5,
      });
      localStorage.removeItem(USER);
      window.location.href = '/login';
      abort();
    }
    throw error;
  },
});

// AbortController
request.interceptors.request.use((url, options) => ({
  url,
  options: { ...options, interceptors: true, signal },
}));

// Authorization
request.interceptors.request.use((url, options) => {
  const Authorization = getUserToken();
  const headers = {
    ...options.headers,
    'x-access-token': Authorization,
  };
  return {
    url,
    options: { ...options, interceptors: true, headers },
  };
});

request.interceptors.response.use((response) => {
  return response;
});

request.use(async (ctx, next) => {
  await next();
  const { req, res } = ctx;
  const { options } = req;
  const { getResponse } = options;
  const result = getResponse ? res.data : res;

  if (options.skipErrorHandler || options.responseType === 'blob') {
    return;
  }

  if (result.code !== 200 || !result?.msg) {
    notification.error({
      message: '发生错误',
      description: result?.msg || '服务器异常，请稍后再试',
    });
    throw {
      data: result,
    };
  }
});

export default request;
