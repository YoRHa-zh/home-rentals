import axios from './index';

export default {
  // 管理员登录
  register(params) {
    return axios.post('http://localhost:3000/api/user/register', params);
  },
};
