import axios from './index';

export default {
  // 管理员登录
  adminLogin(params) {
    return axios.post('http://localhost:3000/api/admin/login', params, {

    });
  },
  // 用户登录
  userLogin(params) {
    return axios.post('http://localhost:3000/api/user/login', params);
  },
};
